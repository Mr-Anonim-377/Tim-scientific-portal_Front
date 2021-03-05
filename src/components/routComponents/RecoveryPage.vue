<template>
	<section class="recovery">
		<TitleSection :stileTitle="stileTitle.stile" :headerVisible="visibleRecovery" :title="this.titleRecovery" />

		<p class="error-recovery" :class="{ errorShow: error }">{{ errorMessage }}</p>
		<p>
			Укажите Вашу почту. На неё будет отправлено<br />
			письмо с дальнейшими инструкциями
		</p>
		<form @submit.prevent="submitFunc()">
			<div class="controls">
				<input v-model="login" name="login" placeholder="Логин" class="recovery__inp" required />
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
  import axios from 'axios';
	export default {
		name: 'RecoveryPage',
		components: {
			ButtonElement,
			TitleSection,
			Recaptcha,
		},
		data() {
			return {
        login:'',
				error: false,
				errorMessage: '',
				visibleRecovery: true,
				titleRecovery: 'Восстановление пароля',
				compliteRecapcha: false,
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
			submit() {
				/**
				 * Метод слушает капчу
				 * Срабатывает когда капча будет пройдена
				 */
				this.compliteRecapcha = true;
			},
			executeRecaptcha() {
				this.$refs.recaptcha.execute();
			},

			/**
			 * Метод вызывается при попытке submit()
			 */
			submitFunc() {
				if (!this.compliteRecapcha) {
					// Показываем ошибку
					this.errorMessage = 'Необходимо пройти проверку reCAPCHA';
					this.error = true;

					// Скрываем через секунду
					setTimeout(() => {
						this.error = false;
					}, 1000);
				} else {
					/**
					 * Тут можно добавлять проверки
					 * Если все ок, то можно отправлять запрос в блоке else
					 */
          axios
              .get('http://localhost:80/utils/update/password?login=' + this.login, {
                headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
              })
              .then(() => {
                window.location.href = 'http://localhost:80/auth';
              })
              .catch(() => {
                this.error = true;
              });
				}

				/**
				 * Метод всегда должен возвращать false
				 */
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

	.errorShow {
		opacity: 1;
	}
</style>
