<template>
    <div v-if="loadSuccess">
        <section class="progress">
            <TitleSection :title="title" :headerVisible="true" :stileTitle="stileTitle.stile" />

            <div class="progress-container">
                <account-navigation-section />

                <div class="progress-block-inf__container">
                    <div class="progress-block-inf" v-for="dataProgress in this.ACHIEVEMENTS.COLLEGE" :key="dataProgress">
                        <div class="inf-img">
                            <img src="../../assets/image/progress-Img.svg" />
                        </div>
                        <div class="inf-text">
                            <p>{{ dataProgress.title }}</p>
                            <span class="inf-text__years">{{ dataProgress.date }}</span>
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

    .progress-block-inf {
        margin-left: 129px;
        display: flex;
        /* flex-wrap: wrap; */
    }
    .inf-img {
        box-sizing: border-box;
        width: 132px;
        min-height: 132px;
        border-radius: 50%;
        box-shadow: 0 0 1pt 1pt #3f7e77;
        margin-bottom: 47px;
    }
    .progress-block-inf img {
        width: 130px;
        height: 130px;
    }

    .progress-block-inf p {
        height: auto;
        width: 100%;
        margin: 0;
    }
    h2 {
        width: 100%;
        margin: 0 0 49px 0;
    }

    .inf-text {
        margin: 20px;
        overflow-y: auto;
    }

    .inf-text__years {
        display: block;
        margin-top: 15px;

        font-size: 15px;
        font-weight: bold;
        color: #3f7e77;
        position: relative;
        width: 100%;
    }
    .progress-block-inf__container {
        width: 100%;
    }
    /* .inf-text__years:after {
        content: '';
        position: absolute;
        width: 35px;
        height: 1px;
        background: #3f7e77;
        left: -39px;
        top: 9px;
    } */
</style>
