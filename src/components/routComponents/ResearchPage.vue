/*

Page - Страница исследования

Тип страницы - TEMP NEWS_PAGE

Используемые модули:
- TEMP

*/

<template>
    <div v-if="loadSuccess">

        <ResearchTextSection />

        <ResearcMembersSection />

        <ResearchSliderSection />

        <NewsMainSection :newsData="NEWS_CAROUSEL.NEWS_ITEM.slice(0, 3)"/>

    </div>
</template>

<script>
    import testMixin from "../../utils/methodsMixin.js";

    import ResearchTextSection from "../unitComponents/ResearchTextSection";
    import ResearcMembersSection from "../unitComponents/ResearcMembersSection";
    import ResearchSliderSection from "../unitComponents/ResearchSliderSection";
    import NewsMainSection from "../unitComponents/NewsMainSection";

    export default {
        name: "ResearchPage",
        components: {
            ResearchTextSection,
            ResearcMembersSection,
            ResearchSliderSection,
            NewsMainSection,
        },
        mixins: [testMixin],
        data() {
            return {
                loadSuccess: false,
            };
        },

        async mounted() {
            // FIXME
            await this.getModulesTest("MAIN_PAGE");
            console.log(this.NEWS_CAROUSEL);
            this.loadSuccess = true;
        }
    };
</script>

<style>

/* TEMP НОВОСТИ */

/*Новости*/
.newsSection__text {
    text-align: center;
}

.NewsSection {
    margin-bottom: 100px;
}

</style>
