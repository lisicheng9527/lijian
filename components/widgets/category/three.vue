<template>
	<view class="style-three">
		<scroll-view style="height: 100%" scroll-y="true" scroll-with-animation="true">
			<view class="p-t-20 p-l-20 p-r-20">
				<c-list :lists="lists" />
			</view>
		</scroll-view>
	</view>
</template>

<script type="text/javascript">
	import cList from './list.vue'
	import category from './category.js'
	export default {
		mixins: [category],
		components: {
			cList
		},
		props: {


		},
		data() {
			return {}
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
	.style-three {
		width: 100%;
	}
</style>
