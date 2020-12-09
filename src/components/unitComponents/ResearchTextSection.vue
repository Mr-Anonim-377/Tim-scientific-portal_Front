/*

Section - Консорциум (главная страница)

Принимает типы объектов:


*/

<template>
  <section>
    <div class="backgroud-container">
      <div class="container">
        <TitleSection title="Название"></TitleSection>


        <h2 class="researchText__title">Заголовок</h2>
        <div class="flex-container">

          <div class="researchText-text">
            <p>Отдаленная гибридизация — это скрещивание растений, относящихся к разным видам. Отдаленные гибриды обычно
              стерильны, так как у них нарушается мейоз (два гаплоидных набора хромосом разных видов не могут
              конъюгировать) и, следовательно не образуются гаметы. Методика преодоления бесплодия у отдаленных гибридов
              была разработана в 1924 году советским ученым Г.Д. Карпеченко. Он поступил следующим образом. Вначале
              скрестил редьку (2n = 18) и капусту (2n = 18). Диплоидный набор гибрида был равен 18 хромосомам, из
              которых 9 хромосом были «редечными» и 9 — «капустными». Полученный капустно-редечный гибрид был
              стерильным, поскольку во время мейоза «редечные» и «капустные» хромосомы не конъюгировали. Далее с помощью
              колхицина Г.Д. Карпеченко удвоил хромосомный набор гибрида, полиплоид стал иметь 36 хромосом, при мейозе
              «редечные» (9 + 9) хромосомы конъюгировали с «редечными», «капустные» (9 + 9) с «капустными». Плодовитость
              была восстановлена. Таким способом были получены пшенично-ржаные гибриды (тритикале), пшенично-пырейные
              гибриды и др. Виды, у которых произошло объединение разных геномов в одном организме, а затем их кратное
              увеличение, называются аллополиплоидами.</p>

          </div>


          <div class="researchText-controls">
            <router-link :to="{name:'notFound'}">
              <ButtonElement />
            </router-link>

            <router-link :to="{name:'notFound'}">
              <ButtonElement />
            </router-link>

            <router-link :to="{name:'notFound'}">
              <ButtonElement />
            </router-link>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  import TitleSection from "./TitleSection"
  import ButtonElement from "./CommonElements/ButtonElement"

  export default {
    name: "ResearchTextSection",
    components: {
      TitleSection,
      ButtonElement
    },
    props: {
      sectionData: []
    },
  }
</script>

<style scoped>
  section {
    min-height: 674px;
    width: 100%;
    background: url("../../assets/image/TEMP/1.png") no-repeat center / cover;
    position: relative;
    z-index: 0;

  }

  .backgroud-container {
    padding: 100px 0;

    width: 100%;
    height: 100%;

    background-color: rgba(63, 126, 119, 0.8);
  }

  .flex-container {
    display: flex;
  }

  /* Текстовый контент */
  .researchText-text {
    width: 795px;
    color: #F8F5E6
  }

  .researchText-text p {
    font-size: 15px;
    /* color: white; */
    color: #F8F5E6;
    margin: 0 0 20px 0;
    max-width: 677px;

    /* TODO Установить для всех шрифтов */
    letter-spacing: 1px;

    line-height: 19px;
  }

  .researchText__title {
    font-weight: bold;
    font-size: 24px;
    color: white;
    color: #F8F5E6;


  }

  .researchText__title::after {
    display: block;
    content: "";

    width: 35px;
    height: 1px;
    background-color: #F8F5E6;

    margin: 30px 0;
  }

  /* Кнопки */

  .researchText-controls button {
    width: 100%;
    margin-bottom: 50px;

    /* FIXME придумать нормальную систему модификаторов, это говно полное */

    background: #F8F5E6;
    color: #3F7E77
  }
</style>
