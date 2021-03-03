<template>
<section class="knowledgeBase">
  <TitleSection :stileTitle="stileTitle.stile" :headerVisible="visibleRecovery" :title="this.titleRecovery" />
  <div class="knowledgeBase-container">

    <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
    <div class="knowledgeBase-block">
      <div class="block-img">
        <img src="../../assets/image/knowledgeBase/knowledge1.svg">
      </div>
      <p>Базы данных в области агротехнологий</p>
    </div>
    </router-link>

    <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
    <div class="knowledgeBase-block">
      <div class="block-img">
        <img src="../../assets/image/knowledgeBase/knowledge2.svg">
      </div>
      <p>Тематические публикации</p>
    </div>
    </router-link>

    <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
    <div class="knowledgeBase-block">
      <div class="block-img">
        <img src="../../assets/image/knowledgeBase/knowledge3.svg">
      </div>
      <p>Аналитика</p>
    </div>
    </router-link>

    <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
    <div class="knowledgeBase-block">
      <div class="block-img">
        <img src="../../assets/image/knowledgeBase/knowledge4.svg">
      </div>
      <p>Библиотека учебно-методической литературы</p>
    </div>
    </router-link>

    <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
    <div class="knowledgeBase-block">
      <div class="block-img">
        <img src="../../assets/image/knowledgeBase/knowledge5.svg">
      </div>
      <p>Каталоги организаций</p>
    </div>
    </router-link>

    <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
    <div class="knowledgeBase-block">
      <div class="block-img">
        <img src="../../assets/image/knowledgeBase/knowledge6.svg">
      </div>
      <p>Материалы конференций</p>
    </div>
    </router-link>

    <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
    <div class="knowledgeBase-block">
      <div class="block-img">
        <img src="../../assets/image/knowledgeBase/knowledge7.svg">
      </div>
      <p>Исследования коллег</p>
    </div>
    </router-link>

    <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
    <div class="knowledgeBase-block">
      <div class="block-img">
        <img src="../../assets/image/knowledgeBase/knowledge8.svg">
      </div>
      <p>Агро-продукция</p>
    </div>
    </router-link>

    <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
    <div class="knowledgeBase-block">
      <div class="block-img">
        <img src="../../assets/image/knowledgeBase/knowledge9.svg">
      </div>
      <p>Фото/Видео материалы</p>
    </div>
    </router-link>

  </div>
</section>
</template>

<script>
import TitleSection from '../unitComponents/TitleSection';

export default {
name: "KnowledgeBasePage",
  components:{
    TitleSection
  },
  data() {
    return {
      visibleRecovery: true,
      titleRecovery: 'База знаний',
      stileTitle: {
        stile: ['font-size: 26px'],
      },
    };
  },
}
</script>

<style scoped>
a {
  z-index: 10;
}

p{
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #3F7E77;
}
.knowledgeBase{
  width: 1200px;
  margin: 50px auto 100px auto;
  padding: 38px 25px 38px 25px;
  z-index: 10;
}

.knowledgeBase-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 44px -20px 0 -20px;
  z-index: 10;
}

.knowledgeBase-block{
  width: 378px;
  height: 200px;
  background: #F8F5E6;
  box-shadow: 0px 0px 15px rgba(77, 86, 104, 0.25);
  border-radius: 10px;
  text-align: center;
  padding: 35px 0 29px 0;
  margin: 10px 10px;
  z-index: 10;
}

.block-img{
  width: 80px;
  height: 80px;
  margin: 0 auto 24px auto;
}
</style>