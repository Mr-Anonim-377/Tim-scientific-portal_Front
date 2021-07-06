<template>
    <section class="account__nav">
        <router-link style="text-decoration: none" :to="{ name: 'form' }">
            <div class="nav-btn">Личная информация</div>
        </router-link>
        <router-link style="text-decoration: none" :to="{ name: 'account' }">
            <div v-if="authorization" class="nav-btn">Аккаунт</div>
        </router-link>
        <router-link style="text-decoration: none" :to="{ name: 'project' }">
            <div v-if="authorization" class="nav-btn">Мои проекты</div>
            <div v-else class="nav-btn">Проекты</div>
        </router-link>
        <router-link style="text-decoration: none" :to="{ name: 'progress' }">
            <div class="nav-btn">Награды и премии</div>
        </router-link>
    </section>
</template>

<script>
export default {
    name: 'AccountNavigationSection',

    props: { profileData: Object },
    data() {
        return {
            authorization: false
        };
    }
};
</script>

<style scoped>
.account__nav {
    margin: 0;
}
.nav-btn {
    width: 200px;
    height: 35px;
    background: #f8f5e6;
    border-radius: 54px;
    margin-bottom: 12px;
    text-align: center;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #3f7e77;
    padding: 10px;
}
.nav-btn:hover {
    background: #3f7e77;
    color: #f8f5e6;
}
</style>
