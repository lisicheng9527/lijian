<template>
    <view class="m-t-6 flex flex-wrap row-center">
        <view
            v-for="(item, index) in params.prizes"
            :key="index"
            class="lattice nr"
            :class="{
                active: activeIndex == index,
                start: item.flag && index == 4,
                end: !item.flag && index == 4
            }"
            @click="startLuckDraw(index)"
        >
            <image :src="item.image || ''"></image>
            <view style="font-size: 22rpx" class="line-1">{{ item.name || item.tips }}</view>
        </view>
    </view>
</template>

<script>
import { apiLuckyDrawStart } from '@/api/luck_draw.js'
const ORDER = [1, 2, 3, 8, '', 4, 7, 6, 5]
export default {
    props: {
        ids: {
            type: Number
        },
        params: {
            type: Object || Array,
            default: {}
        },
        // 最少转动多少个
        circleTimes: {
            type: Number,
            default: 30
        }
    },

    data() {
        return {
            isRunLuckDraw: false, //是否抽奖进行中
            orderIndex: -1, //中奖的索引
            activeIndex: -1, //当前显示在页面上的显示索引
            currentIndex: 1, //显示到第几个
            speed: 200, //抽奖的转动间隔

            result: '', //提示结果
            location: ''
        }
    },

    methods: {
        async startLuckDraw(index) {
            // 上锁，在抽奖期间不允许点击
            if (this.isRunLuckDraw) return
            this.isRunLuckDraw = true
            if (index == 4) {
                try {
                    const res = await apiLuckyDrawStart({ id: this.ids })
                    if (res) {
                        this.result = res.tips
                        this.location = res.location
                        this.orderIndex = res.location
                        this.start()
                    }
                    this.$parent.getLuckyDrawActivityFunc()
                } catch (error) {
                    this.isRunLuckDraw = false
                }
            }
        },

        // 开始抽奖
        start() {
            let index = this.currentIndex % 9
            if (index == 0) {
                index = 1
                this.currentIndex += 1
            }
            this.currentIndex += 1

            // 中奖的索引
            const orderIndex = ORDER.findIndex((item) => item == this.orderIndex)
            this.activeIndex = ORDER.findIndex((item) => item == index)

            if (this.currentIndex > this.circleTimes + 8 && orderIndex == this.activeIndex) {
                if (this.luckDrawTimer) {
                    clearTimeout(this.luckDrawTimer)
                    setTimeout(this.reset, 1500)
                    setTimeout(this.stopCallbackFun, 500)
                }
            } else {
                if (this.currentIndex < this.circleTimes) {
                    this.speed -= 10
                } else {
                    this.speed += 60
                }
                if (this.speed < 50) {
                    this.speed = 50
                }
                this.luckDrawTimer = setTimeout(this.start.bind(this), this.speed)
            }
        },

        // 重设转盘
        reset() {
            this.isRunLuckDraw = false
            this.currentIndex = -1
            this.speed = 100
            this.activeIndex = -1
        },

        // 转盘结束
        stopCallbackFun() {
            this.$emit('finish', {
                detail: this.result,
                location: this.location
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.lattice {
    color: #743c3c;
    padding: 20rpx;
    width: 171rpx;
    height: 171rpx;
    border-radius: 20rpx;
    background: url(../../static/images/choujiang_block.png) no-repeat;
    background-size: 171rpx 171rpx;
    margin-right: 10rpx;
    margin-bottom: 10rpx;
    text-align: center;

    image {
        width: 80rpx;
        height: 80rpx;
    }
}
.lattice:nth-child(n + 7) {
    margin-bottom: 0;
}

.lattice:nth-child(3n) {
    margin-right: 0;
}

.lattice:nth-child(5) {
    view {
        margin-top: 12rpx !important;
        font-size: $-font-size-xs;
    }
}
// 5
.start {
    color: #ed3720;
    background: url(../../static/images/choujiang_button.png) no-repeat;
    background-size: 171rpx 171rpx;
}
// 5
.end {
    color: #666666;
    background: url(../../static/images/choujiang_button_end.png) no-repeat;
    background-size: 171rpx 171rpx;
}

// 当前的
.active {
    opacity: 0.6;
}
</style>
