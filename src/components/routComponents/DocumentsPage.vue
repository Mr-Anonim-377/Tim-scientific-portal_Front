<template>
	<div v-if="loadSuccess">
		<section class="documents">
			<TitleSection :title="titleDocuments" :headerVisible="true" :stileTitle="stileTitle.stile" />

			<div class="documents-block">
				<span>{{ DOCS_TITLE.TITLE[0].title }}</span>

				<documents-section :sectionData="DOCS" />
			</div>
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

				documentData: {
					documents: {
						oneDocs: [
							{
								name: 'Название официального документа 1',
								date: '02.01.2021',
								size: '450',
							},
							{
								name: 'Название официального документа 2',
								date: '05.02.2021',
								size: '400',
							},
							{
								name: 'Название официального документа 3',
								date: '07.09.2020',
								size: '350',
							},
							{
								name: 'Название официального документа 4',
								date: '09.11.2020',
								size: '150',
							},
						],
						twoDocs: [
							{
								name: 'Название официального документа 1',
								date: '02.01.2021',
								size: '450',
							},
							{
								name: 'Название официального документа 2',
								date: '05.02.2021',
								size: '400',
							},
							{
								name: 'Название официального документа 3',
								date: '07.09.2020',
								size: '350',
							},
						],
					},
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

	.documents__lists {
		/* border-bottom: 2px solid #c4c4c4; */
		display: flex;
		flex-wrap: wrap;
		margin: 59px 0 0 0;
	}

	.lists-text {
		display: flex;
		width: 100%;
	}

	.lists-text__years {
		margin-left: 234px;
	}

	.lists-item {
		background: #ffffff;
		border: 0.5px solid #a6abb4;
		box-sizing: border-box;
		border-radius: 25px;
		color: #a6abb4;
		padding: 0 10px 0 10px;
		margin: 15px 0 50px 0;
	}

	.lists-item :hover,
	:focus {
		text-decoration: none;
		outline: none;
	}

	.item-left {
		width: 366px;
		height: 35px;
		margin-right: 30px;
	}

	.item-right {
		width: 161px;
		height: 35px;
	}

	.documents-block {
		/* border-bottom: 2px solid #c4c4c4; */
		padding-bottom: 50px;
		/* margin-top: 44px; */
		width: 800px;
		margin: auto;
	}

	.block__border {
		border: none;
	}
</style>
