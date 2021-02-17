<template>
 <section class="documents">
   <TitleSection
       :title="titleDocuments"
       :headerVisible="true"
       :stileTitle="stileTitle.stile"
   />
   <div class="documents__lists">
     <div class="lists-text">
       <p>Категория материалов</p>
       <p class="lists-text__years">Год публикации</p>
     </div>

     <form>
       <select size="1" class="lists-item item-left">
         <option selected="selected">Выбрать...</option>
         <option>Документ 1</option>
         <option>Документ 2</option>
         <option>Документ 3</option>
         <option>Документ 4</option>
       </select>
     </form>

     <form>
       <select size="1" class="lists-item item-right">
         <option selected="selected">Выбрать...</option>
         <option>Документ 1</option>
         <option>Документ 2</option>
       </select>
     </form>

   </div>

   <div class="documents-block">
     <h2>Наименование первой категории материалов</h2>

     <div class="documents-block__text">
       <p class="documents-block__text-name">Название официального документа</p>
       <p>(450 КБ)</p>
       <p class="documents-block__text-data">от 01.01.2021</p>
     </div>

     <div class="documents-block__text">
       <p class="documents-block__text-name">Название официального документа</p>
       <p>(450 КБ)</p>
       <p class="documents-block__text-data">от 01.01.2021</p>
     </div>

     <div class="documents-block__text">
       <p class="documents-block__text-name">Название официального документа</p>
       <p>(450 КБ)</p>
       <p class="documents-block__text-data">от 01.01.2021</p>
     </div>

     <div class="documents-block__text">
       <p class="documents-block__text-name">Название официального документа</p>
       <p>(450 КБ)</p>
       <p class="documents-block__text-data">от 01.01.2021</p>
     </div>

   </div>

   <div class="documents-block block__border">
     <h2>Длинное наименование второй категории материалов на данном сайте, в которой содержатся официальные документы НЦМУ “Агротехнологии будущего”,
       чтобы каждый пользователь мог просматривать информацию в них.</h2>

     <div class="documents-block__text">
       <p class="documents-block__text-name">Название официального документа</p>
       <p>(450 КБ)</p>
       <p class="documents-block__text-data">от 01.01.2021</p>
     </div>

     <div class="documents-block__text">
       <p class="documents-block__text-name">Название официального документа</p>
       <p>(450 КБ)</p>
       <p class="documents-block__text-data">от 01.01.2021</p>
     </div>

     <div class="documents-block__text">
       <p class="documents-block__text-name">Название официального документа</p>
       <p>(450 КБ)</p>
       <p class="documents-block__text-data">от 01.01.2021</p>
     </div>

     <div class="documents-block__text">
       <p class="documents-block__text-name">Название официального документа</p>
       <p>(450 КБ)</p>
       <p class="documents-block__text-data">от 01.01.2021</p>
     </div>

   </div>
 </section>
</template>

<script>
import TitleSection from "../unitComponents/TitleSection";

export default {
  name: "DocumentsPage",
  components: {
    TitleSection
  },
  data() {
    return {
      titleDocuments: 'Официальные документы',
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
.documents{
  max-width: 1200px;
  align-items: center;
  margin: 55px auto 100px auto;
}
p{
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color:  #A6ABB4;
  margin: 0;
}
h2{
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #000000;
  width: 100%;
}

.documents__lists{
  border-bottom: 2px solid #C4C4C4;
  display: flex;
  flex-wrap: wrap;
  margin: 59px 0 0 0;
}

.documents__lists p{
  color: #000000;
}
.lists-text{
  display: flex;
  width: 100%;
}
.lists-text__years{
  margin-left: 234px;
}

.lists-item{
  background: #FFFFFF;
  border: 0.5px solid #A6ABB4;
  box-sizing: border-box;
  border-radius: 25px;
  color: #A6ABB4;
  padding: 0 10px 0 10px;
  margin: 15px 0 50px 0;
}
.lists-item :active,
:hover,
:focus{
  text-decoration: none;
  outline: none;
}

.item-left{
  width: 366px;
  height: 35px;
  margin-right: 30px;
}

.item-right{
  width: 161px;
  height: 35px;
}


.documents-block{
  border-bottom: 2px solid #C4C4C4;
  padding-bottom: 50px;
  margin-top: 44px;
}
.block__border{
  border: none;
}

.documents-block__text{
  margin: 20px 0 0 52px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.documents-block__text-name{
  color: #3F7E77;
  position: relative;
  margin-right: 7px;
}
.documents-block__text-name:before{
  content: url("../../assets/image/PDF.svg");
  position: absolute;
  width: 20px;
  height: 20px;
  left: -28px;
  top: -1px;
}

.documents-block__text-data{
  width: 100%;
  margin: 13px 0 0 0;
}

</style>