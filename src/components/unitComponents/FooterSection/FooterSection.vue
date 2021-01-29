// СЕКЦИЯ ФУТЕРА

<template>
	<footer class="footerSection">
		<!--            Навигация-->

		<div class="footerNav">
			<div class="footerNav-container">
				<div class="footerNav-item">
					<h3>Участники консорциума</h3>

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
						<p>ФИЦ "Почвенный институт имени В.В. Докучаева"</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>
							Всероссийский институт генетических ресурсов растений имени Н.И.
							Вавилова
						</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>ФИЦ "Информатика и управление" РАН</p> </router-link
					><router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>ФИЦ "Фундаменальные основы биотехнологии" РАН</p>
					</router-link>
				</div>
				<div class="footerNav-item">
					<h3>О программе</h3>

					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>НЦМУ Научные центры мирового уровня</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Презентация НЦМУ</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Прогресс показателей</p> </router-link
					><router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Исследования</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'ways' }">
						<p>Направления исследований</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Календарь событий</p>
					</router-link>
				</div>
				<div class="footerNav-item">
					<h3>Исследователи НЦМУ</h3>

					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Исследователи РГАУ</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Исследователи СПГУ</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Исследователи ФГУП ВНИМС</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Исследователи ФИЦ им. В.В. Докучаева</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Исследователи ВИГРР</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Исследователи ФИЦ "Информатика и управление" РАН</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Исследователи ФИЦ "Фундаментальные основы биотехнологии" РАН</p>
					</router-link>
				</div>
				<div class="footerNav-item">
					<h3>Новости программы</h3>

					<router-link style="text-decoration: none" :to="{ name: 'news' }">
						<p>Последние новости</p>
					</router-link>
					<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
						<p>Новости по направлениям исследований</p>
					</router-link>
				</div>
			</div>
		</div>

		<div class="footer-links">
			<!-- Логотип и политика конф-->
			<div class="footer-police">
				<div class="footer-police__img">
					<img src="../../../assets/image/Logo.svg" />
				</div>
				<div class="footer-police__text">
					<p>
						©2020 <q>Агроконсорциум</q> <br />Научный центр мирового уровня
						<!-- <br /> -->
						<q>Агротехнологии будущего</q>
					</p>
					<span><u>Политика конфиденциальности</u></span>
				</div>
			</div>

			<div class="footer-contact">
				<!-- Контакты-->
				<div class="footerContact-container">
					<div class="footerContact-item">
						<p>E-mail: info@future-agro.ru</p>
						<p class="footerContact__text">+7 (499) 976-07-48</p>
					</div>
					<div class="footerContact-item">
						<p style="cursor: default">Следите за нами:</p>
						<div class="footerContact__networks">
							<img src="../../../assets/image/VK.svg" />
							<img src="../../../assets/image/faceBook.svg" />
							<img src="../../../assets/image/Instagram.svg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {
		name: 'FooterNow',
	};
</script>

<style scoped>
	span,
	p {
		cursor: pointer;
		font-size: 15px;
		color: #f8f5e6;
		line-height: 17px;
	}

	.footerSection {
		/* height: 276px; */

		width: 100%;
		background: #4d5668;
		padding: 50px 0 25px;
		position: relative;
	}

	/*ЛОготип и политика конф*/
	.footerLogo-container {
		width: 230px;
		margin-left: 62px;
	}
	.footerLogo-container img {
		width: 74px;
		height: 85px;
	}
	.footerLogo-container p {
		color: rgba(248, 245, 230, 0.5);
		margin: 17px 0 0 0;
		font-size: 15px;
		line-height: 18px;
		cursor: default;
	}

	/* Навигация
	.footerNav-container__left p,
	.footerNav-container__right p {
		cursor: pointer;
		color: #f8f5e6;
		line-height: 29px;
	} */

	.footerNav {
		position: relative;
	}
	.footerNav-container {
		width: 1433px;
		margin: auto;
		display: flex;
		justify-content: space-between;
		padding-bottom: 45px;
	}

	.footerNav:before {
		content: '';
		position: absolute;
		background-color: #656f83;
		width: 100%;
		height: 2px;
		bottom: 0;
		/* margin-left: 19px; */
	}

	.footerNav-item {
		width: 250px;

		margin-right: 30px;
	}

	.footerNav-item h3 {
		color: white;
	}

	.footerNav-item h3::after {
		content: '';
		height: 1px;
		width: 60px;
		display: block;
		background-color: #fff;
		margin: 20px 0;
	}

	.footer-links {
		width: 1433px;
		margin: 30px auto;
		display: flex;
		justify-content: space-between;
	}

	.footer-police {
		display: flex;
		align-items: center;
	}

	.footer-police p {
		color: #a2a5a7;
		margin: 0;
	}

	.footer-police span {
		margin-top: 10px;
	}

	.footer-police img {
		/* display: inline-block; */
		margin-right: 30px;
		width: 74px;
		height: 75px;
	}

	/*контакты*/
	.footerContact__text {
		font-weight: bold;
		font-size: 24px;
		position: relative;
		/* margin-bottom: 43px; */
		letter-spacing: 0.01em;
	}

	.footerContact-item {
		margin-right: 50px;
	}
	/* .footerContact__text:before {
		content: '';
		position: absolute;
		width: 35px;
		height: 1px;
		top: 42px;
		background: #f8f5e6;
	} */

	.footerContact-container p {
		cursor: pointer;
		color: #f8f5e6;
		line-height: 10px;
	}
	.footerContact-container {
		/* margin: -17px 50px; */
		display: flex;
	}

	.footerContact__networks {
		display: flex;
		margin: 0 -11px;
	}
	.footerContact__networks img {
		margin: 0 11px;
	}
</style>
