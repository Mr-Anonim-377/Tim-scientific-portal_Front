<template>
  <Header :modifiers="modifiers.header"/>
  <router-view/>
  <!-- <MainPageBody/> -->
<!--  <ProgramsPageBody/>-->
  <Footer/>
</template>

<script>
import Header from "../unitComponents/pattern/header/Header";
// import MainPageBody from "../unitComponents/body/controls/MainPageBody";
import Footer from "../unitComponents/pattern/footer/Footer";
import MainPageBody from "../unitComponents/body/controls/MainPageBody";
// import ProgramsPageBody from "../unitComponents/body/controls/ProgramsPageBody";

export default {
  name: "MainPage",
  components: {
    Header,
    // MainPageBody,
    // ProgramsPageBody,
    Footer
  },

  data() {
    return {
      modifiers: {
        header: ["header_border-none", "pizda"]
      }
    }
  }
}

</script>

<style>
.swiper_slider_button_next {
  position: relative;
  height: fit-content;
  left: 3%;
  margin-top: auto;
  margin-bottom: auto;
}

.swiper_slider_button_prev {
  position: relative;
  height: fit-content;
  right: 3%;
  margin-top: auto;
  margin-bottom: auto;
}
</style>