/*

Page - Страница новостей

Тип страницы - NEWS_PAGE

Используемые модули:
    - NEWS_SLIDER

*/

<template>
    <div v-if="loadSucces">
        <section class="newsSection">
            <TitleSection
                :headerVisible="visibleNews"
                :title="this.titleNews"
            />
            <div class="newsSection-container" :style="listNews">
                <newsMainSection
                    v-for="data in NEWS_SLIDER.NEWS_ITEM"
                    :key="data"
                    :newsData="data"
                    style="margin-bottom: 52px"
                />
            </div>
            <p class="newsSection__text" :style="btnStyle" @click="showToggle">
                Все новости
            </p>
        </section>
    </div>
</template>

<script>

import mixin from "../../utils/methodsMixin";
import TitleSection from "../unitComponents/TitleSection";
import newsMainSection from "../unitComponents/NewsMainSection";

export default {
    name: "researchBodyPage",
    components: {
        newsMainSection,
        TitleSection,
    },
    mixins: [mixin],
    methods: {
        showToggle: function () {
            let height = 500 * Math.ceil(this.NEWS_SLIDER.NEWS_ITEM.length / 3);
            this.listNews = { height: `${height}px` };
            this.btnStyle = { opacity: 0, margin: "0 auto", height: 0 };
        },
    },
    data() {
        return {
            btnStyle: {},
            listProperty: {},
            titleNews: "Новости программы",
            visibleNews: true,
            loadSucces: false,

        };
    },

    async mounted() {
        await this.getModulesTest("NEWS_PAGE");
        this.loadSucces = true;
    },
};
</script>

<style scoped>
.newsSection-container {
    display: flex;
    margin: 98px -10px 52px -10px;
    justify-content: center;
    flex-wrap: wrap;
    height: 477px;
    overflow: hidden;
}
</style>
