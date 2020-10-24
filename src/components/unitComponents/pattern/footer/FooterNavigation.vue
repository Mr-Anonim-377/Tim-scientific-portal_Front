<template>
    <nav class="footer__nav">
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
        name: "FooterNavigation"
    }
</script>

<style>
    .footer__nav {
        width: 430px;
        display: flex;
        align-items: flex-start;
    }

    .footer__nav ul {
        flex-wrap: wrap;
        justify-content: center;

        padding: 0
    }

    .footer__nav ul li {
        margin: 20px 50px;
        text-align: center;
        flex: 1;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
    }
</style>