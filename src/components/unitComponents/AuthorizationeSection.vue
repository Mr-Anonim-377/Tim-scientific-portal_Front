<template>
  <section class="authorization">
    <TitleSection
        :stileTitle="stileTitle.stile"
        :headerVisible="visibleAuthorization"
        :title="this.titleAuthorization"
    />
    <input
        type="text"
        placeholder="Логин / Email"
        class="authorization__inp"
        v-model="this.login"
    >
    <input
        type="text"
        placeholder="Пароль"
        class="authorization__inp inp-indent"
        v-model="this.password"
    >
    <router-link
        style="text-decoration: none"
        :to="{ name: 'notFound' }"
    >
      <p class="authorization-text">Забыли пароль?</p>
    </router-link>
    <ButtonElement
        :modifiers="modifiers.btn"
        :title="titleAuthorizationBtn"
        @click="this.logIn()"
    />
    <router-link
        style="text-decoration: none"
        :to="{ name: 'notFound' }"
    >
      <p>Зарегистрироваться</p>
    </router-link>
  </section>
</template>

<script>
import TitleSection from './TitleSection'
import ButtonElement from "@/components/unitComponents/CommonElements/ButtonElement";
import testMixin from '../../utils/methodsMixin.js';
import axios from "axios";
export default {
name: "AuthorizationeSection",
  components:{
    ButtonElement,
    TitleSection
  },
  mixins: [testMixin],
  data () {
    return{
      login:'',
      password:'',
      isAuth:Boolean,
      visibleAuthorization: true,
      titleAuthorization: 'Вход в личный кабинет',
      modifiers: {
        btn: [
          '    width: 331px; height: 50px; margin: 34px 0 3px 0px;',
        ],
      },
      titleAuthorizationBtn: 'Войти',
      stileTitle:{
        stile:[
            'font-size: 22px'
        ]
      }
  }
  },
  methods:{
    logIn(){
      axios.get("http://localhost:80/utils/ping",
      {
        headers: {'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'},
        auth: {
          username: this.login,
          password: this.password
        }})
    .then((data) => {
            return data;
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>

<style scoped>
p{
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #3F7E77;
  cursor: pointer;
}
 .authorization{
   width: 376px;
   height: 393px;
   background: #FFFFFF;
   border-radius: 20px;
   margin: auto;
   padding: 38px 25px 0 25px;
 }


 .authorization__inp {
   width: 330px;
   /* height: 34px; */
   font-size: 15px;
   line-height: 14px;
   color: #B1B1B1;
   margin-top: 32px;
   border: 0;
   outline: 0;
   background: transparent;
   border-bottom: 1px solid rgba(77, 86, 104, 0.2);
 }
 .inp-indent{
   margin-top: 22px;
 }
 .authorization__inp :active,
 :hover,
 :focus {
   outline: 0;
   outline-offset: 0;
 }
 ::-webkit-input-placeholder {
   color: #B1B1B1;
   font-weight: 500;
   font-size: 12px;
   line-height: 18px;
 }
 .authorization-text{
   font-size: 10px;
   line-height: 12px;
   color: #5C5C5C;
   text-align: left;
 }
</style>