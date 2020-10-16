<template>
    <SectionHeader title="Агротехнологии будущего Направления программы"/>
    <div class="container">
        <div class="line line-top"></div>
        <section class="directions-program">
            <div class="directions-program__img">
                <img src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2015/10/03143956/featured-Agro_PR_Trigo_em_Guarapuava.jpg">
            </div>
            <div class="directions-program__description_border">
                <div class="directions-program__description">
                    <p>Агробиотехнологии управления плодородием почв  России в интересах высокопродуктивного земледелия
                        минимального экологического риска</p>
                </div>
            </div>
            <div class="directions-program__btn_border">
                <div class="directions-program__btn">
                    <p>Подробнее</p>
                </div>
        </div>
        </section>
        <div class="line line-bottom"></div>
        <div class="line" ></div>
        <section class="directions-program">
            <div class="directions-program__img">
                <img src="https://agroexpert.ua/wp-content/uploads/2020/02/ya-16063-16697.jpg">
            </div>
            <div class="directions-program__description_border">
                <div class="directions-program__description">
                    <p>Ускоренная селекция высокоурожайных и устойчивых сортов и гибридов растений, обладающих заданными
                        характеристиками качества
                    </p>
                </div>
            </div>
            <div class="directions-program__btn_border">
                <div class="directions-program__btn">
                    <p>Подробнее</p>
                </div>
            </div>
        </section>
        <div class="line line-bottom"></div>
        <div class="line"></div>
        <section class="directions-program">
            <div class="directions-program__img">
                <img src="https://businessman.ru/static/img/n/1/3/9/8/2/1/4/i/1398214.jpg">
            </div>
            <div class="directions-program__description_border">
                <div class="directions-program__description">
                    <p>Новые цифровые технологии в сельском хозяйстве
                    </p>
                </div>
            </div>
            <div class="directions-program__btn_border">
                <div class="directions-program__btn">
                    <p>Подробнее</p>
                </div>
            </div>
        </section>
        <div class="line line-bottom"></div>
        <div class="line"></div>
        <section class="directions-program">
            <div class="directions-program__img">
                <img src="https://ssm22.ru/wp-content/uploads/2017/03/john-deere-tractor-farm-industrial-farming-1jdeere-construction-wallpaper-13.jpg">
            </div>
            <div class="directions-program__description_border">
                <div class="directions-program__description">
                    <p>Технологии переработки и валоризации малоценного сельскохозяйственного сырья и отходов
                        агропромышленного комплекса</p>
                </div>
            </div>
            <div class="directions-program__btn_border">
                <div class="directions-program__btn">
                    <p>Подробнее</p>
                </div>
            </div>
        </section>
        <div class="line line-bottom"></div>
        <div class="line"></div>
        <section class="directions-program">
            <div class="directions-program__img">
                <img src="https://navitrinu.ru/uploads/images/tb/539760_f_483_539760.png">
            </div>
            <div class="directions-program__description_border">
                <div class="directions-program__description">
                    <p>Создание безопасных, качественных, функциональных кормов и продуктов питания
                    </p>
                </div>
             </div>
            <div class="directions-program__btn_border">
                <div class="directions-program__btn">
                    <p>Подробнее</p>
                </div>
            </div>
        </section>
        <div class="line line-bottom__footer"></div>
    </div>
</template>

<script>
    import SectionHeader from "./../components/SectionHeader"
    export default {
        name: "ProgramsPageBody",
        components:{
            SectionHeader
        }
    }
</script>

<style>
    .directions-program{
        display: flex;
        flex-wrap: wrap;
        margin: 23px auto;
        width: 1067px;
        align-items: center;
    }

    .line{
        width: 1067px;
        height: 1px;
        background: black;
        margin: auto;
    }
    .line-bottom{
        margin-bottom: 62px;
    }
    .line-top{
        margin-top: 64px;
    }
    .line-bottom__footer{
        margin-bottom: 118px;
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
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 25px;
        align-items: center;
        text-align: left;
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
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
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