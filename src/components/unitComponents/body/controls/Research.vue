<template>
  <div class="container">
    <SectionHeader title="Название исследования" />

    <nav>
      <ul>
        <li><a href="#">Обучающие программы</a></li>
        <li><a href="#">Записаться на событие</a></li>
        <li><a href="#">Подписаться на новости</a></li>
      </ul>
    </nav>

    <div class="img">
      <img src="../../../../assets/image/ResearchImage.png" />
    </div>

    <SectionHeader title="Исследователи" />

    <ResearchersList :researchersListData="researchersListData" />


    <SectionHeader title="Об исследовании" :section-text="this.aboutResearch" />

    <SuccessModule />

    <SectionHeader title="Новостная лента" />
    <News />

    <SectionHeader title="Галлерея" />

    <Gallery :galleryItems="galleryItems"/>
  </div>
</template>

<script>
  import SectionHeader from "./../components/SectionHeader";
  import Gallery from "./../components/Gallery";
  import SuccessModule from "./../components/SuccessModule";
  import ResearchersList from "./../components/Researchers/ResearchersList";
  import News from "./../components/News/News";

  export default {
    components: {
      SectionHeader,
      Gallery,
      SuccessModule,
      News,
      ResearchersList
    },

    data() {
      return {
        researchersListData: [{
            name: "Александр Федотов",
            id: 1,
          },
          {
            name: "Александр Федотов",
            id: 1,
          },
          {
            name: "Александр Федотов",
            id: 1,
          },
          {
            name: "Александр Федотов",
            id: 1,
          },
          {
            name: "Александр Федотов",
            id: 1,
          },
          {
            name: "Александр Федотов",
            id: 1,
          }, {
            name: "Александр Федотов",
            id: 1,
          }, {
            name: "Александр Федотов",
            id: 1,
          }
        ],
        aboutResearch: "Сельскохозяйственная классификацияне вполне сходится с делением, принимаемым ботаниками. Характеристика разных сортов пшеницы определяется формами вегетативных органов, стебля и колоса, а также различием во внешнем виде зёрен и их химическим составом. Настоящие, или собственно пшеницы дают соломину упругую и гибкую, не разбиваемую на части при молотьбе, колос на соломине сидит крепко, зёрна в нём голые и  при молотьбе легкоотделяются от облегающих их цветочных плёнок.",
        galleryItems: [{
          url: "https://media1.giphy.com/media/DmlL4eylwUs2vT4Rt3/giphy.webp"
        }, {
          url: "https://media3.giphy.com/media/BrrZgi1MlEMU1zLrg8/200.webp"
        }, {
          url: "https://media0.giphy.com/media/lnUtMYdN2bYAXZQwa1/200.webp"
        }, {
          url: "https://media2.giphy.com/media/Z9PXJCkKSzMKCCpF4v/giphy.webp"
        }, {
          url: "https://media2.giphy.com/media/Z9PXJCkKSzMKCCpF4v/giphy.webp" 
        }, {
          url: "https://media1.giphy.com/media/DmlL4eylwUs2vT4Rt3/giphy.webp"
        }, {
          url: "https://media1.giphy.com/media/DmlL4eylwUs2vT4Rt3/giphy.webp"
        }, {
          url: "https://media1.giphy.com/media/DmlL4eylwUs2vT4Rt3/giphy.webp"
        }, {
          url: "https://media1.giphy.com/media/DmlL4eylwUs2vT4Rt3/giphy.webp"
        }]
      }
    }
  };
</script>

<style scoped>
  * {
    --container: 1063px;
  }

  nav {
    margin: 40px auto;
    width: var(--container);
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
  }

  .img {
    margin: auto;
    width: var(--container);

  }
</style>>
