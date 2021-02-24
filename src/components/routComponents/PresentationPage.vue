<template>
	<div v-if="loadSuccess">
		<section class="presentation">
			<div class="presentation-block-container">
				<TitleSection :title="titlePresentation" :headerVisible="true" :stileTitle="stileTitle.stile" />

				<div class="presentation-block">
					<div class="presentation-block__text">
						<a :href="DOCS.DOC[0].link" download>
							<p class="presentation-block__text-name">Скачать презентацию НЦМУ</p>
						</a>
						<p class="presentation-block__text-data">от 20.02.2020</p>
					</div>
				</div>
			</div>
		</section>
	</div>
	<div v-else>
		<Preloader />
	</div>
</template>

<script>
	import TitleSection from '../unitComponents/TitleSection';
	import mixin from '../../utils/methodsMixin';
	import Preloader from './../unitComponents/CommonElements/Preloader';

	export default {
		name: 'PresentationPage',
		components: {
			TitleSection,
			Preloader,
		},
		mixins: [mixin],
		data() {
			return {
				titlePresentation: 'Презентация НЦМУ',
				stileTitle: {
					stile: ['font-size: 26px'],
				},
				loadSuccess: false,
			};
		},
		async mounted() {
			await this.getModulesTest('POWER_POINT');
			// console.log(this.DOCS);
			setTimeout(() => {
				this.loadSuccess = true;
			}, 500);
			// console.log(this.DOCS);
		},
	};
</script>

<style scoped>
	.presentation {
		max-width: 1200px;
		align-items: center;
		margin: 55px auto 100px auto;
	}

	section {
		min-height: calc(100vh - 275px);
		display: flex;
		justify-content: center;
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
		border-bottom: 2px solid #000000;
	}

	.presentation-block {
		margin: 80px auto;
		display: flex;
	}
	.presentation-block__text {
		margin: auto;
		display: flex;
		flex-wrap: wrap;
		width: 393px;
	}

	.presentation-block__text-name {
		color: #3f7e77;
		position: relative;
		cursor: pointer;
		height: auto;
		margin: 0 15px 0 100px;
	}

	.presentation-block__text-name:before {
		content: '';
		background-image: url('../../assets/image/Presentation.png');
		position: absolute;
		width: 20px;
		height: 20px;
		left: -28px;
		top: -1px;
	}

	.presentation-block__text-data {
		margin: 10px;
		width: 100%;
		text-align: center;
	}
</style>
