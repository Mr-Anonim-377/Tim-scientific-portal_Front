/*

Page - Страница исследования

Данные с бэка получаем по this.pageId

Используемые модули:
    - BANNER
    - RESEARCH_MEMBER_ARRAY
    - RESEARCH_IMAGE_SLIDER
    - NOTE Новости пока с главной

*/

<template>
    <div v-if="loadSuccess">
        <ResearchTextSection :sectionData="BANNER"/>

        <ResearcMembersSection :sectionData="RESEARCH_MEMBER_ARRAY.RESEARCH_MEMBER"/>

        <ResearchSliderSection :sectionData="RESEARCH_IMAGE_SLIDER"/>

        <NewsMainSection :newsData="NEWS_CAROUSEL.NEWS_ITEM.slice(0, 3)" />
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
import testMixin from "../../utils/methodsMixin.js";

import Preloader from "./../unitComponents/CommonElements/Preloader";

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
        Preloader,
    },
    props: {
            pageId: String,
        },
    mixins: [testMixin],
    data() {
        return {
            loadSuccess: false,
        };
    },

    async mounted() {

        // NOTE Вызов для новостей
        await this.getModulesTest("MAIN_PAGE");
        
        await this.getModulesTest("", this.pageId);

        setTimeout(() => {
            this.loadSuccess = true;
        }, 500);
    },
};
</script>

<style>

/*Новости*/
.newsSection__text {
    text-align: center;
}

.NewsSection {
    margin-bottom: 100px;
}
</style>
