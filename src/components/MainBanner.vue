<template>
	<swiper :options="swiperOption" ref="mainSwiper" class="main-banner swiper-container" v-bind:class="{ loaded: isLoaded }">
		<swiper-slide class="swiper-slide">
			<a href="video_detail.php?idx=448">
				<figure class="box-content">
					<div class="img box-bg">
						<img src="../assets/main_banner_01.png" alt="">
					</div>
					<figcaption>
						<p class="brand">CANNES 2017 Grand Prix</p>
						<p class="title">we're the superhumans</p>
						<div class="link">
							<svg class="progress-current" data-mouse-type="text" data-text="view">
								<circle class="prg-circle" cx="30" cy="30" r="27.5" fill="none" />
								<polygon points="23,19 41,29 23,39"
										 style="fill:#f7dd30;"/>
							</svg>
						</div>
					</figcaption>
				</figure>
			</a>
		</swiper-slide>
		<swiper-slide class="swiper-slide _02">
			<a href="video_detail.php?idx=438">
				<figure class="box-content">
					<div class="img box-bg">
						<img src="../assets/main_banner_02.png" alt="">
					</div>
					<figcaption>
						<p class="brand">NEWYORK 2017 BEST OF SHOW</p>
						<p class="title">MEET GRAHAM</p>
						<div class="link">
							<svg class="progress-current" data-mouse-type="text" data-text="view">
								<circle class="prg-circle" cx="30" cy="30" r="27.5" fill="none" />
								<polygon points="23,19 41,29 23,39"
										 style="fill:#f7dd30;"/>
							</svg>
						</div>
					</figcaption>
				</figure>
			</a>
		</swiper-slide>
		<swiper-slide class="swiper-slide">
			<a href="video_detail.php?idx=823">
				<figure class="box-content">
					<div class="img box-bg">
						<img src="../assets/main_banner_03.png" alt="">
					</div>
					<figcaption>
						<p class="brand">CLIO 2017 Grand</p>
						<p class="title">fearless girl</p>
						<div class="link">
							<svg class="progress-current" data-mouse-type="text" data-text="view">
								<circle class="prg-circle" cx="30" cy="30" r="27.5" fill="none" />
								<polygon points="23,19 41,29 23,39"
										 style="fill:#f7dd30;"/>
							</svg>
						</div>
					</figcaption>
				</figure>
			</a>
		</swiper-slide>
		<div class="number-pagination">
			<span class="current">1</span>
			<span class="total">3</span>
		</div>
		<div id="main-banner-pagination" class="main-banner-pagination"></div>
	</swiper>
</template>


<script>
//	import Swiper from 'swiper'
//	Swiper.use({
//		name: 'carrousel',
//		params: {
//			pluginSwitch: false,
//		},
//		on: {
//			init() {
//				if (!this.params.pluginSwitch) return
//				console.log('init')
//			},
//		}
//	})
	export default {
		name: 'main-banner',
		data() {
			return {
				isLoaded: false,
				swiperOption: {
					direction: 'horizontal',
					effect: 'fade',
					speed: 650,
					loop: true,
					autoplay: {
						delay: 4000	
					},
					pagination: {
						el: '.main-banner-pagination',
						type: 'progressbar',
					},
					on: {
						init: function() {
							var el = document.querySelector('.main-banner');
							el.classList.add('loaded');
						},
						slideChange: function() {
							var currentIndex = document.querySelector('.current');
							currentIndex.innerText = this.realIndex+1;

						},
						slideChangeTransitionStart: function() {
							var el = document.querySelector('.main-banner');
							el.classList.remove('loaded');
						},
						slideChangeTransitionEnd: function() {
							var el = document.querySelector('.main-banner');
							el.classList.add('loaded');
							
						}
					}
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.mainSwiper.swiper
			}
		},
		mounted() {
			// current swiper instance
//			console.log('this is current swiper instance object', this.swiper)
//			this.swiper.slideTo(3, 1000, false)
		}
	}
</script>


<style>
	.main-banner .box-content {
		position: relative;
	}
	.main-banner .box-content figcaption {
		display: block;
		position: absolute;
		top: 50%;
		/*	top: 31%;*/
		left: 50%;
		width: 100%;
		z-index: 3;
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.main-banner .box-content figcaption .brand {
		font-size: 20px;
		color: #f7dd30;
		letter-spacing: -0.5px;
		font-weight: 800;
	}
	.main-banner .box-content figcaption .title {
		font-size: 50px;
		color: #ffffff;
		font-weight: 800;
		margin: 15px auto 53px;
		text-transform: uppercase;
	}
	.main-banner .swiper-slide._02 figcaption {
		margin-left: 13%;
		display: inline-block;
		width: auto;
		text-align: left;
	}
	.main-banner .swiper-slide._02 .box-content .link span.view {
		margin-left: 11px;
	}
	/*
	.main-banner .box-content figcaption .summary {
	font-size: 28px;
	color: #ffffff;
	font-weight: 300;
	}
	*/
	.main-banner a .box-bg img {
		position: relative;
		transition: all 0.3s ease-in-out;
		z-index: 1;
	}
	.main-banner a:hover .box-bg img {
		opacity: 0.9;
	}
	.main-banner .box-bg {
		position: relative;
	}
	.main-banner .box-bg:before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000000;
		z-index: 0;
	}
	.main-banner .box-content .link {
		display: block;
		/*
		position: absolute;
		left: 50%;
		bottom: 22.3%;
		transform: translate(-50%, 0);
		*/
		margin: 0 auto ;
		color: #ffffff;
		font-size: 13px;
		font-weight: 300;
		z-index: 1;
		text-align: center;
	}
	.main-banner .box-content .link .progress-current {
		display: inline-block;
		width: 60px;
		height: 60px;
	}
	.progress-current .prg-circle {
		stroke-dasharray: 175;
		stroke-dashoffset: 175;
		stroke-width: 2px;
		stroke: #ffffff;
	}
	.loaded .progress-current .prg-circle {
		transition: stroke-dashoffset 4s linear;
		stroke-dashoffset: 0;
	}
	.main-banner .box-content .link span.view {
		display: block;
		margin-top: 14px;
		color: #ffffff;
	}
	#main-banner-pagination {
		position: absolute;
		bottom: 72px;
		left: 50%;
		width: 120px;
		/*	text-align: right;*/
		z-index: 4;
		font-size: 0;
		transform: translateX(-50%);
	}
</style>