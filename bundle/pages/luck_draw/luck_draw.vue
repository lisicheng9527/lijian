<template>
    <view
        class="container"
        :style="
            'background-image: url(' +
            $getImageUri('resource/image/shopapi/default/luck_bg.png') +
            ')'
        "
    >
        <!-- Header -->
        <view class="header flex row-right" v-if="activity.length !== 0">
            <view class="choujiang-btn1 md" @click="showRules = true"> 规则 </view>
        </view>
        <view class="header flex row-right" v-if="activity.length !== 0">
            <view
                class="choujiang-btn1 md m-t-10"
                @click="goTo('/bundle/pages/luck_draw_code/luck_draw_code?id=')"
            >
                我的奖品
            </view>
        </view>

        <!-- Section -->
        <view class="section m-t-16">
            <view class="box-wrap">
                <!-- 中奖名单公示 -->
                <view class="notice flex" v-if="activity.show_winning_list">
                    <image class="m-l-18" src="../../static/images/choujinag_notice.png"></image>
                    <view style="width: 90%">
                        <u-notice-bar
                            bg-color="none"
                            :volume-icon="false"
                            mode="horizontal"
                            :list="list"
                        >
                        </u-notice-bar>
                    </view>
                </view>

                <!-- 转盘 -->
                <view
                    class="turntable m-t-20"
                    v-if="activity.length != 0"
                    :style="
                        'background-image: url(' +
                        $getImageUri('resource/image/shopapi/default/lucking.png') +
                        ')'
                    "
                >
                    <my-turntable :ids="id" @finish="finish" :params="activity"></my-turntable>
                </view>
                <!-- 抽奖信息 -->
                <view class="message flex row-between nr" v-if="activity.length != 0">
                    <view v-if="activity.frequency_type == 0">剩余次数:不限制</view>
                    <view v-if="activity.frequency_type == 1"
                        >剩余次数:{{ activity.surplus_draw_num }}</view
                    >
                    <template v-if="activity.show_winning_list">
                        <view
                            class="flex"
                            @click="goTo('/bundle/pages/win_prize_code/win_prize_code?id=')"
                        >
                            <image
                                class="m-r-10"
                                src="../../static/images/choujiang_name_list.png"
                            ></image>
                            中奖名单
                        </view>
                    </template>
                </view>

                <!-- 次数提示 -->
                <!-- <view class="num-tips nr" v-if="activity.length != 0">
                    {{ activity.limit || '-' }}
                </view> -->

                <!-- 活动规则 -->
                <!-- <view class="rule" v-if="activity.length != 0">
                    <view class="lg bold">活动规则</view>
                    <text class="sm" style="color: #fcd7d2">{{ activity.rule || '-' }} </text>
                </view> -->

                <!-- <view
                    class="flex-1 flex row-center col-center"
                    v-if="activity.length == 0"
                    style="color: #fcd7d2; height: 61vh"
                >
                    活动已失效
                </view> -->
            </view>
        </view>
        <view class="section m-t-16">
            <view class="box-wrap prize-contain" style="padding: 0">
                <image
                    :src="$getImageUri('/resource/image/shopapi/default/prize.png')"
                    class="prize"
                ></image>
                <scroll-view
                    :scroll-y="true"
                    style="height: 700rpx; touch-action: none; margin-top: 80rpx"
                    class=""
                >
                    <view
                        class="prize-item flex"
                        v-for="item in activity.prizes_lists"
                        :key="item.name"
                    >
                        <view>
                            <image :src="item.image" class="img"></image>
                        </view>

                        <view
                            class="m-l-10 flex-col row-around"
                            style="height: 150rpx; width: 100%"
                        >
                            <view class="flex">
                                <view> {{ item.name }}-{{ item.type_desc }} </view>
                                <view style="margin-left: auto; flex-shrink: 0">
                                    共{{ item.num }}个
                                </view>
                            </view>
                            <view> {{ item.type_value_desc }} </view>
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>

        <!-- Footer -->
        <!-- <view class="footer"> 本活动的所有奖品，均由商城提供 </view> -->
        <u-popup v-model="showRules" mode="bottom" safe-area-inset-bottom border-radius="14">
            <view class="p-20">
                <view style="text-align: center" class="p-20"> 活动规则 </view>
                <scroll-view style="height: 300px" scroll-y="true">
                    {{ activity.rule || '-' }}
                </scroll-view>
            </view>
        </u-popup>
        <!-- Popup -->
        <u-popup v-model="showResult" mode="center">
            <view class="result-popup flex-col">
                <view class="result-container flex-col row-around col-center p-20">
                    <image class="img" :src="result.image"></image>
                    <view style="color: #ff0000; font-weight: 500" v-if="result.type == 0">
                        未中奖
                    </view>

                    <view style="color: #ff0000; font-weight: 500" v-else> 恭喜你获得 </view>
                    <view>
                        {{ resultText }}
                    </view>
                    <view
                        class="btn"
                        @click="
                            result.type == 0
                                ? (showResult = false)
                                : goTo('/bundle/pages/luck_draw_code/luck_draw_code?id=')
                        "
                    >
                        我知道了
                    </view>
                </view>
                <view style="margin-top: 50rpx" @click="showResult = false">
                    <u-icon name="close-circle" size="62" color="#fff"></u-icon>
                </view>
            </view>
        </u-popup>

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
    </view>
</template>

