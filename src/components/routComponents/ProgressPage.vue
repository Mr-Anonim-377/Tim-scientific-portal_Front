<template>
  <section class="progress">
    <TitleSection
        :title="title"
        :headerVisible="true"
        :stileTitle="stileTitle.stile"
    />

    <div class="progress-container">

      <account-navigation-section/>

      <div class="progress-block__inf">
        <h2>Мои Достижения</h2>
          <img src="">
        <div class="inf-text">
          <p>Награда за вклад в развитие систем рационального применения средств химической защиты </p>
          <span  class="inf-text__years">2020</span>
        </div>

        <img src="">
        <div class="inf-text">
          <p>Награда за вклад в развитие систем рационального применения средств химической защиты </p>
          <span class="inf-text__years">2020</span>
        </div>

        <img src="">
        <div class="inf-text">
          <p>Награда за вклад в развитие систем рационального применения средств химической защиты </p>
          <span class="inf-text__years">2020</span>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import TitleSection from '../unitComponents/TitleSection';
import AccountNavigationSection from "@/components/unitComponents/AccountNavigationSection";
export default {
name: "ProgressPage",
  components:{
    AccountNavigationSection,
    TitleSection
  },
  data() {
    return {
      title: 'Достижения',
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
h2, p{
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #3F7E77;
}

.progress{
  max-width: 1426px;
  align-items: center;
  margin: 85px auto 100px auto;
}
.progress-container{
  display: flex;
  margin-top: 69px;
}

.progress-block__inf{
  margin-left: 129px;
  display: flex;
  flex-wrap: wrap;
}
.progress-block__inf img{
  width: 132px;
  height: 132px;
  border-radius: 50%;
  border: 3px solid #3F7E77;
  background: yellow;
  margin-bottom: 47px;
}

.progress-block__inf p{
  height: auto;
  margin: 0;
}
h2{
  width: 100%;
  margin: 0 0 49px 0;
}

.inf-text{
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  margin: 0 0 50px 44px;
  overflow-y: auto;
}

.inf-text__years{
  margin: 10px 0 0 45px;
  font-size: 15px;
  font-weight: bold;
  color: #3F7E77;
  position: relative;
}
.inf-text__years:after {
  content: '';
  position: absolute;
  width: 35px;
  height: 1px;
  background: #3F7E77;
  top: 9px;
  right: 43px;
}
</style>