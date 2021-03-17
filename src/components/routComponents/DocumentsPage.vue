<template>
	<div v-if="loadSuccess">
		<section class="documents">
			<TitleSection :title="titleDocuments" :headerVisible="true" :styleTitle="stileTitle.stile" />

			<div class="documents-block">
				<span>{{ DOCS_TITLE.TITLE[0].title }}</span>

				<documents-section :sectionData="DOCS" />
			</div>
			<router-link style="text-decoration: none" :to="{ name: 'auth' }">
				<h3>Документы консорциума</h3>
			</router-link>
		</section>
	</div>

	<div v-else>
		<Preloader />
	</div>
</template>

<script>
	import TitleSection from '../unitComponents/TitleSection';
	import DocumentsSection from '@/components/unitComponents/DocumentsSection';
	import mixin from '../../utils/methodsMixin';
	import Preloader from './../unitComponents/CommonElements/Preloader';

	export default {
		name: 'DocumentsPage',
		components: {
			DocumentsSection,
			TitleSection,
			Preloader,
		},
		mixins: [mixin],

		data() {
			return {
				titleDocuments: 'Официальные документы',
				loadSuccess: false,
				stileTitle: {
					stile: ['font-size: 26px'],
				},
			};
		},
		async mounted() {
			await this.getModulesTest('DOCUMENTS');
			setTimeout(() => {
				this.loadSuccess = true;
			}, 500);
		},
	};
</script>

<style scoped>
	h3 {
		color: rgb(63, 126, 119);
		width: 800px;
		margin: auto;
		text-decoration: underline;
		text-align: center;
		margin-top: 50px;
	}
	.documents {
		max-width: 1200px;
		align-items: center;
		margin: 55px auto 100px auto;
		min-height: calc(100vh - 275px);
		align-items: center;
	}

	p {
		font-size: 15px;
		line-height: 18px;
		color: #000000;
		margin: 0;
		height: auto;
	}

	span {
		font-size: 16px;
		line-height: 19px;
		color: #000000;
		margin: auto;
		display: block;
		text-align: center;
		margin-bottom: 44px;
		color: #3f7e77;
	}


	.documents-block {
		border-bottom: 2px solid #c4c4c4;
		padding-bottom: 50px;
		/* margin-top: 44px; */
		width: 800px;
		margin: auto;
	}
</style>
