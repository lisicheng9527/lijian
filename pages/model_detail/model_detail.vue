<template>
    <view class="model-detail" :class="themeName">
        <navbar title="模型详情" class="custom-navbar"></navbar>
        
        <!-- 视频部分 -->
        <view class="content-container">
            <view class="media-section" v-if="videoUrl">
                <view class="section-header">
                    <text class="section-title">模型视频</text>
                    <view class="section-divider"></view>
                </view>
                <view class="video-wrapper">
                    <video 
                        class="video-player" 
                        :src="videoUrl" 
                        :autoplay="true"
                        object-fit="cover"
                    ></video>
                </view>
            </view>

            <!-- 图片部分 -->
            <view class="media-section">
                <view class="section-header">
                    <text class="section-title">模型图片</text>
                    <view class="section-divider"></view>
                </view>
                <view class="image-grid">
                    <view 
                        class="image-card" 
                        v-for="(item, index) in imgList" 
                        :key="index"
                    >
                        <image 
                            class="preview-image" 
                            mode="aspectFill" 
                            :src="item.url" 
                        />
                        <view class="image-overlay">
                            <text class="image-desc">{{ item.pos_desc }}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>

        <!-- 底部操作按钮 -->
        <view class="action-footer">
            <view class="action-buttons">
                <button 
                    class="action-btn delete-btn"
                    @click="modelDelete"
                >
                    <text class="btn-icon">🗑️</text>
                    <text>删除模型</text>
                </button>
                <button 
                    class="action-btn spec-btn"
                    @click="goPrint"
                >
                    <text class="btn-icon">📋</text>
                    <text>立即购买</text>
                </button>
            </view>
        </view>

        <!-- 规格选择弹窗 -->
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

<style lang="scss" scoped>
.model-detail {
    min-height: 100vh;
    background: #f8fafc;
    
    .custom-navbar {
        backdrop-filter: blur(8px);
        background: rgba(255, 255, 255, 0.8);
        position: sticky;
        top: 0;
        z-index: 100;
    }
    
    .content-container {
        padding: 24rpx;
    }
    
    .media-section {
        background: #fff;
        border-radius: 24rpx;
        margin-bottom: 24rpx;
        padding: 24rpx;
        box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.05);
        
        .section-header {
            display: flex;
            align-items: center;
            margin-bottom: 24rpx;
            
            .section-title {
                font-size: 32rpx;
                font-weight: 600;
                color: #1e293b;
                position: relative;
                padding-left: 24rpx;
                
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 6rpx;
                    height: 28rpx;
                    background: linear-gradient(135deg, #6366f1, #818cf8);
                    border-radius: 3rpx;
                }
            }
            
            .section-divider {
                flex: 1;
                height: 2rpx;
                background: linear-gradient(to right, #e2e8f0, transparent);
                margin-left: 24rpx;
            }
        }
        
        .video-wrapper {
            border-radius: 16rpx;
            overflow: hidden;
            box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
            
            .video-player {
                width: 100%;
                height: 400rpx;
                background: #000;
            }
        }
        
        .image-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300rpx, 1fr));
            gap: 20rpx;
            
            .image-card {
                position: relative;
                border-radius: 16rpx;
                overflow: hidden;
                box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
                aspect-ratio: 1;
                
                .preview-image {
                    width: 100%;
                    height: 100%;
                    transition: transform 0.3s ease;
                    
                    &:hover {
                        transform: scale(1.05);
                    }
                }
                
                .image-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 16rpx;
                    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
                    
                    .image-desc {
                        color: #fff;
                        font-size: 26rpx;
                        text-shadow: 0 2rpx 4rpx rgba(0,0,0,0.3);
                    }
                }
            }
        }
    }
    
    .action-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 24rpx;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(8px);
        box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.05);
        
        .action-buttons {
            display: flex;
            gap: 20rpx;
            
            .action-btn {
                flex: 1;
                height: 88rpx;
                border: none;
                border-radius: 44rpx;
                color: #fff;
                font-size: 28rpx;
                font-weight: 600;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 12rpx;
                transition: all 0.3s ease;
                
                .btn-icon {
                    font-size: 32rpx;
                }
                
                &.delete-btn {
                    background: linear-gradient(135deg, #6366f1, #818cf8);
                    box-shadow: 0 4rpx 12rpx rgba(99, 102, 241, 0.2);
                    
                    &:active {
                        transform: translateY(2rpx);
                        box-shadow: 0 2rpx 6rpx rgba(99, 102, 241, 0.1);
                    }
                }
                
                &.spec-btn {
                    background: linear-gradient(135deg, #ef4444, #dc2626);
                    box-shadow: 0 4rpx 12rpx rgba(239, 68, 68, 0.2);
                    
                    &:active {
                        transform: translateY(2rpx);
                        box-shadow: 0 2rpx 6rpx rgba(239, 68, 68, 0.1);
                    }
                }
            }
        }
    }
}
</style>
