/*

Section - Слайдер (страница исследования)

Принимает типы объектов:


*/

<template>
    <section>
        <div class="container">
            <div class="news-slider">
                <div class="news-slider__view">
                    <div class="news-slider__slide"></div>
                    <div class="news-slider__slide"></div>
                    <div class="news-slider__slide"></div>
                </div>

                <div class="news-slider__controls">
                    <div class="news-slider__dots">
                        <div class="news-slider__dot" v-for="slide in sliderData" :key="slide"></div>
                    </div>

                    <div class="news-slider__arrow"></div>
                    <div class="news-slider__arrow"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import JQuery from "jquery";

    let $ = JQuery;

    export default {
        name: "NewsSliderSection",
        props: {
            urls: [],
        },
        data() {
            return {
                i: 0,
                sliderDataIndex: 0,

                // TEMP

                positions: {
                    circle1: {
                        transform: "translatex(1100px)",
                    },
                    circle2: {
                        transform: "translatex(0)",
                    },
                    circle3: {
                        transform: "translatex(-1100px)",
                    },
                },

                sliderData: [],
            };
        },

        methods: {
            getDOM() {
                this.slider = $(".news-slider__view");
                this.circles = $(".news-slider__slide");
            },

            moveCircle(index, position) {
                this.circles.eq(index).css("width", this.positions[position].width);
                this.circles
                    .eq(index)
                    .css("transform", this.positions[position].transform);
            },

            changePosition(i, arr, isNext) {
                // Индексы соседних кругов
                let i2, i3;

                // Получаем корректные индексы соседних кругов
                switch (arr.length - (i + 3)) {
                    case 0: {
                        i2 = i + 1;
                        i3 = i + 2;
                        break;
                    }

                    case -1: {
                        i2 = i + 1;
                        i3 = 0;
                        break;
                    }

                    case -2: {
                        i2 = 0;
                        i3 = 1;
                        break;
                    }
                }

                // Перемещение элементов в зависимости от направления
                if (isNext) {
                    this.circles.eq(i).css("z-index", 1);
                    this.moveCircle(i, "circle2");

                    this.circles.eq(i2).css("z-index", 1);
                    this.moveCircle(i2, "circle3");

                    this.circles.eq(i3).css("z-index", 0);
                    this.moveCircle(i3, "circle1");

                    this.sliderDataIndex =
                        this.sliderDataIndex === this.sliderData.length - 1 ?
                        0 :
                        this.sliderDataIndex + 1;

                    let nextImageIndex =
                        this.sliderDataIndex === this.sliderData.length - 1 ?
                        0 :
                        this.sliderDataIndex + 1;

                    // Определяем следующий
                    setTimeout(() => {
                        this.circles
                            .eq(i3)
                            .css(
                                "background-image",
                                `url(${this.sliderData[nextImageIndex].url})`
                            );
                    }, 1000);
                } else if (!isNext) {
                    this.circles.eq(i).css("z-index", 0);
                    this.moveCircle(i, "circle3");

                    this.circles.eq(i2).css("z-index", 1);
                    this.moveCircle(i2, "circle1");

                    this.circles.eq(i3).css("z-index", 1);
                    this.moveCircle(i3, "circle2");

                    this.sliderDataIndex =
                        this.sliderDataIndex === 0 ?
                        this.sliderData.length - 1 :
                        this.sliderDataIndex - 1;

                    let prevImageIndex =
                        this.sliderDataIndex === 0 ?
                        this.sliderData.length - 1 :
                        this.sliderDataIndex - 1;

                    // Определяем следующий
                    setTimeout(() => {
                        this.circles
                            .eq(i)
                            .css(
                                "background-image",
                                `url(${this.sliderData[prevImageIndex].url})`
                            );
                    }, 1000);
                }
            },
        },

        async created() {
            for (let i = 0; i < this.urls.length; i++) {
                this.sliderData.push({
                    url: this.urls[i].image,
                });
           }
        },

        async mounted() {
            // Получаем dom элементы
            this.getDOM();

            // Начальное положение картинок
            $(".news-slider__slide:nth-child(2)").css(
                "background-image",
                `url(${this.sliderData[this.sliderDataIndex].url}`
            );

            $(".news-slider__slide:nth-child(1)").css(
                "background-image",
                `url(${this.sliderData[this.sliderDataIndex + 1].url}`
            );

            $(".news-slider__slide:nth-child(3)").css(
                "background-image",
                `url(${this.sliderData[this.sliderData.length - 1].url}`
            );

            $(".news-slider__dot")
                .eq(this.sliderDataIndex)
                .addClass("news-slider__dot_active")
                .eq(this.sliderDataIndex)

            // Вешаем события на левую стрелку
            $(".news-slider__arrow")
                .eq(0)
                .on("click", () => {
                    // Отменяем возможность нажатия
                    $(".news-slider__arrow").eq(0).css("pointer-events", "none");

                    // Возвращаем возможность нажатия через 1с
                    setTimeout(() => {
                        $(".news-slider__arrow")
                            .eq(0)
                            .css("pointer-events", "auto");
                    }, 1000);

                    //Движение элементов верстки
                    let isNext = false;

                    $(".news-slider__dot")
                        .eq(this.sliderDataIndex)
                        .removeClass("news-slider__dot_active");

                    this.changePosition(this.i, this.circles, isNext);

                    //Меняем индекс слайдов (индекс для верстки)
                    this.i = this.i === 2 ? 0 : this.i + 1;

                    $(".news-slider__dot")
                        .eq(this.sliderDataIndex)
                        .removeClass("news-slider__dot_active");

                    //Меняем индекс слайдов (индекс для данных)
                    // this.sliderDataIndex =
                    //     this.sliderDataIndex === 0
                    //         ? this.sliderData.length - 1
                    //         : this.sliderDataIndex - 1;

                    $(".news-slider__dot")
                        .eq(this.sliderDataIndex)
                        .addClass("news-slider__dot_active");
                });

            $(".news-slider__arrow")
                .eq(1)
                .on("click", () => {
                    $(".news-slider__arrow").eq(1).css("pointer-events", "none");
                    setTimeout(() => {
                        $(".news-slider__arrow")
                            .eq(1)
                            .css("pointer-events", "auto");
                    }, 1000);

                    let isNext = true;

                    $(".news-slider__dot")
                        .eq(this.sliderDataIndex)
                        .removeClass("news-slider__dot_active");

                    this.changePosition(this.i, this.circles, isNext);

                    this.i = this.i === 0 ? this.circles.length - 1 : this.i - 1;

                    $(".news-slider__dot")
                        .eq(this.sliderDataIndex)
                        .addClass("news-slider__dot_active");
                });
        },
    };
