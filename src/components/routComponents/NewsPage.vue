// СТРАНИЦА НОВОСТЕЙ

<template>
    <div v-if="loadSuccess">
        <!-- Секция новостей -->
        <NewsSection :newsData="NEWS_SLIDER.NEWS_ITEM" :listNews="listNews" />

        <!-- NOTE временно новости не скрываются -->
        <!-- <p class="newsSection__text" :style="btnStyle" @click="showToggle">
            Все новости
        </p> -->
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
    import Preloader from './../unitComponents/CommonElements/Preloader';
    import mixin from '../../utils/methodsMixin';

    import NewsSection from '../unitComponents/NewsSection';

    export default {
        name: 'researchBodyPage',
        components: {
            NewsSection,
            Preloader,
        },
        mixins: [mixin],
        methods: {
            // FIXME добавить анимацию к списку
            // NOTE метод реализующий раскрывающийся список
            // showToggle: function() {
            // this.listNews = {
            // 	height: 'fit-content',
            // };
            // this.btnStyle = {
            // 	opacity: 0,
            // 	margin: '0 auto',
            // 	height: 0,
            // };
            // },
        },
        data() {
            return {
                btnStyle: {},
                listProperty: {},
                listNews: {},
                titleNews: 'Новости программы',
                visibleNews: true,
                loadSuccess: false,
            };
        },

        async mounted() {
            await this.getModulesTest('NEWS_PAGE');
            setTimeout(() => {
                this.loadSuccess = true;
            }, 500);
        },
    };
</script>
