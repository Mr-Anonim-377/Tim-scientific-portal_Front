// СТРАНИЦА НОВОСТЕЙ

<template>
    <div v-if="loadSuccess">
        <!-- Секция новостей -->
        <NewsSection
            title-page="Новости программы"
            tag="all"
            :news-data="NEWS_SLIDER.NEWS_ITEM"
            :list-news="listNews"
        />

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
    name: 'ResearchBodyPage',
    components: {
        NewsSection,
        Preloader
    },
    mixins: [mixin],
    data() {
        return {
            btnStyle: {},
            listProperty: {},
            listNews: {},
            titleNews: 'Новости программы',
            visibleNews: true,
            loadSuccess: false
        };
    },

    async mounted() {
        await this.getModulesTest('NEWS_PAGE');
        setTimeout(() => {
            this.loadSuccess = true;
        }, 500);
    }
};
</script>
