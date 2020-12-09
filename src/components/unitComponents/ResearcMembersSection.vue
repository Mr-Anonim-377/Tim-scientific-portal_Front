/*

Section - Слайдер (страница исследования)

Принимает типы объектов:


*/


<template>
  <!-- <h1>Секция Участников</h1> -->
  <div class="container">
    <section>

      <TitleSection title="Исследователи" headerVisible="asdas" />

      <ul :style="listHeight">
        <li v-for="i in test" :key="i">
            <MemberItemArticle />
        </li>
      </ul>

      <p :style="btnStyle" class="newsSection__text" @click ="showToggle">Показать еще</p>

    </section>
  </div>

</template>

<script>
  import TitleSection from "./TitleSection"
  import MemberItemArticle from "./MemberItemArticle"

  export default {
    name: "ResearcMembersSection",
    props: {
      sectionData: []
    },

    components: {
      TitleSection,
      MemberItemArticle
    },

    data() {
      return {
        isShow: false,
        test: [1,2,3,4,5,6,7,8],

        // Стандартная высота списка
        listHeight: {height: "405px"}
      }
    },

    methods: {
      showToggle: function () {

                this.listHeight = {
                  height:`${
                    // Рассчитываем высоту листа после расрытия
                    405 * (this.test.length / 4)

                  }px`
                  };

                // FIXME - поправить исчезновение кнопки
                //
                this.btnStyle = {opacity:0,
                    margin:"0 auto",
                    height:0
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

    transition: height 1s;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

  }

  li {
    margin: auto;
  }

  p {
    transition: 1s;
  }

</style>
