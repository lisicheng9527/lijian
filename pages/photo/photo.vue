<template>
  <view class="container">

    <view class="video-group">
      <view class="tit">第二步：拍摄或上传照片</view>
      <view>拍摄示例：</view>
      <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" class="sample-image" mode="aspectFit"></image>
    </view>

    <view class="img-container" v-if="imgList.length">
      <image style="width: 80px; height: 80px; margin: 0 10px 10px 0;" v-for="item in imgList" :key="item.uri" :src="item.uri"></image>
      <image style="width: 80px; height: 80px; margin-bottom: 10px;" @click="chooseVideo" v-if="imgList.length < 8" src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215150516846201004.png"></image>
    </view>

    <view class="tips-section" v-else>
      <image @click="chooseVideo" src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215150516846201004.png" class="plus-icon" mode="aspectFit"></image>
      <view class="tips-list">
        <text>1、尽量在光线充足的环境下拍摄</text>
        <text>2、不要带反光的配饰</text>
      </view>
    </view>

    <view style="padding-bottom: 20px;">照片和视频上传过程中，请不要关闭本页！建模过程通常需要20分钟以上，照片和视频将会存在手机上，创建好的模型可以在我的-我的手办中查看。</view>
    
    <view class="photo-template">
      <view class="temp-pic">
        <view class="pic-item">
          <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" mode="aspectFit" />
          <view class="pic-txt">正脸照</view>
        </view>
        <view class="pic-item">
          <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" mode="aspectFit" />
          <view class="pic-txt">左侧脸</view>
        </view>
        <view class="pic-item">
          <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" mode="aspectFit" />
          <view class="pic-txt">右侧脸</view>
        </view>
        <view class="pic-item">
          <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" mode="aspectFit" />
          <view class="pic-txt">后脑</view>
        </view>
      </view>
      <view class="temp-pic">
        <view class="pic-item">
          <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" mode="aspectFit" />
          <view class="pic-txt">头顶</view>
        </view>
        <view class="pic-item">
          <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" mode="aspectFit" />
          <view class="pic-txt">眼睛</view>
        </view>
        <view class="pic-item">
          <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" mode="aspectFit" />
          <view class="pic-txt">左手</view>
        </view>
        <view class="pic-item">
          <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" mode="aspectFit" />
          <view class="pic-txt">右手</view>
        </view>
      </view>
    </view>

    <view>
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
      fileType: ''
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
    uploadFile(opt) { // 接口文档：https://cloud.tencent.com/document/product/436/14690#.E7.AD.BE.E5.90.8D.E4.BF.9D.E6.8A.A4
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
          policy: opt.policy, // 这个传 policy 的 base64 字符串
          name: "x-cos-return-body",
          success_action_status: 200,
          'q-sign-algorithm': opt.qSignAlgorithm,
          'q-ak': opt.qAk,
          'q-key-time': opt.qKeyTime,
          'q-signature': opt.qSignature,
      };
      // 如果服务端用了临时密钥计算，需要传 x-cos-security-token
      if (opt.securityToken) formData['x-cos-security-token'] = opt.securityToken;
      uni.uploadFile({
          url: 'https://' + opt.cosHost, //仅为示例，非真实的接口地址
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
            this.$Router.replace({
              path: "/bundle/pages/model_list/model_list"
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
  padding: 20px;
}
.photo-template {
  .temp-pic {
    display: flex;
    height: 90px;
    .pic-item {
      flex: 1;
      height: 58px;
      padding: 0 5px;
      text-align: center;
    }
  }
  uni-image {
    width: 100%;
    height: 100%;
  }
}
.video-con {
  text-align: center;
  margin-bottom: 20px;
}
.video-group .tit{
  font-size: 24px;
  padding-bottom: 10px;
}
.video-con video {
  width: 100%;
}
.form-group {
  margin-bottom: 20px;
  .label {
    font-size: 20px;
  }
  .model-input {
    padding: 10px;
    border: 1px solid #000;
  }
}
.btn {
  border: 1px solid #333;
  margin-bottom: 20px;
}
.example-section {
  margin-bottom: 20px;
}
.example-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  display: block;
}
.example-description {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}
.sample-image {
  width: 100%;
  margin-bottom: 10px;
}
.tips-section {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.plus-icon {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.tips-list {
  flex: 1;
}
.tips-list text {
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
}
.next-button {
  background-color: #007aff;
  color: white;
  padding: 10px;
  text-align: center;
  border: none;
  border-radius: 5px;
}
</style>
