// Компактная версия секции новостей для главной страницы

<template>
	<section class="newsSection">
		<TitleSection compactTitle="true" :headerVisible="visibleNews" :title="this.titleNews" />
		<div class="newsSection-container">
			<div class="news-item" v-for="NEWS_ITEM in newsData" :key="NEWS_ITEM">
				<router-link
					v-if="
						NEWS_ITEM.date || NEWS_ITEM.title || NEWS_ITEM.image || NEWS_ITEM._pageLink
					"
					style="text-decoration: none"
					:to="{ path: `/newsItem/${NEWS_ITEM._pageLink}` }"
				>
					<div class="news-item-header">
						<div class="news-item-title__date">
							<!-- v-if используется чтобы избежать 
							ошибки при вызове методов 
							форматирования пока не прогрузились данные -->
							<h3 v-if="NEWS_ITEM.date" class="news-item__years">
								{{
									NEWS_ITEM.date
										.split('.')
										.slice(0, 2)
										.join('/')
								}}
							</h3>
						</div>

						<div class="news-item-title">
							<h3>{{ NEWS_ITEM.title }}</h3>
						</div>
					</div>

					<div class="news-item-img">
						<img :src="NEWS_ITEM.image" />
					</div>
				</router-link>
			</div>
		</div>
	</section>
</template>

<script>
	import TitleSection from '../unitComponents/TitleSection';

	export default {
		name: 'NewsMain',
		components: {
			TitleSection,
		},
		props: {
			newsData: {},
			listNews: {},
		},
		data() {
			return {
				modifiers: {
					btn: [
						'width: 170px; height: 35px; font-size: 14px; line-height: 17px; padding: 10px;',
					],
				},
				titleNews: 'Новости программы',
				visibleNews: true,
			};
		},
	};
</script>

<style scoped>
	/*Новости*/
	.newsSection {
		text-align: center;
		max-width: 1141px;
		align-items: center;
		overflow: hidden;
		padding: 10px 0;
		background-color: #f8f5e6;
		overflow: hidden;
	}

	.newsSection-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 12px 0;
		height: 710px;
		overflow: scroll;
	}

	.news-item {
		width: 300px;
		margin: 0 10px 25px 10px;
	}

	.news-item img {
		width: 300px;
		height: 200px;
	}

	p,
	h3 {
		font-size: 14px;
		font-weight: bold;
		color: #4d5668;
		line-height: 109.19%;
	}

	/*Стили года и линий*/
	.news-item__years {
		position: relative;
	}

	.news-item-title__date {
		position: relative;
		display: flex;
		align-items: center;
	}

	.news-item-title__date::after {
		content: '';
		display: inline-block;
		width: 1px;
		height: 21px;
		background-color: #3f7e77;
		margin: 0 20px;
		right: 0;
	}

	.news-item-header {
		display: flex;
		align-items: center;
	}

	.news-item-title {
		width: 220px;
		text-align: left;
	}

	h3 {
		font-weight: 900;
	}

	.news-item__text {
		padding: 0 10px;
		height: 147px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 9;
		-webkit-box-orient: vertical;
	}

	.news__btn {
		display: none;
		margin: 26px auto 32px auto;
	}
</style>
