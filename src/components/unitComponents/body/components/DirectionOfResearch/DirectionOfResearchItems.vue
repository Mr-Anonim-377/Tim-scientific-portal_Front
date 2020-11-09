<template>
    <div class="directions">
        <Swiper
                :slides-per-view="1"
                :space-between="50"
                :pagination="{ clickable: true }"
                :loopFillGroupWithBlank="true"
                :loop="true"
                :speed="500"
                navigation
        >
            <SwiperSlide>
                <div class="swiper-slide-control">
                    <div class="directions__description">
                        <h2>Рожь как смысл жизни</h2>
                        <p>Раскрыто значение пищевой продукции из зерна озимой ржи, которая должна стать неотъемлемой частью
                            здорового питания населения России. Зерно ржи включает богатейший спектр питательных веществ,
                            благодаря чему ржаной хлеб -полноценный продукт питания для человека. </p>
                    </div>
                    <Swiper class="swiper-width"
                            :spaceBetween="10"
                            :loopedSlides="5"
                            :slides-per-view="1"
                            :thumbs="{ swiper: Thumbs }"

                    >
                        <SwiperSlide class="swiper-slide">
                            <div class="directions__promo">
                                <div class="direction__text">
                                    <h2>Рожь как смысл жизни</h2>
                                    <p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="directions__promo">
                                <div class="direction__text">
                                    <h2>Рожь как смысл жизни</h2>
                                    <p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="directions__promo">
                                <div class="direction__text">
                                    <h2>Рожь как смысл жизни</h2>
                                    <p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="directions__promo">
                                <div class="direction__text">
                                    <h2>Рожь как смысл жизни</h2>
                                    <p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="directions__promo">
                                <div class="direction__text">
                                    <h2>Рожь как смысл жизни</h2>
                                    <p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div class="swiper-slide-control">
                    <div class="directions__description">
                        <h2>Рожь как смысл жизни</h2>
                        <p>Раскрыто значение пищевой продукции из зерна озимой ржи, которая должна стать неотъемлемой частью
                            здорового питания населения России. Зерно ржи включает богатейший спектр питательных веществ,
                            благодаря чему ржаной хлеб -полноценный продукт питания для человека. </p>
                    </div>
                    <Swiper class="swiper-width"
                            :spaceBetween="10"
                            :loopedSlides="5"
                            :slides-per-view="1"
                            :thumbs="{ swiper: Thumbs }"

                    >
                        <SwiperSlide>
                            <div class="directions__promo">
                                <div class="direction__text">
                                    <h2>Рожь как смысл жизни</h2>
                                    <p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="directions__promo">
                                <div class="direction__text">
                                    <h2>Рожь как смысл жизни</h2>
                                    <p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="directions__promo">
                                <div class="direction__text">
                                    <h2>Рожь как смысл жизни</h2>
                                    <p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="directions__promo">
                                <div class="direction__text">
                                    <h2>Рожь как смысл жизни</h2>
                                    <p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="directions__promo">
                                <div class="direction__text">
                                    <h2>Рожь как смысл жизни</h2>
                                    <p>Рожь издавна была кормилицей многих народов прикубанских земель. Она дает силу и бодрость</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>
    import SwiperCore, { Pagination, Navigation, Thumbs } from 'swiper';
    import 'swiper/components/navigation/navigation.scss'
    import 'swiper/components/thumbs/thumbs.scss'
    import 'swiper/cjs/components/thumbs/thumbs.js'

    import 'swiper/swiper-bundle.css';
    import {
        Swiper,
        SwiperSlide
    } from 'swiper/vue';

    SwiperCore.use([ Pagination, Navigation, Thumbs ]);
    export default {
        name: "DirectionOfResearch-directions",
        components: {
            Swiper,
            SwiperSlide,
        },
    }
</script>

<style>
    .swiper-width{
        width: 630px;
    }
    .directions {
        display: flex;
        justify-content: center;
        max-width: 1067px;
        overflow: auto;
    }

    .directions__description {

        background-color: rgba(38, 46, 47, 1);
        width: 421px;
        height: 453px;
        color: white;
        padding: 35px 30px;
        margin-right: 15px;
        color: rgba(248, 242, 242, 1);
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 23px;

    }

    .directions__promo {
        margin-left: auto;
        width: 630px;
        background-image: url("http://rsloboda-rt.ru/images/uploads/news/2019/7/3/0095ab7d2d840ee88c01a26b8a87bbc8.jpg");
        height: 453px;
        background-size: cover;
        background-position: center;
        position: relative;
    }


    .direction__text {
        height: 200px;
        width: 400px;
        background-color: rgba(38, 46, 47, 1);
        position: absolute;
        top: 22px;
        right: 49px;
        padding: 13px 20px;
        color: white;
        box-shadow: 15px 13px 10px rgba(0, 0, 0, 0.45);
    }

    .swiper-slide-control {
        justify-content: center;
        overflow: auto;
        display: flex;
    }
    .swiper-slide{
        margin-bottom: 30px;
    }
</style>