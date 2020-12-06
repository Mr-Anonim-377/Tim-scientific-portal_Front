/*

Page - Главная страница проекта

Тип страницы - CONSORTIUM

Используемые модули:
    -  CONSORTIUM_CARUSEL

*/

<template>
  <ConsortioumSlider v-if="loadSuccess" :moduleData="CONSORTIUM_CARUSEL.CONSORTIUM_MEMBER"/>
</template>

<script>
import ConsortioumSlider from "../unitComponents/ConsorciumSliderSection";
import testMixin from "../../utils/methodsMixin.js"

export default {
  name: "ConsortiumMain",
  components: {
    ConsortioumSlider,
  },

  data() {
    return {
      consortioumData: [],
      loadSuccess: false,
    }
  },

  mixins: [testMixin],


  async mounted() {

    await this.getModulesTest("CONSORTIUM");
    this.loadSuccess = true;
  },
};
</script>

<style>
</style>
