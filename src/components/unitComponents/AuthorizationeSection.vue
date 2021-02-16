<template>
  <div class="error-windows" v-if="error">
    Ошибка Сервера!<br>
    Перезапустите страницу
  </div>
  <form autocomplete="on">
    <section class="authorization">
      <TitleSection
          :stileTitle="stileTitle.stile"
          :headerVisible="visibleAuthorization"
          :title="this.titleAuthorization"
      />
      <p class="error-authorization" v-if="error">*Неверный логин или пароль</p>
      <input
          type="text"
          placeholder="Логин / Email"
          class="authorization__inp"
      >
      <input
          type="password"
          placeholder="Пароль"
          class="authorization__inp"
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
      />
    </section>
  </form>
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
          '    width: 331px; height: 50px; margin: 34px 0 20px 0px;',
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
   font-size: 18px;
   line-height: 14px;
   color: #B1B1B1;
   margin-top: 40px;
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
   cursor: pointer;
 }

 .error-authorization{
   color: red;
   text-align: left;
 }

.error-windows {
  width: 340px;
  height: 77px;
  text-align: center;
  padding: 15px;
  border: 3px solid #3F7E77;
  background: #f8f5e6;
  border-radius: 10px;
  color: #3F7E77;
  position: absolute;
  left: 61%;
  top: 1%;
}
</style>