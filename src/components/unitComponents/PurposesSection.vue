// СЕКЦИЯ ЦЕЛЕЙ ПРОЕКТА С ГЛАВНОЙ СТРАНИЦЫ

<template>
	<section class="purposesMainSection">
		<TitleSection :styleTitle="stileTitle" :compactTitle="compactTitlePurposes" :title="this.titlePurposes" :headerVisible="visiblePurposes" />
		<div class="purposesMainSection-container">
			<div class="purposes-item" v-for="item in sectionData.PROJECT_GOAL" :key="item">
				<img :src="item.image" />
				<p>{{ item.text }}</p>
			</div>
		</div>
	</section>
</template>

<script>
	import TitleSection from './TitleSection';

	export default {
		name: 'Purposes',
		components: {
			TitleSection,
		},
		props: {
			sectionData: [],
      compactTitlePurposes: Boolean,
      stileTitle: Object
		},
		data() {
			return {
				titlePurposes: 'Цели проекта',
				visiblePurposes: true,
			};
		},
	};
</script>

<style scoped>
	/*Цели*/
	.purposesMainSection {
		text-align: center;
		max-width: 1141px;
		align-items: center;
		/* margin: 100px auto 87px auto; */
	}

	.purposesMainSection-container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin-top: 50px;
		/* margin: 100px -78px 0 -78px; */
	}

	@media (max-width: 1650px) {
		.purposesMainSection {
			max-width: 100%;
		}

		.purposesMainSection-container {
			justify-content: space-around;
		}
	}

	/* .purposes-item { */
	/* FIXME Поправить */
	/* margin: 0 38px; */
	/* } */

	.purposes-item img {
		width: 70px;
		height: 67px;
	}
	.purposes-item p {
		width: 240px;
		font-size: 14px;
		color: black;
		margin-top: 48px;
		position: relative;
	}
	.purposes-item p:before {
		content: '';
		position: absolute;
		width: 35px;
		height: 1px;
		background: #3f7e77;
		left: 102px;
		top: -18px;
	}
</style>
