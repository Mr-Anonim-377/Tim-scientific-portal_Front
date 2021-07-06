<template>
    <div v-if="loadSuccess">
        <section class="formSection">
            <TitleSection
                :title="title"
                :header-visible="true"
                :stile-title="stileTitle.stile"
            />

            <div class="form-container">
                <div class="form-nav">
                    <account-navigation-section />
                </div>

                <div class="form-content">
                    <div class="form-content-header">
                        <div class="form-content-image">
                            <img :src="PERSONAL_INFORMATION.IMAGE[0].image" />
                        </div>

                        <div class="form-block__information">
                            <h2>
                                {{
                                    PERSONAL_INFORMATION.PERSONAL_INFORMATION[0]
                                        .text
                                }}
                            </h2>
                            <p class="information-text">
                                -
                                {{
                                    PERSONAL_INFORMATION.RESEARCH_EDUCATION[0]
                                        .title
                                }}
                                -
                            </p>

                            <div class="form-block__edit">
                                <h3>Ф.И.О.</h3>

                                <p class="edit-text">
                                    {{
                                        PERSONAL_INFORMATION
                                            .PERSONAL_INFORMATION[0].text
                                    }}
                                </p>

                                <div
                                    v-if="
                                        PERSONAL_INFORMATION
                                            .PERSONAL_INFORMATION[0].title
                                    "
                                    class="form block__item"
                                >
                                    <h3>Электронная почта</h3>
                                    <p class="edit-text">
                                        {{
                                            PERSONAL_INFORMATION
                                                .PERSONAL_INFORMATION[0].title
                                        }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="form-block__information center">
                            <div class="form-block__edit">
                                <div
                                    v-if="
                                        PERSONAL_INFORMATION
                                            .PERSONAL_INFORMATION[0].title
                                    "
                                    class="form block__item"
                                >
                                    <h3>Ученая степень</h3>
                                    <p class="edit-text">
                                        {{
                                            PERSONAL_INFORMATION
                                                .PERSONAL_INFORMATION[0].title
                                        }}
                                    </p>
                                </div>

                                <div
                                    v-if="
                                        PERSONAL_INFORMATION.ACADEMIC_RANK[0]
                                            .title
                                    "
                                    class="form block__item"
                                >
                                    <h3>Ученое звание</h3>
                                    <p class="edit-text">
                                        {{
                                            PERSONAL_INFORMATION
                                                .ACADEMIC_RANK[0].title
                                        }}
                                    </p>
                                </div>

                                <div
                                    v-if="
                                        PERSONAL_INFORMATION
                                            .RESEARCH_EDUCATION[0].text
                                    "
                                    class="form block__item"
                                >
                                    <h3>Образование</h3>
                                    <p class="edit-text">
                                        {{
                                            PERSONAL_INFORMATION
                                                .RESEARCH_EDUCATION[0].text
                                        }}
                                    </p>
                                </div>

                                <div
                                    v-if="
                                        PERSONAL_INFORMATION
                                            .INTERESTING_ACTIVITY[0].title
                                    "
                                    class="form block__item"
                                >
                                    <h3>Область научных интересов</h3>
                                    <p class="edit-text">
                                        {{
                                            PERSONAL_INFORMATION
                                                .INTERESTING_ACTIVITY[0].title
                                        }}
                                    </p>
                                </div>

                                <div
                                    v-if="
                                        PERSONAL_INFORMATION.INTERESTING_ACTIVITY
                                    "
                                    class="form block__item"
                                >
                                    <h3>Публикационная активность</h3>
                                    <p class="edit-text">
                                        {{
                                            PERSONAL_INFORMATION
                                                .INTERESTING_ACTIVITY[0].text
                                        }}
                                    </p>
                                </div>

                                <div
                                    v-if="
                                        PERSONAL_INFORMATION
                                            .RESEARCH_EDUCATION[0].title
                                    "
                                    class="form block__item"
                                >
                                    <h3>Ученая степень</h3>
                                    <p class="edit-text">
                                        {{
                                            PERSONAL_INFORMATION
                                                .RESEARCH_EDUCATION[0].title
                                        }}
                                    </p>
                                </div>
                            </div>
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
        Preloader
    },
    mixins: [mixin],
    props: {
        pageId: String
    },

    data() {
        return {
            title: 'Личная информация',
            authorization: false,
            stileTitle: {
                stile: ['font-size: 26px']
            },
            loadSuccess: false,
            old: new String()
        };
    },

    async mounted() {
        /**
         * Получаем id профиля из адрессной строки
         */

        this.profileID = this.$route.params.pageId;

        /**
         * Получаем данные по id
         */
        await this.getModulesTest('', this.profileID);

        //eslint-disable-next-line
        const self = this;
        //eslint-disable-next-line
        debugger

        this.loadSuccess = true;
    },

    methods: {
        /* 
            Правильный падеж 
            Украл отсюда:
            https://realadmin.ru/coding/sklonenie-na-javascript.html */

        declOfNum(n, text_forms) {
            n = Math.abs(n) % 100;
            var n1 = n % 10;
            if (n > 10 && n < 20) {
                return text_forms[2];
            }
            if (n1 > 1 && n1 < 5) {
                return text_forms[1];
            }
            if (n1 == 1) {
                return text_forms[0];
            }
            return text_forms[2];
        }
    }
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
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
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
}

.form-block__information {
    width: 550px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}

.form-block__information.center {
    width: 100%;
}

.form-block__information.center .form-block__edit {
    width: 100%;
    padding: 0 225px 0 110px;
}

.information-text {
    position: relative;
    margin: 0 auto 4px;
    width: 100%;
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
    margin: 0 auto;
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
    text-align: center;
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
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #3f7e77;
}
</style>
