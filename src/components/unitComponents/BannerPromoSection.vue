<template>
    <section class="bannerPromoMainSection">
        <div class="bannerPromoMainSection-container">
            <h2>Научный центр мирового уровня</h2>
            <h1>“Агротехнологии будущего”</h1>
            <div class="banner-bottom">
                <div class="banner-bottom__arrow left-arrow"></div>
                <div class="banner-bottom__arrow right-arrow"></div>
                <img src="../../assets/image/Controller.svg">
                <img src="../../assets/image/VK.svg">
                <img src="../../assets/image/faceBook.svg">
                <img src="../../assets/image/Instagram.svg">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "BannerPromo"
    }
</script>

<style scoped>
    .bannerPromoMainSection{
        width: 100%;
        background: linear-gradient(0deg, rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url("../../assets/image/backgroundPromo.png");
        background-size: cover;
    }
    .bannerPromoMainSection-container{
        text-align: center;
        margin: auto;
        max-width: 1141px;
        align-items: center;
        padding: 134px  0 23px 0;
    }

    .bannerPromoMainSection-container h2{
        font-size: 30px;
        letter-spacing: 0.4em;
        color: #F8F5E6;
        margin: 45px 0 0 0;
        position: relative;
    }
    .bannerPromoMainSection-container h2:before{
        content: "";
        position: absolute;
        width: 55px;
        height: 10px;
        background-image: url('../../assets/image/Line2.svg');
        right: 47.5%;
        top: -59px;
    }


    .bannerPromoMainSection-container h1{
        font-weight: 900;
        font-size: 72px;
        line-height: 90px;
        color: #F8F5E6;
        margin: 8px 0 162px 0;
        letter-spacing: 0.11em;
    }
    .banner-bottom{
        text-align: center;
        margin-right: -25px;
        display: flex;
        align-items: center;
    }
    .banner-bottom img {
        margin: 0 17px 0 0;
    }

    .banner-bottom__arrow{
        width: 20px;
        height: 20px;
        border-top: 3px solid #F8F5E6;
        border-right: 3px solid #F8F5E6;
    }

    .left-arrow{
        transform: rotate(-135deg);
        margin-right: 33px;
    }
    .right-arrow{
        transform: rotate(45deg);
        margin-right: 40px;
    }
</style>
