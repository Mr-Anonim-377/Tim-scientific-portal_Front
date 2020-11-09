<template>
    <div class="container">
      <PreLoader v-if="isPreloader"></PreLoader>
        <section class="direction-on-research">
            <Directions v-if="!isPreloader"/>
            <div class="research-directions-item">
                <Swiper :slides-per-view="5"
                        :space-between="30"
                        :speed="500"
                        :slidesPerGroup="5"
                        :loop="true"
                        :freeMode="true"
                >
                    <SwiperSlide @click="onSlideChange" class="swiper-slide-item">
                        <div class="news-filters-item hexagon">
                            <div class="news-filters-item-hexagon">
                                <div class="hexagon-img"></div>
                            </div>
                        </div>
                    </SwiperSlide >
                        <SwiperSlide @click="onSlideChange" class="swiper-slide-item">
                            <div class="news-filters-item hexagon">
                                <div class="news-filters-item-hexagon">
                                    <div class="hexagon-img"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    <SwiperSlide @click="onSlideChange" class="swiper-slide-item">
                        <div class="news-filters-item hexagon">
                            <div class="news-filters-item-hexagon">
                                <div class="hexagon-img"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide @click="onSlideChange" class="swiper-slide-item">
                        <div class="news-filters-item hexagon">
                            <div class="news-filters-item-hexagon">
                                <div class="hexagon-img"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide @click="onSlideChange" class="swiper-slide-item">
                        <div class="news-filters-item hexagon">
                            <div class="news-filters-item-hexagon">
                                <div class="hexagon-img"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide @click="onSlideChange" class="swiper-slide-item">
                        <div class="news-filters-item hexagon">
                            <div class="news-filters-item-hexagon">
                                <div class="hexagon-img"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide @click="onSlideChange" class="swiper-slide-item">
                        <div class="news-filters-item hexagon">
                            <div class="news-filters-item-hexagon">
                                <div class="hexagon-img"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide @click="onSlideChange" class="swiper-slide-item">
                        <div class="news-filters-item hexagon">
                            <div class="news-filters-item-hexagon">
                                <div class="hexagon-img"></div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </div>
</template>

<script>
    import PreLoader from '../../../commonComponents/PreLoader';
    import Directions from './DirectionOfResearchItems'
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
        name: "DirectionOfResearch",
        components: {
          PreLoader,
            Swiper,
            SwiperSlide,
            Directions
        },
      data () {
          return{
            isPreloader:false
          }
      },
      methods:{
              onSlideChange() {
                  this.isPreloader = true;
                  setTimeout(() => {
                      this.isPreloader = false;
                  }, 300);

        }
      }
    }
</script>

<style>

    .direction-on-research {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }



    .directions h2 {
        font-size: 19px;
        margin-bottom: 10px;
        text-shadow: 15px 7px 20px 0px rgba(0, 0, 0, 0.43);
        font-weight: bold;

    }


    .research-directions-item {
        display: flex;
        width: 100%;
        padding: 0 152px;
        justify-content: space-between;
        align-items: center;

        /* Отступ временный пока не найдем исходники и не доделаем дизайн */
    }

    .news-filters-item {
        overflow: hidden;
        visibility: hidden;
        -webkit-transform: rotate(120deg);
        -moz-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
        -o-transform: rotate(120deg);
        transform: rotate(120deg);
        cursor: pointer;
        filter: drop-shadow(4px -20px 15px rgba(0, 0, 0, 0.49));
    }
    .news-filters-item-hexagon {
        overflow: hidden;
        width: 100%;
        height: 100%;
        -webkit-transform: rotate(-60deg);
        -moz-transform: rotate(-60deg);
        -ms-transform: rotate(-60deg);
        -o-transform: rotate(-60deg);
        transform: rotate(-60deg);
    }
    .hexagon {
        width: 134px;
        height: 116px;
        margin: 0 0 0 -80px;
    }
    .hexagon-img {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: 50%;
        background-image: url("https://nikatv.ru/public/upload/news/29566/images/1024x640.jpg");
        visibility: visible;
        -webkit-transform: rotate(-60deg);
        -moz-transform: rotate(-60deg);
        -ms-transform: rotate(-60deg);
        -o-transform: rotate(-60deg);
        transform: rotate(-60deg);
    }
    .swiper-slide-item{
        margin: 38px 14px;
    }
</style>
