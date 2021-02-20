<template>
  <section class="presentation">
    <TitleSection
        :title="titlePresentation"
        :headerVisible="true"
        :stileTitle="stileTitle.stile"
    />

      <div class="presentation-block">
          <div class="presentation-block__text">
            <a href="" download>
                <p class="presentation-block__text-name">Скачать презентацию НЦМУ</p>
              </a>
              <p>450 КБ</p>
              <p class="presentation-block__text-data">от 20.02.2020</p>
         </div>
      </div>

  </section>
</template>

<script>
import TitleSection from "../unitComponents/TitleSection";

export default {
name: "PresentationPage",
  components: {
    TitleSection
  },
  data() {
    return {
      titlePresentation: 'Презентация НЦМУ',
      stileTitle: {
        stile: [
          'font-size: 26px'
        ]
      },
    }
  }
}
</script>

<style scoped>
.presentation{
  max-width: 1200px;
  align-items: center;
  margin: 55px auto 100px auto;
}
p{
  font-size: 15px;
  line-height: 18px;
  color:  #000000;
  margin: 0;
  height: auto;
}
span{
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  border-bottom: 2px solid #000000;
}

.presentation-block{
  margin: 80px auto;
  display: flex;
}
.presentation-block__text{
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  width: 393px;
}

.presentation-block__text-name{
  color: #3F7E77;
  position: relative;
  cursor: pointer;
  height: auto;
  margin: 0 15px 0 76px;
}

.presentation-block__text-name:before{
  content: '';
  background-image: url("../../assets/image/Presentation.png");
  position: absolute;
  width: 20px;
  height: 20px;
  left: -28px;
  top: -1px;
}

.presentation-block__text-data{
  margin: 10px 0 0 76px;
  width: 100%;
}
</style>