<template>
	<div>
		<div style="height:5000px"></div>
		<!-- 点击事件 -->
		<div class="go-top" @click="backTop" v-show="btnFlag">ss</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			btnFlag: false
		};
	},
	// window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
	mounted() {
		window.addEventListener('scroll', this.scrollToTop);
	},
	destroyed() {
		window.removeEventListener('scroll', this.scrollToTop);
	},

	methods: {
		// 点击图片回到顶部方法，加计时器是为了过渡顺滑
		backTop() {
			const that = this;
			let timer = setInterval(() => {
				let ispeed = Math.floor(-that.scrollTop / 5);
				document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
				if (that.scrollTop === 0) {
					clearInterval(timer);
				}
			}, 16);
		},

		// 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
		scrollToTop() {
			const that = this;
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			that.scrollTop = scrollTop;
			console.log(that.scrollTop);
			if (that.scrollTop > 100) {
				that.btnFlag = true;
			} else {
				that.btnFlag = false;
			}
		}
	}
};
</script>

<style scoped>
.go-top {
	position: fixed;
	bottom: 20px;
	right: 20px;
	background: red;
}
</style>
