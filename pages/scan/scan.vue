<template>
  <view class="scan-container">
    <navbar title="创建模型" :background="{ background: '#fff' }" />
    
    <!-- 步骤指示器 -->
    <view class="step-indicator">
      <view class="step-wrapper">
        <view 
          class="step" 
          :class="{ 'active': true }" 
          @click="goToStep(1)"
        >
          <view class="step-content">
            <view class="step-num">1</view>
            <view class="step-info">
              <text class="step-name">拍摄视频</text>
              <text class="step-desc">上传一段完整视频</text>
            </view>
          </view>
          <view class="step-progress"></view>
        </view>
        
        <view 
          class="step" 
          :class="{ 'disabled': !temporaryUrl }"
          @click="goToStep(2)"
        >
          <view class="step-content">
            <view class="step-num">2</view>
            <view class="step-info">
              <text class="step-name">拍摄照片</text>
              <text class="step-desc">拍摄8张不同角度照片</text>
            </view>
          </view>
          <view class="step-progress"></view>
        </view>
        
        <view 
          class="step" 
          :class="{ 'disabled': true }"
          @click="goToStep(3)"
        >
          <view class="step-content">
            <view class="step-num">3</view>
            <view class="step-info">
              <text class="step-name">生成模型</text>
              <text class="step-desc">AI自动生成3D模型</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 表单区域 -->
    <view class="form-section">
      <view class="form-item">
        <input 
          class="form-input" 
          type="text" 
          v-model="formName"
          placeholder="给你的模型起个名字" 
          placeholder-class="input-placeholder"
        />
        <view class="form-icon">
          <u-icon name="edit-pen" size="40" color="#999"></u-icon>
        </view>
      </view>
    </view>

    <!-- 视频预览/上传区域 -->
    <view class="upload-section">
      <view class="section-title">
        <view class="title-main">
          <view class="title-left">
            <text class="title-text">拍摄或上传视频</text>
            <text class="title-desc">请按照示例拍摄，确保视频清晰完整</text>
          </view>
          <view class="watch-example" @click="showExampleVideo = true">
            <u-icon name="play-circle-fill" size="32" color="#FF4D4F"></u-icon>
            <text>观看示例</text>
          </view>
        </view>
      </view>
      
      <view class="video-area" v-if="temporaryUrl">
        <video 
          id="previewVideo"
          :src="temporaryUrl" 
          class="preview-video"
          :autoplay="true"
          controls
          :enable-play-gesture="true"
          :show-center-play-btn="true"
          :show-play-btn="true"
          :initial-time="0"
          :enable-progress-gesture="true"
          :show-progress="true"
          :direction="0"
          :codec="hardware"
          @play="handleVideoPlay"
          @pause="handleVideoPause"
        ></video>
        <view class="video-actions">
          <button class="action-btn delete" @click="reset">
            <u-icon name="trash" size="36"></u-icon>
            <text>删除视频</text>
          </button>
          <button class="action-btn reupload" @click="localUpload">
            <u-icon name="reload" size="36"></u-icon>
            <text>重新上传</text>
          </button>
        </view>
      </view>
      
      <view class="upload-options" v-else>
        <view class="upload-card camera" @click="takePhoto">
          <u-icon name="camera-fill" size="56" color="#FF4D4F"></u-icon>
          <text class="card-title">使用相机拍摄</text>
          <text class="card-desc">立即开始录制视频</text>
        </view>
        <view class="upload-card gallery" @click="localUpload">
          <u-icon name="folder-fill" size="56" color="#FF4D4F"></u-icon>
          <text class="card-title">本地上传</text>
          <text class="card-desc">从相册选择视频</text>
        </view>
      </view>
    </view>

    <!-- 拍摄示例 -->
    <u-popup
      v-model="showExampleVideo"
      mode="center"
      width="90%"
      height="auto"
      border-radius="12"
      :mask-close-able="true"
      :safe-area-inset-bottom="true"
    >
      <view class="example-popup">
        <view class="popup-header">
          <text class="popup-title">拍摄示例</text>
          <u-icon 
            name="close" 
            size="32" 
            @click="showExampleVideo = false"
          ></u-icon>
        </view>
        <video
          id="exampleVideo"
          src="https://testfile.zhihuischool.com.cn/uploads/video/20241226/20241226200016e57332396.mp4"
          class="popup-video"
          :controls="true"
          :show-center-play-btn="true"
          :enable-progress-gesture="true"
          :show-progress="true"
          :direction="0"
          :codec="hardware"
          object-fit="cover"
          @fullscreenchange="handleFullscreenChange"
          @error="handleExampleVideoError"
        ></video>
        <view class="popup-tips">
          <text class="tips-title">拍摄要求：</text>
          <text class="tips-content">请按照示例视频进行拍摄，确保拍摄环境光线充足，画面清晰。</text>
        </view>
      </view>
    </u-popup>

    <!-- 拍摄提示 -->
    <view class="tips-section">
      <view class="section-title">
        <text class="title-text">拍摄注意事项</text>
      </view>
      <view class="tips-list">
        <view class="tip-item" v-for="(tip, index) in tips" :key="index">
          <u-icon name="checkmark-circle" size="32" :color="themeColor"></u-icon>
          <text class="tip-text">{{tip}}</text>
        </view>
      </view>
    </view>

    <!-- 底部按钮 -->
    <view class="bottom-button">
      <button 
        class="submit-btn" 
        :disabled="!formName || !temporaryUrl"
        :class="{'submit-btn--disabled': !formName || !temporaryUrl}"
        @click="nextStep"
      >下一步</button>
    </view>
  </view>
