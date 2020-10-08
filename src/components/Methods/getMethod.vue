<template>
  <div class="container">
      <div
        v-bind:="data in DATA"
      >{{DATA.data}}
      </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "Format-getMethod",
      data() {
          return{
          }
      },
      computed: {
          ...mapGetters([
            'DATA'
          ]),
      },
      methods:{
          ...mapActions([
            'GET_DATA_FROM_API'
          ])
      },
      mounted() {
          this.GET_DATA_FROM_API()
      }
    }
</script>

<style>
.container{
  margin: auto;
  text-align: center;
  width: 500px;
  height: 500px;
  background: #42b983;
}
</style>
