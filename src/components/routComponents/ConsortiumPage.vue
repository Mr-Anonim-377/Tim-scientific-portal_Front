/*

Page - Главная страница проекта

Тип страницы - CONSORTIUM

Используемые модули:
    -  CONSORTIUM_CARUSEL

*/

<template>
  <ConsortioumSlider v-if="loadSuccess" :moduleData="CONSORTIUM_CARUSEL.CONSORTIUM_MEMBER"/>
  <div v-else>
        <Preloader/>
  </div>
</template>

<script>
import ConsortioumSlider from "../unitComponents/ConsorciumSliderSection";
import testMixin from "../../utils/methodsMixin.js"
import Preloader from "./../unitComponents/CommonElements/Preloader"


export default {
  name: "ConsortiumMain",
  components: {
    ConsortioumSlider,
    Preloader
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
