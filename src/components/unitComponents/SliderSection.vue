<template>
    <section class="result">
        <div class="container">
            <TitleSection
                title="Результаты программы"
                :headerVisible="visible"
            />

            <div class="content">
                <div class="slider-left">
                    <div class="slider-left-container">
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

                        <div class="line line1"></div>
                        <div class="line line2"></div>
                    </div>
                </div>
                <div class="slider-right">
                    <div class="slider-right-text">
                        <p>{{ currentTitle }}</p>
                        <p>{{ currentDescription }}</p>
                        <!-- TODO линия ::after -->
                    </div>

                    <div class="slider-right-content">
                        <router-link
                            style="text-decoration: none"
                            :to="{ name: 'notFound' }"
                        >
                            <!-- <div class="slider-right-btn">
              <button>Подробнее</button>
            </div> -->
                        </router-link>

                        <div class="slider-right-conrols">
                            <div class="slider-arrow-left"></div>
                            <div
                                class="slider-control-"
                                v-for="slide in this.sliderData"
                                :key="slide.url"
                            >
                                <div class="control-item"></div>
                            </div>
                            <div class="slider-arrow-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;

import TitleSection from "./TitleSection";

export default {
    name: "Slider",
    components: {
        TitleSection,
    },
    props: {
        sectionData: [],
    },

    data() {
        return {
            visible: "true",
            slider: `$(".slider-left")`,
            circles: $(".circle"),
            i: 0,
            sliderDataIndex: 0,

            currentTitle: this.sectionData.PROGRAMS_RESULT[0].title,
            currentDescription: this.sectionData.PROGRAMS_RESULT[0].text,

            positions: {
                circle1: {
                    width: "405px",
                    height: "405px",
                    transform: "translate(146px, 147px)",
                    zIndex: 4,
                },
                circle2: {
                    width: "174px",
                    height: "174px",
                    transform: "translate(-3px, 68px)",
                    zIndex: 3,
                },
                circle3: {
                    width: "100px",
                    height: "100px",
                    transform: "translate(185px, -3px)",
                    zIndex: 2,
                },
                circle4: {
                    width: "89px",
                    height: "89px",
                    transform: "translate(461px, 58px)",
                    zIndex: 1,
                },
            },

            // TEMP Данные для слайдера

            sliderImage: [
                {
                    title: 1,
                },
            ],

            sliderData: [
                // {
                //     url:
                //         "https://www.neizvestniy-geniy.ru/images/works/photo/2013/08/988047_1.jpg",
                //     title: "Рожь как смысл жизни",
                //     description:
                //         "Рожь издавно была кормилецей многих народов прикубанских земель. Она дает силу и бодрость.",
                // },
                // {
                //     url:
                //         "https://heaclub.ru/tim/b827ac29c5af026955a58d8be2ccefb8/rozh.jpg",
                //     title: "Технологии 21 века",
                //     description:
                //         "Для решения задач комплексного анализа в сельском хозяйстве используются электронные карты с результатами спутниковых геодезических измерений. Использование таких методов позволяет получать детализированную информацию об обширных территориях",
                // },
                // {
                //     url:
                //         "http://vestnikapk.ru/upload/iblock/499/4990f938d2f7d876818532c77f36199a.jpg",
                //     title: "Текст цели",
                //     description:
                //         "Рожь издавно была кормилецей многих народов прикубанских земель. Она дает силу и бодрость.",
                // },
                // {
                //     url:
                //         "https://i1.wallbox.ru/wallpapers/main2/201732/nebo-solnce-pole-kolosa-psenica.jpg",
                //     title: "Текст цели",
                //     description:
                //         "Рожь издавно была кормилецей многих народов прикубанских земель. Она дает силу и бодрость.",
                // },
                // {
                //     url:
                //         "https://www.neizvestniy-geniy.ru/images/works/photo/2013/08/988047_1.jpg",
                //     title: "Рожь как смысл жизни3",
                //     description:
                //         "Рожь издавно была кормилецей многих народов прикубанских земель. Она дает силу и бодрость.",
                // },
                // {
                //     url:
                //         "https://www.neizvestniy-geniy.ru/images/works/photo/2013/08/988047_1.jpg",
                //     title: "Рожь как смысл жизни3",
                //     description:
                //         "Рожь издавно была кормилецей многих народов прикубанских земель. Она дает силу и бодрость.",
                // },
            ],

            // sliderData2: [],
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
            let i2, i3, i4;

            // Получаем корректные индексы соседних кругов
            switch (arr.length - (i + 4)) {
                case 0: {
                    i2 = i + 1;
                    i3 = i + 2;
                    i4 = i + 3;
                    break;
                }

                case -1: {
                    i2 = i + 1;
                    i3 = i + 2;
                    i4 = 0;
                    break;
                }

                case -2: {
                    i2 = i + 1;
                    i3 = 0;
                    i4 = 1;
                    break;
                }

                case -3: {
                    i2 = 0;
                    i3 = 1;
                    i4 = 2;
                    break;
                }
            }

            // Перемещение элементов в зависимости от направления
            if (isNext) {
                this.moveCircle(i, "circle2");
                this.circles.eq(i).children().css("opacity", 0);

                this.moveCircle(i2, "circle3");
                this.circles.eq(i2).css("opacity", 0);

                this.moveCircle(i3, "circle4");
                this.circles.eq(i3).css("opacity", 1);

                this.moveCircle(i4, "circle1");
                this.circles.eq(i4).children().css("opacity", 1);
            } else if (!isNext) {
                this.moveCircle(i, "circle4");
                this.circles.eq(i).children().css("opacity", 0);

                this.moveCircle(i2, "circle1");
                this.circles.eq(i2).children().css("opacity", 1);

                this.moveCircle(i3, "circle2");
                this.circles.eq(i3).css("opacity", 1);

                this.moveCircle(i4, "circle3");
                this.circles.eq(i4).css("opacity", 0);
            }
        },
    },

      async mounted() {

        console.log(this.sectionData);

        //  Формируем данные для слайдера
        await this.sectionData.PROGRAMS_RESULT.forEach(slide => {
            this.sliderData.push({
              title: slide.title,
              description: slide.text,
              url: slide.image
            });
        })

        console.log(this.sliderData);



        this.getDOM();
        this.circles.eq(this.i).children().css("opacity", 1);


        $(".control-item")
            .eq(this.sliderDataIndex)
            .addClass("control-item-active");
        this.circles
            .eq(this.i)
            .children()
            .css(
                "background-image",
                `url(${this.sliderData[this.sliderDataIndex].url})`
            );

        // Меняем текст
        $(".slider-right p:first-child").text(this.sliderData[this.i].title);

        $(".slider-right p:last-child").text(
            this.sliderData[this.i].description
        );

        // Вешаем событие для левой кнопки
        $(".slider-arrow-left").on("click", () => {

            let isNext = false;

            $(".slider-arrow-left").css("pointer-events", "none");
            setTimeout(() => {
              $(".slider-arrow-left").css("pointer-events", "auto")
            }, 400);

            this.changePosition(this.i, this.circles, isNext);
            $(".control-item")
                .eq(this.sliderDataIndex)
                .removeClass("control-item-active");
            this.i = this.i === 3 ? 0 : this.i + 1;

            this.sliderDataIndex =
                this.sliderDataIndex === 0
                    ? this.sliderData.length - 1
                    : this.sliderDataIndex - 1;

            this.circles
                .eq(this.i)
                .children()
                .css(
                    "background-image",
                    `url(${this.sliderData[this.sliderDataIndex].url})`
                );
            // Меняем текст

            $(".slider-right p:first-child").text(
                this.sliderData[this.sliderDataIndex].title
            );

            $(".slider-right p:last-child").text(
                this.sliderData[this.sliderDataIndex].description
            );

            $(".control-item")
                .eq(this.sliderDataIndex)
                .addClass("control-item-active");
        });

        // Вешаем событие для правой кнопки
        $(".slider-arrow-right").on("click", () => {
            let isNext = true;

             $(".slider-arrow-right").css("pointer-events", "none");
            setTimeout(() => {
              $(".slider-arrow-right").css("pointer-events", "auto")
            }, 400);

            this.changePosition(this.i, this.circles, isNext);
            $(".control-item")
                .eq(this.sliderDataIndex)
                .removeClass("control-item-active");

            this.i = this.i === 0 ? this.circles.length - 1 : this.i - 1;

            this.sliderDataIndex =
                this.sliderDataIndex === this.sliderData.length - 1
                    ? 0
                    : this.sliderDataIndex + 1;

            this.circles
                .eq(this.i)
                .children()
                .css(
                    "background-image",
                    `url(${this.sliderData[this.sliderDataIndex].url})`
                );

            // Меняем текст
            $(".slider-right p:first-child").text(
                this.sliderData[this.sliderDataIndex].title
            );

            $(".slider-right p:last-child").text(
                this.sliderData[this.sliderDataIndex].description
            );

            $(".control-item")
                .eq(this.sliderDataIndex)
                .addClass("control-item-active");
        });
        for (let i = 0; i < this.sliderData.length; i++) {
            let img = new Image();
            img.src = this.sliderData[i].url;
        }
    },
};
</script>

