<template>
    <div v-if="loadSuccess">
        <section class="progress">
            <TitleSection :title="title" :headerVisible="true" :stileTitle="stileTitle.stile" />

            <div class="progress-container">
                <account-navigation-section />

                <div class="progress-block__inf">
                    <h2>Мои Достижения</h2>
                    <div class="inf-img">
                        <img src="../../assets/image/progress-Img.svg" />
                    </div>
                    <div class="inf-text" v-for="dataProgress in this.ACHIEVEMENTS.ACTION" :key="dataProgress">
                        <p>{{ dataProgress.title }}</p>
                        <span class="inf-text__years">{{ dataProgress.date }}</span>
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
    import AccountNavigationSection from '@/components/unitComponents/AccountNavigationSection';
    import Preloader from './../unitComponents/CommonElements/Preloader';
    import mixin from '@/utils/methodsMixin';

    export default {
        name: 'ProgressPage',
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
                title: 'Достижения',
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

            // console.log(this.modules);
            this.loadSuccess = true;

            /**
             * Берем ACHIEVEMENTS
             */
            // console.log(this.ACHIEVEMENTS);
        },
    };
</script>

<style scoped>
    h2,
    p {
        font-weight: bold;
        font-size: 24px;
        line-height: 29px;
        color: #3f7e77;
    }

    .progress {
        max-width: 1200px;
        align-items: center;
        margin: 85px auto 100px auto;
    }
    .progress-container {
        display: flex;
        margin-top: 69px;
    }

    .progress-block__inf {
        margin-left: 129px;
        display: flex;
        flex-wrap: wrap;
    }
    .inf-img {
        width: 132px;
        height: 132px;
        border-radius: 50%;
        border: 3px solid #3f7e77;
        margin-bottom: 47px;
    }
    .progress-block__inf img {
        width: 130px;
        height: 130px;
    }

    .progress-block__inf p {
        height: auto;
        margin: 0;
    }
    h2 {
        width: 100%;
        margin: 0 0 49px 0;
    }

    .inf-text {
        display: flex;
        flex-wrap: wrap;
        margin: 0 0 86px 44px;
        overflow-y: auto;
    }

    .inf-text__years {
        margin: 0 0 0 45px;
        font-size: 15px;
        font-weight: bold;
        color: #3f7e77;
        position: relative;
        width: 100%;
    }
    .inf-text__years:after {
        content: '';
        position: absolute;
        width: 35px;
        height: 1px;
        background: #3f7e77;
        left: -39px;
        top: 9px;
    }
</style>
