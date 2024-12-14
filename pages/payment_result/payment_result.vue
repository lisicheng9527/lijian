<template>
    <view class="payment-result" :class="themeName">
        <view class="result">
            <!-- 支付状态图片 -->
            <u-image
                class="status-image"
                :src="paymentStatus['image']"
                width="100"
                height="100"
                shape="circle"
                v-if="orderInfo.pay_way_origin != 5"
            />
            <u-image
                class="status-image"
                src="/static/images/payment/icon_succeed.png"
                width="100"
                height="100"
                shape="circle"
                v-else
            />
            <!-- 支付状态文字 -->
            <text class="status-text" v-if="orderInfo.pay_way_origin != 5">{{
                paymentStatus['text']
            }}</text>
            <text class="status-text" v-else>订单创建成功</text>

            <!-- 支付信息 -->
            <view class="result-info">
                <view class="result-info__item">
                    <text>订单编号</text>
                    <text>{{ orderInfo.sn }}</text>
                </view>
                <view class="result-info__item" v-if="orderInfo.pay_way_origin != 5">
                    <text>付款时间</text>
                    <text>{{ orderInfo.pay_time }}</text>
                </view>
                <view class="result-info__item" v-else>
                    <text>下单时间</text>
                    <text>{{ orderInfo.create_time }}</text>
                </view>
                <view class="result-info__item">
                    <text>支付方式</text>
                    <template v-if="orderInfo.pay_way_origin != 5">
                        <template v-if="orderInfo.pay_status">
                            <text>{{ orderInfo.pay_way || '-' }}</text>
                        </template>
                        <template v-else>
                            <text>未支付</text>
                        </template>
                    </template>
                    <template v-else>线下支付</template>
                </view>
                <view class="result-info__item">
                    <text>支付金额</text>
                    {{ orderInfo.total_amount }}
                </view>
            </view>

            <!-- 操作区域 -->
            <view class="operational">
                <view class="operational-button operational-button--primary" @tap="goOrder"
                    >查看订单</view
                >
                <view class="operational-button operational-button--normal" @tap="goHome"
                    >返回首页</view
                >
            </view>
        </view>

        <!-- 页面状态 -->
        <page-status :status="pageStatus">
            <template #error>
                <u-empty text="订单不存在" mode="order"></u-empty>
            </template>
        </page-status>
    </view>
</template>

<script>
import { apiPayResult } from '@/api/app'
import { PageStatusEnum } from '@/utils/enum'

export default {
    name: 'PaymentResult',

    data() {
        return {
            // 页面状态
            pageStatus: PageStatusEnum['LOADING'],
            order_id: '', // 订单ID
            orderInfo: {}, // 订单信息

            mapStatus: {
                succeed: {
                    text: '订单支付成功',
                    image: '/static/images/payment/icon_succeed.png'
                },
                waiting: {
                    text: '订单等待支付',
                    image: '/static/images/payment/icon_waiting.png'
                }
            }
        }
    },

    computed: {
        // 支付状态
        paymentStatus() {
            const status = !!this.orderInfo.pay_status
            return this.mapStatus[status ? 'succeed' : 'waiting']
        }
    },

    methods: {
        // 初始化页面数据
        initPageData() {
            return new Promise((resolve, reject) => {
                apiPayResult({
                    order_id: this.order_id,
                    from: this.from
                })
                    .then((data) => {
                        this.orderInfo = data
                        resolve(data)
                    })
                    .catch((err) => {
                        reject(err)
                    })
            })
        },

        // 去首页
        goHome() {
            this.$Router.replaceAll({
                path: '/pages/index/index'
            })
        },

        // 去订单
        goOrder() {
            switch (this.from) {
                case 'order':
                    this.$Router.replace({
                        path: '/bundle/pages/user_order/user_order'
                    })
                    break
                case 'integral':
                    this.$Router.replace({
                        path: '/bundle/pages/exchange_order/exchange_order'
                    })
                    break
            }
        }
    },

    async onLoad() {
        const options = this.$Route.query

        try {
            if (!options.order_id) throw new Error('订单不存在')
            this.order_id = options.order_id
            this.from = options.from
            await this.initPageData()
            this.pageStatus = PageStatusEnum['NORMAL']
        } catch (err) {
            console.log(err)
            this.pageStatus = PageStatusEnum['ERROR']
        }
    }
}
</script>

<style lang="scss" scoped>
.payment-result {
    padding: 20rpx;
}

.result {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 300rpx;
    margin-top: 80rpx;
    padding: 100rpx 20rpx 20rpx 20rpx;
    border-radius: 7px;
    background-color: #ffffff;

    .status-image {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .status-text {
        font-weight: 500;
        font-size: $-font-size-xl;
        color: $-color-black;
    }

    .result-info {
        width: 100%;
        padding: 20rpx 0;
        font-size: $-font-size-nr;
        border-bottom: $-solid-border;
        color: $-color-black;

        &__item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 70rpx;
        }
    }

    .operational {
        width: 100%;
        padding: 40rpx 0;

        &-button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 84rpx;
            border-radius: 60px;
            font-size: $-font-size-lg;

            &:nth-child(n + 2) {
                margin-top: 30rpx;
            }

            &--normal {
                @include font_color() @include border_color() border-width: 1px;
                border-style: solid;
            }

            &--primary {
                @include background_color() color: #ffffff;
            }
        }
    }
}
</style>
