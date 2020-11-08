<template>
        <div class="profile-shell">
            <img :src="profiles.img">
            <div class="profile-shell__info">
                <div class="profile-shell__info-p">
                    <p>{{profiles.name}}</p>
                    <p>{{profiles.surname}}</p>
                    <p>{{profiles.patronymic}}</p>
                </div>
                <div class="profile-shell__info-logo">
                    <img :src="profiles.logo">
                    <p>Участие в проектах:</p>
                </div>
                <div class="profile-shell__info-carousel">
                    <div class="swiper_slider_button_prev"  @click="swiper.slidePrev()" >
                        <div class="triangle_prev"></div>
                    </div>
                    <Swiper class="swiper-profile"
                            :slides-per-view="2"
                            :slides-per-column="2"
                            :space-between="16"
                            @init="onSwiper"
                            :speed="500"
                    >
                        <swiper-slide style="margin-bottom: 0px;"
                                class="swiper-slide-profile"
                                v-for="profilesProp in profiles.project"
                                      :key="profilesProp"
                        >
                            <SectionProfileTitle
                                :profile_project="profilesProp"
                            />
                        </swiper-slide>
                    </Swiper>
                    <div class="swiper_slider_button_next"  @click="swiper.slideNext()" >
                        <div class="triangle_next"></div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import {Swiper, SwiperSlide} from 'swiper/vue';
    import SwiperCore, {Navigation } from 'swiper';
    import 'swiper/swiper-bundle.css';
    import 'swiper/swiper.scss';
    import 'swiper/components/navigation/navigation.scss';
    import SectionProfileTitle from "./SectionProfileTitle";

    SwiperCore.use([Navigation]);

    export default {
        name: "SectionProfile",
        props:{
            profiles:[]
        },
        components: {
            SectionProfileTitle,
            Swiper,
            SwiperSlide,
        },
        methods: {
            onSwiper(swiper) {
                this.swiper = swiper
            }
        }
    }
</script>

<style  scoped>
    .profile-shell{
        display: flex;
        width: 467px;
        height: 352px;
        background: #A93422;
        margin: 16px 16px;
    }
    .profile-shell img{
        width: 50%;
    }

    .profile-shell__info{
        margin: 0 auto;
    }
    .profile-shell__info-p{
        font-family: Oswald;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
        color: #FFFFFF;
        border-bottom: 3px solid #FFFFFF;
        line-height: 0.5em
    }

    .profile-shell__info-logo{
        text-align: center;
    }
    .profile-shell__info-logo p{
        font-family: Oswald;
        font-size: 15px;
        color: #FFFFFF;
        margin: 7px 0;
    }
    .profile-shell__info-logo img{
        width: 39px;
        height: 39px;
        /*background: none !important;*/
        margin: 6px 0;
    }

    .profile-shell__info-carousel{
        width: 214px;
        height: 169px;
        background: #FFFFFF;
        display: flex;
        padding: 6px;
    }

    .triangle_prev{
        border: 5px solid transparent;
        border-right: 10px solid black;
    }
    .triangle_next{
        border: 5px solid transparent;
        border-left: 10px solid black;
    }
    .swiper-profile{
        width: 150px
    }
    .swiper-slide-profile{
        width: 62px;
        height: 60px;
    }
</style>