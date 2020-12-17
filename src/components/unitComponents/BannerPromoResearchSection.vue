<template>
    <section class="bannerPromoResearchSection">
        <div class="bannerPromoResearchSection-container">
            <h1>“Агротехнологии будущего”</h1>
            <h2>Ускоренная селекция высокоурожайных и устойчивых сортов и гибридов растений, обладающих заданными характеристиками качества.</h2>
            <buttonSection
                    :modifiers="modifiers.btn"
                    @click="showToggle"
                    :title="titleResearchBtn"
            />
            <div class="banner-btn__bottom"></div>
        </div>
    </section>
</template>

<script>
    import buttonSection from "./CommonElements/ButtonElement";

    export default {
        name: "bannerPromoResearchSection",
        components: {
            buttonSection
        },
        data() {
            return {
                modifiers: {
                    btn: ["background: #F8F5E6; margin: 226px auto 0 auto; color: #3F7E77;"]
                },
                visibleResearch: false,
                titleResearch:"“Агротехнологии будущего”",
                titleResearchBtn:'Смотреть',
            }
        },
        methods: {
            showToggle: function () {
                window.scrollTo({
                    top: 1000,
                    behavior: 'smooth'
                });
            },
        },
    }
</script>

<style scoped>
    .bannerPromoResearchSection{
        width: 100%;
        background: linear-gradient(0deg, rgba(51, 51, 51, 0.8), rgba(51, 51, 51, 0.8)), url("../../assets/image/research/backgroundReserch.png");
        background-size: cover;
    }
    .bannerPromoResearchSection-container{
        text-align: center;
        margin: auto;
        max-width: 1141px;
        align-items: center;
        padding: 250px  0 23px 0;
        color: #F8F5E6;
    }

    .bannerPromoResearchSection-container h2{
        font-weight: 900;
        font-size: 36px;
        line-height: 45px;
        margin: 18px auto;
    }
    .bannerPromoResearchSection-container h1{
        margin: 45px 0 0 0;
        position: relative;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.4em;
    }
    .bannerPromoResearchSection-container h1:before{
        content: "";
        position: absolute;
        width: 55px;
        height: 10px;
        background-image: url('../../assets/image/Line2.svg');
        right: 47.5%;
        top: -59px;
    }

    .banner-btn__bottom{
        transform: rotate(135deg);
        width: 20px;
        height: 20px;
        border-top: 3px solid #F8F5E6;
        border-right: 3px solid #F8F5E6;
        margin: 47px auto 0 auto;
        position: relative;
    }
    .banner-btn__bottom:before{
        content: "";
        transform: rotate(0deg);
        width: 15px;
        height: 15px;
        border-top: 3px solid rgba(248, 245, 230, 0.7);
        border-right: 3px solid rgba(248, 245, 230, 0.7);
        margin: 57px auto 0 auto;
        position: absolute;
        right: 5px;
        bottom: -6px;

    }
    .banner-btn__bottom:after{
        content: "";
        transform: rotate(0deg);
        width: 10px;
        height: 10px;
        border-top: 3px solid rgba(248, 245, 230, 0.5);
        border-right: 3px solid rgba(248, 245, 230, 0.5);
        margin: 57px auto 0 auto;
        position: absolute;
        right: 12px;
        bottom: -8px;
    }
</style>