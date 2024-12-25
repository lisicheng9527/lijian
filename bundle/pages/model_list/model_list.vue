<template>
    <view class="order-list" :class="themeName">
        <!-- Tabs -->
        <navbar title="模型文件列表"></navbar>
        <u-tabs
            :list="tabsList"
            :is-scroll="false"
            :height="80"
            :active-color="themeColor"
            :bar-style="{ top: '100%' }"
            :current="tabsIndex"
            @change="changeCurrentTab"
        />

        <!-- Order Lists -->
        <view class="order-item" v-if="isLogin">
            <mescroll-uni
                ref="mescrollRef"
                :fixed="false"
                :up="{
                    auto: false,
                    noMoreSize: 3,
                    empty: {
                        icon: '/static/images/empty/order.png',
                        tip: '暂无模型~',
                        fixed: true
                    }
                }"
                :down="{ auto: false }"
                @init="mescrollInit"
                @down="downCallback"
                @up="upCallback"
            >
                <block v-for="(tabItem, tabIndex) in tabsList" :key="tabItem['sign']">
                    <view class="order-contain" v-if="currentTab['sign'] === tabItem['sign']">
                        <view
                            class="order"
                            v-for="orderItem in tabsList[tabIndex].list"
                            :key="orderItem.model_id"
                        >
                            <!-- Order Main -->
                            <view class="order-main">
                                <view class="order-main-contain">
                                    <image style="width: 100%;" :src="orderItem.image_urls[0].url" @click="goModelDetail(orderItem.model_id)"></image>
                                    <view class="order-tit">
                                        <view class="model-name">模型名称：{{orderItem.model_name}}</view>
                                        <view class="model-status">模型状态：<text>{{ orderItem.status_desc }}</text></view>
                                    </view>
                                    <view class="order-btn">
                                        <u-button size="medium" type="primary" v-if="orderItem.preview_url" @click="goPreview(orderItem.preview_url)">模型预览</u-button>
                                        <u-button size="medium" type="error" v-if="orderItem.status === 10" @click="fileDownload(orderItem.model_id)">模型下载</u-button>
                                    </view>
                                </view>
                            </view>
                        </view>
                    </view>
                </block>
            </mescroll-uni>
        </view>
        <button class="login" v-else @click="handleLogin">立即登录</button>
    </view>
</template>

<script>
import { getmodelFileList, downloadModelFile } from '@/api/model'
import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins'
import { mapGetters } from 'vuex'
import Cache from '@/utils/cache'

export default {
    name: 'OrderList',
    mixins: [MescrollMixin],

    data() {
        return {
            // Tabs列表
            tabsList: [
                {
                    sign: 'all',
                    name: '全部',
                    list: []
                },
                {
                    sign: '10',
                    name: '已完成',
                    list: []
                },
                {
                    sign: '20',
                    name: '处理中',
                    list: []
                },
                {
                    sign: '30',
                    name: '已审核',
                    list: []
                },
                {
                    sign: '40',
                    name: '审核拒绝',
                    list: []
                }
            ],
            tabsIndex: '', // Tabs索引
        }
    },

    computed: {
        // 当前Tab项
        currentTab() {
            return this.tabsList[this.tabsIndex] || {}
        },

        // 映射Tabs项
        mapTabsItem() {
            return (sign) => this.tabsList.find((item) => item['sign'] === sign)
        }
    },

    methods: {
        ...mapGetters(['isLogin']),
        // 模型下载
        fileDownload(model_id) {
            downloadModelFile({ model_id }).then(({ downloadUrl }) => {
                window.open(downloadUrl)
            })
            .catch((err) => {
                console.log(err)
            })
        },
        handleLogin() {
            Cache.set('back_url', '/bundle/pages/user_order/user_order')
            this.$Router.replace({
                path: '/pages/login/login'
            })
        },
        // 更改当前Tab页
        changeCurrentTab(index) {
            this.tabsIndex = index
            this.refreshOrderData()
        },
        // 刷新订单数据 @Mixins【/src/mixins/order.js】内调用，请勿删除
        refreshOrderData() {
            this.$nextTick(() => {
                this.mescroll.resetUpScroll()
            })
        },
        // 上拉加载更多
        upCallback({ num, size }) {
            const sign = this.currentTab.sign
            getmodelFileList({
                status: sign === 'all' ? '0' : sign,
                page_no: num,
                page_size: size
            })
                .then(({ lists, count }) => {
                    const tab = this.mapTabsItem(sign)
                    if (num === 1) tab.list = []
                    tab.list = [...tab.list, ...lists]
                    this.mescroll.endSuccess(lists.length, count)
                })
                .catch((err) => {
                    this.mescroll.endErr()
                })
        },
        // 去订单详情
        goModelDetail(id) {
            console.log(id)
            this.$Router.push({
                path: '/pages/model_detail/model_detail',
                query: { model_id: id, mode: this.tabsIndex }
            })
        },
        // 模型预览
        goPreview(fileUrl) {
            console.log(fileUrl)
            this.$Router.push({
                path: '/pages/model_preview/model_preview',
                query: { fileUrl }
            })
        }
    },
    onLoad() {
        const options = this.$Route.query
        const mode = options.mode ?? 'all'
        const tabIndex = this.tabsList.findIndex((item) => item['sign'] == mode)
        if (!this.isLogin) {
            return
        }
        this.changeCurrentTab(tabIndex)
        uni.$on('refreshData',() => {
            this.changeCurrentTab(tabIndex)
        })
    },
    onUnload() {
        uni.$off('duringPayment')
    }
}
</script>

<style lang="scss" scoped>
page {
    height: 100%;
    padding: 0;
}
.order-list {
    height: 100%;
    display: flex;
    flex-direction: column;
    .order-item {
        flex: 1;
        min-height: 0;
    }
}
.order-contain {
    padding: 0 20rpx;
    .order-main-contain {
        background-color: #fff;
        margin-top: 20rpx;
        .order-tit {
            display: flex;
            justify-content: space-between;
            padding: 10rpx 20rpx 20rpx;
        }
        .model-status {
            text {
                color: #FF2C3C;
            }
        }
        .order-btn {
            display: flex;
            justify-content: space-between;
            padding: 0 20rpx 20rpx;
        }
    }
    .order-main {
        border-radius: 5px;
        overflow: hidden;
        uni-image {
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
        }
    }
}
.login {
    margin: 400rpx auto;
    padding: 10rpx 20rpx;
    color: white;
    width: 200rpx;
    @include background_color();
}
</style>
