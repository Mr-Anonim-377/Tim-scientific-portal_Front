//Вертикальное меню на главной странице

<template>
	<section class="vertical-menu-section">
		<ul>
			<li>
				<a target="_blank" href="https://ncmu.ru/">НЦМУ Научные центры мирового уровня</a>
			</li>
			<li>
				<router-link :to="{ name: 'presentation' }">
					Презентация НЦМУ
				</router-link>
			</li>

			<li>
				<router-link :to="{ name: 'notFound' }">
					Образовательные программы центра
				</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'notFound' }"> Динамика достижения результатов программы</router-link>
			</li>
			<li>
				Исследователи НЦМУ
				<div class="popup">
					<ul>
						<li>
							<router-link :to="{ name: 'notFound' }">
								Исследователи РГАУ
							</router-link>
						</li>
						<li>
							<router-link :to="{ name: 'notFound' }">
								Исследователи СПГУ
							</router-link>
						</li>

						<li>
							<router-link :to="{ name: 'notFound' }">
								Исследователи ФГУП ВНИМС
							</router-link>
						</li>

						<li>
							<router-link :to="{ name: 'notFound' }">
								Исследователи ФИЦ им. В.В. Докучаева
							</router-link>
						</li>

						<li>
							<router-link :to="{ name: 'notFound' }">
								Исследователи ВИГРР
							</router-link>
						</li>

						<li>
							<router-link :to="{ name: 'notFound' }">
								Исследователи ФИЦ "Информатика и управление" РАН
							</router-link>
						</li>

						<li>
							<router-link :to="{ name: 'notFound' }">
								Исследователи ФИЦ "Фундаментальные основы биотехнологии" РАН
							</router-link>
						</li>
					</ul>
				</div>
			</li>
			<li>
				<router-link :to="{ name: 'knowledgeBase' }">База знанинй</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'notFound' }">Фундаментальные результаты </router-link>
			</li>
			<li>
				<router-link :to="{ name: 'notFound' }">Прикладные результаты</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'notFound' }"> Трансфер технологий</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'notFound' }">Маркетинговые исследования </router-link>
			</li>
			<li>
				<router-link :to="{ name: 'notFound' }"> Предложения для внедрения результатов НЦМУ</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'notFound' }"> Запросы на исследования от индустриальных партнеров</router-link>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		name: 'VerticalMenuSection',
	};
</script>

<style scoped>
	section {
		background-color: #f8f5e6;
		color: black;
		width: 345px;
		padding: 30px 20px;
		font-size: 16px;
	}

	li {
		padding-bottom: 23px;
		position: relative;
		color: #4d5668;
		/* font-family: Gilroy-Bold; */
		font-family: Roboto;
		list-style: disc;
	}

	section ul li:hover {
		color: #3f7e77;
	}

	li:last-child {
		margin-bottom: 0;
	}

	ul li a:link,
	ul li a:visited,
	ul li a:active {
		color: #4d5668;
	}

	.popup {
		position: absolute;
		padding: 30px 20px;
		width: 345px;
		right: -345px;
		z-index: 10000000000;
		background-color: #f8f5e6;
		top: 0px;
		visibility: hidden;
		opacity: 0;
		transition: 0.5s;
	}

	.popup li router-link a {
		color: #4d5668 !important;
	}

	li:hover .popup {
		visibility: visible;
		opacity: 1;
	}

	@media (max-width: 1650px) {
		section {
			width: 285px;
			padding: 0px 20px;
			height: 590px;
		}

		ul {
			padding: 30px 20px;
			margin: 0;
			font-size: 14px;
			/* padding-inline-start: 40px; */
		}

		.popup {
			padding-bottom: 10px;
		}

		.popup ul {
			padding-top: 0;
			padding-bottom: 0;
		}

		li {
			padding-bottom: 20px;
		}
	}
</style>
