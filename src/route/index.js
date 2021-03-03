import { createRouter, createWebHistory } from 'vue-router';
import main from '../components/routComponents/MainPage';
import notFound from '../components/routComponents/404Page';
import consortium from '../components/routComponents/ConsortiumPage';
import ways from '../components/routComponents/WaysPage';
import news from '../components/routComponents/NewsPage';
import ResearchPage from '../components/routComponents/ResearchPage';
import ResearchAllPage from '../components/routComponents/ResearchAllPage';
import newsItem from '../components/routComponents/NewsItemsPage';
import party from '../components/routComponents/PartyPage';
import contacts from '../components/routComponents/ContactsPage';
import form from '../components/routComponents/FormPage';
import progress from '../components/routComponents/ProgressPage';
import colleagues from '../components/routComponents/ColleaguesPage';
import account from '../components/routComponents/AccountPage';
import project from '../components/routComponents/ProjectPage';
import auth from '../components/unitComponents/AuthorizationeSection';
import documents from '../components/routComponents/DocumentsPage';
import presentation from '../components/routComponents/PresentationPage';
import recovery from '../components/routComponents/RecoveryPage';

const routes = [
	{
		path: '/',
		name: 'Main',
		component: main,
	},
	{
		path: '/consortium',
		name: 'Consortium',
		component: consortium,
	},
	{
		path: '/404',
		name: 'notFound',
		component: notFound,
	},
	{
		path: '/ways',
		name: 'ways',
		component: ways,
	},
	{
		path: '/news',
		name: 'news',
		component: news,
	},
	{
		path: '/research/:pageId',
		name: 'research',
		component: ResearchPage,
		props: true,
	},
	{
		path: '/all-research/:pageId',
		name: 'all-research',
		component: ResearchAllPage,
		props: true,
	},
	{
		path: '/newsItem/:pageId',
		name: 'newsItem',
		component: newsItem,
		props: true,
	},
	{
		path: '/party',
		name: 'party',
		component: party,
	},
	{
		path: '/contacts',
		name: 'contacts',
		component: contacts,
	},

	{
		path: '/auth',
		name: 'auth',
		component: auth,
	},
	{
		path: '/documents',
		name: 'documents',
		component: documents,
	},
	{
		path: '/presentation',
		name: 'presentation',
		component: presentation,
	},
	{
		path: '/recovery',
		name: 'recovery',
		component: recovery,
	},

	/**
	 * Анкета пользователя
	 */

	{
		path: '/colleagues/:pageId',
		name: 'colleagues',
		component: colleagues,
		props: true,
	},
	{
		path: '/account/:pageId',
		name: 'account',
		component: account,
		props: true,
	},
	{
		path: '/project/:pageId',
		name: 'project',
		component: project,
		props: true,
	},
	{
		path: '/form/:pageId',
		name: 'form',
		component: form,
		props: true,
	},
	{
		path: '/progress/:pageId',
		name: 'progress',
		component: progress,
		props: true,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
