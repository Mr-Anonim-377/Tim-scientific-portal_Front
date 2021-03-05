<template>
  <div v-if="loadSuccess">
    <section class="purposes-container">
      <PurposesSection style="margin: auto" :stileTitle="stileTitle.stile" :sectionData="PROJECT_GOALS" />
    </section>
    <section class="dynamics">
      <div class="dynamics-container">
        <TitleSection :title="titleDynamics" :headerVisible="true" :stileTitle="stileTitle.stileDynamics" />

        <div class="dynamics-block">
          <TitleSection :compactTitle="true" :title="titleItems" :headerVisible="true" :stileTitle="stileTitleDynamics.stile" />
          <div class="dynamics-block__line">
            <div class="dynamics-block__progress"></div>
          </div>
          <p class="progress-text__left">0%</p>
          <p class="progress-text__right">100%</p>
        </div>

      </div>
    </section>
  </div>

  <div v-else>
    <Preloader />
  </div>
</template>

<script>
import PurposesSection from '../unitComponents/PurposesSection';
import testMixin from "@/utils/methodsMixin";
import TitleSection from '../unitComponents/TitleSection';
import Preloader from './../unitComponents/CommonElements/Preloader';

export default {
name: "DynamicsPage",
  components:{
    PurposesSection,
    Preloader,
    TitleSection
  },
  mixins: [testMixin],

  async mounted() {
    await this.getModulesTest('MAIN_PAGE');
    setTimeout(() => {
      this.loadSuccess = true;
    }, 500);
  },
  data() {
    return {
      loadSuccess: false,
      stileTitle: {
        stile: ['font-size: 26px; letter-spacing: 0.01em; margin-bottom: 94px;'],
        stileDynamics: ['font-size: 26px; margin-bottom: 96px'],
      },
      titleDynamics: "Динамика достижения результатов программы создания и развития\n" +
          "научного центра мирового уровня «Агротехнологии будущего» на 2020-2025 годы",
      titleItems: "Доля молодых исследователей",
      stileTitleDynamics:{
        stile:['font-size: 20px; letter-spacing: 0.01px;']
      },
    }
  }
}
</script>

<style scoped>
p{
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #4D5668;
}

.purposes-container{
  width: 1200px;
  margin: 77px auto 0 auto;
}

.dynamics{
  text-align: center;
  width: 100%;
  background:  #F8F5E6;
  padding: 65px 0 40px 0;
  background-size: cover;
}

.dynamics-container{
  width: 1200px;
  margin: auto;
  padding-top: 20px;
}

.dynamics-block{
  display: flex;
  border-bottom: 2px solid #C4C4C4;
  padding-bottom: 33px;
  margin-top: 45px;
  flex-wrap: wrap;
}
.dynamics-block:last-child {
  border: none
}

.dynamics-block__line {
  width: 742px;
  height: 50px;
  background: rgba(77, 86, 104, 0.2);
  border: 1px solid #4D5668;
  box-sizing: border-box;
  border-radius: 10px;
  margin-left: auto;
  position: relative;
  overflow: hidden;
  margin-right: 47px;
}
.dynamics-block__line:after{
  content: '76%';
  position: absolute;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #F8F5E6;
  top: 10px;
}

.dynamics-block__progress {
  height: 100%;
  width: 70%;
  border-right: 28px solid transparent;
  border-bottom: 50px solid #3F7E77;
}

.progress-text__left{
  width: 71%;
  margin-top: 6px;
}

.progress-text__right{
  margin: 6px 37px 0 auto;
}
</style>