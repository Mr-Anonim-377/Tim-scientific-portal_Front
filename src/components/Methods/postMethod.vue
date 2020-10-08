<template>
    <div class="container">
      <input
        class="inp-user"
        type="text"
        v-model="owner"
      >
      <input
        class="inp-user"
        type="text"
        v-model="repo"
      >
      <button class="btn">Отправить</button>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'

    export default {
        name: "postMethod",
      data() {
        return {
          repo: "",
          owner: ""
        }
      },
      methods:{
        ...mapActions([
          'POST_USER_FROM_API'
        ])
      },
      mounted() {
        this.POST_USER_FROM_API()
      }
    }

</script>

<style>
  .inp-user{
    width: 400px;
    height: 20px;
    background: aqua;
    margin-top: 20px;
  }
  .container{
    margin: auto;
    text-align: center;
    width: 500px;
    height: 500px;
    display: block;
  }
  .btn {
    text-align: center;
    color: red;
    font-size: 20px;
    margin-top: 20px;
    background: chocolate;
  }
</style>
