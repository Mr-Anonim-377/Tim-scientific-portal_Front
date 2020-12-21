/*

Section - Слайдер (страница исследования)

Принимает типы объектов:


*/


<template>
  <!-- <h1>Секция Участников</h1> -->
  <div class="container">
    <section>

      <TitleSection title="Исследователи" headerVisible="asdas" />

      <ul :style="listHeight" :class='isDropDown ? "ul_grid" : "ul_flex"'>
        <li v-for="i in sectionData" :key="i">
            <MemberItemArticle :articleData="i"/>
        </li>
      </ul>

      <p v-if="isDropDown" :style="btnStyle" class="newsSection__text" @click ="showToggle">Показать еще</p>

    </section>
  </div>

</template>

<script>
  import TitleSection from "./TitleSection";
  import MemberItemArticle from "./MemberItemArticle";


  export default {
    name: "ResearcMembersSection",
    props: {
      sectionData: []
    },

    components: {
      TitleSection,
      MemberItemArticle,
      // ButtonElement
    },

    data() {
      return {
        isShow: false,
        isDropDown: this.sectionData > 4,
        // Стандартная высота списка
        listHeight: {height: "370px"}
      }
    },

    mounted() {
      console.log(this.sectionData)
    },

    methods: {
      showToggle: function () {

                this.listHeight = {
                  height:`${
                    // Рассчитываем высоту листа после расрытия
                    305 * (this.test.length / 4)

                  }px`
                  };

                this.btnStyle = {opacity:0,
                    // margin:"0 auto",
                    height: 0
                };

                console.log(this.listHeight);
            },
    },
  }
</script>

<style scoped>
  section {
    margin: 100px auto;
  }

  ul {
    list-style: none;
    margin-top: 100px;
    padding: 0 50px;

    overflow: hidden;

    transition: 0.5s ease-in-out;
  }

  .ul_grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

  }

  .ul_flex {
    display: flex;
    justify-content: center;
  }

  li {
    margin: 0 50px;
  }

  p {
    height: 18px;
    transition: 0.4s ease-in-out;
  }

</style>
