<template>
	<view class="style-one">
		<left-aside />
		<view class="right-warp">
			<goods v-if="height"  :scroll-height="$px2rpx(height)"/>
		</view>
	</view>
</template>

<script type="text/javascript">
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import {
		apiGoodsLists
	} from '@/api/goods'
	
	import leftAside from './left-aside.vue'
	import goods from './goods.vue'
	import category from './category.js'
	export default {
		mixins: [MescrollMixin, category],
		components: {
			leftAside,
			goods
		},
		props: {
	
	
		},
		data() {
			return {
			}
		},
		methods: {
			
		},
		computed: {
			
		},
		created() {

		}
	};
</script>
<style lang="scss" scoped>
	.style-one {
		flex: 1;
		min-width: 0;
		min-height: 0;
		/* 需给flex:1的元素加上最小高,否则内容超过会溢出容器 (如:小程序Android真机) */
		display: flex;
		width: 750rpx;
		height: 100%;
		// 右边
		.right-warp {
			flex: 1;
			min-width: 0;
			height: 100%;
		}
	}
</style>
