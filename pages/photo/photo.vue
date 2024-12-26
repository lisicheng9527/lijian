<template>
  <view class="container">
    <view class="video-group">
      <view class="title">第二步：拍摄或上传照片</view>
      <view class="sub-title">拍摄示例：</view>
      <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" class="sample-image" mode="aspectFit"></image>
    </view>

    <view class="img-container" v-if="imgList.length">
      
      <view class="preview-img" v-for="(item, index) in imgList" :key="item.uri">
        <image class="img-item" :src="item.uri"></image>
        <u-icon @click="imgList.splice(index, 1)" class="close-btn" name="close-circle-fill" size="48rpx" />
      </view>
      
      <image class="upload-btn" @click="chooseVideo" v-if="imgList.length < 8" src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215150516846201004.png"></image>
    </view>

    <view class="tips-section" v-else>
      <image @click="chooseVideo" src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215150516846201004.png" class="plus-icon" mode="aspectFit"></image>
      <view class="tips-list">
        <text class="tip-item">1、尽量在光线充足的环境下拍摄</text>
        <text class="tip-item">2、不要带反光的配饰</text>
      </view>
    </view>

    <view class="notice">照片和视频上传过程中，请不要关闭本页！建模过程通常需要20分钟以上，照片和视频将会存在手机上，创建好的模型可以在我的-我的手办中查看。</view>
    
    <view class="photo-template">
      <view class="temp-pic">
        <view class="pic-item" v-for="(item, index) in photoTemplates1" :key="index">
          <image :src="item.src" mode="aspectFit" />
          <view class="pic-txt">{{item.text}}</view>
        </view>
      </view>
      <view class="temp-pic">
        <view class="pic-item" v-for="(item, index) in photoTemplates2" :key="index">
          <image :src="item.src" mode="aspectFit" />
          <view class="pic-txt">{{item.text}}</view>
        </view>
      </view>
    </view>

    <view class="btn-wrapper">
      <button class="next-button" @click="nextStep">下一步</button>
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
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png', text: '正脸照'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png', text: '左侧脸'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png', text: '右侧脸'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png', text: '后脑'}
      ],
      photoTemplates2: [
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png', text: '头顶'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png', text: '眼睛'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png', text: '左手'},
        {src: 'https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png', text: '右手'}
      ]
    };
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
      uni.chooseImage({
        count: 1,
        success: (chooseImageRes) => {
          console.log(chooseImageRes)
          var file = chooseImageRes.tempFiles[0];
          if (!file) return;
          // 获取要上传的本地文件路径
          var fileUrl = chooseImageRes.tempFilePaths[0];
          console.log(fileUrl)
          this.temporaryUrl = fileUrl;
          if(fileUrl.includes('blob')){
            this.fileType = file?.type?.split('/')[1];
            this.fileName = file.name
          }else{
            this.fileType = fileUrl.split('.')[1];
            const filePath = this.fileType[0].split('/');
            this.fileName = filePath[filePath.length - 1];
          }
          getPresignedUpload({ type: 'image', filename: this.fileName, filetype: this.fileType }).then((res) => {
            this.uploadFile(res);
          });
        }
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
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20rpx 30rpx;
  background: #f8f8f8;
  min-height: 100vh;
}

.video-group {
  margin-bottom: 40rpx;
  
  .title {
    font-size: 36rpx;
    font-weight: 600;
    color: #333;
    margin-bottom: 20rpx;
  }

  .sub-title {
    font-size: 28rpx;
    color: #666;
    margin-bottom: 16rpx;
  }
}

.sample-image {
  width: 100%;
  height: 300rpx;
  border-radius: 12rpx;
}

.img-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
  margin-bottom: 40rpx;

  .preview-img {
    width: 158rpx;
    height: 158rpx;
    border-radius: 8rpx;
    position: relative;
    border: 3rpx solid #999;
    .img-item {
      width: 100%;
      height: inherit;
    }
    .close-btn {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .upload-btn {
    width: 160rpx;
    height: 160rpx;
  }
}

.tips-section {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20rpx;
  border-radius: 12rpx;
  margin-bottom: 40rpx;

  .plus-icon {
    width: 160rpx;
    height: 160rpx;
    margin-right: 20rpx;
  }

  .tips-list {
    flex: 1;

    .tip-item {
      display: block;
      font-size: 28rpx;
      color: #666;
      line-height: 1.6;
    }
  }
}

.notice {
  font-size: 26rpx;
  color: #999;
  line-height: 1.6;
  padding: 20rpx;
  background: rgba(255,247,231,0.6);
  border-radius: 8rpx;
  margin-bottom: 40rpx;
}

.photo-template {
  background: #fff;
  border-radius: 12rpx;
  padding: 20rpx;
  margin-bottom: 40rpx;

  .temp-pic {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30rpx;

    &:last-child {
      margin-bottom: 0;
    }

    .pic-item {
      width: 160rpx;
      text-align: center;

      image {
        width: 100%;
        height: 160rpx;
        border-radius: 8rpx;
        margin-bottom: 10rpx;
      }

      .pic-txt {
        font-size: 24rpx;
        color: #666;
      }
    }
  }
}

.btn-wrapper {
  padding: 40rpx 0;

  .next-button {
    width: 100%;
    height: 88rpx;
    line-height: 88rpx;
    background: #007aff;
    color: #fff;
    font-size: 32rpx;
    border-radius: 44rpx;
    text-align: center;
    border: none;

    &:active {
      opacity: 0.8;
    }
  }
}
</style>
