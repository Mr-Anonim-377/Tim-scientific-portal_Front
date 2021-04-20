<template>
  <section class="admin">
<!--    Навигация-->
    <AdminNavigation/>

<!--      Шапка и кнопка добавить-->
        <button class="btn_add">Добавить новость</button>
    <div class="admin-headers">
      <span class="admin-headers__number">№</span>
      <p class="admin-headers__left">Название</p>
      <p class="admin-headers__right">Действия</p>
    </div>

<!--    список-->
      <AdminItem
      :sectionData="items"
      />

  </section>
</template>

<script>
import AdminItem from "@/components/unitComponents/AdminItem";
import AdminNavigation from "@/components/unitComponents/AdminNavigation";
export default {
name: "AdminPanelPage",
  components: {AdminNavigation, AdminItem},
  data() {
    return {
          items: [
            { text: 'Новость «Агротехнологии будущего» на мастер-классе для агропредприятий' },
            { text: 'Новость обучение по новой программе ДПО.' },
            { text: 'Новость круглый стол «Агротехнологии будущего»' },
            { text: 'Новость «Агротехнологии будущего» на мастер-классе для агропредприятий' },
            { text: 'Новость обучение по новой программе ДПО.' },
            { text: 'Новость круглый стол «Агротехнологии будущего»' },
            { text: 'Новость «Агротехнологии будущего» на мастер-классе для агропредприятий' },
            { text: 'Новость обучение по новой программе ДПО.' },
            { text: 'Новость круглый стол «Агротехнологии будущего»' },
          ],
    }
    }
}
</script>

<style scoped>
.admin {
  max-width: 1200px;
  align-items: center;
  margin: 55px auto 100px auto;
  min-height: calc(100vh - 275px);
}

.admin-headers{
  display: flex;
  margin-top: 10px;
  background: #3f7e77;
  padding: 15px 0;
  color: white;
}

.admin-headers__number{
  margin: 0 0 0 14px;
}

.admin-headers__left{
  margin: auto auto auto 35px;
}

.admin-headers__right{
  margin: auto 134px auto auto;
}

button{
  padding: 4px 10px;
  margin: 0 2px;
  height: 33px;
  color: white;
  font-weight: bold;
  border: 1px solid #f8f5e6;
  border-radius: 10px;
}

button:hover{
  color: #3f7e77;
  background: white;
  border: 1px solid #3f7e77;
}

.btn_add{
  background: #3f7e77;
  padding: 4px 20px;
  height: 35px;
}

</style>