</script>

<style scoped>
    .news-slider {
        width: 1140px;
        height: 500px;
        border: 1px solid #3f7e77;

        /* TEMP */
        margin: 50px auto;
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
    }

    .news-slider__view {
        width: 1100px;
        height: 450px;
        overflow: hidden;
        position: relative;
    }

    .news-slider__controls {
        width: 112px;
        height: 25px;
        position: absolute;
        background-color: white;
        bottom: -13px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .news-slider__arrow {
        background-image: url("../../assets/image/slider-arrow-left.svg");
        width: 15px;
        height: 25px;
        background-size: cover;
        cursor: pointer !important;
        margin: 5px;
    }

    .news-slider__arrow:last-child {
        transform: rotate(180deg);
        margin-left: 50px;
    }

    .news-slider__slide {
        width: inherit;
        height: inherit;
        background-color: black;
        position: absolute;
        transition: transform 1s;

        background-size: cover;
        background-position: center;
    }

    .news-slider__slide:nth-child(1) {
        /* right: 100%; */
        transform: translatex(1100px);
        background-color: red;
    }

    .news-slider__slide:nth-child(3) {
        /* left: 100%; */
        transform: translatex(-1100px);
        background-color: blue;
        z-index: 0;
    }

    .news-slider__dots {
        position: absolute;
        top: -50px;
        z-index: 10;
        width: 1100px;

        display: flex;
        justify-content: center;
    }

    .news-slider__dot {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: white;
        display: inline-block;
        margin: 0 7.5px;
        opacity: 0.5;
        /* border: 3px solid #3f7e77; */
    }

    .news-slider__dot_active {
        opacity: 1;
    }
</style>