</template>

<script>
import path from 'path';
import { getPresignedUpload, presignedUpload } from '@/api/model'

export default {
  data() {
    return {
      formName: '我的模型' + new Date().getTime().toString().slice(-4),
      temporaryUrl: '',
      fileType: '',
      fileName: '',
      showExampleVideo: false,
      previewVideoContext: null,
      exampleVideoContext: null,
      tips: [
        '尽量在光线充足的环境下拍摄',
        '拍摄时以站姿为主，拍摄效果更佳',
        '肢体越垂直地面，模型模型精度越高',
        '拍摄时尽量让手指并拢',
        '保持拍摄环境整洁，避免杂物干扰'
      ]
    }
  },

  computed: {
    canSubmit() {
      return this.formName && this.temporaryUrl;
    }
  },

  onShow(){
    // const pages = getCurrentPages();
    // if(pages && pages.length && pages[1] && pages[1].data) {
    //   this.temporaryUrl = pages[1].data.temporaryUrl
    // }
	let that = this;
	uni.$off('recordBack')
	uni.$on('recordBack', function(data) {
		that.temporaryUrl = data.video;
	})
  },
  methods: {
    reset() {
      this.$nextTick(() => {
        this.temporaryUrl = '';
        this.$forceUpdate();
      })
    },
    takePhoto() {
      // #ifdef MP
      this.$Router.push({
        path: '/pages/record/MPrecord'
      })
      // #endif
      
      // #ifdef APP-PLUS
      this.$Router.push({
        path: '/pages/record/record'
      })
      // #endif
    },
    localUpload() {
      var self = this;
      uni.chooseVideo({
        sourceType: ['album'],
        compressed: false,
        camera: 'back',
        maxDuration: 60,
        success: function (res) {
          console.log('选择视频成功：', res)
          if (res.size > 100 * 1024 * 1024) {
            uni.showToast({
              title: '视频大小不能超过100MB',
              icon: 'none'
            });
            return;
          }
          if (res.duration > 60) {
            uni.showToast({
              title: '视频时长不能超过60秒',
              icon: 'none'
            });
            return;
          }
          self.fileName = res.name || `video_${Date.now()}.mp4`
          self.fileType = 'mp4'
          self.temporaryUrl = res.tempFilePath;
          
          self.$nextTick(() => {
            self.previewVideoContext = uni.createVideoContext('previewVideo')
          })
        },
        fail: function(err) {
          console.error('选择视频失败：', err)
          uni.showToast({
            title: '选择视频失败',
            icon: 'none'
          })
        }
      });
    },
    chooseVideo() {
      this.$Router.push({
        path: '/pages/camera/camera'
      });
    },
    uploadFile(opt) {
      var camSafeUrlEncode = function (str) {
        return encodeURIComponent(str)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
      };
      var formData = {
          key: opt.cosKey,
          policy: opt.policy,
          name: "x-cos-return-body",
          success_action_status: 200,
          'q-sign-algorithm': opt.qSignAlgorithm,
          'q-ak': opt.qAk,
          'q-key-time': opt.qKeyTime,
          'q-signature': opt.qSignature,
      };
      if (opt.securityToken) formData['x-cos-security-token'] = opt.securityToken;
      uni.uploadFile({
          url: 'https://' + opt.cosHost,
          filePath: this.temporaryUrl,
          name: 'file',
          formData: formData,
          success: (res) => {
            if (![200, 204].includes(res.statusCode)) {
              console.error('上传失败：', res)
              uni.hideLoading()
              uni.showToast({
                title: '上传失败，请重试',
                icon: 'none'
              })
              return callback && callback(res);
            }
            console.log('上传成功：', opt)
            presignedUpload({
              name: this.fileName,
              type: 'video',
              fileuri: opt.cosKey
            }).then((result) => {
              console.log('预签名上传结果：', result)
              if(result.url) {
                uni.hideLoading()
                uni.setStorageSync('formName', this.formName)
                uni.setStorageSync('fileUrl', result.url)
                this.$Router.push({
                  path: '/pages/photo/photo'
                })
              }
            })
            .catch(err => {
              console.error('预签名上传失败：', err)
              uni.hideLoading()
              uni.showToast({
                title: '上传失败，请重试',
                icon: 'none'
              })
            })
          },
          error(err) {
            console.error('上传错误：', err)
            uni.hideLoading()
            uni.showToast({
              title: '上传失败，请重试',
              icon: 'none'
            })
          },
      });
    },
    nextStep() {
      if(!this.formName){
        uni.showToast({
          title: '请输入模型名称',
          icon: 'none'
        });
        return;
      }
      if(!this.temporaryUrl) {
        uni.showToast({
          title: '请先拍摄视频',
          icon: 'none'
        });
        return;
      }
      if(!this.temporaryUrl.includes('blob')) {
        console.log(this.temporaryUrl)
        this.fileType = this.temporaryUrl.split('.')[1];
        const filePath = this.fileType[0].split('/');
        this.fileName = filePath[filePath.length - 1];
      }
      uni.showLoading({
        title: '视频上传中...',
        mask: true
      })
      getPresignedUpload({ type: 'video', filename: this.fileName, filetype: this.fileType }).then((res) => {
        this.uploadFile(res);
      });
    },
    goToStep(step) {
      if (step === 2) {
        if (!this.formName || !this.temporaryUrl) {
          uni.showToast({
            title: '请先完成视频拍摄',
            icon: 'none'
          });
          return;
        }
        this.$Router.push({
          path: '/pages/photo/photo'
        });
      } else if (step === 3) {
        uni.showToast({
          title: '请先完成视频拍摄',
          icon: 'none'
        });
      }
    },
    handleFullscreenChange(e) {
      console.log('fullscreen change:', e)
    },
    handleExampleVideoError(e) {
      console.error('示例视频播放错误：', e)
      uni.showToast({
        title: '示例视频加载失败，请检查网络',
        icon: 'none'
      })
    },
    handleVideoPlay() {
      console.log('视频开始播放')
      if (this.exampleVideoContext) {
        this.exampleVideoContext.pause()
      }
    },
    handleVideoPause() {
      console.log('视频暂停播放')
    }
  },
  onReady() {
    this.previewVideoContext = uni.createVideoContext('previewVideo')
    this.exampleVideoContext = uni.createVideoContext('exampleVideo')
  },
  onHide() {
    if (this.previewVideoContext) {
      this.previewVideoContext.pause()
    }
    if (this.exampleVideoContext) {
      this.exampleVideoContext.pause()
    }
  }
};
</script>

