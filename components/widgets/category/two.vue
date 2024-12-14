<template>
	<view class="style-two">
		<u-tabs :active-color="themeColor" :current="selectIndex" :list="lists"  :bar-width="64" @change="changeActive">
		</u-tabs>
		<view class="content-warp">
			<goods v-if="height" :scroll-height="$px2rpx(height) - 80" goods-style="square" class="goods-wrap" />
		</view>
	</view>
</template>

<script type="text/javascript">
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import goods from './goods.vue'
	import category from './category.js'
	export default {
		mixins: [MescrollMixin, category],
		components: {
			goods
		},
		props: {


		},
		data() {
			return {}
		},
		methods: {
			changeActive(index) {
				this.parent.selectIndex = index
			}
		},
		computed: {
		
		},
		created() {

		}
	};
</script>
<style lang="scss" scoped>
	.style-two {
		flex: 1;
		min-width: 0;
		min-height: 0;
		/* 需给flex:1的元素加上最小高,否则内容超过会溢出容器 (如:小程序Android真机) */
		display: flex;
		flex-direction: column;
		width: 750rpx;
		height: 100%;
		// 右边
		.content-warp {
			flex: 1;
			min-height: 0;
			display: flex;
			flex-direction: column;
			.goods-wrap {
				flex: 1;
				min-width: 0;
				min-height: 0;
			}
		}
		
	}
</style>
