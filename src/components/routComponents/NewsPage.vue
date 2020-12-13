/*

Page - Страница новостей

Тип страницы - NEWS_PAGE

Используемые модули:
    - NEWS_SLIDER

*/

<template>
    <div v-if="loadSucces">
                <newsMainSection
                        :newsData="NEWS_SLIDER.NEWS_ITEM"
                        :listNews="listNews"
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
            this.listNews = { height: 'fit-content' };
            this.btnStyle = { opacity: 0, margin: "0 auto", height: 0 };
        },
    },
    data() {
        return {
            btnStyle: {},
            listProperty: {},
            listNews: {},
            titleNews: "Новости программы",
            visibleNews: true,
            loadSucces: false,

        };
    },

    async mounted() {
        await this.getModulesTest("NEWS_PAGE");
      setTimeout(()=>{
        this.loadSucces = true;
      },500)
      console.log(  this.NEWS_SLIDER.NEWS_ITEM)
    },
};
</script>

<style scoped>

</style>
