<template>
    <div v-if="loadSuccess">
        <section class="formSection">
            <TitleSection :title="title" :headerVisible="true" :stileTitle="stileTitle.stile" />

            <div class="form-container">
                <div class="form-nav">
                    <account-navigation-section />
                </div>

                <div class="form-content">
                    <div class="form-content-header">
                        <div class="form-content-image">
                            <img :src="this.PERSONAL_INFORMATION.IMAGE[0].image" />
                        </div>
                        <div class="form-block__information">
                            <h2>{{ PERSONAL_INFORMATION.PERSONAL_INFORMATION[0].text }}</h2>
                            <p class="information-text">32 года / Профессор ботаники</p>

                            <div class="form-block__edit">
                                <h3>Ф.И.О.</h3>
                                <input type="text" placeholder="Как Вас зовут..." class="edit__inp" v-if="authorization" />

                                <p class="edit-text" v-else>{{ PERSONAL_INFORMATION.PERSONAL_INFORMATION[0].text }}</p>

                                <h3>Дата рождения</h3>
                                <input type="text" placeholder="Выбрать дату" class="edit__inp" v-if="authorization" />
                                <p class="edit-text" v-else>{{ PERSONAL_INFORMATION.PERSONAL_INFORMATION[0].date }}</p>

                                <h3>Специальность</h3>
                                <input type="text" placeholder="Выбрать специальность" class="edit__inp" v-if="authorization" />
                                <p class="edit-text" v-else>{{ PERSONAL_INFORMATION.RESEARCH_EDUCATION[0].title }}</p>

                                <!-- <h3>Образование</h3>
                                <input type="text" placeholder="Выбрать участника консорциума" class="edit__inp" v-if="authorization" />
                                <p class="edit-text" v-else>{{ PERSONAL_INFORMATION.RESEARCH_EDUCATION[0].text }}</p> -->
                            </div>

                            <!-- Пока решил убрать, чушь какая-то -->

                            <!-- <p class="form-block__text-project">
                Участие в проектах:
              </p>
              <div class="project-container">
                <div class="project-container-block">
                  <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
                    <img :src="1" />
                    <p>Проект</p>
                  </router-link>
                </div>
              </div> -->
                        </div>
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
                loadSuccess: false,
            };
        },
        mixins: [mixin],

        async mounted() {
            /**
             * Получаем id профиля из адрессной строки
             */

            this.profileID = this.$route.params.pageId;
            // console.log(this.$route.params.pageId);

            /**
             * Получаем данные по id
             */
            await this.getModulesTest('', this.profileID);

            this.loadSuccess = true;
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
        align-items: center;
        margin: 85px auto 100px auto;
    }
    .form-container {
        display: flex;
        margin-top: 94px;
        max-width: 1200px;
        margin: 50px auto;
        justify-content: space-around;
    }

    .form-content-header {
        /* margin-top: 40px; */
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        /* margin: 0; */
    }

    .form-content-image {
        width: 220px;
        height: 220px;
        border-radius: 50%;
        border: 3px solid #3f7e77;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: auto;
        height: 100%;
        background: #c4c4c4;
        background-size: contain;
        /* margin: 0 60px 0 130px; */
    }

    .form-block__information {
        width: 550px;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        /* justify-content: center; */
        /* margin: auto; */
    }

    .information-text {
        position: relative;
        margin: 0 auto 4px;
        width: 100%;
    }

    .information-text:before {
        content: '';
        position: absolute;
        width: 33px;
        height: 1px;
        background: #3f7e77;
        top: 9px;
        left: 137px;
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
        /* width: 762px; */
        width: 60%;
    }
    .form-block__edit h3 {
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        background-color: #3f7e77;
        position: relative;

        padding: 10px;
        color: white;
        border-radius: 20px;
        /* width: 220px; */
        text-align: center;
    }
    /* .form-block__edit h3:before { */
    /* content: '';
  position: absolute;
  width: 35px;
  height: 1px;
  background: #3f7e77;
  top: -16px; */
    /* } */

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
        text-align: center;
        /* width: 220px; */
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #3f7e77;
    }
</style>
