// СЛАЙДЕР С ГЛАВНОЙ СТРАНИЦЫ

<template>
	<section>
		<!-- <div class="container"> -->
		<div class="news-slider">
			<div class="news-slider__view">
				<div class="news-slider__slide">
					<h3></h3>
					<a href="#" target="_blank"></a>
				</div>
				<div class="news-slider__slide">
					<h3></h3>
					<a href="#" target="_blank"></a>
				</div>
				<div class="news-slider__slide">
					<h3></h3>
					<a href="#" target="_blank"></a>
				</div>
			</div>

			<div class="news-slider__controls">
				<div class="news-slider__arrow"></div>

				<div class="news-slider__dots">
					<div class="news-slider__dot" v-for="slide in sliderData" :key="slide"></div>
				</div>

				<div class="news-slider__arrow"></div>
			</div>
		</div>
	</section>
</template>

<script>
	import JQuery from 'jquery';
	let $ = JQuery;

	export default {
		// FIXME перевести на скелетон
		name: 'NewsSliderSection',
		props: {
			sectionData: [],
		},
		data() {
			return {
				i: 0,
				sliderDataIndex: 0,
				positions: {
					circle1: {
						transform: 'translatex(0)',
					},
					circle2: {
						transform: 'translatex(0)',
					},
					circle3: {
						transform: 'translatex(0)',
					},
				},

				sliderData: [],
				slideIntervalID: Number,
			};
		},

		watch: {
			$route: function() {
				/**
				 * Очищаем интервал при переходе на другую страницу
				 */
				clearInterval(window.sliderAutoClickInterval);
			},
		},

		methods: {
			getDOM() {
				this.slider = $('.news-slider__view');
				this.circles = $('.news-slider__slide');
				this.dots = $('.news-slider__dot');
			},

			moveCircle(index, position, dinamicPosition) {
				if (!dinamicPosition) {
					this.circles.eq(index).css('transform', this.positions[position].transform);
				} else {
					this.circles.eq(index).css('transform', $('.'));
				}
			},

			changePosition(i, arr, isNext) {
				// Индексы соседних кругов
				let i2, i3;

				// Получаем корректные индексы соседних кругов
				switch (arr.length - (i + 3)) {
					case 0: {
						i2 = i + 1;
						i3 = i + 2;
						break;
					}

					case -1: {
						i2 = i + 1;
						i3 = 0;
						break;
					}

					case -2: {
						i2 = 0;
						i3 = 1;
						break;
					}
				}

				// Перемещение элементов в зависимости от направления
				if (isNext) {
					this.circles.eq(i).css('z-index', 1);
					this.moveCircle(i, 'circle2');

					this.circles.eq(i2).css('z-index', 1);
					this.moveCircle(i2, 'circle3');

					this.circles.eq(i3).css('z-index', 0);
					this.moveCircle(i3, 'circle1');

					this.sliderDataIndex = this.sliderDataIndex === this.sliderData.length - 1 ? 0 : this.sliderDataIndex + 1;

					let nextImageIndex = this.sliderDataIndex === this.sliderData.length - 1 ? 0 : this.sliderDataIndex + 1;

					// Определяем следующий
					setTimeout(() => {
						this.circles
							.eq(i3)
							.css('background-image', `url(${this.sliderData[nextImageIndex].url})`)
							.children('h3')
							.text(this.sliderData[nextImageIndex].title)
							.next('a')
							.attr('href', this.sliderData[nextImageIndex].pageLink)
							.css('display', this.sliderData[nextImageIndex].pageLink === '' ? 'none' : 'block');
					}, 1000);
				} else if (!isNext) {
					this.circles.eq(i).css('z-index', 0);
					this.moveCircle(i, 'circle3');

					this.circles.eq(i2).css('z-index', 1);
					this.moveCircle(i2, 'circle1');

					this.circles.eq(i3).css('z-index', 1);
					this.moveCircle(i3, 'circle2');

					this.sliderDataIndex = this.sliderDataIndex === 0 ? this.sliderData.length - 1 : this.sliderDataIndex - 1;

					let prevImageIndex = this.sliderDataIndex === 0 ? this.sliderData.length - 1 : this.sliderDataIndex - 1;

					// Определяем следующий
					setTimeout(() => {
						this.circles
							.eq(i)
							.css('background-image', `url(${this.sliderData[prevImageIndex].url})`)
							.children('h3')
							.text(this.sliderData[prevImageIndex].title)
							.next('a')
							.attr('href', this.sliderData[prevImageIndex].pageLink)
							.css('display', this.sliderData[prevImageIndex].pageLink === '' ? 'none' : 'block');
					}, 1000);
				}
			},

			changeTransformValue() {
				let transformValue = Number;
				if (window.innerWidth <= 1650) {
					transformValue = 590;
				} else {
					transformValue = 710;
				}

				this.positions.circle1.transform = `translatex(${transformValue}px)`;
				this.positions.circle3.transform = `translatex(-${transformValue}px)`;
			},
		},

		async created() {
			for (let i = 0; i < this.sectionData.length; i++) {
				this.sliderData.push({
					url: this.sectionData[i].image,
					title: this.sectionData[i].title,
					pageLink: this.sectionData[i].pageLink ? this.sectionData[i].pageLink : '',
				});
			}

			// Получаем размер окна для translate
			this.changeTransformValue();
			// Следим за изменением размера окна для корректной работы translate
			window.onresize = () => {
				this.changeTransformValue();
			};
		},

		async mounted() {
			// Получаем dom элементы
			this.getDOM();

			/**
			 * Вешаем хэндлер на ссылки в слайдере для контроля над видимостью <a> блока
			 */

			$('.news-slider__slide:nth-child(3)')
				.css('background-image', `url(${this.sliderData[this.sliderData.length - 1].url}`)
				.children('h3')
				.val(1);

			// Начальное положение картинок, текста и ссылок
			$('.news-slider__slide:nth-child(2)')
				.css('background-image', `url(${this.sliderData[this.sliderDataIndex].url})`)
				.children('h3')
				.text(this.sliderData[this.sliderDataIndex].title)
				.next('a')
				.attr('href', this.sliderData[this.sliderDataIndex].pageLink)
				.css('display', this.sliderData[this.sliderDataIndex].pageLink === '' ? 'none' : 'block');

			$('.news-slider__slide:nth-child(1)')
				.css('background-image', `url(${this.sliderData[this.sliderDataIndex + 1].url}`)
				.children('h3')
				.text(this.sliderData[this.sliderDataIndex + 1].title)
				.next('a')
				.attr('href', this.sliderData[this.sliderDataIndex + 1].pageLink)
				.css('display', this.sliderData[this.sliderDataIndex + 1].pageLink === '' ? 'none' : 'block');
			$('.news-slider__slide:nth-child(3)')
				.css('background-image', `url(${this.sliderData[this.sliderData.length - 1].url}`)
				.children('h3')
				.text(this.sliderData[this.sliderData.length - 1].title)
				.next('a')
				.attr('href', this.sliderData[this.sliderData.length - 1].pageLink)
				.css('display', this.sliderData[this.sliderData.length - 1].pageLink === '' ? 'none' : 'block');
			$('.news-slider__dot')
				.eq(this.sliderDataIndex)
				.addClass('news-slider__dot_active')
				.eq(this.sliderDataIndex);

			// Вешаем события на стрелки
			$('.news-slider__arrow')
				.eq(0)
				.on('click', () => {
					// Отменяем возможность нажатия
					$('.news-slider__arrow')
						.eq(0)
						.css('pointer-events', 'none');

					// Возвращаем возможность нажатия через 1с
					setTimeout(() => {
						$('.news-slider__arrow')
							.eq(0)
							.css('pointer-events', 'auto');
					}, 1000);

					//Движение элементов верстки
					let isNext = false;

					$('.news-slider__dot')
						.eq(this.sliderDataIndex)
						.removeClass('news-slider__dot_active');

					this.changePosition(this.i, this.circles, isNext);

					//Меняем индекс слайдов (индекс для верстки)
					this.i = this.i === 2 ? 0 : this.i + 1;

					$('.news-slider__dot')
						.eq(this.sliderDataIndex)
						.removeClass('news-slider__dot_active');

					$('.news-slider__dot')
						.eq(this.sliderDataIndex)
						.addClass('news-slider__dot_active');
				});

			$('.news-slider__arrow')
				.eq(1)
				.on('click', () => {
					$('.news-slider__arrow')
						.eq(1)
						.css('pointer-events', 'none');
					setTimeout(() => {
						$('.news-slider__arrow')
							.eq(1)
							.css('pointer-events', 'auto');
					}, 1000);

					let isNext = true;

					$('.news-slider__dot')
						.eq(this.sliderDataIndex)
						.removeClass('news-slider__dot_active');

					this.changePosition(this.i, this.circles, isNext);

					this.i = this.i === 0 ? this.circles.length - 1 : this.i - 1;

					$('.news-slider__dot')
						.eq(this.sliderDataIndex)
						.addClass('news-slider__dot_active');
				});

			/**
			 * Автопереключение слайдов
			 */
			let $arrow = $('.news-slider__arrow').eq(1);

			/**
			 * Функция устанавливает новый интервал и хранит его id в window.slideAutoClickInterval()
			 */
			const createInterval = () => {
				window.sliderAutoClickInterval = setInterval(() => {
					if (this.$route.name !== 'Main') {
						clearInterval(window.sliderAutoClickInterval);
					}
					$($arrow).trigger('click');
				}, 4000);
			};

			createInterval();

			/**
			 * Вешаем слушатели на события мыши при наведении мыши на слайдер
			 */
			$('.news-slider__view').on('mouseenter', () => {
				clearInterval(window.sliderAutoClickInterval);
			});

			$('.news-slider__view').on('mouseleave', () => {
				this.isArrowClicked = false;
				createInterval();
			});

			/**
			 * Так же обрабатываем события мыши для контролов, т.к. они за слайдером
			 */
			$('.news-slider__controls ').on('mouseenter', () => {
				clearInterval(window.sliderAutoClickInterval);
			});

			$('.news-slider__controls').on('mouseleave', () => {
				this.isArrowClicked = false;
				createInterval();
			});
		},
	};
