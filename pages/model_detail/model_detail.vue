<template>
    <view class="model-detail" :class="themeName">
        <navbar title="模型详情"></navbar>
        <view class="media-section">
            <view class="section-title">
                <text class="title-text">我的视频</text>
                <view class="title-line"></view>
            </view>
            <view class="media-content">
                <video class="video-player" :src="videoUrl" :autoplay="true"></video>
            </view>
        </view>

        <view class="media-section">
            <view class="section-title">
                <text class="title-text">我的图片</text> 
                <view class="title-line"></view>
            </view>
            <view class="media-content">
                <view class="image-item" v-for="(item, index) in imgList" :key="index">
                    <image class="image" mode="widthFix" :src="item.url" />
                    <view class="image-desc">{{ item.pos_desc }}</view>
                </view>
            </view>
        </view>

        <view class="action-buttons">
            <u-button 
                class="delete-btn"
                size="large" 
                type="primary" 
                @click="modelDelete"
            >删除模型</u-button>
            <u-button 
                class="detail-btn"
                size="large" 
                type="error" 
                @click="goPrint"
            >查看商品规格</u-button>
        </view>

        <!-- 规格选择Popup -->
        <goods-spec
            v-model="showGoodsSpec"
            :isNoMarking="true"
            :defaultInfo="{
                image: goodsInfo.image,
                price: goodsInfo.sell_price,
                stock: goodsInfo.total_stock,
                unit: goodsInfo.unit_name,
                limit_type: goodsInfo.limit_type,
                limit_value: goodsInfo.limit_value,
                buy_num: goodsInfo.buy_num,
                cart_goods_num: goodsInfo.cart_goods_num
            }"
            @closer="showGoodsSpec = false"
            :stock_show="goodsInfo.stock_show"
            :reCheck="0"
            :cartId="0"
            :buttons="specButtonsList"
            :spec-list="goodsInfo.spec_value"
            :spec-map="goodsInfo.spec_value_list"
            @buy="handleBuy"
        />
        <!-- E 规格 -->
    </view>
</template>

<script>
import { getmodelDetail, apiModelDelete, apiModelGoodsDetail } from '@/api/model'
import { OrderTypeEnum } from '@/utils/enum'
export default {
    name: 'ModelDetail',
    data() {
        return {
            videoUrl: '',
            model_id: '',
            imgList: [],
            showGoodsSpec: false,
            goodsInfo: {
                free_shipping_tips: '',
                service_guarantee: [],
                member_level: {},
                address: {},
                stock_show: true
            }, // 商品信息
            specButtonsList: [
                {
                    event: 'buy',
                    text: '立即购买'
                }
            ]
        }
    },
    methods: {
        // 处理 立即购买
        handleBuy({ spec, number }) {
            const form = this.goodsInfo.type == 1 ? 'GOODS' : 'VIRTUAL'
            this.$Router.push({
                path: '/pages/model_goods_order/model_goods_order',
                query: {
                    from: OrderTypeEnum[form],
                    model_id: this.model_id,
                    payload: {
                        source: 'buy_now',
                        goods: [
                            {
                                goods_num: number,
                                item_id: spec.id
                            }
                        ]
                    }
                }
            })
        },
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
                this.goodsInfo = data
                this.showGoodsSpec = true
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
                                uni.$emit('refreshData');
                                uni.navigateBack({
                                    delta: 1
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
    background: #f8f8f8;
}

.model-detail {
    padding: 20rpx;
    
    .media-section {
        background: #fff;
        border-radius: 16rpx;
        margin-bottom: 20rpx;
        padding: 30rpx 30rpx 60rpx;
        box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);

        .section-title {
            display: flex;
            align-items: center;
            margin-bottom: 30rpx;
            
            .title-text {
                font-size: 32rpx;
                font-weight: 600;
                color: #333;
                margin-right: 20rpx;
            }
            
            .title-line {
                flex: 1;
                height: 2rpx;
                background: linear-gradient(to right, #eee, transparent);
            }
        }

        .media-content {
            .video-player {
                width: 100%;
                border-radius: 12rpx;
            }

            .image-item {
                background: #fff;
                border-radius: 12rpx;
                overflow: hidden;
                margin-bottom: 20rpx;
                box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.05);

                .image {
                    width: 100%;
                    height: auto;
                }

                .image-desc {
                    padding: 20rpx;
                    font-size: 28rpx;
                    color: #666;
                    text-align: center;
                    border-top: 2rpx solid #f5f5f5;
                }
            }
        }
    }

    .action-buttons {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
        padding: 20rpx;
        background: #fff;
        box-shadow: 0 -2rpx 10rpx rgba(0, 0, 0, 0.05);

        .delete-btn, .detail-btn {
            width: 48%;
            border-radius: 80rpx;
            font-size: 28rpx;
            padding: 20rpx 0;
            
            &::after {
                border: none;
            }
        }
    }
}
</style>
