/*

Section - Слайдер (страница исследования)

Принимает типы объектов:


*/


<template>
    <!-- <h1>Слайдер секция</h1> -->
    <section>
        <div class="slider-container">
            <div class="research-slider">
                <div class="research-slider__view">
                    <div class="circle">
                        <div class="innerCircle"></div>
                    </div>
                    <div class="circle">
                        <div class="innerCircle"></div>
                    </div>
                    <div class="circle">
                        <div class="innerCircle"></div>
                    </div>
                    <div class="circle">
                        <div class="innerCircle"></div>
                    </div>
                    <div class="circle">
                        <div class="innerCircle"></div>
                    </div>

                    <div class="research-slider_line"></div>
                    <div class="research-slider_line"></div>
                </div>
                <div class="research-slider__controls">
                    <div class="research-slider_arrow"></div>
                    <div class="research-slider_arrow"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;

export default {
    name: "ResearchSliderSection",
    props: {
        sectionData: [],
    },

    data() {
        return {
            slider: `$(".research-slider__view")`,
            circles: $(".circle"),
            i: 0,
            sliderDataIndex: 0,
            positions: {
                circle1: {
                    transform: "translatex(-284px)",
                },
                circle2: {
                    transform: "translatex(0)",
                },
                circle3: {
                    transform: "translatex(255px)",
                    width: "635px",
                    height: "635px",
                },
                circle4: {
                    transform: "translatex(950px)",
                },
                circle5: {
                    transform: "translatex(1215px)",
                },
            },

            sliderData: [{
                1: 1
            }, {
                2: 2
            }, {
                3: 3
            }]
        };
    },

    methods: {
        getDOM() {
            this.slider = $(".slider-left");
            this.circles = $(".circle");
        },

        moveCircle(index, position) {

            this.circles.eq(index).css("width", this.positions[position].width);
            this.circles
                .eq(index)
                .css("height", this.positions[position].height);
            this.circles
                .eq(index)
                .css("transform", this.positions[position].transform);
        },

        changePosition(i, arr, isNext) {
            // Индексы соседних кругов
            let i2, i3, i4, i5;

            console.log(arr.length - (i + 5));

            // Получаем корректные индексы соседних кругов
            switch (arr.length - (i + 5)) {
                case 0: {
                    i2 = i + 1;
                    i3 = i + 2;
                    i4 = i + 3;
                    i5 = i + 4
                    break;
                }

                case -1: {
                    i2 = i + 1;
                    i3 = i + 2;
                    i4 = i + 3;
                    i5 = 0

                    break;
                }

                case -2: {
                    i2 = i + 1;
                    i3 = i + 2;
                    i4 = 0;
                    i5 = 1
                    break;
                }

                case -3: {
                    i2 = i + 1;
                    i3 = 0;
                    i4 = 1;
                    i5 = 2;
                    break;
                }

                case -4: {
                    i2 = 0;
                    i3 = 1;
                    i4 = 2;
                    i5 = 3
                }
            }

            // Перемещение элементов в зависимости от направления
            if (isNext) {



                console.log(i);
                this.moveCircle(i, "circle2");
                this.circles.eq(i).css("opacity", "1")


                this.moveCircle(i2, "circle3");
                this.circles.eq(i2).css("width", "635px")
                this.circles.eq(i2).css("height", "635px")

                this.moveCircle(i3, "circle4");
                this.circles.eq(i3).css("width", "193px")
                this.circles.eq(i3).css("height", "193px")

                this.moveCircle(i4, "circle5");
                this.circles.eq(i4).css("opacity", "0")

                this.moveCircle(i5, "circle1");

            } else if (!isNext) {

                this.moveCircle(i, "circle5");

                this.moveCircle(i2, "circle1");
                this.circles.eq(i2).css("opacity", "0")

                this.moveCircle(i3, "circle2");
                this.circles.eq(i3).css("width", "193px")
                this.circles.eq(i3).css("height", "193px")

                this.moveCircle(i4, "circle3");
                this.circles.eq(i4).css("width", "635px")
                this.circles.eq(i4).css("height", "635px")

                this.moveCircle(i5, "circle4")
                this.circles.eq(i5).css("opacity", "1")

            }
        },
    },

    mounted() {
        this.getDOM();
        this.circles.eq(this.i).children().css("opacity", 1);

        // Вешаем событие для левой кнопки
        $(".research-slider_arrow:first-child").on("click", () => {

            let isNext = false;

            $(".research-slider_arrow").css("pointer-events", "none");
            setTimeout(() => {
              $(".research-slider_arrow").css("pointer-events", "auto")
            }, 400);

            this.changePosition(this.i, this.circles, isNext);


            this.i = this.i === 4 ? 0 : this.i + 1;

            this.sliderDataIndex =
                this.sliderDataIndex === 0
                    ? this.sliderData.length - 1
                    : this.sliderDataIndex - 1;

            // this.circles
            //     .eq(this.i)
            //     .children()
            //     .css(
            //         "background-image",
            //         `url(${this.sliderData[this.sliderDataIndex].url})`
            //     );

        });

        $(".research-slider_arrow:last-child").on("click", () => {
            let isNext = true;

            console.log("ok");

             $(".research-slider_arrow").css("pointer-events", "none");
            setTimeout(() => {
              $(".research-slider_arrow").css("pointer-events", "auto")
            }, 400);

            this.changePosition(this.i, this.circles, isNext);

            this.i = this.i === 0 ? this.circles.length - 1 : this.i - 1;

            this.sliderDataIndex =
                this.sliderDataIndex === this.sliderData.length - 1
                    ? 0
                    : this.sliderDataIndex + 1;

            // this.circles
            //     .eq(this.i)
            //     .children()
            //     .css(
            //         "background-image",
            //         `url(${this.sliderData[this.sliderDataIndex].url})`
            //     );
        });
    },
};
</script>

<style scoped>
section {
    background-color: #3f7e77;
    height: 1000px;
    padding-top: 192px;
}

.slider-container {
    width: 1141px;
    margin: auto;
}

.research-slider__view {
    position: relative;
    height: 630px;
    /* TEMP */
}

.circle {
    width: 193px;
    height: 193px;
    border-radius: 100%;
    border: 3px solid #f8f5e6;
    position: absolute;

    background-color: #3f7e77;

    z-index: 10;

    top: 0;
    bottom: 0;
    margin: auto;
    transition: 0.5s
}

.circle:nth-child(1) {
    /* transform: translate(0px, 240px); */
    transform: translatex(-284px);
    opacity: 0;
}
.circle:nth-child(2) {
    transform: translatex(0);
}
.circle:nth-child(3) {
    transform: translatex(255px);
    width: 635px;
    height: 635px;
}
.circle:nth-child(4) {
    transform: translatex(950px);
}
.circle:nth-child(5) {
    transform: translatex(1215px);
    opacity: 0;

}

.research-slider__controls {
    width: 77px;
    margin: 48px auto;
    display: flex;
    justify-content: space-between;
}

.research-slider_line {
    width: 64px;
    height: 3px;
    background-color: white;
    position: absolute;
    transform: translate(192px, 310px);
}

.research-slider_line:last-child {
    transform: translate(887px, 310px);
}

.research-slider_arrow {
    width: 12px;
    height: 25px;
    background-color: red;
    /*
    background-image: url("./../../assets/image/slider-arrow-left.svg");
    background-position: center;
    background-size: cover; */
}
</style>
