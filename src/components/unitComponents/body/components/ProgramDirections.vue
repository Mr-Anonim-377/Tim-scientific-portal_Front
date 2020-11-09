<template>
    <section class="directions-program">
        <div class="directions-program__img">
            <img :src="direction_program.img">
        </div>
        <div class="directions-program__description_border">
            <div class="directions-program__description">
                <p>{{direction_program.text}}</p>
            </div>
        </div>
        <div class="directions-program__btn_border">
            <div class="directions-program__btn">
                <p>Подробнее</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ProgramDirections",
        props:{
            direction_program: {}
        }
    }
</script>

<style>
    .directions-program{
        display: flex;
        flex-wrap: wrap;
        margin: 61px auto 61px auto;
        width: 1067px;
        align-items: center;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        padding: 25px 0 ;
    }

    .directions-program__img{
        width: 206px;
        height: 204px;
        align-items: center;
        justify-content: center;
        margin-right: 26px;
    }
    .directions-program__img img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .directions-program__description{
        width: 834px;
        height: 212px;
        background: #6BAA12;
        clip-path: polygon(0px 0px, 834px 0px, 834px 132px, 617px 132px, 480px 302px, 0px 230px);
        border: 1px solid black;
        font-weight: 700;
        font-size: 22px;
        color: #FDF5E6;
    }
    .directions-program__description_border{
        width: 834px;
        height: 212px;
        background-color: black;
        clip-path: polygon(0px 0px, 834px 0px, 834px 133px, 617px 133px, 481px 302px, 0px 230px);
    }

    .directions-program__description p{
        padding: 21px;
    }

    .directions-program__btn{
        clip-path: polygon(40px 36px, 300px -286px, 316px 220px, -44px 142px);
        position: relative;
        background: #468B3C;
        width: 280px;
        height: 69px;
        margin-left: auto;
        border: 1px solid black;
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        color: #FFFFFF;
    }
    .directions-program__btn p{
        margin-left: 70px;
    }
    .directions-program__btn_border{
        width: 281px;
        height: 69px;
        background-color: black;
        clip-path: polygon(40px 36px, 300px -286px, 316px 220px, -44px 142px);
        margin-left: auto;
        margin-top: -69px;
    }
</style>