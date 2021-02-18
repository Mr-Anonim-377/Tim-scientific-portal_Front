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
         <option
             v-for="dataList in documentData.lists.categories"
             :key="dataList"
         >{{dataList}}</option>
       </select>
     </form>

     <form>
       <select size="1" class="lists-item item-right">
         <option selected="selected">Выбрать...</option>
         <option
             v-for="dataListYears in documentData.lists.years"
             :key="dataListYears"
         >{{dataListYears}}</option>
       </select>
     </form>

   </div>

   <div class="documents-block">
     <span>Наименование первой категории материалов</span>

     <documents-section
     :data="documentData.documents.oneDocs"
     />

   </div>

   <div class="documents-block block__border">
     <span>Длинное наименование второй категории материалов на данном сайте, в которой содержатся официальные документы НЦМУ “Агротехнологии будущего”,
       чтобы каждый пользователь мог просматривать информацию в них.</span>

     <documents-section :data="documentData.documents.twoDocs"/>

   </div>
 </section>
</template>

<script>
import TitleSection from "../unitComponents/TitleSection";
import DocumentsSection from "@/components/unitComponents/DocumentsSection";

export default {
  name: "DocumentsPage",
  components: {
    DocumentsSection,
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
      documentData:
          {
            lists: {
              categories: [
                'Документ 1',
                'Документ 2',
                'Документ 3',
                'Документ 4'
              ],
              years: [
                '2020',
                '2021'
              ],
            },
            documents: {
               oneDocs: [
                 {
                 name: 'Название официального документа 1',
                 date: '02.01.2021',
                 size: '450'
                 },
                 {
                   name: 'Название официального документа 2',
                   date: '05.02.2021',
                   size: '400'
                 },
                 {
                   name: 'Название официального документа 3',
                   date: '07.09.2020',
                   size: '350'
                 },
                 {
                   name: 'Название официального документа 4',
                   date: '09.11.2020',
                   size: '150'
                 }
               ],
              twoDocs: [
                    {
                      name: 'Название официального документа 1',
                      date: '02.01.2021',
                      size: '450'
                    },
                    {
                      name: 'Название официального документа 2',
                      date: '05.02.2021',
                      size: '400'
                    },
                    {
                      name: 'Название официального документа 3',
                      date: '07.09.2020',
                      size: '350'
                    }
                  ]
            },
          }
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

.documents__lists{
  border-bottom: 2px solid #C4C4C4;
  display: flex;
  flex-wrap: wrap;
  margin: 59px 0 0 0;
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
.lists-item :hover,
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

</style>