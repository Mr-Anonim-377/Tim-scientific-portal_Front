<template>
    <section class="header">
        <div class="header-item">
            <img src="../../../assets/image/Phone.svg">
            <router-link style="text-decoration: none" :to="{name:'notFound'}">
                <p class="textPhone">+7 (978) 645-25-13</p>
            </router-link>
            <img src="../../../assets/image/Mail.svg">
            <router-link style="text-decoration: none" :to="{name:'notFound'}">
                <p class="textMail">agrocons@gmail.com</p>
            </router-link>
            <router-link style="text-decoration: none" :to="{name:'Main'}">
                <img src="../../../assets/image/Logo2.svg">
            </router-link>
            <div contenteditable="true" class="header-research">
                <p>Поиск</p>
                <img src="../../../assets/image/Research.svg">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "headerItems"
    }
</script>

<style scoped>
    p{
      cursor: pointer;
        color: #3F7E77;
    }
    .header{
        width: 100%;
        background: #F8F5E6;
    }
    .header-item{
        padding: 16px 4px 18px 0;
        display: flex;
        text-align: center;
        margin: auto;
        max-width: 1144px;
        align-items: center;
    }
    .textPhone{
        margin: 0 39px 0 10px;
    }
    .textMail{
        margin: 0 152px 0 10px;
    }
    .header-research{
        width: 418px;
        height: 34px;
        background: #FFFFFF;
        border-radius: 20px;
        display: flex;
        position: relative;
        margin-left: 122px;
    }
    .header-research p{
        margin: auto 0 auto 21px;
    }
    .header-research img{
        position: absolute;
        right: 7px;
        top: 7px;
    }
</style>
