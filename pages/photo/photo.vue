<template>
  <view class="photo-container">
    <navbar title="创建模型" :background="{ background: '#fff' }" />
    
    <!-- 步骤指示器 -->
    <view class="step-indicator">
      <view class="step-wrapper">
        <view 
          class="step completed" 
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
          class="step active"
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
          :class="{ 'disabled': imgList.length < 8 }"
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

    <!-- 上传区域 -->
    <view class="upload-section">
      <view class="section-title">
        <view class="title-main">
          <view class="title-left">
            <text class="title-text">拍摄或上传照片</text>
            <text class="title-desc">请按照示例拍摄8张不同角度的照片</text>
          </view>
          <view class="upload-count">{{ imgList.length }}/8</view>
        </view>
      </view>

      <view class="photo-grid">
        <view 
          class="photo-item" 
          v-for="(item, index) in imgList" 
          :key="item.uri"
        >
          <image class="photo-img" :src="item.uri" mode="aspectFill"></image>
          <view class="delete-btn" @click="imgList.splice(index, 1)">
            <u-icon name="close" color="#fff" size="24"></u-icon>
          </view>
        </view>

        <view 
          class="upload-card" 
          @click="chooseVideo" 
          v-if="imgList.length < 8"
        >
          <u-icon name="camera-fill" size="56" color="#FF4D4F"></u-icon>
          <text class="card-title">添加照片</text>
        </view>
      </view>
    </view>

    <!-- 拍摄示例 -->
    <view class="example-section">
      <view class="section-title">
        <view class="title-main">
          <view class="title-left">
            <text class="title-text">拍摄示例</text>
            <text class="title-desc">请参考以下示例进行拍摄</text>
          </view>
        </view>
      </view>

      <view class="example-grid">
        <view 
          class="example-item" 
          v-for="(item, index) in photoTemplates1" 
          :key="index"
        >
          <image 
            :src="item.src" 
            mode="aspectFill" 
            class="example-img"
            @error="handleImageError(index, 1)"
          ></image>
          <text class="example-text">{{item.text}}</text>
        </view>
      </view>

      <view class="example-grid">
        <view 
          class="example-item" 
          v-for="(item, index) in photoTemplates2" 
          :key="index"
        >
          <image 
            :src="item.src" 
            mode="aspectFill" 
            class="example-img"
            @error="handleImageError(index, 2)"
          ></image>
          <text class="example-text">{{item.text}}</text>
        </view>
      </view>
    </view>

    <!-- 拍摄提示 -->
    <view class="tips-section">
      <view class="section-title">
        <text class="title-text">拍摄注意事项</text>
      </view>
      <view class="tips-list">
        <view class="tip-item">
          <u-icon name="checkmark-circle" size="32" color="#FF4D4F"></u-icon>
          <text class="tip-text">尽量在光线充足的环境下拍摄</text>
        </view>
        <view class="tip-item">
          <u-icon name="checkmark-circle" size="32" color="#FF4D4F"></u-icon>
          <text class="tip-text">不要带反光的配饰</text>
        </view>
      </view>
    </view>

    <!-- 重要提示 -->
    <view class="notice-section">
      <view class="notice-content">
        <u-icon name="info-circle" size="36" color="#FF4D4F"></u-icon>
        <text class="notice-text">照片和视频上传过程中，请不要关闭本页！建模过程通常需要20分钟以上，照片和视频将会存在手机上创建好的模型可以在我的-我的模型中查看。</text>
      </view>
    </view>

    <!-- 底部按钮 -->
    <view class="bottom-button">
      <button 
        class="submit-btn" 
        :disabled="imgList.length < 8"
        :class="{'submit-btn--disabled': imgList.length < 8}"
        @click="nextStep"
      >下一步</button>
    </view>
  </view>
</template>

