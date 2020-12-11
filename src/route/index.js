import { createRouter, createWebHistory } from "vue-router";
import main from "../components/routComponents/MainPage";
import notFound from "../components/routComponents/404Page";
import consortium from "../components/routComponents/ConsortiumPage";
import ways from "../components/routComponents/WaysPage";
import news from "../components/routComponents/NewsPage";
import ResearchPage from "../components/routComponents/ResearchPage";
import ResearchAllPage from "../components/routComponents/ResearchAllPage";
import newsItem from '../components/routComponents/NewsItemsPage';

const routes = [
	{
		path: "/",
		name: "Main",
		component: main,
	},
	{
		path: "/consortium",
		name: "Consortium",
		component: consortium,
	},
	{
		path: "/404",
		name: "notFound",
		component: notFound,
	},
	{
		path: "/ways",
		name: "ways",
		component: ways,
	},
	{
		path: "/news",
		name: "news",
		component: news,
	},
	{
		path: "/research",
		name: "research",
		component: ResearchPage,
	},
	{
		path: "/all-research",
		name: "all-research",
		component: ResearchAllPage,
	},
	{
		path: '/newsItem/:pageId',
		name: 'newsItem',
		component: newsItem,
		props: true
	}
	// {
	// 	path: '/collection/collectionId=:collectionId' +
	// 		'&page=:page' +
	// 		'&categoryIds=:categoryIds?' +
	// 		'&price-min=:priceMin?' +
	// 		'&price-max=:priceMax?',
	// 	component: collection,
	// 	props: true
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
