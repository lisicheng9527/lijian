export default {
	data() {
		return {
			isCreated: false
		}
	},
	computed: {
		lists() {
			return this.isCreated ? this.parent.lists : []
		},
		selectIndex() {
			return this.isCreated ? this.parent.selectIndex : -1
		},
		banner() {
			return this.isCreated ? this.parent.banner : null
		},
		height() {
			return this.isCreated ? this.parent.height : 0
		}
	},
	created() {
		Object.defineProperty(this, 'parent', {
			get: () => this.$getParent.call(this,'category') || {},
		})
		this.isCreated = true
	}
}