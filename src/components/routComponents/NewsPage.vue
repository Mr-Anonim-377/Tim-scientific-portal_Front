/*

Page - Страница новостей

Тип страницы - NEWS_PAGE

Используемые модули:
    - NEWS_SLIDER

*/

<template>
    <div v-if="loadSucces">
                <newsMainSection
                        :style="listNews"
                        :newsData="NEWS_SLIDER.NEWS_ITEM"
                />
            <p class="newsSection__text" :style="btnStyle" @click="showToggle">
                Все новости
            </p>
    </div>
</template>

<script>

import mixin from "../../utils/methodsMixin";
import newsMainSection from "../unitComponents/NewsMainSection";

export default {
    name: "researchBodyPage",
    components: {
        newsMainSection,
    },
    mixins: [mixin],
    methods: {
        showToggle: function () {
            let height = 650 * Math.ceil(this.NEWS_SLIDER.NEWS_ITEM.length / 3);
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
    p{
        cursor: pointer;
    }
</style>
