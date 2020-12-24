/*

Page - Страница новостей

Тип страницы - NEWS_PAGE

Используемые модули:


*/

<template>
    <div v-if="loadSucces">
        <NewsMainSection :newsData="NEWS_SLIDER.NEWS_ITEM" :listNews="listNews" />
        <!-- <p class="newsSection__text" :style="btnStyle" @click="showToggle">
            Все новости
        </p> -->
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
    import Preloader from "./../unitComponents/CommonElements/Preloader"

    import mixin from "../../utils/methodsMixin";
    import NewsMainSection from "../unitComponents/NewsMainSection";

    export default {
        name: "researchBodyPage",
        components: {
            NewsMainSection,
            Preloader
        },
        mixins: [mixin],
        methods: {
            showToggle: function () {
                this.listNews = {
                    height: 'fit-content'
                };
                this.btnStyle = {
                    opacity: 0,
                    margin: "0 auto",
                    height: 0
                };
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

            setTimeout(() => {
                this.loadSucces = true;
            }, 500)
        },
    };
</script>

<style scoped>

</style>