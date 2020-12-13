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

        <!-- <NewsMainSection :newsData="NEWS_CAROUSEL.NEWS_ITEM.slice(0, 3)"/> -->

    </div>

    <div v-else>
        <Preloader/>
    </div>
</template>

<script>
    import testMixin from "../../utils/methodsMixin.js";

    import Preloader from "./../unitComponents/CommonElements/Preloader"

    import ResearchTextSection from "../unitComponents/ResearchTextSection";
    import ResearcMembersSection from "../unitComponents/ResearcMembersSection";
    import ResearchSliderSection from "../unitComponents/ResearchSliderSection";
    // import NewsMainSection from "../unitComponents/NewsMainSection";

    export default {
        name: "ResearchPage",
        components: {
            ResearchTextSection,
            ResearcMembersSection,
            ResearchSliderSection,
            // NewsMainSection,
            Preloader
        },
        mixins: [testMixin],
        data() {
            return {
                loadSuccess: true,
            };
        },

        async mounted() {
        //     // FIXME
        //     await this.getModulesTest("MAIN_PAGE");
        //     console.log(this.NEWS_CAROUSEL);
        //       setTimeout(()=>{
        //   this.loadSuccess = true;
        // },500)
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
