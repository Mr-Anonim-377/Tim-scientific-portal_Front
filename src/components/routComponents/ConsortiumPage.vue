<template>
  <ConsortioumSlider v-if="loadSuccess" :moduleData="CONSORTIUM_CARUSEL"/>
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

  methods: {

  },

  async mounted() {

    await this.getModulesTest("CONSORTIUM");
    this.loadSuccess = true;
  },
};
</script>

<style>
</style>