<style scoped>
/* SECTION - Контролы */

.slider-arrow-left {
    background-image: url("../../assets/image/slider-arrow-left.svg");
    width: 15px;
    height: 25px;
    background-size: cover;
}

.slider-left {
    display: flex;
    justify-content: flex-end;
    margin-right: 125px;
}

.slider-arrow-right {
    background-image: url("../../assets/image/slider-arrow-right.svg");
    background-size: cover;
    width: 15px;
    height: 25px;
}

.slider-right {
    padding-top: 40px;
}

.slider-right-text p {
    font-size: 15px;
    color: rgba(63, 126, 119, 1);
}

.slider-right-text p:nth-child(1) {
    font-weight: bold;
}

.slider-right-text p:nth-child(1)::after {
    display: block;
    content: "";

    width: 35px;
    height: 1px;
    background-color: #3f7e77;

    margin: 18px 0;
}

.slider-right button {
    padding: 15px 86px;
    background-color: #3f7e77;
    border: none;
    color: rgba(248, 245, 230, 1);
    border-radius: 54px;
    font-size: 24px;
    margin: 41px 0;
}

.slider-right-conrols {
    /* width: 305px; */
    display: flex;
    justify-content: left;
    align-items: center;
}

.control-item {
    width: 15px;
    height: 15px;
    background-color: #3f7e77;
    border-radius: 100%;
    opacity: 0.3;
    margin: 20px;
}

