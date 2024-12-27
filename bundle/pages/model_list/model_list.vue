<template>
    <view class="model-list" :class="themeName">
        <navbar title="模型文件列表" class="custom-navbar"></navbar>
        
        <!-- 标签页导航 -->
        <u-tabs
            :list="tabsList"
            :is-scroll="false"
            :height="90"
            :active-color="themeColor"
            :bar-style="{
                height: '4rpx',
                width: '60rpx',
                background: 'linear-gradient(90deg, #6366f1, #818cf8)',
                borderRadius: '4rpx'
            }"
            :current="tabsIndex"
            @change="changeCurrentTab"
            class="custom-tabs"
        />

        <!-- 模型列表内容 -->
        <view class="list-container" v-if="isLogin">
            <mescroll-uni
                ref="mescrollRef"
                :fixed="false"
                :up="{
                    auto: false,
                    noMoreSize: 3
                }"
                :down="{ auto: false }"
                @init="mescrollInit"
                @down="downCallback"
                @up="upCallback"
                @emptyClick="handleEmptyClick"
            >
                <block v-for="(tabItem, tabIndex) in tabsList" :key="tabItem.sign">
                    <view class="models-grid" v-if="currentTab.sign === tabItem.sign">
                        <template v-if="tabItem.list.length === 0">
                            <view class="empty-wrapper">
                                <view class="empty-state">

                                    <view class="empty-info">
                                        <!-- <text class="empty-title">暂无{{ tabItem.name }}模型</text> -->
                                        <text class="empty-desc">{{ getEmptyDesc(tabItem.sign) }}</text>
                                    </view>
                                </view>
                            </view>
                        </template>
                        
                        <template v-else>
                            <view
                                class="model-card"
                                v-for="model in tabsList[tabIndex].list"
                                :key="model.model_id"
                            >
                                <view class="model-image" @click="goModelDetail(model.model_id)">
                                    <image v-if="model.image_urls[0]" :src="model.image_urls[0].url" mode="aspectFill"></image>
                                    <view class="model-status" :class="getStatusClass(model.status)">
                                        {{ model.status_desc }}
                                    </view>
                                </view>
                                
                                <view class="model-info">
                                    <text class="model-name" @click="goModelDetail(model.model_id)">{{ model.model_name }}</text>
                                    
                                    <view class="model-actions">
                                        <u-button 
                                            v-if="model.preview_url" 
                                            size="mini" 
                                            type="primary" 
                                            @click="goPreview(model.preview_url)"
                                            class="action-btn preview-btn"
                                        >预览</u-button>
                                        <u-button 
                                            v-if="model.status === 10" 
                                            size="mini" 
                                            type="error" 
                                            @click="fileDownload(model.model_id)"
                                            class="action-btn download-btn"
                                        >下载</u-button>
                                    </view>
                                </view>
                            </view>
                        </template>
                    </view>
                </block>
            </mescroll-uni>
        </view>
        
        <!-- 未登录状态 -->
        <view class="login-container" v-else>
            <image src="/static/images/login-required.png" mode="aspectFit" class="login-image"></image>
            <button class="login-btn" @click="handleLogin">立即登录</button>
        </view>
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
        },
        getStatusClass(status) {
            const statusMap = {
                10: 'status-completed',
                20: 'status-processing',
                30: 'status-reviewed',
                40: 'status-rejected'
            }
            return statusMap[status] || ''
        },
        // 根据不同标签返回不同的提示文案
        getEmptyDesc(sign) {
            const descMap = {
                'all': '开始创建您的第一个3D模型吧',
                '10': '暂无已完成的模型，耐心等待处理完��',
                '20': '暂无处理中的模型，可以尝试创建新的模型',
                '30': '暂无已审核的模型，请等待审核完成',
                '40': '暂无被拒绝的模型，继续保持哦'
            }
            return descMap[sign] || '快去创建您的第一个模型吧'
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
.model-list {
    min-height: 100vh;
    background-color: #f8fafc;
    
    .custom-navbar {
        backdrop-filter: blur(8px);
        background: rgba(255, 255, 255, 0.8);
    }
    
    .custom-tabs {
        background: rgba(255, 255, 255, 0.9);
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.03);
        backdrop-filter: blur(8px);
        
        :deep(.u-tabs__wrapper__nav__item) {
            font-size: 28rpx;
            font-weight: 500;
            padding: 0 30rpx;
            
            &.u-tabs__wrapper__nav__item--active {
                font-weight: 600;
                transform: scale(1.05);
                transition: all 0.3s ease;
            }
        }
    }
    
    .list-container {
        padding: 24rpx;
    }
    
    .models-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320rpx, 1fr));
        gap: 24rpx;
        padding: 10rpx;
    }
    
    .model-card {
        background: #fff;
        border-radius: 20rpx;
        overflow: hidden;
        box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.06);
        transition: all 0.3s ease;
        
        &:active {
            transform: scale(0.97);
            box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.04);
        }
        
        .model-image {
            position: relative;
            width: 100%;
            height: 360rpx;
            overflow: hidden;
            
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.1));
            }
            
            image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
                
                &:hover {
                    transform: scale(1.05);
                }
            }
            
            .model-status {
                position: absolute;
                top: 20rpx;
                right: 20rpx;
                padding: 8rpx 24rpx;
                border-radius: 30rpx;
                font-size: 24rpx;
                color: #fff;
                font-weight: 500;
                z-index: 1;
                backdrop-filter: blur(4px);
                
                &.status-completed {
                    background: rgba(34, 197, 94, 0.9);
                }
                &.status-processing {
                    background: rgba(59, 130, 246, 0.9);
                }
                &.status-reviewed {
                    background: rgba(234, 179, 8, 0.9);
                }
                &.status-rejected {
                    background: rgba(239, 68, 68, 0.9);
                }
            }
        }
        
        .model-info {
            padding: 24rpx;
            
            .model-name {
                font-size: 30rpx;
                font-weight: 600;
                color: #1e293b;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                overflow: hidden;
                margin-bottom: 20rpx;
            }
            
            .model-actions {
                display: flex;
                gap: 20rpx;
                
                .action-btn {
                    flex: 1;
                    height: 70rpx;
                    border-radius: 35rpx;
                    font-weight: 500;
                    font-size: 26rpx;
                    letter-spacing: 1rpx;
                    transition: all 0.3s ease;
                    
                    &.preview-btn {
                        background: linear-gradient(135deg, #22c55e, #16a34a);
                        box-shadow: 0 4rpx 12rpx rgba(34, 197, 94, 0.2);
                        
                        &:active {
                            transform: translateY(2rpx);
                            box-shadow: 0 2rpx 6rpx rgba(34, 197, 94, 0.1);
                        }
                    }
                    
                    &.download-btn {
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
    
    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 200rpx;
        
        .login-image {
            width: 440rpx;
            height: 330rpx;
            margin-bottom: 50rpx;
            filter: drop-shadow(0 10rpx 20rpx rgba(0, 0, 0, 0.1));
        }
        
        .login-btn {
            width: 300rpx;
            height: 88rpx;
            line-height: 88rpx;
            border-radius: 44rpx;
            background: linear-gradient(135deg, #6366f1, #818cf8);
            color: #fff;
            font-size: 32rpx;
            font-weight: 600;
            letter-spacing: 2rpx;
            border: none;
            box-shadow: 0 6rpx 20rpx rgba(99, 102, 241, 0.3);
            transition: all 0.3s ease;
            
            &:active {
                transform: translateY(2rpx) scale(0.98);
                box-shadow: 0 3rpx 10rpx rgba(99, 102, 241, 0.2);
            }
        }
    }

    .empty-wrapper {
        grid-column: 1 / -1;
        width: 100%;
        min-height: calc(100vh - 400rpx);
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 120rpx 30rpx;
    }

    .empty-state {
        width: 100%;
        max-width: 560rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60rpx 40rpx;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(12px);
        border-radius: 32rpx;
        box-shadow: 
            0 8rpx 30rpx rgba(0, 0, 0, 0.06),
            0 1rpx 3rpx rgba(0, 0, 0, 0.02);
        border: 2rpx solid rgba(255, 255, 255, 0.7);
        
        .empty-image {
            width: 240rpx;
            height: 240rpx;
            margin-bottom: 48rpx;
            filter: drop-shadow(0 8rpx 16rpx rgba(0, 0, 0, 0.08));
            animation: float 3s ease-in-out infinite;
            opacity: 0.9;
        }
        
        .empty-info {
            text-align: center;
            
            .empty-title {
                font-size: 34rpx;
                color: #1e293b;
                font-weight: 600;
                margin-bottom: 20rpx;
                display: block;
                letter-spacing: 1rpx;
            }
            
            .empty-desc {
                font-size: 28rpx;
                color: #64748b;
                line-height: 1.6;
                display: block;
                max-width: 440rpx;
                margin: 0 auto;
            }
        }
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) scale(1);
    }
    50% {
        transform: translateY(-10rpx) scale(1.02);
    }
}
</style>