<template>
  <view class="container">

    <view class="video-group">
      <button>第二步：拍摄或上传照片</button>
      <view>拍摄示例：</view>
      <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" class="sample-image" mode="aspectFit"></image>
    </view>

    <view class="img-container" v-if="imgList.length">
      <image style="width: 80px; height: 80px; margin: 0 10px 10px 0;" v-for="item in imgList" :key="item" :src="item"></image>
      <image style="width: 80px; height: 80px; margin-bottom: 10px;" @click="chooseVideo" v-if="imgList.length < 8" src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215150516846201004.png"></image>
    </view>

    <view class="tips-section" v-else>
      <image @click="chooseVideo" src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215150516846201004.png" class="plus-icon" mode="aspectFit"></image>
      <view class="tips-list">
        <text>1、尽量在光线充足的环境下拍摄</text>
        <text>2、不要带反光的配饰</text>
      </view>
    </view>

    <button class="next-button" @click="nextStep">下一步</button>
  </view>
</template>

<script>
import { getPresignedUpload, createModelFile } from '@/api/app'
export default {
  data() {
    return {
      formName: "",
      temporaryUrl: "",
      imgList: []
    };
  },
  methods: {
    reset() {
      this.$nextTick(() => {
        this.temporaryUrl = '';
        this.$forceUpdate();
      })
    },
    // 选择或拍摄视频
    chooseVideo() {
      uni.chooseImage({
        success: (chooseImageRes) => {
          var file = chooseImageRes.tempFiles[0];
          if (!file) return;
          // 获取要上传的本地文件路径
          var fileUrl = chooseImageRes.tempFilePaths[0];
          console.log(fileUrl)
          this.temporaryUrl = fileUrl;
          const fileType = fileUrl.split('.')[1];
          const filePath = fileType[0].split('/');
          const fileName = filePath[filePath.length - 1];
          getPresignedUpload({ type: 'image', filename: fileName, filetype: fileType }).then((res) => {
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
            var fileUrl = 'https://' + opt.cosHost + '/' + camSafeUrlEncode(opt.cosKey).replace(/%2F/g, '/');
            console.log(fileUrl)
            if(fileUrl) {
              this.imgList.push(fileUrl);
            }
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
              path: "/bundle/pages/user_order/user_order"
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
.video-con {
  text-align: center;
  margin-bottom: 20px;
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
