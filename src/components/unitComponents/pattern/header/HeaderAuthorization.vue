<template>
    <div class="header__autorization autorization">
        <img src="../../../../assets/image//auth.png" alt="">
        <button>Личный кабинет</button>
    </div>
</template>

<script>
    export default {
        name: "HeaderAuthorization"
    }
</script>

<style>
    .header__autorization {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        margin-top: 30px;
        margin-left: 20px;
    }

    .header__autorization img {
        width: 64px;
        position: absolute;
        top: -55px;
        right: -30px;
    }

    .header__autorization button {
        border: none;
        background-color: inherit;
        font-size: 20px;
    }
</style>