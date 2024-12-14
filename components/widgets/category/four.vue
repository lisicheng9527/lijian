<template>
	<view style="width: 100%;">
		<scroll-view style="height: 100%" scroll-y="true" scroll-with-animation="true">
			<img-list :lists="lists" />
		</scroll-view>
	</view>
</template>

<script type="text/javascript">
	import imgList from './img-list.vue'
	import category from './category.js'
	export default {
		mixins: [category],
		components: {
			imgList
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
	
</style>
