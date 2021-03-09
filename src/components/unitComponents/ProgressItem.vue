<template>
	<div class="dynamics-block">
		<div class="dynamics-block-wrapper">
			<div class="dynamics-block__title">
				<TitleSection :compactTitle="true" :title="sectionData.title" :headerVisible="true" :styleTitle="styleTitleDynamics.style" />
			</div>
			<div class="dynamics-block-progressBar">
				<!-- Начальное значение прогресс бара -->
				<span class="dynamics-block-progressBar__minValue">
					0
				</span>

				<!-- Прогресс-бар -->
				<div class="dynamics-block-progressBar__wraper">
					<!-- Добавляем 5% к ширине для более корректного отображдения -->
					<div class="dynamics-block-progressBar__progressLine" :style="{ width: +getProgressPercent() + 5 + '%' }"></div>
					<!-- Текущее значение прогресс бара -->
					<div class="dynamics-block-progressBar__currentValue">
						{{ sectionData.dinamicsPercent }}
					</div>
				</div>

				<!-- Максимальное значение прогресс бара -->
				<span class="dynamics-block-progressBar__maxValue">
					{{ sectionData.totalPercent }}
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	import TitleSection from '../unitComponents/TitleSection';

	export default {
		name: 'ProgressItem',
		components: {
			TitleSection,
		},
		props: {
			sectionData: {},
		},

		data() {
			return {
				/**
				 * Стили
				 */
				styleTitleDynamics: {
					style: ['font-size: 20px; letter-spacing: 0.01px; color: #4D5668'],
				},
			};
		},

		methods: {
			getProgressPercent() {
				/**
				 * Делим totalPercent на 100 и получаем 1 процент
				 * Далее делим dynamicPercent на 1 процент и получаем кол-во процентов
				 * Округляем в большую сторону
				 */

				return Math.ceil(this.sectionData.dinamicsPercent / (this.sectionData.totalPercent / 100));
			},
		},

		mounted() {
			console.log(this.getProgressPercent());
		},
	};
</script>

<style scoped>
	.dynamics-block-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 1200px;
	}

	.dynamics-block-progressBar {
		position: relative;
	}

	.dynamics-block-progressBar__minValue {
		display: block;
		content: '0%';
		width: max-content;
		position: absolute;
		top: 55px;
		z-index: 1;
	}
	.dynamics-block-progressBar__maxValue {
		display: block;
		content: '100%';
		width: max-content;
		position: absolute;
		top: 55px;
		right: 47px;
		z-index: 1;
	}

	.dynamics-block-progressBar__currentValue {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		height: max-content;
		width: max-content;
		color: #f8f5e6;
		font-size: 20px;
		font-weight: 600;
	}

	.dynamics-block {
		display: flex;
		border-bottom: 2px solid #c4c4c4;
		padding: 50px 0 75px;
		flex-wrap: wrap;
	}
	.dynamics-block:last-child {
		border: none;
	}

	.dynamics-block-progressBar__wraper {
		width: 742px;
		height: 50px;
		background: rgba(77, 86, 104, 0.2);
		border: 1px solid #4d5668;
		box-sizing: border-box;
		border-radius: 10px;
		margin-left: auto;
		position: relative;
		overflow: hidden;
		margin-right: 47px;
	}

	.dynamics-block-progressBar__progressLine {
		height: 100%;
		/* width: 70%; */
		border-right: 28px solid transparent;
		border-bottom: 50px solid #3f7e77;
	}
</style>
