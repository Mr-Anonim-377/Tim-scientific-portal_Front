/*

Section - Слайдер (страница исследования)

Принимает типы объектов:


*/

<template>
  <article>

    <div class="memberItem__image">
      <img src="" alt="">
    </div>

    <div class="memberItem__textContent">
      <p class="memberItem__memberName">Имя</p>
      <p>Вуз</p>
    </div>

    <!-- <ButtonElement/> -->



  </article>
</template>

<script>
// import ButtonElement from "./CommonElements/ButtonElement";


export default {
    name: "MemberItemSection",
    components: {
      // ButtonElement
    }

}
</script>

<style scoped>

  article {
    width: 209px;
    /* height: 305px; */
    margin-bottom: 50px
  }

  /* article:hover {
    background-color: #F8F5E6;
  } */

  .memberItem__image {
    width: 209px;
    height: 209px;
    border: 3px solid #3F7E77;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-self: center;
  }

  .memberItem__textContent {
    text-align: center;
  }

  .memberItem__memberName {
    font-size: 15px;
    font-weight: 700 ;
  }

  .memberItem__textContent > p:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .memberItem__textContent > p:last-child::before,
  .memberItem__textContent > p:last-child::after
   {
    content: "";
    margin: 10px;
    display: block;
    width: 35px;
    height: 1px;
    background-color: #3F7E77;
  }


</style>
