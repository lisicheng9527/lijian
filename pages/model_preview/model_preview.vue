<template>
    <view class="model-detail" :class="themeName">
        <navbar title="模型预览"></navbar>
        <view class="media">
            <c-3d-model ref="modelRef" :height="height" :src='src'
                :autoRotate='autoRotate'
                :modelScale="modelScale" :ambientLight='0' @loaded='onLoaded'></c-3d-model>
            <!-- <view class="content">
                <view>区域渲染</view>
                <view class="btnBox">
                    <button @click="height='800rpx'" size="mini">高度800rpx</button>
                    <button @click="height='1000rpx'" size="mini">高度1000rpx</button>
                </view>
                <view>动画控制</view>
                <view class="btnBox">
                    <button @click="$refs.modelRef.playAnimation(0)" size="mini">播放</button>
                    <button @click="$refs.modelRef.stopAnimation(0)" size="mini">停止</button>
                </view>
                <view>场景控制</view>
                <view class="btnBox">
                    <button @click="autoRotate=true" size="mini">自动旋转</button>
                    <button @click="autoRotate=false" size="mini">停止旋转</button>
                </view>
                <view>环境</view>
                <view class="btnBox">
                    <button @click="environmentSrc='https://mp-eeab6da6-80cd-4e80-844a-66b2a7203834.cdn.bspapp.com/cloudstorage/b45a40ff-e04f-43d7-afea-399e398ee35a.hdr'" size="mini">环境一</button>
                    <button @click="environmentSrc='https://mp-eeab6da6-80cd-4e80-844a-66b2a7203834.cdn.bspapp.com/cloudstorage/09941b83-5dad-4cae-855e-5de245973954.hdr'" size="mini">环境二</button>
                    <button @click="environmentSrc='https://mp-eeab6da6-80cd-4e80-844a-66b2a7203834.cdn.bspapp.com/cloudstorage/4339b8c6-481b-48f9-bc62-3b12cb7194d4.hdr'" size="mini">环境三</button>
                    <button @click="environmentSrc='https://mp-eeab6da6-80cd-4e80-844a-66b2a7203834.cdn.bspapp.com/cloudstorage/2edfd004-f4d2-45f1-8dac-3be1096bd0ce.hdr'" size="mini">环境四</button>
                </view>
            </view> -->
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            height: '',
            autoRotate:false,
            modelScale:[0.6,0.6,0.6],
            src:''
        }
    },
    methods: {
        onLoaded() {
            console.log('模型加载完成');
        }
    },
    onLoad() {
        let rectInfo = uni.getSystemInfoSync();
		this.height = (rectInfo.windowHeight - rectInfo.statusBarHeight - 48) + 'px';
        const options = this.$Route.query
        this.src = options.fileUrl
    },
    onUnload() {
        this.$refs.modelRef.call('dispose')
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
</style>
