<template>
	<div v-if="loadSucces">
		<section class="formSection">
			<TitleSection :title="title" :headerVisible="true" :stileTitle="stileTitle.stile" />

			<div class="form-container">
				<!-- Прокидываем полученные данные в навигацию -->
				<account-navigation-section
					:profileData="{
						RESEARCH_ARRAY: this.RESEARCH_ARRAY,
						PERSONAL_INFORMATION: this.PERSONAL_INFORMATION,
						ACHIEVEMENTS: this.ACHIEVEMENTS,
						COLLEGES: this.COLLEGES,
					}"
				/>

				<img src="" />

				<div class="form-block__information">
					<h2>Вострухин Игорь Александрович</h2>
					<p class="information-text">32 года / Профессор ботаники</p>
					<p class="form-block__text-project">
						Участие в проектах:
					</p>
					<div class="project-container">
						<div class="project-container-block">
							<router-link style="text-decoration: none" :to="{ name: 'notFound' }">
								<img src="" />
								<p>Проект</p>
							</router-link>
						</div>
					</div>
				</div>
			</div>

			<div class="form-block__edit">
				<h3>Ф.И.О.</h3>
				<input type="text" placeholder="Как Вас зовут..." class="edit__inp" v-if="authorization" />
				<p class="edit-text" v-else>Вострухин Игорь Александрович</p>

				<h3>Дата рождения</h3>
				<input type="text" placeholder="Выбрать дату" class="edit__inp" v-if="authorization" />
				<p class="edit-text" v-else>31.01.1989</p>

				<h3>Специальность</h3>
				<input type="text" placeholder="Выбрать специальность" class="edit__inp" v-if="authorization" />
				<p class="edit-text" v-else>Профессор ботаники</p>

				<h3>Образование</h3>
				<input type="text" placeholder="Выбрать участника консорциума" class="edit__inp" v-if="authorization" />
				<p class="edit-text" v-else>РГАУ МСХА им.Тимирязева</p>
			</div>
		</section>
	</div>

	<div v-else>
		<Preloader />
	</div>
</template>

<script>
	import TitleSection from '../unitComponents/TitleSection';
	import Preloader from './../unitComponents/CommonElements/Preloader';
	import AccountNavigationSection from '@/components/unitComponents/AccountNavigationSection';
	import mixin from '../../utils/methodsMixin';

	export default {
		name: 'QuestionaryPage',
		components: {
			AccountNavigationSection,
			TitleSection,
			Preloader,
		},
		props: {
			pageId: String,
		},
		data() {
			return {
				title: 'Личная информация',
				authorization: false,
				stileTitle: {
					stile: ['font-size: 26px'],
				},
				loadSucces: true,
			};
		},
		mixins: [mixin],

		async mounted() {
			/**
			 * Получаем данные по id
			 */
			await this.getModulesTest('', this.pageId);
			this.loadSucces = true;
		},
	};
</script>

<style scoped>
	h2 {
		width: 100%;
		font-weight: bold;
		font-size: 24px;
		line-height: 29px;
		color: #3f7e77;
		margin: 0 0 7px 0;
	}
	p {
		font-weight: bold;
		font-size: 12px;
		line-height: 19px;
		color: #3f7e77;
	}

	.formSection {
		max-width: 1417px;
		align-items: center;
		margin: 85px auto 100px auto;
	}
	.form-container {
		display: flex;
		margin-top: 94px;
	}

	img {
		width: 220px;
		height: 220px;
		background: #c4c4c4;
		margin: 0 60px 0 130px;
		border-radius: 50%;
		border: 3px solid #3f7e77;
	}

	.form-block__information {
		display: flex;
		flex-wrap: wrap;
	}

	.information-text {
		position: relative;
		margin: 0 0 4px 47px;
	}
	.information-text:before {
		content: '';
		position: absolute;
		width: 33px;
		height: 1px;
		background: #3f7e77;
		top: 7px;
		left: -47px;
	}

	.form-block__text-project {
		font-size: 15px;
		line-height: 18px;
		color: #3f7e77;
		position: relative;
		margin: 0 auto 11px auto;
		width: 100%;
		height: 20px;
	}

	.project-container {
		display: flex;
		overflow-x: auto;
		margin: 0 -10px 29px -10px;
		width: 100%;
	}
	.project-container::-webkit-scrollbar {
		width: 1px;
		height: 10px;
	}
	.project-container::-webkit-scrollbar-track {
		height: 1px;
	}
	.project-container::-webkit-scrollbar-track-piece {
		height: 1%;
		background-color: rgba(63, 126, 119, 0.5);
		border-radius: 23px;
	}
	.project-container::-webkit-scrollbar-thumb {
		border-radius: 23px;
		background: #3f7e77;
		height: 9px;
	}

	.project-container-block {
		width: 61px;
		margin: 0 10px;
	}
	.project-container-block img {
		width: 60px;
		height: 60px;
		padding: 2px;
		border: 3px solid #3f7e77;
		border-radius: 50%;
		margin: 0;
	}
	.project-container-block p {
		font-weight: 600;
		font-size: 9px;
		line-height: 11px;
		text-align: center;
		color: #3f7e77;
		width: 61px;
		max-height: 22px;
		overflow: hidden;
		margin: 0 auto 13px auto;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.form-block__edit {
		margin: 49px auto 0 auto;
		width: 762px;
	}
	.form-block__edit h3 {
		font-weight: bold;
		font-size: 15px;
		line-height: 18px;
		color: #3f7e77;
		position: relative;
	}
	.form-block__edit h3:before {
		content: '';
		position: absolute;
		width: 35px;
		height: 1px;
		background: #3f7e77;
		top: -16px;
	}

	.edit__inp {
		width: 416px;
		height: 34px;
		background: #f8f5e6;
		border-radius: 20px;
		padding: 0 14px;
		border: none;
		font-size: 15px;
		line-height: 18px;
		color: rgba(63, 126, 119, 0.5);
		margin: 3px 0 19px 0;
	}
	.headerSection__inp :active,
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

	.edit-text {
		margin: 20px 0 30px 5px;
		font-weight: bold;
		font-size: 16px;
		line-height: 19px;
		color: #3f7e77;
	}
</style>
