<template>
	<section class="account__nav">
		<router-link style="text-decoration: none" :to="{ name: 'form' }">
			<div class="nav-btn">Личная информация</div>
		</router-link>
		<router-link style="text-decoration: none" :to="{ name: 'account' }">
			<div class="nav-btn">Аккаунт</div>
		</router-link>
		<router-link style="text-decoration: none" :to="{ name: 'project' }">
			<div class="nav-btn" v-if="authorization">Мои проекты</div>
			<div class="nav-btn" v-else>Проекты</div>
		</router-link>
		<router-link style="text-decoration: none" :to="{ name: 'colleagues' }">
			<div class="nav-btn">Коллеги</div>
		</router-link>
		<router-link style="text-decoration: none" :to="{ name: 'progress' }">
			<div class="nav-btn">Достижения</div>
		</router-link>
	</section>
</template>

<script>
	import mixin from '../../utils/methodsMixin';

	export default {
		name: 'AccountNavigationSection',
		data() {
			return {
				authorization: false,
			};
		},

		props: { profileData: Object },
		mixins: [mixin],

		async mounted() {
			/**
			 * Получаем тут данные о профиле из form
			 * Отсюда можно уже раскидать по роут линкам
			 */

			/**
			 * Походу profileData надо кидать в каждый компонент, а там кидать обратно в навигацию.
			 * Получается, данные один раз получаются в form а потом по кругу кидаются туда-сюда.
			 */

			console.log(this.profileData);
		},
	};
</script>

<style scoped>
	.account__nav {
		margin: 0;
	}
	.nav-btn {
		width: 200px;
		height: 35px;
		background: #f8f5e6;
		border-radius: 54px;
		margin-bottom: 12px;
		text-align: center;
		font-weight: bold;
		font-size: 15px;
		line-height: 18px;
		color: #3f7e77;
		padding: 10px;
	}
	.nav-btn:hover {
		background: #3f7e77;
		color: #f8f5e6;
	}
</style>
