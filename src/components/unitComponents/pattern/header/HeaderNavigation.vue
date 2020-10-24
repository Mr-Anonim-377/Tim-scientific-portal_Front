<template>
    <nav class="header__nav">
        <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Участники</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "HeaderNavigation"
    }
</script>

<style>

    .header__nav ul {
        padding-top: 20px;
    }

    .header__nav ul,
    .footer__nav ul {
        list-style: none;
        display: flex;
        font-size: 20px;
        z-index: 1232323;
    }

    .header__nav ul li {
        margin: 40px;
        z-index: 123123213;
    }

    .header__search {
        display: flex;
        align-items: center;
        padding-top: 20px;
    }

    .header__search input {
        width: 220px;
        background-color: #E9F1DF;
        border: none
    }
    
</style>