<template>
<!--  <img alt="Vue logo" src="https://www.timacad.ru/uploads/media/cache/image_sm_resize/uploads/images/20171115/1510754611_emblema.jpg">-->
<!--  <HelloWorld></HelloWorld>-->
<!--  <Get/>-->
  <Post/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Get from './components/Methods/getMethod'
import Post from './components/Methods/postMethod'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Get
    Post
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
}
</style>
