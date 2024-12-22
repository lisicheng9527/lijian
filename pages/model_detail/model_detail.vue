<template>
    <view class="model-detail" :class="themeName">
        <navbar title="模型详情"></navbar>
        <view class="media">
            <view class="media-title">我的视频</view>
            <view class="media-list">
                <video class="video-container" :src="videoUrl" :autoplay="true"></video>
            </view>
        </view>

        <view class="media">
            <view class="media-title">我的图片</view>
            <view class="media-list">
                <view class="image-container" v-for="(item, index) in imgList" :key="index">
                    <image class="image" :src="item.url" />
                    <view class="image-text">{{ item.pos_desc }}</view>
                </view>
            </view>
        </view>

        <view class="media-btn">
            <u-button size="medium" type="primary" @click="modelDelete">删除</u-button>
            <u-button size="medium" type="error" @click="goPrint">查看模型商品详情</u-button>
        </view>
    </view>
</template>

<script>
import { getmodelDetail, apiModelDelete, apiModelGoodsDetail } from '@/api/model'
export default {
    name: 'ModelDetail',
    data() {
        return {
            videoUrl: '',
            model_id: '',
            imgList: []
        }
    },
    methods: {
        getmodelDetail() {
            getmodelDetail({
                model_id: this.model_id
            }).then((res) => {
                this.videoUrl = res.video_url
                this.imgList = res.image_urls || []
            }).catch((err) => {
                console.log(err)
            })
        },
        goPrint() {
            apiModelGoodsDetail({
                model_id: this.model_id
            }).then((data) => {
                this.$Router.push({
                    path: '/pages/model_goods_detail/model_goods_detail',
                    query: { id: data.id, model_id: this.model_id }
                })
            }).catch((err) => {})
        },
        modelDelete() {
            uni.showModal({
                title: '温馨提示',
                content: '是否确认删除该模型?',
                confirmColor: this.themeColor,
                success: ({ confirm }) => {
                    if (confirm) {
                        apiModelDelete({
                            model_id: this.model_id
                        }).then((res) => {
                            this.$toast({ title: "删除成功" });
                            setTimeout(() => {
                                this.$Router.back(1, {
                                    success: () => {
                                        const { onLoad, options } = currentPage()
                                        // 刷新上一个页面
                                        onLoad && onLoad(options)
                                    }
                                })
                            }, 1.2 * 1000);
                        }).catch((err) => {
                            console.log(err)
                        })
                    }
                }
            })
        }
    },
    onLoad() {
        const options = this.$Route.query
        this.model_id = options.model_id
        this.getmodelDetail()
    },
}
</script>

<style lang="scss">
page {
    height: 100%;
    padding: 0;
}
.model-detail {
    padding: 0 30rpx;
    .media {
        .media-title {
            padding: 30rpx 0;
            font-size: 48rpx;
        }
        .media-list {
            display: flex;
            flex-direction: column;
            .video-container {
                width: 100%;
            }
            .image-container {
                width: 100%;
                border: 1rpx solid #ccc;
                margin-bottom: 30rpx;
                border-radius: 5px;
                background-color: #fff;
                overflow: hidden;
                padding: 20rpx;
                .image {
                    width: 100%;
                }
                .image-text {
                    text-align: center;
                    padding-top: 20rpx;
                }
            }
        }
    }
    .media-btn {
        display: flex;
        justify-content: space-between;
        padding-bottom: 30rpx;
    }
}
</style>
