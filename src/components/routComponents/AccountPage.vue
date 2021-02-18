<template>
	<section class="account">
		<TitleSection :title="titleAccount" :headerVisible="true" :stileTitle="stileTitle.stile" />

		<div class="account-container">
			<account-navigation-section />

			<div class="account-block__inf">
				<p>E-mail</p>
				<input type="text" placeholder="kojevn@mail.ru" class="account__inp" v-if="authorization" />
				<p class="text-inf__mail" v-else>adress@mail.ru</p>
				<p v-if="authorization">Пароль</p>
				<p class="text-inf" v-if="authorization">обновлён 2 месяца назад</p>
				<ButtonElement :modifiers="modifiers.btn" :title="titleAccountBtn" v-if="authorization" />
			</div>
		</div>
	</section>
</template>

<script>
	import TitleSection from '@/components/unitComponents/TitleSection';
	import AccountNavigationSection from '@/components/unitComponents/AccountNavigationSection';
	import ButtonElement from '../unitComponents/CommonElements/ButtonElement';
	import mixin from '../../utils/methodsMixin';

	export default {
		name: 'AccountPage',
		components: {
			AccountNavigationSection,
			TitleSection,
			ButtonElement,
		},
		props: {
			pageId: String,
		},
		data() {
			return {
				titleAccount: 'Аккаунт',
				authorization: true,
				modifiers: {
					btn: ['width: 170px; height: 35px; background: #3F7E77; margin-top: 13px; padding: 0px;'],
				},
				titleAccountBtn: 'Изменить',
				stileTitle: {
					stile: ['font-size: 26px'],
				},
			};
		},

		mixins: [mixin],

		async mounted() {
			/**
			 * Получаем id профиля из адрессной строки
			 */

			this.profileID = this.$route.params.pageId;

			/**
			 * Получаем данные по id
			 */
			await this.getModulesTest('', this.profileID);
			this.loadSucces = true;

			/**
			 * Берем RESEARCH_ARRAY
			 */
			console.log(this.RESEARCH_ARRAY);
		},
	};
</script>

<style scoped>
	p {
		font-weight: bold;
		font-size: 15px;
		line-height: 18px;
		color: #3f7e77;
		margin: 0;
	}
	.account {
		max-width: 1437px;
		align-items: center;
		margin: 94px auto 143px auto;
	}
	.account-container {
		display: flex;
		margin-top: 105px;
	}

	.account-block__inf {
		margin-left: 146px;
	}

	.account__inp {
		width: 416px;
		height: 34px;
		background: #f8f5e6;
		border-radius: 20px;
		padding: 0 12px;
		border: none;
		font-size: 15px;
		line-height: 18px;
		color: rgba(63, 126, 119, 0.5);
		margin: 24px 0 40px 0;
	}
	.account__inp :active,
	:hover,
	:focus {
		outline: 0;
		outline-offset: 0;
	}
	::-webkit-input-placeholder {
		color: rgba(63, 126, 119, 0.5);
		font-weight: 500;
		font-size: 15px;
		line-height: 18px;
	}

	.text-inf,
	.text-inf__mail {
		margin-top: 22px;
		font-weight: 500;
		position: relative;
	}

	.text-inf:before {
		content: '';
		position: absolute;
		width: 35px;
		height: 1px;
		background: #3f7e77;
		bottom: 71px;
	}
</style>
