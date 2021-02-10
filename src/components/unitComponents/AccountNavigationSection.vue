<template>
  <section class="account__nav">
    <router-link
        style="text-decoration: none"
        :to="{ name: 'form' }"
    >
    <div class="nav-btn">Личная информация</div>
    </router-link>
    <router-link
        style="text-decoration: none"
        :to="{ name: 'account' }"
    >
    <div class="nav-btn">Аккаунт</div>
    </router-link>
    <router-link
        style="text-decoration: none"
        :to="{ name: 'project' }"
    >
    <div class="nav-btn" v-if="authorization">Мои проекты</div>
      <div class="nav-btn" v-else>Проекты</div>
    </router-link>
    <router-link
        style="text-decoration: none"
        :to="{ name: 'colleagues' }"
    >
    <div class="nav-btn">Коллеги</div>
    </router-link>
    <router-link
        style="text-decoration: none"
        :to="{ name: 'progress' }"
    >
    <div class="nav-btn">Достижения</div>
    </router-link>
  </section>
</template>

<script>
export default {
name: "AccountNavigationSection",
  data() {
    return {
      authorization: false,
    }
  }
}
</script>

<style scoped>
.account__nav{
  margin: 0;
}
.nav-btn{
  width: 200px;
  height: 35px;
  background: #F8F5E6;
  border-radius: 54px;
  margin-bottom: 12px;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #3F7E77;
  padding: 10px;
}
.nav-btn:hover {
  background: #3F7E77;
  color: #F8F5E6;
}
</style>