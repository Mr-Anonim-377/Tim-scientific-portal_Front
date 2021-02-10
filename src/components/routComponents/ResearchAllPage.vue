// СТРАНИЦА ИССЛЕДОВАНИЙ У КОНКРЕТНОГО НАПРАВЛЕНИЯ

<template>
	<div v-if="loadSucces">
		<!-- Баннер с текстом и кнопками -->
		<BannerPromoResearchSection :dataSection="BANNER" />

		<!-- Список исследователей -->
		<ResearchSection :listResearch="listResearch" :sectionData="RESEARCH_ARRAY.RESEARCH" />
	</div>

	<div v-else>
		<Preloader />
	</div>
</template>

<script>
	import Preloader from './../unitComponents/CommonElements/Preloader';
	import mixin from '../../utils/methodsMixin';
	import BannerPromoResearchSection from '../unitComponents/BannerPromoResearchSection';
	import ResearchSection from '../unitComponents/ResearchSection';

	export default {
		name: 'ResearchPage',
		components: {
			ResearchSection,
			BannerPromoResearchSection,
			Preloader,
		},
		props: {
			pageId: String,
		},
		mixins: [mixin],
		methods: {
			showToggle: function() {
				this.listResearch = { height: 'fit-content' };
				this.btnStyle = { opacity: 0, margin: '0 auto', height: 0 };
			},
		},
		data() {
			return {
				loadSucces: false,
				btnStyle: {},
			};
		},
		async mounted() {
			await this.getModulesTest('', this.pageId);

			this.loadSucces = true;
		},
	};
</script>

<style scoped>
	.researchSection__text {
		font-size: 15px;
		line-height: 17px;
		text-decoration-line: underline;
		color: #3f7e77;
		margin: 100px auto 100px auto;
		text-align: center;
		cursor: pointer;
	}
</style>
