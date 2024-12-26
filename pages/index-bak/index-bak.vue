<template>
  <view>
    <!-- #ifndef  H5 -->
    <u-sticky offset-top="0" h5-nav-height="0" bg-color="transparent">
        <u-navbar :is-back="false" title="首页" :title-bold="true" :is-fixed="false" :border-bottom="false"
          :background="{ background: 'rgba(256,256, 256, 1)' }"
          title-color="#000"></u-navbar>
    </u-sticky>
    <!-- #endif -->
    <view class="home-page-header">
      <view class="swiper-wrap">
        <swiper
            class="swiper"
            ref="swiper"
            :autoplay="autoplay"
            :circular="circular"
            :interval="interval"
            :duration="duration"
            :indicator-dots="indicatorDots"
        >
            <swiper-item v-for="(item, index) in imgSrcs" :key="index">
                <u-image
                mode="aspectFill"
                width="100%"
                height="100%"
                :src="item"
                >
                </u-image>
            </swiper-item>
        </swiper>
      </view>
    </view>

    <view class="scan-menu">
      <view class="menu-list">
        <view class="menu-item" @click="handleScan">
          <image
            class="img-bg"
            src="https://28737108.s61i.faimallusr.com/4/AD0I1PzZDRAEGAAgjNjMkAYo0czxnQYwzgI4owE.png?_tm=3"
          />
          <view class="menu-txt" style="color: #324287">
            <view class="txt-tit">真人手办</view>
            <view class="txt-tips">点击开始制作</view>
          </view>
        </view>
        <view class="menu-item">
          <image
            class="img-bg"
            src="https://28737108.s61i.faimallusr.com/4/AD0I1PzZDRAEGAAgg9nMkAYo8rOtqAEwzgI4owE.png?_tm=3"
          />
          <view class="menu-txt" style="color: #3b5f2b">
            <view class="txt-tit">真人卡通手办</view>
            <view class="txt-tips">点击开始制作</view>
          </view>
        </view>
      </view>
      <view class="menu-list">
        <view class="menu-item">
          <image
            class="img-bg"
            src="https://28737108.s61i.faimallusr.com/4/AD0I1PzZDRAEGAAgitnMkAYo8OTv-AIwzgI4owE.png?_tm=3"
          />
          <view class="menu-txt" style="color: #af662a">
            <view class="txt-tit">真人潮玩手办</view>
            <view class="txt-tips">点击开始制作</view>
          </view>
        </view>
        <view class="menu-item">
          <image
            class="img-bg"
            src="https://28737108.s61i.faimallusr.com/4/AD0I1PzZDRAEGAAgm9nMkAYoiN3XkwcwzgI4owE.png?_tm=3"
          />
          <view class="menu-txt" style="color: #a32a32">
            <view class="txt-tit">宠物手办</view>
            <view class="txt-tips">点击开始制作</view>
          </view>
        </view>
      </view>
    </view>

    <view class="photo-guide">
      <image
        class="guide-bg"
        src="https://29449448.s61i.faimallusr.com/4/AD0I6LmFDhAEGAAgi92GlQYorNz6pwEwkgU44QI.png?_tm=3"
      />
      <view class="guide-txt">如何快速打造独一无二的真人手办，快来看吧</view>
    </view>

    <!-- #ifndef APP-PLUS -->
    <tabbar />
    <!-- #endif -->
  </view>
</template>

<script>
export default {
  data() {
    return {
        indicatorDots: true,
        autoplay: true,
        circular: true,
        duration: 500,
        interval: 5000,
        imgSrcs: [
            'https://testfile.zhihuischool.com.cn/uploads/images/20241214/2024121423065053e961751.png',
            'https://testfile.zhihuischool.com.cn/uploads/images/20241214/20241214230547123330384.jpg',
            'https://testfile.zhihuischool.com.cn/uploads/images/20241214/20241214230536ffa6a6769.png'
        ],
    };
  },
  methods: {
    async handleScan() {
      // 检查登录状态
      const token = uni.getStorageSync('token');
      if (!token) {
        await this.$store.dispatch('user/login');
      }
      this.takeScan();
    },
    takeScan() {
      this.$Router.push({
        path: '/pages/scan/scan'
      });
    },
    uploadPic() {
      this.$Router.push({
        path: '/pages/photo/photo'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-wrap {
    position: relative;
}
.scan-menu .menu-list {
  display: flex;
  padding: 24rpx 24rpx 0;
  justify-content: space-between;
}

.scan-menu .menu-list .menu-item {
  width: 340rpx;
  height: 172rpx;
  position: relative;
}

.scan-menu .menu-txt {
  position: absolute;
  top: 40rpx;
  left: 22rpx;
}

.scan-menu .txt-tit {
  font-size: 28rpx;
}

.scan-menu .txt-tips {
  font-size: 25rpx;
  margin-top: 13rpx;
  opacity: 0.6;
}

.photo-guide {
  padding: 24rpx;
  position: relative;
}

.photo-guide .guide-txt {
  position: absolute;
  left: 0;
  right: 0;
  top: 176rpx;
  color: #fff;
  text-align: center;
}

.photo-guide .guide-bg {
  width: 100%;
  height: 352rpx;
  filter: brightness(0.5);
}

.menu-item .img-bg {
  width: 100%;
  height: 100%;
}

.home-page-container {
  background: #f5f5f5;
}

.home-page-header .t-search__input-container {
  border-radius: 32rpx !important;
  height: 64rpx !important;
}

.home-page-header .t-search__input {
  font-size: 28rpx !important;
  color: rgb(116, 116, 116) !important;
}

.home-page-header .t-image__swiper {
  width: 100%;
  height: 300rpx;
  border-radius: 10rpx;
}

.home-page-container .tab .order-nav-item.active {
  color: #fa550f !important;
}

.home-page-container .tab .bottom-line {
  border-radius: 4rpx;
}

.home-page-container .tab .order-nav-item.active .bottom-line {
  background-color: #fa550f !important;
}
</style>