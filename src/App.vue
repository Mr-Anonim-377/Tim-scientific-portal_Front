<template>
	<div v-if="loadSuccess">
		<HeaderSection :ways="this.WAYS_ARRAY" :news="this.NEWS_SLIDER.NEWS_ITEM" :modifiers="modifiers.header" :isAuth="this.isAuth" />
		<router-view />
		<FooterSection />
	</div>
</template>

<script>
	import HeaderSection from './components/unitComponents/HeaderSection/HeaderSection';
	import FooterSection from './components/unitComponents/FooterSection/FooterSection';
	import axios from 'axios';

	import testMixin from './utils/methodsMixin';

	export default {
		name: 'App',
		components: {
			HeaderSection,
			FooterSection,
		},
		mixins: [testMixin],

		async beforeCreate() {
			/**
			 * Тут проверяем, авторизован ли пользователь
			 */

			// axios.get('http://localhost:1024/user/auth?roleName=ROLE_USER');

			axios
				.get('http://localhost:1024/user/auth?roleName=ROLE_USER', {
					headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
				})
				.then()
				.catch();
			/**
			 * Запрос:
			 *
			 * Если не авторизован -> localStorage.setItem("isAuth", false);
			 */
		},

		async mounted() {
			await this.getModulesTest('WAYS');
			await this.getModulesTest('NEWS_PAGE');

			// Локально устанавливаем значение для isAuth
			this.isAuth = localStorage.getItem('isAuth') === 'true' ? true : false;
			this.loadSuccess = true;
		},

		data() {
			return {
				modifiers: {
					header: ['header_border-none'],
				},
				loadSuccess: false,
				isAuth: false,
			};
		},
	};
</script>

<style>
	/* @import url('./assets/fonts/Gilroy/bold2/style.css'); */
	* {
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}

	img {
		/*pointer-events: none;*/
		-webkit-user-drag: none;
		-khtml-user-drag: none;
		-moz-user-drag: none;
		-o-user-drag: none;
		user-drag: none;

		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-o-user-select: none;
		user-select: none;
	}

	body {
		overflow-x: hidden;
		padding: 0;
		margin: 0;
		/* font-family: 'Gilroy-Medium'; */
		font-family: Roboto;
		background-color: #ffffff;
		box-sizing: border-box;
		min-height: 100vh;
		height: 100%;
		width: 100%;
		min-width: 1440px;
		cursor: default;
		text-decoration: none;
	}

	@media (max-width: 1650px) {
		body {
			min-width: 0;
		}
	}

	a {
		z-index: 20;
	}

	.container {
		width: 1145px;
		margin: auto;
	}

	.content {
		/* min-height: calc(100vh - 817px); */
		min-height: 100vh;
	}

	ul li a:link,
	ul li a:visited,
	ul li a:active,
	ul li a:hover {
		text-decoration: none;
		color: black;
	}
	/* @font-face {
		font-family: 'Gilroy-Bold';
		src: url('./assets/fonts/Gilroy/bold/gilroy-bold.eot');
		src: url('./assets/fonts/Gilroy/bold/gilroy-bold.eot?#iefix') format('embedded-opentype'),
			url('./assets/fonts/Gilroy/bold/gilroy-bold.woff2') format('woff2'),
			url('./assets/fonts/Gilroy/bold/gilroy-bold.woff') format('woff'),
			url('./assets/fonts/Gilroy/bold/gilroy-bold.ttf') format('truetype'),
			url('./assets/fonts/Gilroy/bold/gilroy-bold.svg#gilroy-bold') format('svg');
	} */

	/* @font-face {
		font-family: 'Gilroy';
		src: local('Gilroy Bold'), local('Gilroy-Bold'),
			url('./assets/fonts/Gilroy/bold2/Gilroy-Bold.woff2') format('woff2'),
			url('./assets/fonts/Gilroy/bold2/Gilroy-Bold.woff') format('woff'),
			url('./assets/fonts/Gilroy/bold2/Gilroy-Bold.ttf') format('truetype');
		font-weight: 700;
		font-style: normal;
	} */

	/* @font-face {
		font-family: 'Gilroy-Regular';
		src: url('./assets/fonts/Gilroy/regular/gilroy-regular.eot');
		src: url('./assets/fonts/Gilroy/regular/gilroy-regular.eot?#iefix')
				format('embedded-opentype'),
			url('./assets/fonts/Gilroy/regular/gilroy-regular.woff2') format('woff2'),
			url('./assets/fonts/Gilroy/regular/gilroy-regular.woff') format('woff'),
			url('./assets/fonts/Gilroy/regular/gilroy-regular.ttf') format('truetype'),
			url('./assets/fonts/Gilroy/regular/gilroy-regular.svg#gilroy-regular') format('svg');
	} */

	@font-face {
		font-family: 'Gilroy-Bold';
		font-style: normal;
		font-weight: normal;
		src: local('Gilroy-Bold'), url('./assets/fonts/Gilroy/bold2/Gilroy-Bold.woff') format('woff');
	}

	@font-face {
		font-family: 'Gilroy-Heavy';
		font-style: normal;
		font-weight: normal;
		src: local('Gilroy-Heavy'), url('./assets/fonts/Gilroy/bold2/Gilroy-Heavy.woff') format('woff');
	}

	@font-face {
		font-family: 'Gilroy-Light';
		font-style: normal;
		font-weight: normal;
		src: local('Gilroy-Light'), url('./assets/fonts/Gilroy/bold2/Gilroy-Light.woff') format('woff');
	}

	@font-face {
		font-family: 'Gilroy-Medium';
		font-style: normal;
		font-weight: normal;
		src: local('Gilroy-Medium'), url('./assets/fonts/Gilroy/bold2/Gilroy-Medium.woff') format('woff');
	}

	@font-face {
		font-family: 'Gilroy-Regular';
		font-style: normal;
		font-weight: normal;
		src: local('Gilroy-Regular'), url('./assets/fonts/Gilroy/bold2/Gilroy-Regular.woff') format('woff');
	}

	.swiper_slider_button_next {
		position: relative;
		height: fit-content;
		left: 3%;
		margin-top: auto;
		margin-bottom: auto;
	}

	.swiper_slider_button_prev {
		position: relative;
		height: fit-content;
		right: 3%;
		margin-top: auto;
		margin-bottom: auto;
	}
</style>
