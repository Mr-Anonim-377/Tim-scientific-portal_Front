/*

Page - Страница исследования

Тип страницы - TEMP NEWS_PAGE

Используемые модули:
    - TEMP

*/

<template>
    <div v-if="loadSuccess">
        <h1>TEST</h1>
    </div>
</template>

<script>
import testMixin from "../../utils/methodsMixin.js";

export default {
    name: "ResearchPage",
    components: {},
    mixins: [testMixin],
    data() {
        return {
            loadSuccess: true, //TEMP
        };
    },

    async mounted() {
        // await this.getModulesTest("RESEARCH_PAGE");
        this.loadSuccess = true;
    }
};
</script>

<style>
</style>
