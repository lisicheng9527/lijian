<template>
  <view class="box">
    <view class="transcribe-box" v-if="!videoSrc">
      <camera @error="handleError" device-position="back" flash="on" frame-size="large" resolution="high">
        <image class="stroke" mode="heightFix" src="https://testfile.zhihuischool.com.cn/uploads/images/20250118/20250118192755a396f5986.png"></image>
        <view class="ratote">
          <view class="rotate-box" :class="{'run': !isTranscribe}" style="background: rgba(255, 255, 255, 0);">
            <image class="dot" mode="heightFix" src="https://img.tomato3d.cn/svg%E5%B0%8F%E7%A8%8B%E5%BA%8Ficon/%E7%AE%AD%E5%A4%B41.png"></image>
          </view>
          <view class="rotate-box" style="z-index: 9;"></view>
        </view>
        <view class="transcribe">
          <view class="bottom">
            <view class="time">
              <view>{{reckon}}</view>
              <view>计时</view>
            </view>
            <image @click="transcribe" :src="isTranscribe ? 'https://img.tomato3d.cn/svg%E5%B0%8F%E7%A8%8B%E5%BA%8Ficon/%E6%8B%8D%E6%91%84%E5%BC%80%E5%A7%8B.svg' : 'https://img.tomato3d.cn/svg%E5%B0%8F%E7%A8%8B%E5%BA%8Ficon/%E5%AE%8C%E6%88%90.png'"></image>
            <view @click="retake">重拍</view>
          </view>
        </view>
      </camera>
    </view>
    <view class="video-box" v-else>
      <video :src="videoSrc"></video>
      <view class="action-buttons">
        <button @click="retake" class="action-btn cancel">重拍</button>
        <button @click="submit" class="action-btn confirm">确定</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      reckon: "00:00",
      isTranscribe: true,
      videoSrc: "",
      isError: false,
      timer: null,
      svideoPath: ""
    };
  },
  methods: {
    handleError(e) {
      console.error(e);
      uni.showToast({
        title: "请打开摄像头权限",
        icon: "error",
      });
    },
    submit() {
      uni.getFileSystemManager().getFileInfo({
        filePath: this.videoSrc,
        success: () => {
          uni.$emit('recordBack', { video: this.videoSrc })
          uni.navigateBack({})
        }
      });
    },
    transcribe() {
      if (!this.isError) {
        if (this.isTranscribe) {
          uni.showLoading({ title: "开始准备中" });
          setTimeout(() => {
            this.$refs.camera.startRecord({
              timeout: 20000,
              success: () => {
                this.begin();
                uni.hideLoading();
                this.isTranscribe = false;
              },
              fail: (err) => {
                console.error(err);
                uni.getSystemInfo({
                  success: () => {
                    if (err.errMsg.includes("invoke")) {
                      uni.hideLoading();
                      uni.showToast({
                        title: "请开启麦克风权限",
                        icon: "error",
                      });
                    }
                  },
                });
              },
            });
          }, 1000);
        } else {
          uni.showLoading({
            title: "视频生成中",
            mask: true,
          });
          setTimeout(() => {
            clearInterval(this.timer);
            this.$refs.camera.stopRecord({
              success: (res) => {
                this.videoSrc = res.tempVideoPath;
                console.log(res)
                this.isTranscribe = true;
                setTimeout(() => {
                  uni.hideLoading();
                }, 10);
              },
              fail: () => {
                uni.hideLoading();
                uni.showToast({
                  title: "拍摄失败，请重置",
                  icon: "error",
                });
              },
            });
          }, 500);
        }
      } else {
        uni.showToast({
          title: "请打开摄像头权限",
          icon: "error",
        });
      }
    },
    begin() {
      this.timer = setInterval(() => {
        const timeArray = this.reckon.split(":");
        let minutes = parseInt(timeArray[0]);
        let seconds = parseInt(timeArray[1]) + 1;

        if (seconds === 60) {
          seconds = 0;
          minutes += 1;
        }

        this.reckon = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      }, 1000);
    },
    retake() {
      if (this.isError) {
        uni.showToast({
          title: "请打开摄像头权限",
          icon: "error",
        });
      } else if (parseInt(this.reckon.split(":")[1]) !== 0) {
        uni.showToast({
          title: "重置中 ~",
          mask: true,
          icon: "loading",
          duration: 1000,
        });
        clearInterval(this.timer);
        this.videoSrc = "";
        this.isTranscribe = true;
        this.reckon = "00:00";
      }
    },
  },
  mounted() {
    this.$refs.camera = uni.createCameraContext();
  },
};
</script>