<style lang="scss" scoped>
.scan-container {
  min-height: 100vh;
  background: #f8f8f8;
  padding-bottom: calc(140rpx + env(safe-area-inset-bottom));
}

.step-indicator {
  background: #fff;
  padding: 40rpx 30rpx;
  margin-bottom: 20rpx;

  .step-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32rpx;
  }

  .step {
    position: relative;
    
    &.active {
      .step-num {
        background: #FF4D4F;
        color: #fff;
      }
      .step-name {
        color: #FF4D4F;
      }
      .step-progress {
        background: #FF4D4F;
      }
    }
    
    &.disabled {
      opacity: 0.5;
      .step-progress {
        background: #eee;
      }
    }

    .step-content {
      display: flex;
      align-items: center;
      gap: 24rpx;
      padding: 16rpx 0;
    }

    .step-num {
      width: 48rpx;
      height: 48rpx;
      border-radius: 24rpx;
      background: #f5f5f5;
      color: #999;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 26rpx;
      font-weight: 600;
    }

    .step-info {
      flex: 1;
    }

    .step-name {
      font-size: 28rpx;
      font-weight: 600;
      color: #333;
      margin-bottom: 4rpx;
    }

    .step-desc {
      font-size: 24rpx;
      color: #999;
    }

    .step-progress {
      position: absolute;
      left: 24rpx;
      top: 80rpx;
      width: 2rpx;
      height: calc(100% - 32rpx);
      background: #eee;
    }

    &:last-child {
      .step-progress {
        display: none;
      }
    }
  }
}

