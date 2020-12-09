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

        <section class="NewsSection">
            <TitleSection title="Новости исследования" headerVisible="asd"></TitleSection>
            <div class="newsSection-container">
            <NewsMainSection v-for="NEWS_ITEM in NEWS_CAROUSEL.NEWS_ITEM.slice(0, 3)" :key="NEWS_ITEM"
                :newsData="NEWS_ITEM" />
        </div>
        <router-link style="text-decoration: none" :to="{ name: 'news' }">
            <p class="newsSection__text">Все новости</p>
        </router-link>

        </section>


    </div>
</template>

<script>
    import testMixin from "../../utils/methodsMixin.js";

    // TEMP
    import TitleSection from "../unitComponents/TitleSection"

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
            TitleSection
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
