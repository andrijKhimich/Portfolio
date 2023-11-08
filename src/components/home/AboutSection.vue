<template>
	<section class="section section-about">
		<div class="word js-about-word">
			<p>About</p>
		</div>
		<div class="abstract-lines js-about-lines">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="container_lg">
			<div class="about-row">
				<div class="about-content js-show-about">
					<div class="section-title">
						<h2 class="title-2">About</h2>
					</div>
					<p>
						Hello, my name is Andrii Khimich, I am a front-end developer from
						Ukraine.
					</p>
					<p>
						I have more than 5 years of web development experience. In my work,
						I always try to provide the latest technologies and features for
						creating modern web interfaces. Usually, I work with Gulp, SASS, and
						Java-Script, so my code is always clean and minimized. Open to new
						offers and like to create something new in my daily work.
					</p>
				</div>
				<div class="about-img js-show-about-img">
					<img :src="image" :alt="alt" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import image from '/img/andrew.jpg';
	import gsap from 'gsap/gsap-core';
	import ScrollTrigger from 'gsap/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);

	export default {
		data: function () {
			return {
				image: image,
				alt: 'Andrew Khimich',
			};
		},
		mounted() {
			gsap.to('.js-show-about', {
				scrollTrigger: {
					trigger: '.js-show-about',
					markers: false,
					start: '-100%, 50%',
					end: '-100%, 50%',
					scrub: 2,
					ease: 'power2.in',
				},
				x: 0,
				opacity: 1,
			});
			gsap.to('.js-show-about-img', {
				scrollTrigger: {
					trigger: '.js-show-about-img',
					markers: false,
					start: '0, 50%',
					end: '0, 50%',
					scrub: 1,
					ease: 'power2.in',
				},
				x: 0,
				rotateX: 0,
				rotateY: 0,
				rotateZ: 0,
				opacity: 1,
			});
			gsap.to('.js-about-word', {
				scrollTrigger: {
					trigger: '.js-about-word',
					markers: false,
					start: '-200%, 50%',
					end: '200%, 50%',
					scrub: 5,
					ease: 'none',
				},
				x: -100 + '%',
			});
			gsap.to('.js-about-lines span', {
				scrollTrigger: {
					trigger: '.js-about-lines',
					markers: false,
					start: '-150%, 30%',
					end: '-150%, 30%',
					scrub: 3,
				},
				width: 100 + '%',
				opacity: 1,
			});
		},
	};
</script>

<style lang="scss">
	@import '../../assets/variables';
	@import '../../assets/mixins';
	@import '../../assets/fonts';
	.section-about {
		background: $gray;
		padding: 180px 0;
		.abstract-lines span {
			opacity: 0;
			position: relative;
			width: 0;
			left: 100%;
			transform: translate(0, 0) rotate(132deg);
			transform-origin: left;
		}

		@include d(768px) {
			padding: 100px 0;
		}

		.abstract-lines {
			top: 0;
			left: 0;

			@include d(768px) {
				right: 0;
				left: auto;
				top: 20px;
			}

			span {
				background-color: $black;
			}
		}

		.title-2 {
			color: $black;
			position: relative;
			display: inline-block;

			&::before {
				content: '';
				width: 100px;
				height: 1px;
				position: absolute;
				bottom: 0;
				left: 95%;
				background-color: $black;

				@include d(1299px) {
					bottom: 0;
				}

				@include d(575px) {
					width: 60px;
					left: 90%;
				}
			}
		}

		p {
			text-align: justify;
			&:not(:last-child) {
				margin-bottom: 20px;
			}
		}

		.word {
			@include d(992px) {
				right: -100px;
			}

			@include d(768px) {
				right: -300px;
			}
		}
	}

	.about {
		&-row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100%;
			perspective: 500px;
			@include d(768px) {
				flex-direction: column-reverse;
				justify-content: center;
			}
		}

		&-img {
			width: 40%;
			position: relative;
			overflow: hidden;

			img {
				position: relative;
				object-fit: cover;
			}
			@include d(768px) {
				border-radius: 50%;
				overflow: hidden;
				margin-bottom: 40px;
				width: 60%;
			}

			@include d(575) {
				width: 100%;
			}
		}

		&-content {
			width: 60%;
			padding-right: 60px;
			opacity: 0;
			@include d(768px) {
				width: 90%;
				margin: 0 auto;
				padding-right: 0;
			}

			@include d(575px) {
				width: 100%;
			}
		}
	}

	.js-show-about {
		transform: translate(-50px, 0);
	}

	.js-show-about-img {
		transform-style: preserve-3d;
		transform: rotate3d(1, -1, 1, -20deg);
		opacity: 0;
	}
	.js-about-word {
		transform: translate(100%, 0);
	}
</style>