.control-item-active {
    opacity: 1;
}

* {
    box-sizing: border-box;
    /* font-family: arial; */
}

.result {
    /* height: 754px; */
    background-color: #f8f5e6;
    padding: 50px;
    /* font-family: Gilroy; */
    max-height: 754px;
}

.content {
    display: flex;
    height: 100%;
    /* justify-content: space-between; */
}

.content > div {
    width: 572px;
    /* border: 1px dotted black; */
    max-height: 556px;

    /* flex-grow: 1; */
    /* height: 10Ц0px; */
}

/* +3px из-за border-box */
.slider-left-container {
    width: 556px;
    height: 557px;
    position: relative;
    /* border: 1px dotted red; */
}

.circle {
    border-radius: 100%;
    border: 3px solid #3f7e77;
    position: absolute;
    transition: all 0.4s ease-in-out;
    z-index: 1;
    background-color: #f8f5e6;
}

.innerCircle {
    width: 87%;
    height: 87%;
    border-radius: 100%;
    position: absolute;

    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    opacity: 0;
    transition: all 0.4s ease-in-out;

    /* background-image: url("../../assets/image/Vector.png"); */
    background-position: center;
    background-size: cover;
}

.innerCircle:first-of-type {
    opacity: 0;
}

.circle:nth-child(1) {
    width: 405px;
    height: 405px;
    transform: translate(146px, 147px);
}

.circle:nth-child(2) {
    width: 174px;
    height: 174px;
    transform: translate(-3px, 68px);
}

.circle:nth-child(3) {
    width: 100px;
    height: 100px;
    transform: translate(185px, -3px);
    opacity: 0;
}

.circle:nth-child(4) {
    width: 89px;
    height: 89px;
    transform: translate(461px, 58px);
}

.line {
    width: 2.5px;
    height: 49px;
    background: #3f7e77;

    position: absolute;
    z-index: 0;
}

.line1 {
    transform: translate(464px, 131px) rotate(38deg);
}

.line2 {
    transform: translate(167px, 199px) rotate(-52deg);
    height: 40px;
}
</style>