.form-section {
  background: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;

  .form-item {
    position: relative;
    
    .form-input {
      height: 96rpx;
      background: #f8f8f8;
      border-radius: 16rpx;
      padding: 0 88rpx 0 32rpx;
      font-size: 30rpx;
      color: #333;
    }

    .form-icon {
      position: absolute;
      right: 24rpx;
      top: 50%;
      transform: translateY(-50%);
    }

    .input-placeholder {
      color: #999;
    }
  }
}

.upload-section {
  background: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;

  .video-area {
    .preview-video {
      width: 100%;
      height: 480rpx;
      border-radius: 16rpx;
      background: #000;
      object-fit: contain;
      z-index: 1;
    }

    .video-actions {
      margin-top: 24rpx;
      display: flex;
      justify-content: center;
      gap: 24rpx;

      .action-btn {
        display: flex;
        align-items: center;
        padding: 20rpx 32rpx;
        border-radius: 12rpx;
        border: none;
        
        &.delete {
          background: #FFF2F2;
          color: #FF4D4F;
        }
        
        &.reupload {
          background: #F6F6F6;
          color: #666;
        }

        text {
          font-size: 26rpx;
          margin-left: 8rpx;
        }
      }
    }
  }

  .upload-options {
    display: flex;
    gap: 24rpx;
    padding: 24rpx 0;

    .upload-card {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48rpx 24rpx;
      background: #FFF7F7;
      border-radius: 16rpx;
      transition: all 0.3s ease;

      &:active {
        transform: scale(0.98);
      }

      .card-title {
        margin-top: 24rpx;
        font-size: 28rpx;
        font-weight: 600;
        color: #333;
      }

      .card-desc {
        margin-top: 8rpx;
        font-size: 24rpx;
        color: #999;
      }
    }
  }
}

.example-popup {
  background: #fff;
  width: 100%;
  
  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30rpx;
    border-bottom: 2rpx solid #f5f5f5;
    
    .popup-title {
      font-size: 32rpx;
      font-weight: 600;
      color: #333;
    }
  }
  
  .popup-video {
    width: 100%;
    height: 400rpx;
    background: #000;
    z-index: 100;
  }
  
  .popup-tips {
    padding: 30rpx;
    
    .tips-title {
      font-size: 28rpx;
      font-weight: 500;
      color: #333;
      margin-bottom: 12rpx;
      display: block;
    }
    
    .tips-content {
      font-size: 26rpx;
      color: #666;
      line-height: 1.6;
    }
  }
}

.tips-section {
  background: #fff;
  padding: 30rpx;

  .tips-list {
    .tip-item {
      display: flex;
      align-items: center;
      margin-bottom: 20rpx;

      .tip-text {
        margin-left: 12rpx;
        font-size: 26rpx;
        color: #666;
      }
    }
  }
}

.bottom-button {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20rpx 40rpx;
  padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
  background: #fff;
  box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.05);
  
  .submit-btn {
    width: 100%;
    height: 90rpx;
    line-height: 90rpx;
    text-align: center;
    font-size: 32rpx;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(to right, #FF4D4F, #FF7875);
    border-radius: 45rpx;
    transition: all 0.3s ease;
    
    &:active {
      transform: scale(0.98);
      box-shadow: 0 2rpx 8rpx rgba(99, 102, 241, 0.2);
    }
    
    &--disabled {
      background: #CCCCCC !important;
      color: #FFFFFF !important;
      pointer-events: none;
      opacity: 0.6;
    }
  }
}
</style>
