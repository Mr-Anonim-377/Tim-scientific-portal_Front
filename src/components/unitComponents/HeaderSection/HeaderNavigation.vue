<template>
    <section class="header-navigation">
        <div class="header-navigation__item">
            <router-link style="text-decoration: none" :to="{name:'Consortium'}">
             <p>Консорциум</p>
            </router-link>
            <router-link style="text-decoration: none" :to="{name:'notFound'}">
                <p>Направления исследований</p>
            </router-link>
            <router-link style="text-decoration: none" :to="{name:'notFound'}">
                <p>База знаний</p>
            </router-link>
            <router-link style="text-decoration: none" :to="{name:'notFound'}">
                <p>Участники</p>
            </router-link>
            <div class="loginImg">
                <img src="../../../assets/image/Lk.svg">
                <router-link style="text-decoration: none" :to="{name:'notFound'}">
                    <p>Личный кабинет</p>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "headerNavigation"
    }
</script>

<style scoped>
p {
  cursor: pointer;
    text-decoration:none;
    color: #F8F5E6;
}
p:active,
p:hover{
    text-decoration: none;
    color: #666;
}
    .header-navigation{
        background: #3F7E77;
        width: 100%;
        color: #F8F5E6;
    }
    .header-navigation__item{
        padding: 16px 0 18px 1px;
        display: flex;
        text-align: center;
        margin: auto;
        max-width: 1144px;
        align-items: center;
        position: relative;
    }
    .header-navigation p{
        margin: 0 42px 0 0;
    }

    .loginImg{
        display: flex;
        position: absolute;
        right: 2px;
    }
    .loginImg img{
        margin-right: 14px;
    }
    .loginImg p{
        margin: auto;
    }
</style>
