
/*

Page - Страница Исследований

Данные страницы получаются по ID

Используемые модули:
    - BANNER
    - RESEARCH_ARRAY
*/

<template>
    <div v-if="loadSucces">
        <BannerPromoResearchSection :dataSection="BANNER" />

        <ResearchSection
            :listResearch="listResearch"
            :sectionData="RESEARCH_ARRAY.RESEARCH"
        />
        <!-- <p
            v-if="RESEARCH_ARRAY.RESEARCH.length > 4"
            class="researchSection__text"
            :style="btnStyle"
            @click="showToggle"
        >
            Смотреть еще
        </p> -->
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
import BannerPromoResearchSection from "../unitComponents/BannerPromoResearchSection";
import ResearchSection from "../unitComponents/ResearchSection";
import Preloader from "./../unitComponents/CommonElements/Preloader";

import mixin from "../../utils/methodsMixin";

export default {
    name: "ResearchPage",
    components: {
        ResearchSection,
        BannerPromoResearchSection,
        Preloader,
    },

    props: {
        pageId: String,
    },

    mixins: [mixin],

    methods: {
        showToggle: function () {
            this.listResearch = { height: "fit-content" };
            this.btnStyle = { opacity: 0, margin: "0 auto", height: 0 };
        },
    },
    data() {
        return {
            loadSucces: false,
            btnStyle: {},
        };
    },

    async mounted() {
        await this.getModulesTest("", this.pageId);

        this.loadSucces = true;

    },
};
</script>

<style scoped>
.researchSection__text {
    font-size: 15px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #3f7e77;
    margin: 100px auto 100px auto;
    text-align: center;
    cursor: pointer;
}
</style>
