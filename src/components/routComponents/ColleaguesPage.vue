<template>
    <section class="colleaguesSection">
      <TitleSection
          :title="titleColleagues"
          :headerVisible="true"
          :stileTitle="stileTitle.stile"
      />

      <div class="colleagues-container">

        <account-navigation-section/>

        <div class="colleagues-block__inf">
          <h2>Мои коллеги</h2>

          <img src="">
          <div class="inf-text">
            <p>Ряженко Эдуард Вдадимирович </p>
            <span class="inf-text__years">46 лет / Профессор ботаники</span>
          </div>

          <img src="">
          <div class="inf-text">
            <p>Ряженко Эдуард Вдадимирович </p>
            <span class="inf-text__years">46 лет / Профессор ботаники</span>
          </div>

          <img src="">
          <div class="inf-text">
            <p>Ряженко Эдуард Вдадимирович </p>
            <span class="inf-text__years">46 лет / Профессор ботаники</span>
          </div>

        </div>
      </div>
    </section>
  </template>

<script>
import TitleSection from "@/components/unitComponents/TitleSection";
import AccountNavigationSection from "@/components/unitComponents/AccountNavigationSection";

export default {
name: "ColleaguesPage",
  components:{
    AccountNavigationSection,
    TitleSection
  },
  data() {
    return {
      titleColleagues: 'Коллеги',
      stileTitle:{
        stile:[
          'font-size: 26px'
        ]
      }
    }
  }
}
</script>

<style scoped>
h2, p, span{
  font-weight: bold;
  line-height: 29px;
  color: #3F7E77;
  font-size: 22px;
}

.colleaguesSection{
  max-width: 1356px;
  align-items: center;
  margin: 89px auto 100px auto;
}
.colleagues-container{
  display: flex;
  margin-top: 91px;
}

.colleagues-block__inf{
  margin-left: 130px;
  display: flex;
  flex-wrap: wrap;
}
.colleagues-block__inf img{
  width: 131px;
  height: 131px;
  border-radius: 50%;
  border: 3px solid #3F7E77;
  background: yellow;
  margin-bottom: 49px
}

.colleagues-block__inf p{
  margin: 0 0 5px 0;
  width: 100%;
}
.colleagues-block__inf h2{
  width: 100%;
  margin: 0 0 44px 0;
}

.inf-text{
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  margin: 0 0 106px 50px;
}

.inf-text__years{
  font-size: 12px;
  margin-left: 47px;
  position: relative;
}

.inf-text__years:before{
  content: '';
  position: absolute;
  width: 31px;
  height: 1px;
  background: #3F7E77;
  top: 16px;
  left: -49px;
}
</style>