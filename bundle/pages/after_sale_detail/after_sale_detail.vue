<template>
    <view :class="themeName">
        <view class="header white p-50 lg">
            {{ detail.sub_status_desc }}
        </view>
        <view class="bg-white p-l-30 xs muted">
            <view class="p-t-25"> 如果商家拒绝，您可重新发起申请 </view>
            <view class="p-t-10 p-b-25"> 如果商家同意，将通过申请原路退款至您的账户中 </view>
        </view>

        <template v-if="detail.btns != undefined">
            <view class="m-t-20 bg-white flex p-24 p-l-30" v-if="detail.btns.express_btn">
                <view class="flex col-top row-between nr normal">
                    <view style="width: 150rpx"> 退货地址: </view>
                    <view style="width: 60%">
                        {{ detail.return_address.complete_address }},{{
                            detail.return_address.contact
                        }},{{ detail.return_address.mobile }}
                    </view>
                    <text
                        class="sign"
                        @click="
                            onCopy(
                                detail.return_address.complete_address +
                                    detail.return_address.contact +
                                    detail.return_address.mobile
                            )
                        "
                    >
                        复制
                    </text>
                </view>
            </view>
        </template>

        <template v-if="detail.goods_snap != undefined">
            <view class="m-t-20 bg-white flex p-24 p-l-30">
                <u-image
                    :src="detail.goods_snap.image"
                    width="180rpx"
                    height="180rpx"
                    mode="aspectFill"
                ></u-image>
                <view class="m-l-24" style="width: 100%">
                    <view class="nr line-2 m-b-20">
                        {{ detail.goods_snap.goods_name }}
                    </view>
                    <view class="xs muted flex row-between">
                        <price
                            class="m-r-12"
                            :content="detail.goods_price"
                            color="#101010"
                            mainSize="28rpx"
                            minorSize="26rpx"
                        ></price>

                        <text>X {{ detail.goods_snap.goods_num }}</text>
                    </view>
                </view>
            </view>
        </template>

        <view class="m-t-20 bg-white sm lighter p-24">
            <view> 退款方式：{{ detail.refund_method_desc }} </view>
            <view class="p-t-20"> 退款原因：{{ detail.refund_reason }} </view>
            <view class="p-t-20">
                退款金额：<price
                    class="m-r-12"
                    :content="detail.refund_amount"
                    color="#FF2C3C"
                    mainSize="28rpx"
                    minorSize="26rpx"
                ></price>
            </view>
            <view class="p-t-20"> 退款编号：{{ detail.sn }} </view>
            <view class="p-t-20"> 申请时间：{{ detail.create_time }} </view>
        </view>

        <view class="m-t-20 bg-white sm lighter p-24" v-if="detail.express_name">
            <view> 快递公司：{{ detail.express_name }} </view>
            <view class="p-t-20">
                快递单号：{{ detail.invoice_no }}
                <text class="sign m-l-20" @click="onCopy(detail.invoice_no)">复制</text>
            </view>
            <view class="p-t-20"> 退货时间：{{ detail.express_time }} </view>
        </view>

        <template v-if="detail.btns != undefined">
            <view class="footer bg-white p-20">
                <view class="flex row-right">
                    <view
                        class="br60 btn inline m-l-24"
                        @click="showCancel = true"
                        v-if="detail.btns.cancel_btn"
                    >
                        撤销申请
                    </view>

                    <view
                        class="br60 btn inline m-l-24"
                        @click="toExpressInfo"
                        v-if="detail.btns.express_btn"
                    >
                        填写快递单号
                    </view>

                    <view
                        class="br60 btn inline m-l-24"
                        @click="toApplyAfter"
                        v-if="detail.btns.reapply_btn"
                    >
                        重新申请
                    </view>
                </view>
            </view>
        </template>

        <u-modal
            v-model="showCancel"
            width="540"
            :confirm-style="{ 'border-left': '1rpx solid #e5e5e5' }"
            @confirm="cancelApplyFun"
            :show-title="false"
            @cancel="showCancel = false"
            :showCancelButton="true"
            confirm-text="确定"
            cancel-color="#999999"
            confirm-color="#101010"
            border-radius="10"
        >
            <view class="flex row-center m-t-24" style="color: #101010; font-size: 30rpx">
                提示
            </view>
            <view style="margin: 40rpx 30rpx" class="md muted">是否要撤销申请？？</view>
        </u-modal>
    </view>
</template>

<script>
import { apiAfterSaleDetail, apiAfterSaleCancel } from '@/api/order.js'
import { copy } from '@/utils/tools.js'
export default {
    data() {
        return {
            id: 13,
            detail: {},
            address: '',
            showCancel: false
        }
    },

    methods: {
        getRefundDetailFun() {
            apiAfterSaleDetail({
                id: this.id
            }).then((res) => {
                this.detail = res
                try {
                    this.address =
                        res.address + ', ' + res.return_contact + ': ' + res.return_contact_mobile
                } catch (err) {
                    console.log(err)
                }
            })
        },

        // 撤销审核
        cancelApplyFun() {
            apiAfterSaleCancel({ id: this.detail.master_id }).then((res) => {
                this.getRefundDetailFun()
            })
        },

        // 去填写快递单号
        toExpressInfo() {
            this.$Router.push({
                path: '/bundle/pages/input_express_info/input_express_info',
                query: {
                    id: this.detail.master_id
                }
            })
        },

        toApplyAfter() {
            this.$Router.push({
                path: '/bundle/pages/post_after_sale/post_after_sale',
                query: {
                    id: this.detail.order_goods_id
                }
            })
        },

        //复制
        onCopy(str) {
            copy(str)
        }
    },

    onLoad() {
        const options = this.$Route.query
        this.id = options.id
        this.getRefundDetailFun()
    }
}
</script>

<style lang="scss">
.header {
    @include background_linear(90deg, 50%, 100%);
}

.sign {
    color: #555;
    font-size: 24rpx;
    padding: 4rpx 10rpx;
    background-color: #f4f4f4;
}

.footer {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 110rpx;
    position: fixed;
    padding-bottom: env(safe-area-inset-bottom);
    padding: 0 20rpx constant(safe-area-inset-bottom) 20rpx;
}

.btn {
    padding: 10rpx 40rpx;
    border-width: 1rpx;
    border-style: solid;
    @include font_color();
    @include border_color();
}
</style>
