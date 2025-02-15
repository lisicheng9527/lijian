<template>
    <view :class="themeName">
        <view class="payment u-skeleton">
            <!-- Header -->
            <view class="payment-header">
                <price
                    class="u-skeleton-fillet"
                    :content="amount"
                    mainSize="56rpx"
                    minorSize="40rpx"
                    color="#FFFFFF"
                />
                <template v-if="timeout > 0">
                    <view class="payment-count-down">
                        <text>支付剩余时间</text>
                        <u-count-down
                            :timestamp="timeout"
                            :show-days="false"
                            :show-hours="false"
                            :font-size="22"
                        />
                    </view>
                </template>
            </view>

            <!-- Main -->
            <view class="payment-main">
                <view class="payway-container u-skeleton-fillet">
                    <!-- Payway -->
                    <u-radio-group v-model="payway" style="width: 100%">
                        <view class="payway">
                            <view
                                class="payway-item"
                                v-for="(item, index) in paywayList"
                                :key="item.id"
                                @click="changePayway(item.pay_way)"
                            >
                                <u-image
                                    :src="item.icon"
                                    width="48"
                                    height="48"
                                    mode="scaleToFill"
                                />
                                <view class="payway-item-content">
                                    <text class="payway-item-content-name">{{ item.name }}</text>
                                    <text class="payway-item-content-tips">{{ item.extra }}</text>
                                </view>
                                <u-radio
                                    shape="circle"
                                    :name="item.pay_way"
                                    :active-color="themeColor"
                                />
                            </view>
                        </view>
                    </u-radio-group>
                    <template v-if="!paywayList.length">
                        <view class="payway-empty">暂无支付方式</view>
                    </template>
                </view>
            </view>

            <!-- Footer -->
            <view class="payment-footer" v-if="paywayList.length">
                <view
                    :class="[
                        'payment-submit',
                        'u-skeleton-fillet',
                        { 'payment-submit--disabled': loadingPay }
                    ]"
                    @tap="handlePrepay"
                >
                    <u-loading mode="circle" :show="loadingPay" />
                    <text v-show="!loadingPay">立即支付</text>
                </view>
            </view>

            <!-- 页面状态 -->
            <page-status :status="pageStatus">
                <template #error>
                    <u-empty
                        :text="pageErrorMsg"
                        src="/static/images/empty/order.png"
                        :icon-size="280"
                    />
                </template>
            </page-status>
            <u-popup
                v-model="Alipayshow"
                mode="bottom"
                height="600rpx"
                safe-area-inset-bottom
                border-radius="20"
                closeable
                @close="handleclose"
            >
                <view class="Alipay">
                    <view class="m-t-50">
                        <price
                            class="u-skeleton-fillet"
                            :content="amount"
                            mainSize="56rpx"
                            minorSize="40rpx"
                        />
                    </view>
                    <view class="flex row-between m-t-50" style="width: 100%">
                        <text class="bold">支付方式</text>
                        <text class="bold">支付宝</text>
                    </view>
                    <view class="p-20 m-t-50 m-b-50" style="width: 100%; background-color: #f7f7f7"
                        >请复制链接,粘贴至浏览器并支付</view
                    >

                    <button class="btn" @click="$copy(key)">复制链接</button>
                </view>
            </u-popup>
        </view>

        <u-skeleton :loading="loadingSkeleton" :animation="true" bgColor="#FFFFFF" />
    </view>
</template>

<script>
/**
 * @description 支付页面
 * @query {String} from 订单来源: order-商品订单; recharge-充值订单;
 * @query {Number} order_id	订单ID
 */
import { mapGetters } from 'vuex'
import { apiPrepay, apiPayway, apiPayStatus } from '@/api/app'
import { wxpay, alipay, ttpay } from '@/utils/pay'
import { PaymentStatusEnum, PayWayEnum, PageStatusEnum } from '@/utils/enum'
import store from '@/store'

