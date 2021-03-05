// ГЛАВНАЯ СТРАНИЦА ПРОЕКТА

<template>
	<!-- FIXME Переименовать названия классов после редизайна -->
	<div v-if="loadSuccess">
		<!-- Прототип сетки для редизайна -->

		<div class="container_mainPage">
			<div class="grid">
				<div class="plug-menu">
					<VerticalMenuSection />
				</div>
				<div class="plug-slider">
					<SliderSection :sectionData="BANNERS.BANNER" />
				</div>
				<div class="plug-news">
					<NewsCompactSection :newsData="NEWS_CAROUSEL.NEWS_ITEM" />
				</div>

				<div class="plug_group">
					<!-- Секция целей проекта -->
					<PurposesSection :compactTitlePurposes="titlePurposes" :sectionData="PROJECT_GOALS"/>

					<!-- Секция результатов исследования -->
					<ResultSection />
				</div>

				<div class="plug-calendar">
					<CalendarSection />
				</div>
			</div>
		</div>
		<!-- Секция направления исследований -->
		<DirectionOfResearchSection />

		<!--Секция консорциума -->
		<ConsortiumMainSection :sectionData="CONSORTIUM_TEAM" />

		<!-- NOTE Пока просто закомментировал на всякий -->

		<!-- Кнопка для перехода к странице новостей
		<router-link style="text-decoration: none" :to="{ name: 'news' }">
			<p class="newsSection__text">Все новости</p>
		</router-link> -->
	</div>

	<div v-else>
		<Preloader />
	</div>
</template>

<script>
	import testMixin from '../../utils/methodsMixin.js';
	import Preloader from './../unitComponents/CommonElements/Preloader';
	import VerticalMenuSection from './../unitComponents/VerticalMenuSection.vue';
	import NewsCompactSection from './../unitComponents/NewsCompactSection';

	import SliderSection from './../unitComponents/MainPageSlider.vue';
	import CalendarSection from './../unitComponents/CalendarSection';

	import PurposesSection from '../unitComponents/PurposesSection';
	import DirectionOfResearchSection from '../unitComponents/DirectionOfResearchSection';
	import ConsortiumMainSection from '../unitComponents/ConsortiumMainSection';
	import ResultSection from '../unitComponents/ResultSection';

	export default {
		name: 'MainBody',
		components: {
			ConsortiumMainSection,
			ResultSection,
			SliderSection,
			VerticalMenuSection,
			CalendarSection,
			NewsCompactSection,
			DirectionOfResearchSection,
			PurposesSection,
			Preloader,
		},
		mixins: [testMixin],

		async mounted() {
			await this.getModulesTest('MAIN_PAGE');
			setTimeout(() => {
				this.loadSuccess = true;
			}, 500);
		},

		data() {
			return {
				loadSuccess: false,
				sliderTestData: [1, 2, 3],
        titlePurposes: true,
			};
		},
	};
</script>

<style>
	/* Стили для сетки */
	.container_mainPage {
		width: 1437px;
		margin: auto;
	}

	.grid {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-bottom: 30px;
		margin-top: 30px;
	}

	[class^='column'] {
		width: 300px;
		height: fit-content;
	}

	.plug-menu {
		width: 345px;
	}

	.plug-slider {
		width: 710px;
	}

	.plug-news,
	.plug-calendar {
		width: 345px;
	}

	.plug_group {
		width: 1079px;
		height: auto !important;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		order: 0;
	}

	@media (max-width: 1650px) {
		.container_mainPage {
			width: 1200px;
		}

		.grid {
			margin: 20px auto;
		}

		.plug-menu {
			width: 285px;
		}
		/* Адаптив для блока слайдера */
		.plug-slider {
			width: 590px;
		}

		/* Адаптив для блока новостей */
		.plug-news {
			width: 285px;
			height: 590px;
			/* position: absolute; */
		}

		.plug-calendar {
			width: 895px;
		}

		.plug_group {
			order: 1;
			margin: auto;
			width: 100%;
		}
	}

	[class^='plug'] {
		padding-bottom: 20px;
	}

	button {
		cursor: pointer;
	}

	.newsSection__text {
		font-size: 15px;
		color: #3f7e77;
		text-decoration-line: underline;
		margin: 49px auto 97px auto;
		text-align: center;
		cursor: pointer;
	}

	.purposes {
		text-align: center;
		margin: auto;
		max-width: 1141px;
		align-items: center;
		padding: 97px 0 136px 0;
	}

	.purposes-items {
		display: flex;
		flex-wrap: wrap;
		margin: 114px -34px 0 -34px;
	}

	.direction-of-research {
		text-align: center;
		width: 100%;
		background: linear-gradient(0deg, rgba(63, 126, 119, 0.8), rgba(63, 126, 119, 0.8)), url('../../assets/image/background-dir.png');
		padding: 47px 0 40px 0;
	}

	.newsMain {
		text-align: center;
		max-width: 1141px;
		align-items: center;
		padding: 104px 0 97px 0;
		margin: auto;
	}

	.line {
		width: 35px;
		height: 1px;
		background: #3f7e77;
	}

	.newsMain-container {
		display: flex;
		margin-top: 98px;
	}

	.newsMain-container :hover {
		background-color: #f8f5e6;
	}

	.newsMain-container :hover .newsMain__btn {
		display: block;
		background-color: #3f7e77;
	}

	.newsMain__text {
		font-size: 15px;
		color: #3f7e77;
		margin-top: 49px;
		text-decoration-line: underline;
	}

	.consortiumMain {
		text-align: center;
		max-width: 1108px;
		align-items: center;
		padding: 92px 0 100px 0;
		margin: auto;
	}

	.consortium-container {
		display: flex;
		flex-wrap: wrap;
		margin: 100px -23px 0 -23px;
		justify-content: center;
	}

	.btn-consortium {
		width: 300px;
		height: 60px;
		background: #3f7e77;
		border-radius: 54px;
		margin: auto;
		font-family: 'Roboto';
		/* font-family: 'Gilroy-Bold'; */
		font-size: 24px;
		line-height: 29px;
		color: #f8f5e6;
		padding: 16px;
	}
</style>
