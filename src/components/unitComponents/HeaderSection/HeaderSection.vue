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
				<!-- <li> -->
				<!-- <router-link style="text-decoration: none" :to="{ name: 'notFound' }"> -->
				<div class="headerSection__item">
					<p>Участники консорциума НЦМУ "Агротехнологии будущего"</p>
					<!-- <img src="../../../assets/image/Vector.svg" alt="" /> -->
					<div class="popup-arrow"></div>

					<div class="popup">
						<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
							<p>
								Российский государственный аграрный университет - МСХА имени К. А.
								Тимирязева
							</p>
						</router-link>
						<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
							<p>Санкт-Петербурский государственный университет</p>
						</router-link>
						<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
							<p>
								Всероссийский научно-исследовательский институт сельскохозяйственной
								микробиологии
							</p>
						</router-link>
						<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
							<p>ФИЦ "Почвенный институт имени В.В. Докучаева</p>
						</router-link>
						<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
							<p>
								Всероссийский институт генетических ресурсов растений имени Н.И.
								Вавиловаы
							</p>
						</router-link>
						<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
							<p>ФИЦ "Информатика и управление" РАН</p>
						</router-link>
						<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
							<p>ФИЦ "Фундаменальные основы биотехнологии" РАН</p>
						</router-link>
						<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
							<p>Официальные документы</p>
						</router-link>
					</div>
				</div>

				<!-- </router-link> -->
				<!-- </li> -->

				<div class="headerSection__item">
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Официальные документы</p>
					</router-link>
				</div>

				<!-- <router-link style="text-decoration: none" :to="{ name: 'notFound' }"> -->
				<div class="headerSection__item">
					<p>Научные направления</p>
					<!-- <img src="../../../assets/image/Vector.svg" alt="" /> -->
					<div class="popup-arrow"></div>

					<div class="popup">
						<!-- <div v-for="WAY in ways.WAYS_ITEM" :key="WAY.title">
							123
						</div> -->
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
						<p>Контакты</p>
					</router-link>
				</div>

				<!-- <router-link style="text-decoration: none" :to="{ name: 'notFound' }"> -->
				<!-- <p>Новости</p> -->
				<div class="headerSection__item">
					<p>Новости</p>
					<!-- <img src="../../../assets/image/Vector.svg" alt="" /> -->
					<div class="popup-arrow"></div>

					<div class="popup">
						<!-- <div v-for="WAY in ways.WAYS_ITEM" :key="WAY.title">
							123
						</div> -->
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
				<!-- </router-link> -->
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
		font-size: 15px;
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
		font-weight: 500;
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
		right: 17px;
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
		padding: 18px 0 18px 1px;
		display: flex;
		text-align: center;
		margin: auto;
		max-width: 1435px;
		position: relative;
	}

	.headerSection-container router-link {
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
	}
	.login:before {
		content: '';
		position: absolute;
		width: 21px;
		height: 25px;
		background-image: url('../../../assets/image/Lk.svg');
		right: 135px;
		top: -4px;
	}

	.headerSection__item {
		width: auto;
		position: relative;
		display: flex;
		margin: 0 40px 0 0;
		align-items: center;
		padding-right: 2px;
	}

	/* .headerSection__item img {
		margin-left: 10px;
		position: relative;
		top: 2px;
		width: 10px;
		height: 5px;
		/* width: 10px; */
	/* height: 5px; */
	/* transition: opacity 0.5s; */

	.headerSection__item .popup-arrow {
		margin-left: 10px;
		position: relative;
		background-image: url('../../../assets/image/Vector.svg');
		background-size: 10px 5px;
		top: 2px;
		width: 10px;
		height: 5px;
		/* width: 10px; */
		/* height: 5px; */
		transition: opacity 0.5s;
	}

	.headerSection__item:hover .popup {
		display: block;
	}

	.headerSection__item:hover .popup-arrow {
		opacity: 0;
		border-style: border-box;
	}

	.popup {
		min-width: calc(100% + 35px);
		padding: 20px 20px 10px;
		position: absolute;
		background-color: rgb(63, 126, 119);
		z-index: 14;
		display: none;
		left: -20px;
		top: 20px;

		/* ЗФ */
	}

	.popup p {
		margin: 20px 0;
		font-size: 10px;
		line-height: 13px;
		text-align: left;
	}
</style>
