<template>
  <div class="section-header" :class="modifiers">
    <h1 class="section-header-text">{{ title }}</h1>
  </div>
  <div v-if:="sectionText" class="section-text">
    <p>{{sectionText}}</p>
  </div>
</template>

<script>

export default {
  name: "SectionHeader",
  props: {
    title: String,
    modifiers: Object,
    sectionText: String
  },
};

</script>

<style>

/* Стили */
.section-header {
  width: 1067px;
  height: 103px;
  margin: 40px auto;
  border: 4px solid #4b5f4f;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 47px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.12em;
}

.section-header-text {
  font-size: 40px;
  margin: 0;
}

/* Модификаторы */
.section-header_border-none {
  border: none;
}

.section-text {
  width: 1067px;
  margin: 52px auto;
  padding: 30px;
  border-left: 5px solid #676C6D;
  border-right: 5px solid #676C6D;
  text-align: center;
  font-size: 30px;
}

</style>