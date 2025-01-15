import AVFoundation
import Photos

@objc class CustomCameraModule: NSObject {
    private var captureSession: AVCaptureSession?
    private var videoDevice: AVCaptureDevice?
    private var audioDevice: AVCaptureDevice?
    private var movieFileOutput: AVCaptureMovieFileOutput?
    private var previewLayer: AVCaptureVideoPreviewLayer?
    
    @objc func initCamera(_ callback: @escaping (Any) -> Void) {
        checkPermissions { [weak self] granted in
            if granted {
                self?.setupCaptureSession()
                callback(["code": 0, "message": "初始化成功"])
            } else {
                callback(["code": -1, "message": "没有相机权限"])
            }
        }
    }
    
    @objc func startRecording(_ callback: @escaping (Any) -> Void) {
        guard let movieFileOutput = movieFileOutput else {
            callback(["code": -1, "message": "录制设备未初始化"])
            return
        }
        
        if movieFileOutput.isRecording {
            callback(["code": -1, "message": "正在录制中"])
            return
        }
        
        let outputPath = getOutputPath()
        let outputURL = URL(fileURLWithPath: outputPath)
        movieFileOutput.startRecording(to: outputURL, recordingDelegate: self)
        callback(["code": 0, "message": "开始录制"])
    }
    
    @objc func stopRecording(_ callback: @escaping (Any) -> Void) {
        guard let movieFileOutput = movieFileOutput else {
            callback(["code": -1, "message": "录制设备未初始化"])
            return
        }
        
        if !movieFileOutput.isRecording {
            callback(["code": -1, "message": "未在录制中"])
            return
        }
        
        movieFileOutput.stopRecording()
        callback(["code": 0, "message": "录制完成"])
    }
    
    private func setupCaptureSession() {
        captureSession = AVCaptureSession()
        captureSession?.sessionPreset = .high
        
        // 设置视频输入
        videoDevice = AVCaptureDevice.default(.builtInWideAngleCamera, for: .video, position: .back)
        if let videoDevice = videoDevice,
           let videoInput = try? AVCaptureDeviceInput(device: videoDevice) {
            captureSession?.addInput(videoInput)
        }
        
        // 设置音频输入
        audioDevice = AVCaptureDevice.default(for: .audio)
        if let audioDevice = audioDevice,
           let audioInput = try? AVCaptureDeviceInput(device: audioDevice) {
            captureSession?.addInput(audioInput)
        }
        
        // 设置视频输出
        movieFileOutput = AVCaptureMovieFileOutput()
        if let movieFileOutput = movieFileOutput {
            captureSession?.addOutput(movieFileOutput)
        }
        
        // 开始运行
        captureSession?.startRunning()
    }
    
    private func checkPermissions(_ completion: @escaping (Bool) -> Void) {
        let cameraStatus = AVCaptureDevice.authorizationStatus(for: .video)
        let audioStatus = AVCaptureDevice.authorizationStatus(for: .audio)
        
        if cameraStatus == .authorized && audioStatus == .authorized {
            completion(true)
            return
        }
        
        AVCaptureDevice.requestAccess(for: .video) { videoGranted in
            AVCaptureDevice.requestAccess(for: .audio) { audioGranted in
                completion(videoGranted && audioGranted)
            }
        }
    }
    
    private func getOutputPath() -> String {
        let documentsPath = NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true)[0]
        let timestamp = Int(Date().timeIntervalSince1970)
        return (documentsPath as NSString).appendingPathComponent("VID_\(timestamp).mp4")
    }
}

extension CustomCameraModule: AVCaptureFileOutputRecordingDelegate {
    func fileOutput(_ output: AVCaptureFileOutput, didFinishRecordingTo outputFileURL: URL, from connections: [AVCaptureConnection], error: Error?) {
        if let error = error {
            print("录制失败: \(error.localizedDescription)")
            return
        }
        
        PHPhotoLibrary.shared().performChanges({
            PHAssetChangeRequest.creationRequestForAssetFromVideo(atFileURL: outputFileURL)
        }) { success, error in
            if success {
                print("视频保存成功")
            } else if let error = error {
                print("视频保存失败: \(error.localizedDescription)")
            }
        }
    }
    
    func fileOutput(_ output: AVCaptureFileOutput, didStartRecordingTo fileURL: URL, from connections: [AVCaptureConnection]) {
        print("开始录制视频")
    }
} 