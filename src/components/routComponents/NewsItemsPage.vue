<template>
  <section class="bannerSlider" v-if="loadSuccess">
    <TitleSection
        :title="this.titleNews"
        :headerVisible="true"
    />

    <p class="bannerSlider__years">2020</p>

    <NewsSliderSection/>

    <div></div>
  </section>
  <div v-else>
    <Preloader/>
  </div>
</template>

<script>
import Preloader from "./../unitComponents/CommonElements/Preloader"
import testMixin from "../../utils/methodsMixin.js";
import TitleSection from "../unitComponents/TitleSection";
import NewsSliderSection from "../unitComponents/NewsSliderSection"

// import NewsMain from "../unitComponents/NewsMainSection";
export default {
  mixins: [testMixin],
  props: {
    pageId: String
  },
  name: "NewItemsPage",
  components: {
    // NewsMain,
    TitleSection,
    NewsSliderSection,
    Preloader
  },
  data() {
    return {
      loadSuccess:false,
      titleNews: "Агротехнологии будущего",
    }
  },
  async mounted() {

    await this.getModulesTest('',this.pageId);
    setTimeout(()=>{
      this.loadSuccess = true;
    },500)
    console.log(this.modules)
  },
}
</script>

<style scoped>
.bannerSlider {
  max-width: 1140px;
  align-items: center;
  margin: 100px auto 170px auto;
}

.bannerSlider p {
  font-size: 15px;
  line-height: 150%;
  color: #3F7E77;
  margin-bottom: 20px;
}

.bannerSlider__years {
  position: relative;
  text-align: center;
  margin: 20px auto 50px auto;
}

.bannerSlider__years:before {
  content: "";
  position: absolute;
  width: 35px;
  height: 1px;
  background: #3f7e77;
  left: 490px;
  top: 11px;
}

.bannerSlider__years:after {
  content: "";
  position: absolute;
  width: 35px;
  height: 1px;
  background: #3f7e77;
  right: 490px;
  top: 11px;
}
</style>
