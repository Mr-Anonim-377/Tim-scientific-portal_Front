// СЕКЦИЯ НАПРАВЛЕНИЯ ИССЛДЕДОВАНИЙ (ПРОГРАММ) С ГЛАВНОЙ СТРАНИЦЫ

<template>
	<section class="directionOfResearchMainSection">
		<TitleSection :title="this.titleDirection" :headerVisible="visibleDirection" />
		<div class="directionOfResearchMainSection-container">
			<p class="text-left__top">
				Агробиотехнологии управления плодородием почв России в интересах высокопродуктивного
				земледелия минимального экологического риска.
			</p>
			<p class="text-left__bottom">
				Ускоренная селекция высокоурожайных и устойчивых сортов и гибридов растений,
				обладающих заданными характеристиками качества.
			</p>
			<img src="../../assets/image/LogoAndBorder.svg" />
			<p class="text-right__top">
				Создание безопасных, качественных, функциональных кормов и продуктов питания.
			</p>
			<p class="text-right__bottom">
				Технологии переработки и валоризации <br />
				малоценного сельскохозяйственного сырья и отходов агропромышленного комплекса.
			</p>
		</div>
		<p>Новые цифровые технологии в сельском хозяйстве.</p>
		<router-link style="text-decoration: none" :to="{ name: 'ways' }">
			<ButtonElement :modifiers="modifiers.btn" />
		</router-link>
	</section>
</template>

<script>
	import TitleSection from './TitleSection';
	import ButtonElement from './CommonElements/ButtonElement';

	export default {
		name: 'DirectionOfResearchNew',
		components: {
			TitleSection,
			ButtonElement,
		},
		data() {
			return {
				modifiers: {
					btn: ['background: #F8F5E6; margin: 42px auto 0 auto; color: #3F7E77;'],
				},
				visibleDirection: false,
				titleDirection: 'Направления исследований',
			};
		},
	};
</script>

<style scoped>
	/*Направления программы*/
	.directionOfResearchMainSection {
		text-align: center;
		width: 100%;
		background: linear-gradient(0deg, rgba(63, 126, 119, 0.8), rgba(63, 126, 119, 0.8)),
			url('../../assets/image/background-dir.png');
		padding: 65px 0 40px 0;
		background-size: cover;
	}

	h2 {
		font-size: 36px;
		margin-top: 16px;
		color: #ffffff;
	}

	.directionOfResearchMainSection-container {
		display: flex;
		flex-wrap: wrap;
		max-width: 1141px;
		margin: 26px auto 16px auto;
		position: relative;
	}

	.directionOfResearchMainSection-container img {
		margin: 18px auto 0 auto;
	}

	.directionOfResearchMainSection-container p {
		color: white;
		text-align: center;
		size: 15px;
		position: absolute;
	}

	p {
		size: 15px;
		color: white;
	}

	.text-left__top {
		top: 33px;
		left: 0;
		width: 360px;
	}
	.text-left__bottom {
		bottom: 22px;
		left: 84px;
		width: 392px;
	}
	.text-right__top {
		top: 33px;
		right: 4px;
		width: 367px;
	}
	.text-right__bottom {
		bottom: 16px;
		right: 94px;
		width: 386px;
	}
</style>