export default {
    name: 'Payment',

    data() {
        return {
            from: '', // 订单来源
            order_id: '', // 订单ID
            amount: 0, // 支付金额
            timeout: 0, // 倒计时间戳
            payway: '', // 支付方式
            paywayList: [], // 支付方式列表
            Alipayshow: false,
            pageStatus: PageStatusEnum['NORMAL'],
            pageErrorMsg: '',
            loadingSkeleton: true, // 骨架屏Loading
            loadingPay: false, // 支付处理中Loading
            key: ''
        }
    },
    methods: {
        // 更改支付方式
        changePayway(value) {
            this.$set(this, 'payway', value)
        },

        // 初始化页面数据
        initPageData() {
            // 获取支付方式
            return new Promise((resolve, reject) => {
                apiPayway({
                    from: this.from,
                    order_id: this.order_id
                })
                    .then((data) => {
                        this.amount = data.order_amount
                        this.paywayList = data.lists
                        this.payway = this.paywayList[0]?.pay_way
                        // 倒计时
                        const startTimestamp = new Date().getTime() / 1000
                        const endTimestamp = data.cancel_time * 1
                        this.timeout = endTimestamp - startTimestamp
                        resolve(data)
                    })
                    .catch((errMsg) => reject(errMsg))
            })
        },
        //支付宝弹窗关闭
        handleclose() {
            this.queryPayResult()
                .then((result) => {
                    result
                        ? this.handlePayResult(PaymentStatusEnum['SUCCESS'])
                        : this.handlePayResult(PaymentStatusEnum['FAIL'])
                })
                .catch((errMsg) => this.handlePayResult(PaymentStatusEnum['FAIL']))
            this.loadingPay = false
        },
        // 预支付处理
        handlePrepay() {
            if (this.userInfo.is_auth === 0 && this.payway == PayWayEnum['WECHAT']) {
                uni.showModal({
                    content: '当前账号未微信授权，请前往个人设置授权',
                    confirmColor: this.themeColor,
                    confirmText: '前往授权',
                    success: ({ confirm }) => {
                        if (confirm) {
                            this.$Router.push({
                                path: '/bundle/pages/user_profile/user_profile',
                                query: {
                                    form: 'payment'
                                }
                            })
                        }
                    }
                })
                return
            }

            this.key = `${store.getters.appConfig.domain}/mobile/bundle/pages/toAlipay/toAlipay?id=${this.order_id}&from=${this.from}&pay_way=${this.payway}&key=${store.getters.token}`
            // 阻止重复操作
            if (this.loadingPay) return
            this.loadingPay = true
            // 处理：支付
            apiPrepay({
                from: this.from,
                order_id: this.order_id,
                pay_way: this.payway
            })
                .then(async ({ config, pay_way }) => {
                    switch (+pay_way) {
                        case PayWayEnum['WALLET']:
                            await this.handleWalletPay()
                            break
                        case 5:
                            await this.handleDownLinePay()
                            break
                        case PayWayEnum['WECHAT']:
                            await this.handleWechatPay(config)
                            break
                        case PayWayEnum['ALIPAY']:
                            //TODO
                            uni.$on('Alipay', () => {
                                this.Alipayshow = true
                            })
                            await this.handleAlipayPay(
                                config,
                                {
                                    from: this.from,
                                    order_id: this.order_id,
                                    pay_way: pay_way
                                },
                                store.getters.token
                            )
                            break
                        case PayWayEnum['TOUTIAO']:
                            await this.handleTtPay(config)
                            break
                        default:
                            throw '支付异常'
                    }
                })
                .then(() => {
                    this.handlePayResult(PaymentStatusEnum['SUCCESS'])
                })
                .catch((errMsg) => {
                    this.handlePayResult(PaymentStatusEnum['FAIL'])
                    console.log('PAYMENT_ERROR_MSG:', errMsg)
                })
                .finally(() => {
                    this.loadingPay = false
                })
        },

        // 微信支付
        handleWechatPay(data) {
            return new Promise((resolve, reject) => {
                wxpay(data)
                    .then(async (res) => {
                        // #ifndef H5
                        resolve(res)
                        // #endif

                        // #ifdef H5
                        this.$on('h5_payment', () => {
                            this.queryPayResult()
                                .then((result) => {
                                    result ? resolve(res) : reject(res)
                                })
                                .catch((errMsg) => reject(errMsg))
                        })
                        // #endif
                    })
                    .catch((errMsg) => reject(errMsg))
            })
        },

        // 支付宝支付
        handleAlipayPay(data, params, token) {
            return new Promise((resolve, reject) => {
                alipay(data, params, token)
                    .then(async (res) => {
                        // #ifndef H5
                        resolve(res)
                        // #endif

                        // #ifdef H5
                        this.$on('h5_payment', () => {
                            this.queryPayResult()
                                .then((result) => {
                                    result ? resolve(res) : reject(res)
                                })
                                .catch((errMsg) => reject(errMsg))
                        })
                        // #endif
                    })
                    .catch((errMsg) => reject(errMsg))
            })
        },

        // 钱包余额支付
        handleWalletPay() {
            return new Promise((resolve, reject) => {
                resolve('支付成功')
            })
        },
        // 线下支付
        handleDownLinePay() {
            return new Promise((resolve, reject) => {
                resolve('支付成功')
            })
        },
        handleTtPay(data) {
            return new Promise((resolve, reject) => {
                ttpay(data)
                    .then(async (res) => {
                        resolve(res)
                    })
                    .catch((errMsg) => reject(errMsg))
            })
        },
        // 处理结果
        handlePayResult(result) {
            uni.$emit('duringPayment', {
                result,
                payway: this.payway,
                order_id: this.order_id
            })
        },

        // 查询支付结果
        queryPayResult() {
            return new Promise((resolve, reject) => {
                apiPayStatus({
                    from: this.from,
                    order_id: this.order_id
                })
                    .then(({ pay_status }) => {
                        resolve(!!pay_status)
                    })
                    .catch((errMsg) => reject(errMsg))
            })
        }
    },

    async onLoad() {
        const options = this.$Route.query
        this.from = options.from
        this.order_id = options.order_id

        try {
            if (!this.from && !this.order_id) throw '页面参数有误'
            await this.queryPayResult().then((result) => {
                if (result) throw '订单已支付'
            })
            await this.initPageData()
            this.loadingSkeleton = false
        } catch (errMsg) {
            this.pageErrorMsg = errMsg
            this.pageStatus = PageStatusEnum['ERROR']
        }
    },

    onShow() {
        // #ifdef H5
        this.$emit('h5_payment')
        // #endif
    },

    onUnload() {
        this.handlePayResult(PaymentStatusEnum['CLOSE'])
    }
}
</script>

