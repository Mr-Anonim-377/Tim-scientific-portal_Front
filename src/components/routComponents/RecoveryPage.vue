<template>
	<section class="recovery">
		<TitleSection :stileTitle="stileTitle.stile" :headerVisible="visibleRecovery" :title="this.titleRecovery" />
		<p class="error-recovery" :class="{ error_show: error }">*Такого логина не существует</p>
		<p>
			Укажите Вашу почту. На неё будет отправлено<br />
			письмо с дальнейшими инструкциями
		</p>
		<form @submit.prevent="submitFunc()">
			<div class="controls">
				<input type="email" name="email" placeholder="Логин / Email" class="recovery__inp" required />
				<recaptcha ref="recaptcha" @verify="submit" />
			</div>
			<ButtonElement :modifiers="modifiers.btn" :title="titleRecoveryBtn" @click="executeRecaptcha" />
		</form>
	</section>
</template>

<script>
	import TitleSection from '../unitComponents/TitleSection';
	import ButtonElement from '@/components/unitComponents/CommonElements/ButtonElement';
	import Recaptcha from '../unitComponents/RecaptchaSection';
	export default {
		name: 'RecoveryPage',
		components: {
			ButtonElement,
			TitleSection,
			Recaptcha,
		},
		data() {
			return {
				error: false,
				visibleRecovery: true,
				titleRecovery: 'Восстановление пароля',
				modifiers: {
					btn: ['width: 331px; height: 50px; margin: 10px 0 20px 0px;'],
				},
				titleRecoveryBtn: 'Отправить',
				stileTitle: {
					stile: ['font-size: 22px'],
				},
			};
		},
		methods: {
			submit(response) {
				console.log(response);
			},
			executeRecaptcha() {
				this.$refs.recaptcha.execute();
				console.log('click');
			},

			submitFunc() {
				console.log(123);
				return false;
			},
		},
	};
</script>

<style scoped>
	p {
		font-size: 14px;
		line-height: 16px;
		text-align: center;
		color: #3f7e77;
	}
	.recovery {
		width: 376px;
		/* height: 393px; */
		background: #ffffff;
		border-radius: 20px;
		margin: auto;
		padding: 38px 25px 38px 25px;
	}
	.recovery__inp {
		width: 300px;
		/* height: 34px; */
		font-size: 18px;
		line-height: 14px;
		color: #b1b1b1;
		margin: 30px 0;
		outline: 0;
		background: transparent;
		text-align: left;
		border: none;
		border-bottom: 2px solid #3f7e77;
		padding: 10px;
		/* border-radius: 51px; */
	}
	.error-recovery {
		color: red;
		text-align: center;
		opacity: 0;
		margin: 0;
		transition: opacity 1s;
	}
	.controls {
		margin-bottom: 30px;
		display: flex;
		flex-wrap: wrap;
		/* align-items: center; 0*/
		justify-content: center;
	}

	.buttonSection {
		width: 300px;
		height: 60px;
		background: #3f7e77;
		border-radius: 54px;
		margin: auto;
		/* font-family: 'Gilroy-Bold'; */
		font-family: Roboto;
		color: #f8f5e6;
		padding: 16px;
		font-size: 18px;
		line-height: 22px;
		border: 0;
	}
	.buttonSection:active,
	:hover,
	:focus {
		outline: none;
	}
</style>
