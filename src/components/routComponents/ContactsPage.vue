// СТРАНИЦА КОНТАКТОВ

<template>
	<section class="contacts">
		<div>
			<TitleSection :headerVisible="visibleContacts" :title="this.titleContacts" />
			<p class="contacts-text-phone">тел.: +7 (978) 645-25-13</p>
			<p>E-mail: info@future-agro.ru</p>
			<p class="contacts-text-networks">Мы в соц. сетях:</p>
			<div class="contacts-container">
				<img src="../../assets/image/VK.svg" />
				<img src="../../assets/image/faceBook.svg" />
				<img src="../../assets/image/Instagram.svg" />
			</div>
			<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
				<ButtonElement :modifiers="modifiers.btn" :title="titleContactsBtn" />
			</router-link>
		</div>
	</section>
</template>

<script>
	//FIXME Решить вопрос с прелоадером на странице контактов
	// import Preloader from "../unitComponents/CommonElements/Preloader";
	import TitleSection from '../unitComponents/TitleSection';
	import ButtonElement from '../unitComponents/CommonElements/ButtonElement';
	export default {
		name: 'ContactsPage',
		components: {
			ButtonElement,
			TitleSection,
			// Preloader,
		},
		data() {
			return {
				modifiers: {
					btn: [
						'background: #F8F5E6; margin: 27px auto 0 auto; display:block; color: #3F7E77;',
					],
				},
				visibleContacts: false,
				titleContacts: 'Контакты',
				titleContactsBtn: 'Позвонить',
			};
		},
	};
</script>

<style scoped>
	.contacts {
		width: 100%;
		background: linear-gradient(0deg, rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)),
			url('../../assets/image/contacts/Contact.png');
		background-size: cover;
		padding: 136px 0 90px 0;
		min-height: calc(100vh - 420px);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	p {
		/* font-family: 'Gilroy-Bold'; */
		font-family: Roboto;
		font-weight: normal;
		font-size: 18px;
		line-height: 22px;
		text-align: center;
		color: #f8f5e6;
	}

	.contacts-text-phone {
		margin: 87px 0 25px 0;
	}

	.contacts-text-networks {
		font-weight: normal;
		margin: 51px 0 25px 0;
		position: relative;
	}

	.contacts-text-networks:before {
		content: '';
		position: absolute;
		width: 35px;
		height: 1px;
		background: #f8f5e6;
		bottom: 45px;
		left: calc(50% - 17.5px);
	}

	.contacts-container {
		display: flex;
		justify-content: center;
		text-align: center;
		align-items: center;
		margin: 0 auto 50px auto;
	}

	.contacts-container img {
		max-width: 30px;
		max-height: 30px;
		margin: 0 11px;
	}
</style>