</script>

<style scoped>
	.news-slider {
		width: 710px;
		height: 710px;

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;
	}

	.news-slider__view {
		width: inherit;
		height: inherit;
		overflow: hidden;
		position: relative;
	}

	.news-slider__controls {
		height: 25px;
		position: absolute;
		/* background-color: white; */
		bottom: -50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.news-slider__arrow {
		cursor: pointer !important;

		background-image: url('../../assets/image/slider-arrow-left.svg');
		width: 10px;
		height: 25px;
		background-size: cover;
		cursor: pointer !important;
		z-index: 10;
	}

	.news-slider__arrow:last-child {
		transform: rotate(180deg);
	}

	.news-slider__slide {
		width: inherit;
		height: inherit;
		background-color: #eff0cc;
		position: absolute;
		transition: transform 1s;

		display: flex;
		align-items: flex-end;
		padding: 35px 30px;

		font-size: 24px;

		background-size: cover;
		background-position: center;
		color: #f8f5e6;
	}
	.news-slider__slide a {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.news-slider__slide::before {
		content: '';
		width: inherit;
		height: inherit;
		background: linear-gradient(180deg, rgba(51, 51, 51, 0) 60.49%, rgba(51, 51, 51, 0.8) 100%);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.news-slider__slide h3 {
		z-index: 1488888;
	}

	.news-slider .news-slider__slide:nth-child(1) {
		transform: translatex(710px);
		background-color: #cdf0cc;
	}

	.news-slider__slide:nth-child(3) {
		transform: translatex(-710px);
		background-color: #ccdff0;
		z-index: 0;
	}

	.news-slider__dots {
		top: -35px;
		z-index: 10;
		z-index: 10;
		display: flex;
		padding: 0 30px;
		justify-content: center;
		display: flex;
		justify-content: center;
	}

	.news-slider__dot {
		width: 15px;
		height: 15px;
		border-radius: 100%;
		background-color: white;
		border: 2px solid #3f7e77;
		display: inline-block;
		margin: 0 7.5px;
	}

	.news-slider__dot_active {
		background-color: #3f7e77;
	}

	@media (max-width: 1650px) {
		.news-slider {
			width: 590px;
			height: 590px;
		}

		.news-slider__controls {
			bottom: 13px;
		}

		.news-slider__dot {
			border: 2px solid white;
			background-color: transparent;
		}

		.news-slider__dot_active {
			background-color: #3f7e77;
		}

		.news-slider__arrow {
			background-image: url('../../assets/image/arrowWhite.svg');
		}

		.news-slider .news-slider__slide:nth-child(1) {
			transform: translatex(590px);
			background-color: #cdf0cc;
		}

		.news-slider__slide:nth-child(3) {
			transform: translatex(-590px);
			background-color: #ccdff0;
			z-index: 0;
		}
	}
</style>
