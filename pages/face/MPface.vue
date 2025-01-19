<template>
    <view class="camera-container">
        <!-- 相机组件 -->
        <camera 
            class="camera" 
            device-position="back"
            flash="off"
            @error="handleError"
            v-if="!imageSrc"
        >
            <!-- 取景框遮罩 -->
            <view class="camera-mask">
                <!-- 上半身取景框 -->
                <image 
                    class="frame-guide"
                    src="https://img.tomato3d.cn/%E5%9B%9B%E5%9C%88/%E5%A4%B4%E9%83%A8.png"
                    mode="aspectFit"
                ></image>
                
                <!-- 提示文本 -->
                <text class="tip-text">请将上半身放入取景框内</text>
            </view>
        </camera>

        <!-- 预览图片 -->
        <image 
            v-if="imageSrc" 
            :src="imageSrc" 
            mode="aspectFit" 
            class="preview-image"
        ></image>

        <!-- 底部操作区 -->
        <view class="footer">
            <view v-if="!imageSrc" class="camera-btn" @click="takePhoto">
                <view class="inner-circle"></view>
            </view>
            <view v-else class="action-buttons">
                <view class="action-btn cancel" @click="retake">重拍</view>
                <view class="action-btn confirm" @click="confirmPhoto">确定</view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            imageSrc: '',
            cameraContext: null
        }
    },
    onReady() {
        // 创建相机上下文
        this.cameraContext = uni.createCameraContext()
    },
    methods: {
        // 拍照
        takePhoto() {
            if (!this.cameraContext) return
            
            this.cameraContext.takePhoto({
                quality: 'high',
                success: (res) => {
                    this.imageSrc = res.tempImagePath
                },
                fail: (err) => {
                    uni.showToast({
                        title: '拍照失败',
                        icon: 'none'
                    })
                }
            })
        },
        // 重拍
        retake() {
            this.imageSrc = ''
        },
        // 确认照片
        confirmPhoto() {
            // 返回照片路径给上一页
            uni.$emit('faceBack', { pic: this.imageSrc })
            uni.navigateBack({})
        },
        // 处理相机错误
        handleError(e) {
            uni.showToast({
                title: '相机启动失败，请检查权限设置',
                icon: 'none'
            })
        }
    }
}
</script>

<style lang="scss">
.camera-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    
    .camera {
        width: 100%;
        height: 100%;
    }
    
    .camera-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .frame-guide {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -40rpx;
        left: 0;
    }
    
    .tip-text {
        position: absolute;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 28rpx;
        bottom: 220rpx;
        z-index: 10;
    }
    
    .preview-image {
        width: 100%;
        height: 100%;
    }
    
    .footer {
        position: fixed;
        bottom: 40rpx;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20;
        
        .camera-btn {
            width: 120rpx;
            height: 120rpx;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            
            .inner-circle {
                width: 100rpx;
                height: 100rpx;
                border-radius: 50%;
                background: #fff;
                transition: all 0.2s;
                
                &:active {
                    transform: scale(0.9);
                }
            }
        }
        
        .action-buttons {
            display: flex;
            justify-content: space-around;
            width: 80%;
            
            .action-btn {
                padding: 20rpx 60rpx;
                border-radius: 40rpx;
                font-size: 32rpx;
                
                &.cancel {
                    background: rgba(255, 255, 255, 0.2);
                    color: #fff;
                }
                
                &.confirm {
                    background: #FF2C3C;
                    color: #fff;
                }
            }
        }
    }
}
</style>
