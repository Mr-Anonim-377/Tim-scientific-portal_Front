// ГЛАВНАЯ СТРАНИЦА ПРОЕКТА

<template>
	<!-- TODO Убрать лишние блоки -->
	<div v-if="loadSuccess">
		<!-- Проттотип сетки для редизайна -->

		<div class="container_mainPage">
			<div class="grid">
				<div class="plug-menu">
					Вертикальное меню
				</div>
				<div class="plug-slider">
					<!-- FIXME пока нет тестовых -->
					<SliderSection :urls="sliderTestData" />
				</div>
				<div class="plug-news">
					<NewsCompactSection :newsData="NEWS_CAROUSEL.NEWS_ITEM" />
				</div>

				<div class="plug_group">
					<!-- Секция целей проекта -->
					<PurposesSection :sectionData="PROJECT_GOALS" />

					<!-- Секция результатов исследования -->
					<ResultSection />
				</div>

				<div class="plug-calendar">
					Календарь событий
				</div>
			</div>
		</div>

		<!-- Баннер главной страницы-->
		<!-- <BannerPromoSection :sectionData="BANNER" /> -->

		<!-- Секция направления исследований -->
		<DirectionOfResearchSection />

		<!--Секция консорциума -->
		<ConsortiumMainSection :sectionData="CONSORTIUM_TEAM" />

		<!-- Секция новостей -->
		<!-- <NewsSection :newsData="NEWS_CAROUSEL.NEWS_ITEM.slice(0, 3)" /> -->

		<!-- Кнопка для перехода к странице новостей -->
		<router-link style="text-decoration: none" :to="{ name: 'news' }">
			<p class="newsSection__text">Все новости</p>
		</router-link>
	</div>

	<div v-else>
		<Preloader />
	</div>
</template>

<script>
	import testMixin from '../../utils/methodsMixin.js';
	import Preloader from './../unitComponents/CommonElements/Preloader';

	import NewsCompactSection from './../unitComponents/NewsCompactSection';

	import SliderSection from './../unitComponents/MainPageSlider.vue';

	import PurposesSection from '../unitComponents/PurposesSection';
	import DirectionOfResearchSection from '../unitComponents/DirectionOfResearchSection';
	// import NewsSection from '../unitComponents/NewsSection';
	import ConsortiumMainSection from '../unitComponents/ConsortiumMainSection';
	import ResultSection from '../unitComponents/ResultSection';
	// import BannerPromoSection from '../unitComponents/BannerPromoSection';

	export default {
		name: 'MainBody',
		components: {
			// BannerPromoSection,
			ConsortiumMainSection,
			ResultSection,
			SliderSection,
			// NewsSection,
			NewsCompactSection,
			DirectionOfResearchSection,
			PurposesSection,
			Preloader,
		},
		mixins: [testMixin],

		async mounted() {
			// FIXME пока нет тестовых
			// 92e65ed8-c79e-4535-aa4f-3dcb5f9ca14c

			// await this.getModulesTest('', '92e65ed8-c79e-4535-aa4f-3dcb5f9ca14c');

			await this.getModulesTest('MAIN_PAGE');
			setTimeout(() => {
				this.loadSuccess = true;
			}, 500);

			console.log(this.modules);
		},

		data() {
			return {
				loadSuccess: false,
				sliderTestData: [1, 2, 3],
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
		/* border: 1px dotted red; */
		/* height: 1000px; */

		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	[class^='column'] {
		/* background-color: blue; */
		width: 300px;
		/* height: 300px; */
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
		/* height: 728px; */
	}

	.plug_group {
		width: 1079px;
		height: auto !important;
	}

	/* TEMP */

	[class^='plug'] {
		/* width: 100%; */
		/* height: 500px; */
		margin-top: 20px;
		/* color: white; */
		/* background-color: black; */
		/* border: 5px dashed black; */
	}

	button {
		cursor: pointer;
	}

	.newsSection {
		height: 780px;
		/* overflow: scroll; */
	}

	.newsSection__text {
		font-size: 15px;
		color: #3f7e77;
		/*margin-top: 49px;*/
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
		background: linear-gradient(0deg, rgba(63, 126, 119, 0.8), rgba(63, 126, 119, 0.8)),
			url('../../assets/image/background-dir.png');
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
		font-weight: bold;
		font-size: 24px;
		line-height: 29px;
		color: #f8f5e6;
		padding: 16px;
	}
</style>
