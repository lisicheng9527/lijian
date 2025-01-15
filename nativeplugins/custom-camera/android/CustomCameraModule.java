package com.example.camera;

import android.Manifest;
import android.app.Activity;
import android.content.pm.PackageManager;
import android.hardware.Camera;
import android.media.CamcorderProfile;
import android.media.MediaRecorder;
import android.view.Surface;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import java.util.HashMap;
import java.io.IOException;
import java.util.List;

import io.dcloud.feature.uniapp.annotation.UniJSMethod;
import io.dcloud.feature.uniapp.bridge.UniJSCallback;
import io.dcloud.feature.uniapp.common.UniModule;

public class CustomCameraModule extends UniModule implements SurfaceHolder.Callback {
    private Camera camera;
    private MediaRecorder mediaRecorder;
    private SurfaceView surfaceView;
    private SurfaceHolder surfaceHolder;
    private boolean isRecording = false;
    private String outputPath;
    private boolean isPreviewing = false;

    @UniJSMethod(uiThread = true)
    public void initCamera(UniJSCallback callback) {
        Activity activity = mUniSDKInstance.getContext();
        
        if (!checkPermissions(activity)) {
            requestPermissions(activity, callback);
            return;
        }

        try {
            // 创建预览视图
            surfaceView = new SurfaceView(activity);
            surfaceHolder = surfaceView.getHolder();
            surfaceHolder.addCallback(this);
            
            // 设置预览视图布局
            FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            );
            
            activity.runOnUiThread(() -> {
                FrameLayout rootView = (FrameLayout) activity.getWindow().getDecorView();
                rootView.addView(surfaceView, params);
                
                // 打开相机
                openCamera(callback);
            });
        } catch (Exception e) {
            callback.invoke(new HashMap<String, Object>() {{
                put("code", -1);
                put("message", "相机初始化失败: " + e.getMessage());
            }});
        }
    }

    private void openCamera(UniJSCallback callback) {
        try {
            camera = Camera.open();
            setupCamera();
            callback.invoke(new HashMap<String, Object>() {{
                put("code", 0);
                put("message", "初始化成功");
            }});
        } catch (Exception e) {
            callback.invoke(new HashMap<String, Object>() {{
                put("code", -1);
                put("message", "相机打开失败: " + e.getMessage());
            }});
        }
    }

    @Override
    public void surfaceCreated(SurfaceHolder holder) {
        try {
            if (camera != null) {
                camera.setPreviewDisplay(holder);
                camera.startPreview();
                isPreviewing = true;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void surfaceChanged(SurfaceHolder holder, int format, int width, int height) {
        if (surfaceHolder.getSurface() == null) {
            return;
        }

        try {
            camera.stopPreview();
        } catch (Exception e) {
            e.printStackTrace();
        }

        try {
            camera.setPreviewDisplay(surfaceHolder);
            camera.startPreview();
            isPreviewing = true;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void surfaceDestroyed(SurfaceHolder holder) {
        if (camera != null) {
            camera.stopPreview();
            isPreviewing = false;
        }
    }

    private void requestPermissions(Activity activity, UniJSCallback callback) {
        String[] permissions = {
            Manifest.permission.CAMERA,
            Manifest.permission.RECORD_AUDIO,
            Manifest.permission.WRITE_EXTERNAL_STORAGE
        };
        
        activity.requestPermissions(permissions, 1001);
        // 权限请求结果需要在 Activity 中处理
    }

    @UniJSMethod(uiThread = true)
    public void startRecording(UniJSCallback callback) {
        if (isRecording || !isPreviewing) {
            callback.invoke(new HashMap<String, Object>() {{
                put("code", -1);
                put("message", "相机未准备就绪或正在录制中");
            }});
            return;
        }

        try {
            prepareMediaRecorder();
            mediaRecorder.start();
            isRecording = true;
            callback.invoke(new HashMap<String, Object>() {{
                put("code", 0);
                put("message", "开始录制");
            }});
        } catch (Exception e) {
            callback.invoke(new HashMap<String, Object>() {{
                put("code", -1);
                put("message", "录制失败: " + e.getMessage());
            }});
        }
    }

    @UniJSMethod(uiThread = true)
    public void stopRecording(UniJSCallback callback) {
        if (!isRecording) {
            callback.invoke(new HashMap<String, Object>() {{
                put("code", -1);
                put("message", "未在录制中");
            }});
            return;
        }

        try {
            mediaRecorder.stop();
            mediaRecorder.reset();
            isRecording = false;
            callback.invoke(new HashMap<String, Object>() {{
                put("code", 0);
                put("message", "录制完成");
                put("path", outputPath);
            }});
        } catch (Exception e) {
            callback.invoke(new HashMap<String, Object>() {{
                put("code", -1);
                put("message", "停止录制失败: " + e.getMessage());
            }});
        }
    }

    private void setupCamera() {
        Camera.Parameters parameters = camera.getParameters();
        
        // 获取最佳预览尺寸
        Camera.Size optimalSize = getOptimalPreviewSize(parameters.getSupportedPreviewSizes(), 1920, 1080);
        parameters.setPreviewSize(optimalSize.width, optimalSize.height);
        
        // 设置对焦模式
        if (parameters.getSupportedFocusModes().contains(Camera.Parameters.FOCUS_MODE_CONTINUOUS_VIDEO)) {
            parameters.setFocusMode(Camera.Parameters.FOCUS_MODE_CONTINUOUS_VIDEO);
        }
        
        // 设置场景模式
        if (parameters.getSupportedSceneModes() != null && 
            parameters.getSupportedSceneModes().contains(Camera.Parameters.SCENE_MODE_AUTO)) {
            parameters.setSceneMode(Camera.Parameters.SCENE_MODE_AUTO);
        }
        
        // 设置白平衡
        if (parameters.getSupportedWhiteBalance() != null && 
            parameters.getSupportedWhiteBalance().contains(Camera.Parameters.WHITE_BALANCE_AUTO)) {
            parameters.setWhiteBalance(Camera.Parameters.WHITE_BALANCE_AUTO);
        }
        
        try {
            camera.setParameters(parameters);
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        // 设置预览方向
        setCameraDisplayOrientation();
    }

    private Camera.Size getOptimalPreviewSize(List<Camera.Size> sizes, int w, int h) {
        final double ASPECT_TOLERANCE = 0.1;
        double targetRatio = (double) w / h;

        if (sizes == null) return null;

        Camera.Size optimalSize = null;
        double minDiff = Double.MAX_VALUE;

        for (Camera.Size size : sizes) {
            double ratio = (double) size.width / size.height;
            if (Math.abs(ratio - targetRatio) > ASPECT_TOLERANCE) continue;
            if (Math.abs(size.height - h) < minDiff) {
                optimalSize = size;
                minDiff = Math.abs(size.height - h);
            }
        }

        if (optimalSize == null) {
            minDiff = Double.MAX_VALUE;
            for (Camera.Size size : sizes) {
                if (Math.abs(size.height - h) < minDiff) {
                    optimalSize = size;
                    minDiff = Math.abs(size.height - h);
                }
            }
        }

        return optimalSize;
    }

    private void setCameraDisplayOrientation() {
        Activity activity = mUniSDKInstance.getContext();
        android.hardware.Camera.CameraInfo info = new android.hardware.Camera.CameraInfo();
        android.hardware.Camera.getCameraInfo(0, info);
        
        int rotation = activity.getWindowManager().getDefaultDisplay().getRotation();
        int degrees = 0;
        
        switch (rotation) {
            case Surface.ROTATION_0:
                degrees = 0;
                break;
            case Surface.ROTATION_90:
                degrees = 90;
                break;
            case Surface.ROTATION_180:
                degrees = 180;
                break;
            case Surface.ROTATION_270:
                degrees = 270;
                break;
        }

        int result;
        if (info.facing == Camera.CameraInfo.CAMERA_FACING_FRONT) {
            result = (info.orientation + degrees) % 360;
            result = (360 - result) % 360;
        } else {
            result = (info.orientation - degrees + 360) % 360;
        }
        
        camera.setDisplayOrientation(result);
        
        // 设置预览方向
        Camera.Parameters parameters = camera.getParameters();
        parameters.setRotation(result);
        try {
            camera.setParameters(parameters);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void prepareMediaRecorder() {
        mediaRecorder = new MediaRecorder();
        camera.unlock();
        mediaRecorder.setCamera(camera);
        
        mediaRecorder.setAudioSource(MediaRecorder.AudioSource.CAMCORDER);
        mediaRecorder.setVideoSource(MediaRecorder.VideoSource.CAMERA);
        
        CamcorderProfile profile = CamcorderProfile.get(CamcorderProfile.QUALITY_HIGH);
        mediaRecorder.setProfile(profile);
        
        outputPath = getOutputMediaPath();
        mediaRecorder.setOutputFile(outputPath);
        mediaRecorder.setPreviewDisplay(surfaceView.getHolder().getSurface());
        
        try {
            mediaRecorder.prepare();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private boolean checkPermissions(Activity activity) {
        String[] permissions = {
            Manifest.permission.CAMERA,
            Manifest.permission.RECORD_AUDIO,
            Manifest.permission.WRITE_EXTERNAL_STORAGE
        };
        
        for (String permission : permissions) {
            if (activity.checkSelfPermission(permission) != PackageManager.PERMISSION_GRANTED) {
                return false;
            }
        }
        return true;
    }

    private String getOutputMediaPath() {
        Activity activity = mUniSDKInstance.getContext();
        String timeStamp = String.valueOf(System.currentTimeMillis());
        return activity.getExternalFilesDir(null).getAbsolutePath() + "/VID_" + timeStamp + ".mp4";
    }

    @Override
    public void onDestroy() {
        if (camera != null) {
            camera.stopPreview();
            camera.release();
            camera = null;
        }
        if (mediaRecorder != null) {
            mediaRecorder.release();
            mediaRecorder = null;
        }
        super.onDestroy();
    }
} 