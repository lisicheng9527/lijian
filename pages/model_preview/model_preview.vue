<template>
    <view class="model-detail" :class="themeName">
        <navbar title="模型预览"></navbar>
        <view class="media">
            <c-3d-model ref="modelRef" :height="height" :src='src'
                :autoRotate='autoRotate'
                :modelScale="modelScale" :ambientLight='0' @loaded='onLoaded'></c-3d-model>
        </view>
        <!-- 添加动画控制按钮 -->
        <view class="bottom-controls">
            <button @click="startAutoRotate" size="mini">自动旋转</button>
            <button @click="stopAutoRotate" size="mini">停止旋转</button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            height: '',
            autoRotate: false,
            modelScale: [0.6, 0.6, 0.6],
            src: ''
        }
    },
    methods: {
        onLoaded() {
            console.log('模型加载完成');
        },
        startAutoRotate() {
            this.autoRotate = true;
        },
        stopAutoRotate() {
            this.autoRotate = false;
        }
    },
    onLoad() {
        let rectInfo = uni.getSystemInfoSync();
        this.height = (rectInfo.windowHeight - rectInfo.statusBarHeight - 48) + 'px';
        const options = this.$Route.query;
        this.src = options.fileUrl;
    },
    onUnload() {
        this.$refs.modelRef.call('dispose');
    }
}
</script>

<style lang="scss">
    .page{
        width: 100vw;
        overflow-x: hidden;
    }
    .content{
        padding: 20rpx;
        font-size: 28rpx;
    }
    .btnBox{
        width: 100%;
        display: flex;align-items: center;
        margin-top: 20rpx;
        margin-bottom: 30rpx;
    }
    .bottom-controls {
        position: fixed;
        bottom: 20rpx;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: space-around;
        width: 80%;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 10rpx;
        border-radius: 20rpx;
        box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
    }
</style>
