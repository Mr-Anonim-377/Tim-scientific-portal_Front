<template>
	<section class="authorization">
		<TitleSection :stileTitle="stileTitle.stile" :headerVisible="visibleAuthorization" :title="this.titleAuthorization" />
		<input type="text" placeholder="Логин / Email" class="authorization__inp" />
		<input type="text" placeholder="Пароль" class="authorization__inp inp-indent" />
		<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
			<p class="authorization-text">Забыли пароль?</p>
		</router-link>
		<ButtonElement @click="c" :modifiers="modifiers.btn" :title="titleAuthorizationBtn" />
		<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
			<p>Зарегистрироваться</p>
		</router-link>
	</section>
</template>

<script>
	import TitleSection from './TitleSection';
	import ButtonElement from '@/components/unitComponents/CommonElements/ButtonElement';
	import axios from 'axios';

	export default {
		name: 'AuthorizationeSection',
		components: {
			ButtonElement,
			TitleSection,
		},
		data() {
			return {
				visibleAuthorization: true,
				titleAuthorization: 'Вход в личный кабинет',
				modifiers: {
					btn: ['    width: 331px; height: 50px; margin: 34px 0 3px 0px;'],
				},
				titleAuthorizationBtn: 'Войти',
				stileTitle: {
					stile: ['font-size: 22px'],
				},
			};
		},

		methods: {
			// auth: function() {
			// 	this.axios.get("http://future-agro.ru:84/user/logIn", {
			// 		headers:
			// 	})
			// },
		},
	};
</script>

<style scoped>
	p {
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		color: #3f7e77;
		cursor: pointer;
	}
	.authorization {
		width: 376px;
		height: 393px;
		background: #ffffff;
		border-radius: 20px;
		margin: auto;
		padding: 38px 25px 0 25px;
	}

	.authorization__inp {
		width: 330px;
		/* height: 34px; */
		font-size: 15px;
		line-height: 14px;
		color: #b1b1b1;
		margin-top: 32px;
		border: 0;
		outline: 0;
		background: transparent;
		border-bottom: 1px solid rgba(77, 86, 104, 0.2);
	}
	.inp-indent {
		margin-top: 22px;
	}
	.authorization__inp :active,
	:hover,
	:focus {
		outline: 0;
		outline-offset: 0;
	}
	::-webkit-input-placeholder {
		color: #b1b1b1;
		font-weight: 500;
		font-size: 12px;
		line-height: 18px;
	}
	.authorization-text {
		font-size: 10px;
		line-height: 12px;
		color: #5c5c5c;
		text-align: left;
	}
</style>
