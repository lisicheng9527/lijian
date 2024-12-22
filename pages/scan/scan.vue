<template>
  <view class="container">
    <view class="form-group">
      <view class="video-title">手办名称</view>
      <input class="model-input" type="text" placeholder="请输入手办名称" v-model="formName" />
    </view>

    <view class="video-group">
      <view class="video-title">第一步：拍摄或上传视频</view>
      <view>拍摄示例：</view>
      <image src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215144313f68b38659.png" class="sample-image" mode="aspectFit"></image>
    </view>

    <view class="tips-section">
      <!-- <image @click="chooseVideo" src="https://testfile.zhihuischool.com.cn/uploads/images/20241215/20241215150516846201004.png" class="plus-icon" mode="aspectFit"></image> -->
      <view class="tips-list">
        <text>1、尽量在光线充足的环境下拍摄</text>
        <text>2、拍摄时以站姿为主，拍摄效果更佳</text>
        <text>3、肢体越垂直地面，模型手办精度越高</text>
        <text>4、拍摄时尽量让手指并拢</text>
        <text>5、等等</text>
      </view>
    </view>

    <view class="video-con" v-if="temporaryUrl">
      <video :src="temporaryUrl" controls></video>
      <view><button class="btn" @click="reset">重新选择</button></view>
    </view>
    <view class="operate-btn" v-else>
      <button class="btn" @click="takePhoto">使用相机拍摄</button>
      <button class="btn" @click="localUpload">本地上传</button>
    </view>

    <button class="next-button" @click="nextStep">下一步</button>
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
    // 选择或拍摄视频
    chooseVideo() {
      this.$Router.push({
        path: '/pages/camera/camera'
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
    // 点击下一步
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
  padding: 20px;
}
.video-title {
  font-size: 24px;
  margin-bottom: 10px;
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
  // display: flex;
  // align-items: center;
  margin-bottom: 20px;
}
// .plus-icon {
//   width: 100px;
//   height: 100px;
//   margin-right: 10px;
// }
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