<style lang="scss">
.box {
	background: #000;
	height: 100vh;
	width: 100vw
}

.box,camera {
	text-align: center
}

camera {
	height: 100%;
	position: relative;
	width: 100%
}

.transcribe {
	bottom: 0;
	height: 15%;
	position: absolute;
	width: 100%;
	z-index: 999
}

.transcribe-box {
	height: 100%;
	width: 100%
}

video {
	display: -webkit-flex;
	display: flex;
	flex-direction: column;
	height: 85%;
	margin: 0;
	padding: 0;
	width: 100%
}

.video-box {
	height: 100%;
	width: 100%;
	background: #000;
	display: flex;
	flex-direction: column;
	
	video {
		flex: 1;
		width: 100%;
		margin: 0;
		padding: 0;
	}
}

.action-buttons {
	height: 180rpx;
	padding: 0 40rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 30rpx;
	background: rgba(0, 0, 0, 0.9);
	backdrop-filter: blur(10px);
	
	.action-btn {
		flex: 1;
		height: 88rpx;
		border-radius: 44rpx;
		font-size: 32rpx;
		font-weight: 500;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s ease;
		border: none;
		
		&.cancel {
			background: rgba(255, 255, 255, 0.15);
			color: #fff;
			backdrop-filter: blur(8px);
			border: 1px solid rgba(255, 255, 255, 0.2);
			
			&:active {
				transform: scale(0.96);
				background: rgba(255, 255, 255, 0.1);
			}
		}
		
		&.confirm {
			background: linear-gradient(135deg, #22c55e, #16a34a);
			color: #fff;
			box-shadow: 0 4rpx 12rpx rgba(34, 197, 94, 0.3);
			
			&:active {
				transform: scale(0.96);
				box-shadow: 0 2rpx 6rpx rgba(34, 197, 94, 0.2);
			}
		}
	}
}

.btn {
	align-items: center;
	background-color: #000;
	display: -webkit-flex;
	display: flex;
	height: 15%;
	justify-content: space-between;
	width: 100%
}

.transcribe image {
	height: 65px;
	width: 65px
}

.stroke {
	height: 95%;
	margin-top: 5%
}

.top {
	justify-content: center
}

.bottom,.top {
	align-items: center;
	display: -webkit-flex;
	display: flex;
	height: 50%
}

.bottom {
	color: #fff;
	font-size: 34rpx;
	justify-content: space-between;
	padding: 0 130rpx
}

.ratote {
	height: 25%;
	top: -10rpx;
	transform-style: preserve-3d;
	width: 100%
}

.dot,.ratote {
	position: absolute;
	z-index: 999
}

.dot {
	bottom: 0;
	height: 45px;
	left: 110px;
	transform: translateY(0) rotateZ(12deg)
}

.run {
	animation: mymove 40s linear infinite
}

@-webkit-keyframes mymove {
	0% {
		transform: rotateX(70deg) rotateZ(0deg)
	}

	100% {
		transform: rotateX(70deg) rotateZ(-1turn)
	}
}

@keyframes mymove {
	0% {
		transform: rotateX(70deg) rotateZ(0deg)
	}

	100% {
		transform: rotateX(70deg) rotateZ(-1turn)
	}
}

.rotate-box {
	background-image: url('https://cdn-fusion.imgcdn.store/i/2024/e39e1276c323bf7f.png');
	background-repeat: no-repeat;
	background-size: contain;
	border-radius: 50%;
	height: 600rpx;
	left: 10%;
	margin: -170rpx auto;
	position: absolute;
	top: 0;
	transform: rotateX(70deg) rotateZ(0deg);
	width: 600rpx;
	z-index: 999
}
</style>