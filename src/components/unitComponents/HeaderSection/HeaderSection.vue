<template>
	<section class="headerSection">
		<!--Верхняя часть хедера-->
		<div class="headerSection-container">
			<p class="headerSection__text-phone">
				<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
					+7 (499) 976-07-48
				</router-link>
			</p>
			<p class="headerSection__textMail">
				<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
					info@future-agro.ru
				</router-link>
			</p>
			<router-link style="text-decoration: none" :to="{ name: 'Main' }">
				<img src="../../../assets/image/Logo2.svg" />
				<div class="popup-arrow"></div>
			</router-link>
			<input type="text" placeholder="Поиск" class="headerSection__research" />
			<button class="btn-research"></button>
		</div>

		<!--Нижняя часть хедера-->
		<div class="headerSection__navigation">
			<div class="headerSection__navigation-container">
				<div class="headerSection__item">
					<p>Участники консорциума НЦМУ</p>

					<div class="popup-arrow"></div>

					<div class="popup">
						<a href="https://www.timacad.ru/">
							<p>
								Российский государственный аграрный университет - МСХА имени К. А.
								Тимирязева
							</p>
						</a>

						<a href="https://spbu.ru/">
							<p>Санкт-Петербурский государственный университет</p>
						</a>
						<a href="https://arriam.ru/">
							<p>
								Всероссийский научно-исследовательский институт сельскохозяйственной
								микробиологии
							</p>
						</a>

						<a href="http://esoil.ru/>">
							<p>ФИЦ "Почвенный институт имени В.В. Докучаева</p>
						</a>

						<a href="https://www.vir.nw.ru/">
							<p>
								Всероссийский институт генетических ресурсов растений имени Н.И.
								Вавилова
							</p>
						</a>

						<a href="http://www.frccsc.ru/">
							<p>ФИЦ "Информатика и управление" РАН</p>
						</a>

						<a href="https://www.fbras.ru/">
							<p>ФИЦ "Фундаменальные основы биотехнологии" РАН</p>
						</a>
					</div>
				</div>

				<div class="headerSection__item">
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Официальные документы</p>
					</router-link>
				</div>

				<div class="headerSection__item">
					<p>Научные направления</p>

					<div class="popup-arrow"></div>

					<div class="popup">
						<router-link
							v-for="way in ways.WAYS_ITEM"
							:key="way"
							style="text-decoration: none"
							:to="{ path: `/all-research/${way._pageLink}` }"
						>
							<p>
								{{ way.title[0] + way.title.slice(1).toLowerCase() }}
							</p>
						</router-link>
					</div>
				</div>
				<!-- </router-link> -->
				<div class="headerSection__item">
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Пресс-служба</p>
					</router-link>
				</div>

				<div class="headerSection__item">
					<p>Новости</p>

					<div class="popup-arrow"></div>

					<div class="popup">
						<router-link
							v-for="newsItem in news"
							:key="newsItem"
							style="text-decoration: none"
							:to="{ path: `/newsItem/${newsItem._pageLink}` }"
						>
							<p>
								{{ newsItem.title }}
							</p>
						</router-link>
					</div>
				</div>
				<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
					<span class="login">Личный кабинет</span>
				</router-link>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'headerSection',
		props: {
			ways: [],
			news: [],
		},

		mounted() {
			console.log(this.news);
		},
	};
</script>

<style scoped>
	p,
	a {
		cursor: pointer;
		text-decoration: none;
		font-size: 14px;
		line-height: 18px;
		color: #3f7e77;
	}
	p:active,
	p:hover {
		color: #666;
	}

	.headerSection {
		width: 100%;
		background: #f8f5e6;
	}
	.headerSection-container {
		padding: 16px 0 11px 0;
		display: flex;
		text-align: center;
		margin: auto;
		max-width: 1144px;
		align-items: center;
		position: relative;
	}

	/*Телефон с картинкой*/
	.headerSection__text-phone {
		margin: 0 83px 0 32px;
		position: relative;
	}
	.headerSection__text-phone:before {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		background-image: url('../../../assets/image/Phone.svg');
		margin-left: -29px;
		cursor: default;
	}
	/*Почта с картинкой*/
	.headerSection__textMail {
		margin: 0 155px 0 10px;
	}
	.headerSection__textMail:before {
		content: '';
		position: absolute;
		width: 20px;
		height: 20px;
		background-image: url('../../../assets/image/Mail.svg');
		margin-left: -28px;
		cursor: default;
	}
	/*Ститили input*/
	.headerSection__research {
		width: 418px;
		height: 34px;
		background: #ffffff;
		border-radius: 20px;
		margin-left: 122px;
		padding: 0 21px;
		border: none;
		font-size: 15px;
		line-height: 18px;
		color: rgba(63, 126, 119, 0.5);
	}
	.headerSection__research :active,
	:hover,
	:focus {
		outline: 0;
		outline-offset: 0;
	}
	::-webkit-input-placeholder {
		color: rgba(63, 126, 119, 0.5);
		/* font-weight: 500; */
		font-size: 15px;
		line-height: 18px;
	}

	/*Стили кнопки Input*/
	.btn-research {
		background-image: url('../../../assets/image/Research.svg');
		width: 20px;
		height: 20px;
		border: none;
		position: absolute;
		right: 42px;
		text-decoration: none;
		background-color: #ffffff;
		outline: none;
	}

	/*Стили навишации*/
	.headerSection__navigation {
		background: #3f7e77;
		width: 100%;
		color: #f8f5e6;
	}
	.headerSection__navigation-container {
		display: flex;
		text-align: center;
		margin: auto;
		max-width: 1200px;
		position: relative;
	}

	.headerSection-container router-link,
	.headerSection-container a {
		position: relative;
	}
	.headerSection__navigation p {
		margin: 0;
		color: #f8f5e6;
		letter-spacing: 0.03em;
	}

	/*Стили Входа*/
	.login {
		color: #f8f5e6;
		position: absolute;
		right: 1px;
		padding: 18px 10px;
	}
	.login:before {
		content: '';
		position: absolute;
		width: 21px;
		height: 25px;
		background-image: url('../../../assets/image/Lk.svg');
		background-repeat: no-repeat;
		right: 135px;
		top: 15px;
	}

	.headerSection__item {
		width: auto;
		position: relative;
		padding: 18px 10px;

		display: flex;
		align-items: center;
	}

	.headerSection__item .popup-arrow {
		margin-left: 10px;
		position: relative;
		background-image: url('../../../assets/image/Vector.svg');
		background-size: 10px 5px;
		/* top: 2px; */
		width: 10px;
		height: 5px;
		transition: opacity 0.5s;
	}

	.headerSection__item:hover .popup {
		/* display: block; */
		visibility: visible;
		opacity: 1;
	}

	.headerSection__item:hover .popup-arrow {
		opacity: 0;
		border-style: border-box;
	}

	.popup {
		width: max-content;
		padding: 20px 20px 10px;
		position: absolute;
		background-color: rgb(63, 126, 119);
		z-index: 14;
		/* display: none; */
		visibility: hidden;
		opacity: 0;
		left: 0;
		right: 0;
		margin: auto;
		top: 53px;
		transition: opacity 0.5s;
	}

	.popup p {
		margin: 0 0 20px;
		font-size: 14px;
		line-height: 17px;
		text-align: left;
		max-width: 250px;
	}
</style>