<script>
import { apiLuckyDrawActivity, apiLuckyDrawWinningList } from '@/api/luck_draw.js'
import myTurntable from '@/bundle/components/my-turntable/my-turntable.vue'
export default {
    components: {
        myTurntable
    },
    data() {
        return {
            id: '',
            // 中奖名单的轮播
            list: [],
            // 活动的信息
            activity: {},
            // 抽奖结果
            resultText: '',
            // 弹窗控制
            showResult: false,
            // 页面的状态
            pageStatus: 'normal',
            pageErrorMsg: '',
            showRules: false,
            result: {
                name: '',
                image: '',
                type: 0
            }
        }
    },

    onLoad() {
        try {
            const id = this.$Route.query.id
            this.id = id
            console.log(id)
        } catch (e) {
            console.log(e)
            //TODO handle the exception
        }
    },

    onShow() {
        // 活动信息
        this.getLuckyDrawActivityFunc()
        // 中奖名单
        this.getLuckyDrawListFunc()
    },
    methods: {
        // 活动信息
        async getLuckyDrawActivityFunc() {
            apiLuckyDrawActivity({
                id: this.id
            })
                .then((res) => {
                    this.activity = res
                })
                .catch((err) => {
                    console.log(err)
                    this.pageErrorMsg = err == '请求参数缺token' ? '请先登录' : err
                    this.pageStatus = 'error'
                })
        },

        // 中奖名单
        async getLuckyDrawListFunc() {
            const res = await apiLuckyDrawWinningList({
                id: this.id,
                page_no: 1,
                page_size: 10
            })
            this.list = res.lists.map((item) => item.title)
        },

        // 确认收下
        finish(e) {
            this.showResult = true
            console.log(e)
            this.resultText = e.detail
            this.activity.prizes.forEach((item) => {
                if (item.location == e.location) {
                    this.result.name = item.name
                    this.result.image = item.image
                    this.result.type = item.type
                }
            })
        },

        goTo(url, id) {
            uni.navigateTo({
                url: url + this.id
            })
        }
    }
}
</script>

<style lang="scss">
page {
    background-color: #ff2f46;
}

.container {
    width: 100%;
    padding-top: 300rpx;
    padding-bottom: 50rpx;

    background-size: 100% auto !important;
    background-repeat: no-repeat;

    .header {
        .choujiang-btn1 {
            color: #7d350c;
            background-color: #fef0b5;
            border-radius: 40rpx 0 0 40rpx;
            box-shadow: 0px 3px 10px #f95f2f;
            padding: 15rpx 24rpx 15rpx 32rpx;
        }
    }

    .section {
        padding: 0 30rpx;

        .box-wrap {
            width: 690rpx;
            padding: 27rpx 28rpx;
            border-radius: 30rpx;
            background: #ed3720;
            border: 12rpx solid #fe6847;

            // 中奖名单公示
            .notice {
                margin: 0 24rpx;
                height: 58rpx;
                padding: 12rpx 0;
                border-radius: 29rpx;
                background: #d30c16;
                border: 2rpx solid #edb17d;

                image {
                    width: 32rpx;
                    height: 32rpx;
                }
            }

            // 中奖信息奖品等
            .message {
                margin: 30rpx 10rpx 0 10rpx;
                color: #fef0b5;

                image {
                    width: 28rpx;
                    height: 30rpx;
                }
            }

            // 转盘
            .turntable {
                width: 610rpx;
                height: 610rpx;
                overflow: hidden;
                border-radius: 20rpx;
                padding: 35rpx 38rpx;

                background-size: 100% auto !important;
            }

            // 每日抽奖次数提示
            .num-tips {
                color: #fbccc7;
                margin: 16rpx 0;
                text-align: center;
            }

            // 活动规则
            .rule {
                color: #fcd7d2;
                font-size: $-font-size-sm;
                padding: 30rpx 16rpx 30rpx 28rpx;
                border-radius: 20rpx;
                background: #d30c16;
            }
        }
    }

    // Footer
    .footer {
        color: #fff2d9;
        padding: 30rpx 0;
        text-align: center;
        font-size: $-font-size-xs;
    }

    // 弹窗
    .result-popup {
        text-align: center;

        border-radius: 20rpx;
        .result-container {
            width: 500rpx;
            height: 600rpx;
            background-size: 100% 100%;
            background-color: white;
            border-radius: 20rpx;
            .img {
                width: 150rpx;
                height: 150rpx;
                border-radius: 20rpx;
            }
            .btn {
                color: white;
                background-color: red;
                border-radius: 50rpx;
                width: 200rpx;
                padding: 20rpx;
            }
        }
    }

    // 按钮
    .get-btn {
        width: 320rpx;
        height: 70rpx;
        color: #7b3200;
        background: linear-gradient(180deg, #fef0b0 0%, #ffa92e 100%);
    }
    .prize-contain {
        position: relative;
        .prize {
            position: absolute;
            width: 250rpx;
            height: 92rpx;
            top: -15rpx;
            left: 50%;
            margin-left: -125rpx;
        }
        .prize-item {
            // border: 12rpx solid #fe6847;
            // background-color: white;
            margin-top: 10rpx;
            padding: 20rpx;
            .img {
                width: 120rpx;
                height: 120rpx;
                border-radius: 20rpx;
            }
            border-bottom: 1rpx solid #f7f7f72e;
            color: white;
        }
    }
}
</style>
