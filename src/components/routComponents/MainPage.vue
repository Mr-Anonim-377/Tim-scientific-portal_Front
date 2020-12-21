/*

Page - Главная страница проекта

Тип страницы - MAIN_PAGE

Используемые модули:
    -  BANNER
    -  CONSORTIUM_TEAM
    -  PROGRAMS_RESULTS
    -  PROJECT_GOALS
    -  RESEARCH_DIRECTIONS
    -  NEWS_CAROUSEL

*/

<template>
    <div v-if="loadSuccess">

        <BannerPromoSection :sectionData="BANNER" />

        <ConsortiumMainSection :sectionData="CONSORTIUM_TEAM" />

        <ResultSection/>

        <!-- <SliderSection :sectionData="PROGRAMS_RESULTS" /> -->

        <PurposesSection :sectionData="PROJECT_GOALS" />

        <DirectionOfResearchSection/>

        <NewsMainSection :newsData="NEWS_CAROUSEL.NEWS_ITEM.slice(0, 3)"/>
        <router-link style="text-decoration: none" :to="{ name: 'news' }">
            <p class="newsSection__text">Все новости</p>
        </router-link>
    </div>

    <div v-else>
        <Preloader/>
    </div>
</template>

<script>

import testMixin from "../../utils/methodsMixin.js";

import Preloader from "./../unitComponents/CommonElements/Preloader"

import PurposesSection from "../unitComponents/PurposesSection";
import DirectionOfResearchSection from "../unitComponents/DirectionOfResearchSection";
import NewsMainSection from "../unitComponents/NewsMainSection";
import ConsortiumMainSection from "../unitComponents/ConsortiumMainSection";
import ResultSection from "../unitComponents/ResultSection"
// import SliderSection from "../unitComponents/SliderSection";
import BannerPromoSection from "../unitComponents/BannerPromoSection";

export default {

    name: "MainBody",
    components: {
        BannerPromoSection,
        ConsortiumMainSection,
        // ConsortiumTextSection,
        ResultSection,
        NewsMainSection,
        DirectionOfResearchSection,
        PurposesSection,
        // SliderSection,
        Preloader
    },
    mixins: [testMixin],

    async mounted() {

        await this.getModulesTest("MAIN_PAGE");
        setTimeout(()=>{
          this.loadSuccess = true;
        },500)
      console.log(this.NEWS_CAROUSEL.NEWS_ITEM[0]._pageLink)
    },

    data() {
        return {
            loadSuccess: false,
        };
    },
};
</script>

<style>
button {
    cursor: pointer;
}

/*Новости*/
.newsSection {
    text-align: center;
    max-width: 1141px;
    align-items: center;
    margin: 100px auto 52px auto;
    overflow: hidden;
}

.newsSection-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 98px -10px 0 -10px;
    height: 560px;
}

.newsSection-container :hover {
    background-color: #f8f5e6;
}

.newsSection-container :hover .news__btn {
    display: block;
    background-color: #3f7e77;
}

.newsSection__text {
    font-size: 15px;
    color: #3f7e77;
    /*margin-top: 49px;*/
    text-decoration-line: underline;
    margin: 49px auto 97px auto;
    text-align: center;
    cursor: pointer;
}

.purposes {
    text-align: center;
    margin: auto;
    max-width: 1141px;
    align-items: center;
    padding: 97px 0 136px 0;
}

.purposes-items {
    display: flex;
    flex-wrap: wrap;
    margin: 114px -34px 0 -34px;
}

.direction-of-research {
    text-align: center;
    width: 100%;
    background: linear-gradient(
            0deg,
            rgba(63, 126, 119, 0.8),
            rgba(63, 126, 119, 0.8)
        ),
        url("../../assets/image/background-dir.png");
    padding: 47px 0 40px 0;
}

.newsMain {
    text-align: center;
    max-width: 1141px;
    align-items: center;
    padding: 104px 0 97px 0;
    margin: auto;
}

.line {
    width: 35px;
    height: 1px;
    background: #3f7e77;
}

.newsMain-container {
    display: flex;
    margin-top: 98px;
}

.newsMain-container :hover {
    background-color: #f8f5e6;
}

.newsMain-container :hover .newsMain__btn {
    display: block;
    background-color: #3f7e77;
}

.newsMain__text {
    font-size: 15px;
    color: #3f7e77;
    margin-top: 49px;
    text-decoration-line: underline;
}

.consortiumMain {
    text-align: center;
    max-width: 1108px;
    align-items: center;
    padding: 92px 0 100px 0;
    margin: auto;
}

.consortium-container {
    display: flex;
    flex-wrap: wrap;
    margin: 100px -23px 0 -23px;
    justify-content: center;
}

.btn-consortium {
    width: 300px;
    height: 60px;
    background: #3f7e77;
    border-radius: 54px;
    margin: auto;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #f8f5e6;
    padding: 16px;
}
</style>
