<template>
    <div class="container">
        <section class="success-module">
          <div class="swiper_slider_button_prev" @click="swiper.slidePrev()">
            <img src="../../../../assets/image/CaruselButtonPrev.png">
          </div>
          <div class="courusel">
                <Swiper
                        :slides-per-view="1"
                        :space-between="50"
                        :pagination="{ clickable: true }"
                        @init="onSwiper"
                        :autoplay="{
                        delay: 4000,
                        disableOnInteraction: false
                        }"
                        :loopFillGroupWithBlank="true"
                        :loop="true"
                        :speed="500"
                        >
                    <swiper-slide>
                        <img src="https://avatars.mds.yandex.net/get-pdb/1966865/6f2d33bb-2dca-4a76-b5ea-56e3e0e56c5b/s1200?webp=false" alt="">
                    </swiper-slide>
                    <swiper-slide> <img
                            src="https://get.pxhere.com/photo/landscape-nature-wilderness-walking-mountain-sky-lake-adventure-view-river-valley-mountain-range-environment-rural-reflection-scenic-peaceful-glacier-scenery-serene-fjord-tourism-national-park-ridge-ecology-clouds-mountains-alps-backpacking-plateau-fell-cirque-loch-crater-lake-moraine-landform-tarn-mountain-pass-geographical-feature-mountainous-landforms-glacial-landform-848203.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide> <img
                            src="https://bipbap.ru/wp-content/uploads/2019/07/59b21ebebd0470cb6d8b4570.jpg" alt="">
                    </swiper-slide>
                </Swiper>
          </div>
          <div class="swiper_slider_button_next" @click="swiper.slideNext()">
            <img src="../../../../assets/image/CaruselButtomNext.png">
          </div>
        </section>
    </div>
</template>

<script>
import SwiperCore, {A11y, Autoplay, EffectFlip, Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/effect-flip/effect-flip.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFlip]);

    export default {

          name: "SuccessModule",
          components: {
            Swiper,
            SwiperSlide,
        },
      data () { return {
        swiper: {}
      }
      },
      methods: {
        onSwiper(swiper) {
          this.swiper = swiper
        }
      }
    };
</script>

<style>
    .success-module {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .success-module h1 {
        text-align: center;
        text-shadow: 15px 7px 20px 0px rgba(0, 0, 0, 0.43);

    }
    .courusel{
        display: flex;
        max-width: 1067px;
        overflow: auto;
    }

    .courusel .swiper-slide img {
        width: 1067px;
        height: 576px;
    }
</style>