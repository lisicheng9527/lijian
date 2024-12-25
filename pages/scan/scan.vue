<template>
  <view class="container">
    <view class="form-group">
      <view class="form-item">
        <text class="label">手办名称</text>
        <input class="input" type="text" placeholder="请输入手办名称" v-model="formName" />
      </view>
    </view>

    <view class="video-group">
      <view class="section-title">第一步：拍摄或上传视频</view>
      <view class="sub-title">拍摄示例：</view>
      <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" class="sample-image" mode="aspectFit"></image>
    </view>

    <view class="tips-section">
      <view class="tips-header">拍摄注意事项</view>
      <view class="tips-list">
        <view class="tip-item">
          <text class="tip-dot">•</text>
          <text class="tip-text">尽量在光线充足的环境下拍摄</text>
        </view>
        <view class="tip-item">
          <text class="tip-dot">•</text>
          <text class="tip-text">拍摄时以站姿为主，拍摄效果更佳</text>
        </view>
        <view class="tip-item">
          <text class="tip-dot">•</text>
          <text class="tip-text">肢体越垂直地面，模型手办精度越高</text>
        </view>
        <view class="tip-item">
          <text class="tip-dot">•</text>
          <text class="tip-text">拍摄时尽量让手指并拢</text>
        </view>
        <view class="tip-item">
          <text class="tip-dot">•</text>
          <text class="tip-text">等等</text>
        </view>
      </view>
    </view>

    <view class="video-preview" v-if="temporaryUrl">
      <video :src="temporaryUrl" controls class="preview-video"></video>
      <view class="btn-wrapper">
        <button class="btn-secondary" @click="reset">重新选择</button>
      </view>
    </view>
    <view class="upload-btns" v-else>
      <button class="btn-primary" @click="takePhoto">
        <text class="btn-icon">📸</text>
        <text>使用相机拍摄</text>
      </button>
      <button class="btn-primary" @click="localUpload">
        <text class="btn-icon">📁</text>
        <text>本地上传</text>
      </button>
    </view>

    <button class="btn-submit" @click="nextStep">下一步</button>
  </view>
</template>

<script>
import { getPresignedUpload, presignedUpload } from '@/api/model'
export default {
  data() {
    return {
      formName: '',
      temporaryUrl: '',
      fileType: '',
      fileName: ''
    };
  },
  onShow(){
    const pages = getCurrentPages();
    if(pages && pages.length && pages[1] && pages[1].data) {
      this.temporaryUrl = pages[1].data.temporaryUrl
    }
  },
  methods: {
    reset() {
      this.$nextTick(() => {
        this.temporaryUrl = '';
        this.$forceUpdate();
      })
    },
    takePhoto() {
      this.$Router.push({
        path: '/pages/camera/camera'
      })
    },
    localUpload() {
      var self = this;
      uni.chooseVideo({
        sourceType: ['album'],
        success: function (res) {
          console.log(res)
          self.fileName = res.name
          self.fileType = res?.tempFile?.type?.split('/')[1];
          self.temporaryUrl = res.tempFilePath;
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
            if (![200, 204].includes(res.statusCode)) return callback && callback(res);
            console.log(opt)
            presignedUpload({
              name: this.fileName,
              type: 'video',
              fileuri: opt.cosKey
            }).then((result) => {
              console.log(result)
              if(result.url) {
                uni.hideLoading()
                uni.setStorageSync('formName', this.formName)
                uni.setStorageSync('fileUrl', result.url)
                this.$Router.push({
                  path: '/pages/photo/photo'
                })
              }
            })
          },
          error(err) {
            console.log(err)
          },
      });
    },
    nextStep() {
      if(!this.formName){
        uni.showToast({
          title: '请输入手办名称',
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
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 30rpx;
  background: #f8f8f8;
}

.form-group {
  margin-bottom: 40rpx;
  
  .form-item {
    background: #fff;
    padding: 20rpx;
    border-radius: 12rpx;
    
    .label {
      font-size: 28rpx;
      color: #333;
      margin-bottom: 16rpx;
      display: block;
    }
    
    .input {
      height: 80rpx;
      padding: 0 20rpx;
      border: 2rpx solid #eee;
      border-radius: 8rpx;
      font-size: 28rpx;
    }
  }
}

.section-title {
  font-size: 32rpx;
  font-weight: 600;
  color: #333;
  margin-bottom: 20rpx;
}

.sub-title {
  font-size: 28rpx;
  color: #666;
  margin: 20rpx 0;
}

.sample-image {
  width: 100%;
  border-radius: 12rpx;
  margin-bottom: 30rpx;
}

.tips-section {
  background: #fff;
  padding: 30rpx;
  border-radius: 12rpx;
  margin-bottom: 40rpx;
  
  .tips-header {
    font-size: 30rpx;
    font-weight: 600;
    color: #333;
    margin-bottom: 20rpx;
  }
  
  .tip-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16rpx;
    
    .tip-dot {
      color: #ff4d4f;
      margin-right: 10rpx;
    }
    
    .tip-text {
      font-size: 26rpx;
      color: #666;
      flex: 1;
    }
  }
}

.video-preview {
  background: #fff;
  padding: 20rpx;
  border-radius: 12rpx;
  margin-bottom: 40rpx;
  
  .preview-video {
    width: 100%;
    border-radius: 8rpx;
  }
  
  .btn-wrapper {
    margin-top: 20rpx;
  }
}

.upload-btns {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
  margin-bottom: 40rpx;
}

.btn-primary {
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1890ff;
  color: #fff;
  border-radius: 44rpx;
  font-size: 28rpx;
  
  .btn-icon {
    margin-right: 10rpx;
  }
}

.btn-secondary {
  height: 88rpx;
  line-height: 88rpx;
  background: #fff;
  color: #1890ff;
  border: 2rpx solid #1890ff;
  border-radius: 44rpx;
  font-size: 28rpx;
}

.btn-submit {
  width: 100%;
  height: 88rpx;
  line-height: 88rpx;
  background: linear-gradient(to right, #ff4d4f, #ff7875);
  color: #fff;
  border-radius: 44rpx;
  font-size: 32rpx;
  font-weight: 500;
  margin-top: 40rpx;
}
</style>
