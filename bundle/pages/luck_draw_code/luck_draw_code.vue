<template>
    <view :class="themeName">
        <mescroll-body
            ref="mescrollRef"
            @init="mescrollInit"
            @up="upCallback"
            :up="upOption"
            :down="downOption"
            @down="downCallback"
        >
            <view class="goods-list">
                <view class="" v-for="(item, index) in bargainGoods" :key="index">
                    <view class="bg-white flex code-item">
                        <u-image
                            :src="item.image"
                            width="150rpx"
                            height="150rpx"
                            mode="aspectFill"
                            radius="28rpx"
                        ></u-image>
                        <view class="m-l-24 flex-col desc">
                            <view class="nr flex">
                                <view
                                    class="tip"
                                    v-if="item.type == 1"
                                    style="border: 2rpx solid #ff9600; color: #ff9600"
                                    >积分</view
                                >
                                <view
                                    class="tip"
                                    v-if="item.type == 2"
                                    style="
                                        border: 2rpx solid #ff0000;
                                        color: #ff0000;
                                        width: 100rpx;
                                        text-align: center;
                                        flex-shrink: 0;
                                    "
                                    >优惠券</view
                                >
                                <view
                                    class="tip"
                                    v-if="item.type == 3"
                                    style="border: 2rpx solid #f45d27; color: #f45d27"
                                    >余额</view
                                >
                                <view
                                    class="tip"
                                    v-if="item.type == 4"
                                    style="border: 2rpx solid #4073fa; color: #4073fa"
                                    >商品</view
                                >
                                <view class="line">
                                    {{ item.title }}
                                </view>
                            </view>
                            <view class="m-t-15 flex row-between">
                                <view class="xs lighter" v-if="item.type == 4"
                                    >兑换时间：{{ item.send_time }}</view
                                >
                                <view class="xs lighter" v-else
                                    >兑换时间：{{ item.create_time }}</view
                                >
                                <view class="xs">
                                    <view
                                        class="btn-1"
                                        v-if="item.is_send == 1"
                                        @click="handleLook(item.type, item.order_id)"
                                    >
                                        查看
                                    </view>
                                    <view
                                        v-if="item.is_send == 0 && item.type == 4"
                                        class="btn-2"
                                        @click="
                                            goPage(
                                                'bundle/pages/luck_draw_good/luck_draw_good',
                                                item.type_value,
                                                item.id
                                            )
                                        "
                                    >
                                        领取</view
                                    >
                                </view>
                            </view>
                        </view>
                    </view>
                    <!-- <view class="xs code-tps bg-white line-1" v-if="item.send_tips">
                        {{ item.send_tips }}
                    </view> -->
                </view>
            </view>
        </mescroll-body>
    </view>
</template>

<script>
import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js'
import { apiLuckyDrawRecord, apiLuckyDrawWinningList } from '@/api/luck_draw.js'
export default {
    mixins: [MescrollMixin], // 使用mixin
    data() {
        return {
            bargainGoods: [], // 记录列表

            upOption: {
                textColor: '#fff',
                empty: {
                    tip: '暂无奖品~', // 提示
                    icon: '/static/images/empty/gift.png',
                    top: '200rpx',
                    textColor: '#fff'
                }
            },
            downOption: {
                // textColor: '#fff',
            },

            id: ''
        }
    },

    methods: {
        // 上拉加载
        upCallback(page) {
            apiLuckyDrawRecord({
                page_size: page.size,
                page_no: page.num,
                status: this.status,
                id: this.id
            })
                .then(({ lists, count }) => {
                    if (page.num == 1) this.bargainGoods = []
                    this.bargainGoods.push(...lists)
                    this.mescroll.endSuccess(lists.length, count)
                })
                .catch(() => {
                    this.mescroll.endErr()
                })
        },
        goPage(url, id, luckId) {
            uni.navigateTo({
                url: `${url}?id=${id}&luckId=${luckId}`
            })
        },
        handleLook(type, id) {
            switch (type) {
                case 1:
                    uni.navigateTo({
                        url: 'bundle/pages/sign_detail/sign_detail'
                    })
                    break
                case 2:
                    uni.navigateTo({
                        url: 'bundle/pages/coupon/coupon'
                    })
                    break
                case 3:
                    uni.navigateTo({
                        url: 'bundle/pages/user_wallet/user_wallet'
                    })
                    break
                case 4:
                    uni.navigateTo({
                        url: `pages/order_detail/order_detail?order_id=${id}`
                    })
                    break
                default:
                    break
            }
        }
    },

    onLoad() {
        this.id = this.$Route.query.id
        // this.id = 2
    }
}
</script>

<style lang="scss" scoped>
.goods-list {
    margin: 0 20rpx;
    // margin-top: 20rpx;

    .code-item {
        margin-top: 20rpx;
        padding: 26rpx 24rpx;

        .need-integral-tips {
            @include font_color();
        }
    }
    .code-tps {
        margin-top: -10rpx;
        padding: 0 24rpx 26rpx 138rpx;
        @include font_color();
    }

    .desc {
        width: 550rpx;
    }
    .tip {
        border: 2rpx solid #4073fa;
        color: #4073fa;
        border-radius: 8rpx;
        font-size: 20rpx;
        padding: 2rpx 5rpx;
        margin-right: 15rpx;
    }
    .btn-1 {
        padding: 5rpx 20rpx;
        border: 2rpx solid #edf1f3;
        border-radius: 22rpx;
    }
    .btn-2 {
        color: white;
        background-color: #4073fa;
        border-radius: 22rpx;
        padding: 5rpx 20rpx;
    }
}
</style>
