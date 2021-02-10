<template>
	<section class="calendar">
		<h1>Календарь событий</h1>
		<div class="calendar-container">
			<div class="calendar-years">
				<div class="calendar-slider__arrow"></div>
				<h2>Июль, 2021</h2>
				<div class="calendar-slider__arrow"></div>
			</div>

			<div class="calendar-item">
				<h3>12 июля</h3>
				<p>
					12-15 июля 2021 года в рамках НЦМУ будет проходить конференция BIATA-2021
					(BIOINFORMATICS: FROM ALGORITHMS TO APPLICATIONS)
				</p>
			</div>
		</div>
		<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
			<p class="calendar-details">Все события этого месяца</p>
		</router-link>
	</section>
</template>

<script>
	export default {
		name: 'CalendarSection',
		data() {
			return {
				titleCalendar: 'Календарь',
			};
		},
	};
</script>

<style scoped>
	h1,
	h3,
	p {
		color: #f8f5e6;
	}
	h1 {
		/* font-family: 'Gilroy-Bold'; */
		font-family: Roboto;
		font-size: 26px;
		line-height: 31px;
		text-align: center;
		margin: 0;
	}

	.calendar {
		width: 345px;
		height: 704px;
		background-image: url('../../assets/image/calendarBackground.png');
		background-size: cover;
		padding: 23px 19px 30px 20px;
	}
	.calendar-container {
		height: 456px;
		overflow: hidden;
		margin: 20px auto 0 auto;
	}
	.calendar-years {
		display: flex;
	}
	h2 {
		font-family: Roboto;
		/* font-family: 'Gilroy-Bold'; */
		font-size: 20px;
		line-height: 132.19%;
		color: #74be97;
		margin: 0 9px;
		position: relative;
		letter-spacing: 1px;
	}
	.calendar-years h2:before {
		content: '';
		position: absolute;
		width: 323px;
		height: 1px;
		background: #606a80;
		left: -42px;
		top: 36px;
	}
	.calendar-slider__arrow {
		background-image: url('../../assets/image/slider-arrow-left.svg');
		width: 7px;
		height: 11px;
		background-size: cover;
		cursor: pointer;
		margin: 6px 0 0 30px;
	}
	.calendar-slider__arrow:last-child {
		transform: rotate(180deg);
		margin: 6px 0 0 0;
	}

	h3 {
		font-family: Roboto;
		/* font-family: 'Gilroy-Bold'; */
		font-size: 14px;
		line-height: 19px;
		border-bottom: 1px solid;
		width: fit-content;
		margin: 53px 0 20px 0;
		letter-spacing: 0.04em;
	}
	p {
		font-size: 14px;
		line-height: 16px;
		letter-spacing: 0.03em;
		/* height: 45px; */
		overflow: hidden;
	}
	.calendar-details {
		margin: 127px auto 0 auto;
		letter-spacing: 0.03em;
		border-bottom: 1px solid;
		width: fit-content;
		height: 16px;
		cursor: pointer;
	}

	/* @media screen { */
	@media (max-width: 1650px) {
		.calendar-container {
			height: auto;
		}

		.calendar {
			width: 895px;
			height: auto;
			position: relative;
			/* width: 345px; */
			/* height: 704px; */
			background-image: url(/img/calendarBackground.40f216ed.png);
			background-size: 45%;
			background-repeat: no-repeat;
			background-color: #4f5666;
			background-position: right 0 bottom 0;
			padding: 23px 19px 30px 20px;
		}

		.calendar-details {
			margin: 0 auto;
		}

		.calendar > h1 {
			border-bottom: 1px solid #606a80;
			padding-bottom: 20px;
		}

		.calendar-item {
			width: 200px;
		}

		.calendar-item h3 {
			margin: 0;
		}

		.calendar-years {
			display: flex;
			justify-content: center;
			position: absolute;
			right: 16px;
			font-size: 20px;
			top: 25px;
		}

		.calendar-years h2:before {
			content: '';
			display: none;
		}
	}
</style>
