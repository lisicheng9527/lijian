<template>
	<view class="goods-group" :class="themeName" :style="{
	            margin: `-${$px2rpx(styles.margin/2)}rpx`,
				'background-color': styles.content_bg_color,
				'border-radius': `${$px2rpx(styles.border_radius_top)}rpx ${$px2rpx(styles.border_radius_top)}rpx ${$px2rpx(styles.border_radius_bottom)}rpx ${$px2rpx(styles.border_radius_bottom)}rpx`,
				'padding': `${$px2rpx(styles.padding/2)}rpx`
	        }">
		<view class="goods-lists" :class="{
	                    larger: content.style==1,
	                    perline: content.style==2,
	                    swiper: content.style==3,
	                    lists: content.style==4,
	                }">
			<view class="goods-wrap" v-for="(item, index) in goods" :key="index" @tap="navigate(item)">
				<view class="goods-item" :style="{
	                            'background-color': styles.bg_color, 
	                            'margin': `${$px2rpx(styles.margin/2)}rpx`, 
	                            'border-radius': `${$px2rpx(styles.goods_border_radius)}rpx`
	                        }">
					<view class="goods-image">
						<view class="u-image">
							<u-image :src="item.image" width="100%" height="100%" />
						</view>
					</view>
					<view class="goods-info p-10">
						<view v-if="content.show_title" class="m-b-8 name" :style="{
	                                color: styles.title_color
	                            }">
							<view :class="content.style==3 ? 'line-1' : 'line-2'">
								{{item.name}}
							</view>
						</view>
						<view class="flex price-btn flex-wrap">
							<view class="flex-1 flex col-baseline">
								<view v-if="content.show_price" class="price weight-bold m-r-10">
									<price :content="item.sell_price" :color="styles.price_color" :font-weight="500"
										mainSize="34rpx" minorSize="26rpx" />
								</view>
								<view v-if="content.show_scribing_price">
									<price :content="item.lineation_price" color="#999999" mainSize="26rpx"
										minorSize="26rpx" :line-through="true" v-if="Number(item.lineation_price)"/>
								</view>
							</view>
							<view class="buy-btn xs"
								v-if="content.show_btn && ( content.style == 1 || content.style == 4)"
								:style="[btnStyle]">
								{{content.btn_text}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script type="text/javascript">
	export default {
		components: {},
		props: {
			content: {
				type: [Object, Array]
			},
			styles: {
				type: [Object, Array]
			},
		},
		data() {
			return {}
		},
		methods: {
			navigate(item) {
				this.$Router.push({
					path: '/pages/goods_detail/goods_detail',
					query: {
						id: item.id
					}
				})
			}
		},
		computed: {

			goods() {
				const {
					data
				} = this.content
				return data.length ? data : []
			},
			btnStyle() {
				const {
					btn_bg_color,
					btn_color,
					btn_border_radius,
					btn_border_color
				} =
				this.styles
				const style = {
					"background-color": btn_bg_color,
					color: btn_color,
					'border-radius': `${this.$px2rpx(btn_border_radius)}rpx`,
					'border-color': btn_border_color,
				}
				return style
			}
		}
	};
</script>
<style lang="scss" scoped>
	.goods-group {
		.goods-lists {
			overflow: hidden;

			&.larger {
				.goods-wrap {
					.goods-item {
						.goods-info {
							padding: 10px;
						}

						.goods-image {
							padding-top: 46%;
						}
					}
				}
			}

			&.perline {
				display: flex;
				flex-wrap: wrap;

				.goods-wrap {
					width: 50%;

					.goods-info {
						.name {
							line-height: 36rpx;
							height: 72rpx;
						}
					}
				}
			}

			&.swiper {
				overflow-x: auto;
				overflow-y: hidden;
				display: flex;

				.goods-wrap {
					flex: 0 0 36%;
					width: 36%;
				}
			}

			&.lists {
				.goods-wrap {
					.goods-item {
						flex-direction: row;

						.goods-image {
							width: 240rpx;
							padding-top: 240rpx;
						}

						.goods-info {
							position: relative;
							padding: 10px;

							.price-btn {
								position: absolute;
								right: 20rpx;
								left: 20rpx;
								bottom: 20rpx;
							}
						}
					}
				}
			}

			.goods-wrap {
				overflow: hidden;

				.goods-item {
					overflow: hidden;
					display: flex;
					flex-direction: column;
					position: relative;
					transform: translateY(0);

					.goods-image {
						position: relative;
						width: 100%;
						padding-top: 100%;
						box-sizing: border-box;

						.u-image {
							position: absolute;
							top: 0;
							right: 0;
							bottom: 0;
							left: 0;
							width: 100%;
						}
					}

					.goods-info {
						flex: 1;

						.buy-btn {
							flex: none;
							@include background_color() padding: 4rpx 32rpx;
							color: #fff;
							border-radius: 4rpx;
							border: 1px solid transparent;
						}

						.name {
							color: #333333;
						}

						.price {
							@include font_color();
						}
					}
				}
			}
		}
	}
</style>
