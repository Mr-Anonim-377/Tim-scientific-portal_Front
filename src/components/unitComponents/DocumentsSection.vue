<template>
  <section
    class="documentSection"
    v-for="dataDoc in data"
    :key="dataDoc"
  >
    <router-link
        style="text-decoration: none"
        :to="{ name: 'notFound' }"
    >
      <p class="documentSection__text-name">{{dataDoc.name}}</p>
    </router-link>
      <p>({{dataDoc.size}} КБ)</p>
      <p class="documentSection__text-data">от {{dataDoc.date}}</p>
  </section>
</template>

<script>
export default {
name: "DocumentsSection",
  props:{
  data: Object,
  }
}
</script>

<style scoped>
p{
  font-size: 15px;
  line-height: 18px;
  color:  #A6ABB4;
  margin: 0;
  height: auto;
}

.documentSection{
  margin: 20px 0 0 52px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.documentSection__text-name{
  color: #3F7E77;
  position: relative;
  margin-right: 7px;
  cursor: pointer;
  height: auto;
}

.documentSection__text-name:before{
  content: '';
  background-image: url("../../assets/image/PDF.svg");
  position: absolute;
  width: 20px;
  height: 20px;
  left: -28px;
  top: -1px;
}

.documentSection__text-data{
  width: 100%;
  margin: 13px 0 0 0;
}
</style>