<script>
import { getPresignedUpload, createModelFile, presignedUpload } from '@/api/model'
export default {
  data() {
    return {
      formName: "",
      temporaryUrl: "",
      imgList: [],
      fileName: '',
      fileType: '',
      photoTemplates1: [
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241225/20241225175640c55946963.png', text: '正脸照'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241226/202412262000162.jpg', text: '左侧脸'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241226/202412262000163.jpg', text: '右侧脸'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241226/202412262000164.jpg', text: '后脑'}
      ],
      photoTemplates2: [
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241226/202412262000165.jpg', text: '头顶'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241226/202412262000166.jpg', text: '眼睛'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241226/202412262000167.jpg', text: '左手'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241226/202412262000168.jpg', text: '右手'}
      ],
      defaultImage: 'https://testfile.zhihuischool.com.cn/uploads/images/default/example_photo.jpg'
    };
  },
  onShow(){
  	let that = this;
	  uni.$off('faceBack');
  	uni.$on('faceBack', function(data) {
		if(!data) return
  		that.temporaryUrl = data.pic;
		if(that.temporaryUrl.includes('blob')){
		  that.fileType = file?.type?.split('/')[1];
		  that.fileName = file.name
		}else{
		  that.fileType = that.temporaryUrl.split('.')[1];
		  const filePath = that.fileType[0].split('/');
		  that.fileName = filePath[filePath.length - 1];
		}
		getPresignedUpload({ type: 'image', filename: that.fileName, filetype: that.fileType }).then((res) => {
		  that.uploadFile(res);
		});
  	})
  },
  methods: {
    reset() {
      this.$nextTick(() => {
        this.temporaryUrl = '';
        this.$forceUpdate();
      })
    },
    // 选择或拍摄照片
    chooseVideo() {
      uni.showActionSheet({
        itemList: ['拍摄照片', '从相册选择'],
        success: (res) => {
          if (res.tapIndex === 0) {
            // 跳转到拍摄页面
            // #ifdef APP-PLUS
            uni.navigateTo({
              url: '/pages/face/face'
            })
            // #endif
            
            // #ifdef MP
            uni.navigateTo({
              url: '/pages/face/MPface'
            })
            // #endif
          } else {
            // 从相册选择
            uni.chooseImage({
              count: 1,
              sourceType: ['album'],
              success: (chooseImageRes) => {
                var file = chooseImageRes.tempFiles[0];
                if (!file) return;
                var fileUrl = chooseImageRes.tempFilePaths[0];
                this.temporaryUrl = fileUrl;
                if(fileUrl.includes('blob')){
                  this.fileType = file?.type?.split('/')[1];
                  this.fileName = file.name
                }else{
                  this.fileType = fileUrl.split('.')[1];
                  const filePath = fileUrl.split('/');
                  this.fileName = filePath[filePath.length - 1];
                }
                getPresignedUpload({ type: 'image', filename: this.fileName, filetype: this.fileType }).then((res) => {
                  this.uploadFile(res);
                });
              }
            });
          }
        }
      })
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
            presignedUpload({
              name: this.fileName,
              type: 'image',
              fileuri: opt.cosKey
            }).then((result) => {
              if(result.url) {
                this.imgList.push({
                  uri: result.uri,
                  url: result.url,
                  pos: (this.imgList.length + 1)
                });
              }
            })
          },
          error(err) {
            console.log(err)
          },
      });
    },
    // 点击下一步
    nextStep() {
      let formName = uni.getStorageSync('formName');
      let fileUrl = uni.getStorageSync('fileUrl');
      console.log(formName)
      console.log(fileUrl)
      if(!this.imgList.length) {
        uni.showToast({
          title: '请先拍摄或上传照片',
          icon: 'none'
        })
        return
      }
      uni.showLoading({
        title: '文件上传中...',
        mask: true
      })
      createModelFile({
        model_name: formName,
        video_url: fileUrl,
        image_urls: this.imgList
      }).then((res) => {
        uni.hideLoading()
        if(res.model_id) {
          uni.showToast({
            title: '模型创建成功',
            icon: 'none'
          })
          setTimeout(() => {
            uni.reLaunch({
              url: "/bundle/pages/model_list/model_list"
            });
          }, 1000)
        }
      })
    },
    goToStep(step) {
      if (step === 1) {
        this.$Router.back();
      } else if (step === 3) {
        if (this.imgList.length < 8) {
          uni.showToast({
            title: '请先完成8张照片的拍摄',
            icon: 'none'
          });
          return;
        }
        this.nextStep();
      }
    },
    handleImageError(index, group) {
      console.error(`示例图片加载失败 - 组${group} 索引${index}`);
      if (group === 1) {
        this.$set(this.photoTemplates1[index], 'src', this.defaultImage);
      } else {
        this.$set(this.photoTemplates2[index], 'src', this.defaultImage);
      }
      // 尝试预加载默认图片
      uni.getImageInfo({
        src: this.defaultImage,
        success: () => {
          console.log('默认图片预加载成功');
        },
        fail: (err) => {
          console.error('默认图片预加载失败：', err);
        }
      });
    }
  },
  created() {
    // 预加载所有示例图片
    const allImages = [...this.photoTemplates1, ...this.photoTemplates2];
    allImages.forEach(item => {
      uni.getImageInfo({
        src: item.src,
        success: () => {
          console.log(`图片预加载成功: ${item.text}`);
        },
        fail: (err) => {
          console.error(`图片预加载失败: ${item.text}`, err);
        }
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.photo-container {
  min-height: 100vh;
  background: #f8f8f8;
  padding-bottom: calc(140rpx + env(safe-area-inset-bottom));
}

.step-indicator {
  padding: 40rpx 30rpx;
  background: #fff;
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

    &.completed {
      .step-num {
        background: #52c41a;
        color: #fff;
      }
      .step-name {
        color: #52c41a;
      }
      .step-progress {
        background: #52c41a;
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
      border-radius: 50%;
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
      color: #999;
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

.section-title {
  margin-bottom: 24rpx;

  .title-text {
    font-size: 32rpx;
    font-weight: 600;
    color: #333;
    display: block;
  }

  .title-desc {
    font-size: 24rpx;
    color: #999;
    margin-top: 8rpx;
    display: block;
  }
}

.upload-section {
  background: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;

  .title-main {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 24rpx;
  }

  .title-left {
    flex: 1;
    margin-right: 20rpx;
  }

  .upload-count {
    font-size: 32rpx;
    font-weight: 600;
    color: #FF4D4F;
  }

  .photo-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20rpx;
  }

  .photo-item {
    position: relative;
    aspect-ratio: 1;
    border-radius: 12rpx;
    overflow: hidden;
    background: #f8f8f8;

    .photo-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .delete-btn {
      position: absolute;
      top: 8rpx;
      right: 8rpx;
      width: 40rpx;
      height: 40rpx;
      background: rgba(0,0,0,0.5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .upload-card {
    aspect-ratio: 1;
    background: #FFF7F7;
    border-radius: 12rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16rpx;
    transition: all 0.3s ease;

    &:active {
      transform: scale(0.98);
    }

    .card-title {
      font-size: 28rpx;
      font-weight: 600;
      color: #333;
      line-height: 1.4;
    }
  }
}

.example-section {
  background: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;

  .example-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20rpx;
    margin-bottom: 20rpx;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .example-item {
    text-align: center;

    .example-img {
      width: 100%;
      height: 160rpx;
      border-radius: 8rpx;
      margin-bottom: 8rpx;
      background: #f8f8f8;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.03);
      }
    }

    .example-text {
      font-size: 24rpx;
      color: #666;
      line-height: 1.4;
      display: block;
      padding: 0 8rpx;
    }
  }
}

.tips-section {
  background: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;

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

.notice-section {
  background: #fff;
  padding: 30rpx;
  margin-bottom: 20rpx;

  .notice-content {
    display: flex;
    padding: 20rpx;
    background: rgba(255,247,231,0.6);
    border-radius: 12rpx;

    .notice-text {
      flex: 1;
      margin-left: 12rpx;
      font-size: 26rpx;
      color: #666;
      line-height: 1.6;
    }
  }
}

.bottom-button {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20rpx 30rpx;
  padding-bottom: calc(20rpx + env(safe-area-inset-bottom));
  background: #fff;
  box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.05);

  .submit-btn {
    width: 100%;
    height: 88rpx;
    border-radius: 44rpx;
    color: #fff;
    font-size: 32rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: linear-gradient(to right, #FF4D4F, #FF7875);
    box-shadow: 0 8rpx 16rpx rgba(255, 77, 79, 0.2);
    transition: all 0.3s ease;

    &--disabled {
      opacity: 0.6;
      background: #CCCCCC;
      box-shadow: none;
      pointer-events: none;
    }

    &:active {
      transform: translateY(2rpx);
      box-shadow: 0 4rpx 8rpx rgba(255, 77, 79, 0.2);
    }
  }
}
</style>
