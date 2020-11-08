<template>
  <MainPage />
</template>

<script>
  import MainPage from "./components/routComponents/MainPage";
  export default {
    name: 'App',
    components: {
      MainPage
    }
  }
</script>

<style>

  * {
    box-sizing: border-box;
  }

  img {
    /*pointer-events: none;*/
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;

    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Roboto;
    background-color: #A2D199;
    box-sizing: border-box;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    min-width: 1300px;
    cursor: default;
  }

  a {
    z-index: 20;
  }

  .container {
    width: 1366px;
    margin: auto;
  }

  .content {
    min-height: calc(100vh - 377px)
  }

  ul li a:link,
  ul li a:visited,
  ul li a:active,
  ul li a:hover {
    text-decoration: none;
    color: black
  }
</style>