<template>
	<div class="list-container best-area">
		<div class="title-area">
			<h2 class="list-title">BEST</h2>
			<a href="best_list.php" class="view-all">전체보기</a>
		</div>
		<div class="video-list">
			<swiper :options="swiperOption" ref="bestSwiper" class="swiper-container best-slider">
				<swiper-slide>
					<div class="video">
						<a href="#">
							<figure>
								<div class="thumbnail box-bg" style="background: url(../src/assets/main_slide_thumb.jpg) center no-repeat; background-size: cover; padding-bottom: 52.92%;">
								</div>
								<figcaption>
									<span class="brand">[UNICEF]</span>
									<span class="title">Furniture That Hides From Hurting copy 4</span>
									<span class="icon-wrap">
										<span class="play">
											<i class="icon"></i>
											<span class="cnt">4</span>
										</span>
										<span class="comment">
											<i class="icon"></i>
											<span class="cnt">0</span>
										</span>
										<span class="like">
											<i class="icon"></i>
											<span class="cnt">2</span>
										</span>
										<span class="collect">
											<i class="icon"></i>
											<span class="cnt">2</span>
										</span>
									</span>
								</figcaption>
							</figure>
						</a>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="video">
						<a href="#">
							<figure>
								<div class="thumbnail box-bg" style="background: url(../src/assets/main_slide_thumb.jpg) center no-repeat; background-size: cover; padding-bottom: 52.92%;"></div>
								<figcaption>
									<span class="brand">[UNICEF]</span>
									<span class="title">Furniture That Hides From Hurting copy 4</span>
									<span class="icon-wrap">
										<span class="play">
											<i class="icon"></i>
											<span class="cnt">4</span>
										</span>
										<span class="comment">
											<i class="icon"></i>
											<span class="cnt">0</span>
										</span>
										<span class="like">
											<i class="icon"></i>
											<span class="cnt">2</span>
										</span>
										<span class="collect">
											<i class="icon"></i>
											<span class="cnt">2</span>
										</span>
									</span>
								</figcaption>
							</figure>
						</a>
					</div>
				</swiper-slide>
				<swiper-slide>
					<div class="video">
						<a href="#">
							<figure>
								<div class="thumbnail box-bg" style="background: url(../src/assets/main_slide_thumb.jpg) center no-repeat; background-size: cover; padding-bottom: 52.92%;">
								</div>
								<figcaption>
									<span class="brand">[UNICEF]</span>
									<span class="title">Furniture That Hides From Hurting copy 4</span>
									<span class="icon-wrap">
										<span class="play">
											<i class="icon"></i>
											<span class="cnt">4</span>
										</span>
										<span class="comment">
											<i class="icon"></i>
											<span class="cnt">0</span>
										</span>
										<span class="like">
											<i class="icon"></i>
											<span class="cnt">2</span>
										</span>
										<span class="collect">
											<i class="icon"></i>
											<span class="cnt">2</span>
										</span>
									</span>
								</figcaption>
							</figure>
						</a>
					</div>			
				</swiper-slide>
				<!-- Add Arrows -->
				<div class="button-next" data-mouse-type="ripple" slot="button-next"></div>
				<div class="button-prev" data-mouse-type="ripple" slot="button-prev"></div>
			</swiper>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'best-banner',
		data() {
			return {
				swiperOption: {
					// Optional parameters
					direction: 'horizontal',
					loop: true,
					slidesPerView: 3,
					slidesPerGroup: 3,
					loopFillGroupWithBlank: true,
					spaceBetween: 30,
					touchAngle: 75,
					navigation: {
						nextEl: '.button-next',
						prevEl: '.button-prev',
					},
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.bestSwiper.swiper
			}
		},
		mounted() {
		}
	}
</script>