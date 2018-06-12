<template>
	<div class="content main">
		<main-banner></main-banner>
		<best-banner></best-banner>
	</div>
</template>

<script>
	import MainBanner from './MainBanner.vue'
	import BestBanner from './BestBanner.vue'
	
	export default {
		name: 'home',
		components: {
			MainBanner, BestBanner
		}
	}
</script>
<style>
	.content.main .list-container {
		max-width: 1400px;
		margin: 0 auto;
	}
	.content.main .list-container .best-slider {
		padding-top: 45px;
	}
	.content.main .list-container .best-slider .button-prev {
		position: absolute;
		top: 0;
		left: 17px;
		width: 53px;
		height: 17px;
		background: url(../assets/arrow_left.png) center no-repeat;
		background-size: cover;
		cursor: pointer;
	}
	.content.main .list-container .best-slider .button-next {
		position: absolute;
		top: 0;
		right: 17px;
		width: 53px;
		height: 17px;
		background: url(../assets/arrow_right.png) center no-repeat;
		background-size: cover;
		cursor: pointer;
	}
	.content.main .list-container.best-area .title-area {
		padding: 118px 0 0;
	}
	.content.main .list-container.best-area .video {
		padding-bottom: 0;
		width: 100%;
	}
	.content.main .list-container .title-area {
		padding: 118px 0 30px;
		text-align: center;
	}
	.content.main .list-container .list-title {
		position: relative;
		font-size: 25px;
		font-weight: 700;
		margin-bottom: 46px;
	}
	.content.main .list-container .list-title:after {
		content: '';
		position: absolute;
		bottom: -32px;
		left: 50%;
		width: 18px;
		height: 2px;
		background: #000000;
		margin-left: -9px;
	}
	.content.main .list-container .list-title + a.view-all {
		font-size: 16px;
		font-weight: 700;
	}
	.content.main .list-container .video-list {
		max-width: 1400px;
		/*	width: 1400px;*/
	}
	.content.main .list-container .read-more {
		margin: 23px auto 110px;
	}
</style>