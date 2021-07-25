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
                        <!-- Аватар пользователя  -->
                        <div class="form-content-image">
                            <img :src="avatarUrl" alt="" />
                        </div>

                        <!--Основная информация-->
                        <div class="form-block__information">
                            <h2>
                                {{ fullName }}
                            </h2>
                            <p class="information-text">
                                -
                                {{ education }}
                                -
                            </p>

                            <div class="form-block__content">
                                <profileField
                                    :field-data="fullName"
                                    field-name="Ф.И.О."
                                />

                                <profileField
                                    :field-data="email"
                                    field-name="Электоронная почта"
                                />
                            </div>
                        </div>

                        <div class="form-block__information center">
                            <div class="form-block__content">
                                <!--Поля-->
                                <profileField
                                    v-for="field in centerFields"
                                    :key="field.fieldData"
                                    :field-data="field.fieldData"
                                    :field-name="field.fieldName"
                                />
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
import ProfileField from './ProfileField';

export default {
    name: 'QuestionnairePage',
    components: {
        ProfileField,
        AccountNavigationSection,
        TitleSection,
        Preloader,
    },
    mixins: [mixin],
    props: {
        pageId: String,
    },

    data() {
        return {
            loadSuccess: false,
            title: 'Личная информация',
            authorization: false,
            stileTitle: {
                stile: ['font-size: 26px'],
            },
            avatarUrl: String,
            email: String,
            fullName: String,
            centerFields: Array,
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

        /*
         * Парсим данные полей
         */
        this.fullName = this.PERSONAL_INFORMATION.PERSONAL_INFORMATION[0].text;
        this.education =
            this.PERSONAL_INFORMATION.PERSONAL_INFORMATION[0].title;
        this.email = this.PERSONAL_INFORMATION.PERSONAL_INFORMATION[0].title;
        this.avatarUrl = this.PERSONAL_INFORMATION.IMAGE[0].image;
        this.centerFields = [
            {
                fieldData: this.education,
                fieldName: 'Ученая степень',
            },
            {
                fieldData: this.PERSONAL_INFORMATION.ACADEMIC_RANK[0].title,
                fieldName: 'Ученое звание',
            },
            {
                fieldData: this.PERSONAL_INFORMATION.RESEARCH_EDUCATION[0].text,
                fieldName: 'Образование',
            },
            {
                fieldData:
                    this.PERSONAL_INFORMATION.INTERESTING_ACTIVITY[0].title,
                fieldName: 'Область научных интересов',
            },
            {
                fieldData:
                    this.PERSONAL_INFORMATION.INTERESTING_ACTIVITY[0].text,
                fieldName: 'Публикационная активность',
            },
            {
                fieldData:
                    this.PERSONAL_INFORMATION.RESEARCH_EDUCATION[0].title,
                fieldName: 'Ученая степень',
            },
        ];

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

.form-block__information.center .form-block__content {
    width: 100%;
    padding: 0 225px 0 110px;
}

.information-text {
    position: relative;
    margin: 0 auto 4px;
    width: 100%;
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

.form-block__content {
    margin: 0 auto;
    width: 60%;
}
.form-block__content h3 {
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
