<template>
    <section class="banner">
        <div class="container">
            <div class="banner__img">
                <h1>Агротехнологии будущего</h1>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "Banner",

    };
</script>

<style>
    .banner {
        background-color: #38C15E;
        border-bottom: 12px solid #2F653B;
        border-top: 12px solid #2F653B;
        height: 650px;
    }

    .banner__img {
        background-image: url("./../../../../assets/image/promo.png");
        height: 700px;
        background-repeat: no-repeat;
        background-size: contain;
        position: relative;
        width: 1200px;
        top: -80px;
        left: 100px;
        /* Пока откладываем вопрос с позицией картинки */


    }

    .banner__img h1 {
        position: absolute;
        /* top: 205px; */
        /* Отступ по фигме при условии подвинутой вверх картинки */
        font-family: 'Abel', sans-serif;
        top: 230px;
        right: 200px;
        font-size: 42px;
        width: 300px;
        text-align: center;
        text-shadow: 15px 7px 20px 0px rgba(0, 0, 0, 0.43);
        font-weight: normal;
        line-height: 54px;
    }
</style>
