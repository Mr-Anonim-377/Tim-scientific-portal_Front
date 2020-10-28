<template>
  <SectionHeader title="Название направления исследования" section-text="Какое-то описание" />
  <div class="container">

    <ul class="research-items">
      <li v-for="item in researchItems" :key="item.name">
        <ResearchItem :name="item.name" :backgroundUrl="item.backgroundUrl" :textContent="item.textContent" />
      </li>
    </ul>

  </div>
</template>

<script>
  import ResearchItem from "./../components/ResearchItem"
  import SectionHeader from "./../components/SectionHeader"
  export default {
    name: "Direction",
    components: {
      SectionHeader,
      ResearchItem
    },
    methods: {

      addItem() {
        // Тут должен быть запрос, подтягивающий n-ое кол-во итемов
        for (let i = 0; i < 12; i++) {
          this.researchItems.push({
            name: "Fishered & Aquaculture",
            backgroundUrl: "#",
            textContent: "Белый люпин с хлебом и хреном, вкусный набор"
          })
        }
      },

      scroll() {
        window.onscroll = () => {
          let bottomOfWindow = document.documentElement.getBoundingClientRect().bottom;

           if (bottomOfWindow < document.documentElement.clientHeight + 100) {
             this.addItem();
           }
        };
      },
    },

    mounted() {
      this.scroll(this.researchItems);
    },

    data() {
      return {
        researchItems: [{
          name: "Fishered & Aquaculture",
          backgroundUrl: "#",
          textContent: "Белый люпин с хлебом и хреном, вкусный набор"
        }, {
          name: "Fishered & Aquaculture",
          backgroundUrl: "#",
          textContent: "Белый люпин с хлебом и хреном, вкусный набор"
        }, {
          name: "Fishered & Aquaculture",
          backgroundUrl: "#",
          textContent: "Белый люпин с хлебом и хреном, вкусный набор"
        }, {
          name: "Fishered & Aquaculture",
          backgroundUrl: "#",
          textContent: "Белый люпин с хлебом и хреном, вкусный набор"
        }, {
          name: "Fishered & Aquaculture",
          backgroundUrl: "#",
          textContent: "Белый люпин с хлебом и хреном, вкусный набор"
        }, {
          name: "Fishered & Aquaculture",
          backgroundUrl: "#",
          textContent: "Белый люпин с хлебом и хреном, вкусный набор"
        }, {
          name: "Fishered & Aquaculture",
          backgroundUrl: "#",
          textContent: "Белый люпин с хлебом и хреном, вкусный набор"
        },{
          name: "Fishered & Aquaculture",
          backgroundUrl: "#",
          textContent: "Белый люпин с хлебом и хреном, вкусный набор"
        }]
      }
    }
  }
</script>

<style scoped>
  .research-items {
    padding: 0 150px;
    margin-top: 100px;
    list-style: none;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));

    grid-column-gap: 72px;
    grid-row-gap: 65px;
  }
</style>