<style lang="scss" scoped>
.payment {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-height: 100vh;
    padding-bottom: calc(100rpx + 20rpx + constant(safe-area-inset-bottom));
    padding-bottom: calc(100rpx + 20rpx + env(safe-area-inset-bottom));

    &-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 300rpx;
        @include background_linear(260deg) color: #ffffff;
    }

    &-main {
        flex: 1;
        margin-top: -40rpx;
        padding: 0 20rpx;
        overflow: hidden;
    }

    &-footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        height: calc(100rpx + constant(safe-area-inset-bottom));
        height: calc(100rpx + env(safe-area-inset-bottom));
        padding: 0 20rpx constant(safe-area-inset-bottom) 20rpx;
        padding: 0 20rpx env(safe-area-inset-bottom) 20rpx;
        background-color: #ffffff;
    }

    .payway-container {
        padding: 0 20rpx;
        border-radius: 7px;
        background-color: #ffffff;

        .payway-empty {
            display: flex;
            justify-content: center;
            padding: 20rpx 0;
            font-size: $-font-size-sm;
            color: $-color-muted;
        }
    }

    .payway {
        width: 100%;

        &-item {
            width: 100%;
            display: flex;
            align-items: center;
            height: 120rpx;

            &:nth-child(n + 2) {
                border-top: $-dashed-border;
            }

            &-content {
                flex: 1;
                display: flex;
                flex-direction: column;
                margin-left: 16rpx;

                &-name {
                    font-size: $-font-size-nr;
                    color: $-color-black;
                }

                &-tips {
                    font-size: $-font-size-xxs;
                    color: $-color-muted;
                }
            }
        }
    }

    &-count-down {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7rpx 25rpx;
        border-radius: 60px;
        margin-top: 10rpx;
        font-size: $-font-size-xxs;
        background-color: #ffffff;
        color: $-color-normal;
    }

    &-submit {
        flex: 1;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 74rpx;
        font-size: $-font-size-nr;
        border-radius: 60px;
        @include background_linear(260deg) color: #ffffff;

        &--disabled::before {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            display: block;
            content: '';
            background: rgba(255, 255, 255, 0.3) !important;
        }
    }
    .Alipay {
        padding: 20rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .btn {
            @include background_color();
            border-radius: 12rpx;
            width: 100%;
            height: 80rpx;
            line-height: 80rpx;
            font-size: 28rpx;
            color: white;
        }
    }
}
</style>
