<template>
  <div class="container">
    <section class="news">
      <div class="swiper_slider_button_prev" @click="swiper.slidePrev()">
        <img src="../../../../../assets/image/CaruselButtonPrev.png">
      </div>
      <div class="news-items">
        <Swiper :slides-per-view="3"
                :space-between="30"
                @init="onSwiper"
                :speed="500"
                :slidesPerGroup="3"
        >
          <swiper-slide>
            <div class="news-item">
              <img src="../../../../../assets/image/news1.png" alt=""/>
              <p>
                Важное место в питании сегодня отводится клетчатке, содержание
                которой в зерне ржи значительно
              </p>
              <div>
                <p>02.10.2020</p>
                <button>Узнать больше</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="news-item">
              <img src="../../../../../assets/image/news2.png" alt=""/>
              <p>
                Важное место в питании сегодня отводится клетчатке, содержание
                которой в зерне ржи значительно
              </p>
              <div>
                <p>02.10.2020</p>
                <button>Узнать больше</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="news-item">
              <img src="../../../../../assets/image/news3.png" alt=""/>
              <p>
                Важное место в питании сегодня отводится клетчатке, содержание
                которой в зерне ржи значительно
              </p>
              <div>
                <p>02.10.2020</p>
                <button>Узнать больше</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="news-item">
              <img src="../../../../../assets/image/news3.png" alt=""/>
              <p>
                Важное место в питании сегодня отводится клетчатке, содержание
                которой в зерне ржи значительно
              </p>
              <div>
                <p>02.10.2020</p>
                <button>Узнать больше</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="news-item">
              <img src="../../../../../assets/image/news3.png" alt=""/>
              <p>
                Важное место в питании сегодня отводится клетчатке, содержание
                которой в зерне ржи значительно
              </p>
              <div>
                <p>02.10.2020</p>
                <button>Узнать больше</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="news-item">
              <img src="../../../../../assets/image/news3.png" alt=""/>
              <p>
                Важное место в питании сегодня отводится клетчатке, содержание
                которой в зерне ржи значительно
              </p>
              <div>
                <p>02.10.2020</p>
                <button>Узнать больше</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="news-item">
              <img src="../../../../../assets/image/news3.png" alt=""/>
              <p>
                Важное место в питании сегодня отводится клетчатке, содержание
                которой в зерне ржи значительно
              </p>
              <div>
                <p>02.10.2020</p>
                <button>Узнать больше</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="news-item">
              <img src="../../../../../assets/image/news3.png" alt=""/>
              <p>
                Важное место в питании сегодня отводится клетчатке, содержание
                которой в зерне ржи значительно
              </p>
              <div>
                <p>02.10.2020</p>
                <button>Узнать больше</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="news-item">
              <img src="../../../../../assets/image/news3.png" alt=""/>
              <p>
                Важное место в питании сегодня отводится клетчатке, содержание
                которой в зерне ржи значительно
              </p>
              <div>
                <p>02.10.2020</p>
                <button>Узнать больше</button>
              </div>
            </div>
          </swiper-slide>
        </Swiper>

      </div>
      <div class="swiper_slider_button_next"  @click="swiper.slideNext()" >
        <img src="../../../../../assets/image/CaruselButtomNext.png">
      </div>
    </section>
  </div>
</template>
<script>
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/swiper-bundle.css';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import {Swiper, SwiperSlide} from 'swiper/vue';

SwiperCore.use([Navigation, Pagination, Scrollbar]);


export default {
  name: "News",
  components: {
    Swiper,
    SwiperSlide,
  },
  data () { return {
    swiper:{}
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
.news {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}


.news-items {
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
  /*padding-left: 7px ;*/
  /*padding-right: 7px;*/
  max-width: 1067px;
  overflow: auto;
}

.news-item {
  background-color: #2d3833;
  height: 332.8705749511719px;
  padding: 17px 14px;
  width: 284.48822021484375px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
  20px 19px 15px rgba(0, 0, 0, 0.49);
}

.news-item igm {
  width: 257px;
  border-radius: 4px;
}

.news-item p {
  /* text-align: justify; */
  color: white;
  font-size: 15px;
}

.news-item div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.news-item div p {
  margin-left: 5px;
  color: rgba(248, 242, 242, 0.79);
}

.news-item div button {
  width: 103px;
  height: 29px;
  border: none;
  border-radius: none;
  font-size: 10px;
  background-color: #468b3c;
  color: white;
  font-weight: 800;
}
</style>