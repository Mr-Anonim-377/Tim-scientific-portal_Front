<template>
    <div v-if="loadSuccess">
        <section class="project">
            <TitleSection :title="title" :headerVisible="true" :stileTitle="stileTitle.stile" />

            <div class="project-container">
                <account-navigation-section />

                <div class="project-block__projects">
                    <h2>{{ RESEARCH_ARRAY ? 'Участие в исследованиях' : 'Информация отсутствует в системе' }}</h2>
                    <div v-if="RESEARCH_ARRAY">
                        <div class="project-item" v-for="dataProject in this.RESEARCH_ARRAY.RESEARCH" :key="dataProject">
                            <router-link style="text-decoration: none" :to="{ path: `/research/${dataProject._pageLink}` }">
                                <img :src="dataProject.image" />
                                <p>{{ dataProject.title }}</p>
                                <p class="project-text">{{ dataProject.date }}</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section></section>
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
    import Preloader from './../unitComponents/CommonElements/Preloader';
    import TitleSection from '@/components/unitComponents/TitleSection';
    import AccountNavigationSection from '@/components/unitComponents/AccountNavigationSection';
    import mixin from '../../utils/methodsMixin';
    export default {
        name: 'ProjectPage',
        components: {
            AccountNavigationSection,
            Preloader,
            TitleSection,
        },
        props: {
            pageId: String,
        },
        data() {
            return {
                title: 'Мои проекты',
                stileTitle: {
                    stile: ['font-size: 26px'],
                },
                loadSuccess: false,
            };
        },

        mixins: [mixin],

        async mounted() {
            /**
             * Получаем id профиля из адресной строки
             */

            this.profileID = this.$route.params.pageId;

            /**
             * Получаем данные по id
             */
            await this.getModulesTest('', this.profileID);
            this.loadSuccess = true;
        },
    };
</script>

<style scoped>
    p {
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #3f7e77;
        text-align: center;
        height: auto;
    }
    h2 {
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #3f7e77;
        width: 100%;
        margin: 4px 0 77px 0;
    }
    .project {
        max-width: 1200px;
        align-items: center;
        margin: 85px auto 100px auto;
    }
    .project-container {
        display: flex;
        margin-top: 93px;
    }

    .project-block__projects {
        margin-left: 127px;
        display: flex;
        flex-wrap: wrap;
    }
    .project-item {
        margin: 4px 26px;
        width: 210px;
        height: 412px;
        cursor: pointer;
    }
    .project-item img {
        width: 210px;
        height: 210px;
        border-radius: 50%;
        border: 3px solid #3f7e77;
        padding: 15px;
        margin-bottom: 11px;
    }

    .project-text {
        line-height: 0.5;
        position: relative;
    }
    .project-text:before {
        content: '';
        position: absolute;
        width: 35px;
        height: 1px;
        background: #3f7e77;
        left: 46px;
        top: 2px;
    }
    .project-text:after {
        content: '';
        position: absolute;
        width: 35px;
        height: 1px;
        background: #3f7e77;
        right: 46px;
        top: 2px;
    }
</style>
