/*

Section - Слайдер (страница исследования)

Принимает типы объектов:


*/


<template>
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
import sliderSkeleton from "../../utils/sliderSkeleton";
import JQuery from "jquery";
let $ = JQuery;

export default {
    name: "ResearchSliderSection",
    props: {
        sectionData: [],
    },

    mixins: [sliderSkeleton],

    data() {
        return {

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

            sliderData: [
                {
                    1: 1,
                },
                {
                    2: 2,
                },
                {
                    3: 3,
                },
            ],
        };
    },

    methods: {


        changePosition(i, arr, isNext) {

            // Получаем индексы соседних элементов
            let {i2, i3, i4, i5} = this.getNeighborIndex(this.i, this.$circles);

            // Перемещение элементов в зависимости от направления
            if (isNext) {

                this.moveCircle(["width", "height", "transform"], i, "circle2");
                this.$circles.eq(i).css("opacity", "1");

                this.moveCircle(["width", "height", "transform"], i2, "circle3");
                this.$circles.eq(i2).css("width", "635px");
                this.$circles.eq(i2).css("height", "635px");

                this.moveCircle(["width", "height", "transform"],i3, "circle4");
                this.$circles.eq(i3).css("width", "193px");
                this.$circles.eq(i3).css("height", "193px");

                this.moveCircle(["width", "height", "transform"],i4, "circle5");
                this.$circles.eq(i4).css("opacity", "0");

                this.moveCircle(["width", "height", "transform"], i5, "circle1");

            } else if (!isNext) {

                this.moveCircle(["width", "height", "transform"],i, "circle5");

                this.moveCircle(["width", "height", "transform"], i2, "circle1");
                this.$circles.eq(i2).css("opacity", "0");

                this.moveCircle(["width", "height", "transform"], i3, "circle2");
                this.$circles.eq(i3).css("width", "193px");
                this.$circles.eq(i3).css("height", "193px");

                this.moveCircle(["width", "height", "transform"], i4, "circle3");
                this.$circles.eq(i4).css("width", "635px");
                this.$circles.eq(i4).css("height", "635px");

                this.moveCircle(["width", "height", "transform"], i5, "circle4");
                this.$circles.eq(i5).css("opacity", "1");
            }
        },
    },

    mounted() {

        // Получение DOM элементов
        this.$circles = $(".circle");
        this.$arrows = $(".research-slider_arrow");
        this.$leftArrow = $(".research-slider_arrow:first-child");
        this.$rightArrow = $(".research-slider_arrow:last-child");

        // Вешаем событие для левой кнопки
        $(this.$leftArrow).on("click", () => {

            // Контроль направления поворота слайдера
            let isNext = true;

            // Ставим задержку для последующего нажатия
            this.setControlsPing(400);

            // Двигаем DOM элементы
            this.changePosition(this.i, this.$circles, isNext);

            // Вычисляем новый индекс для DOM элементов и данных
            this.setNewIndex(isNext);

        });

        // Вешаем событие для правой кнопки
        $(this.$rightArrow).on("click", () => {

            // Контроль направления поворота слайдера
            let isNext = false;

            // Ставим задержку для последующего нажатия
            this.setControlsPing(400);

            // Двигаем DOM элементы
            this.changePosition(this.i, this.$circles, isNext);

            // Вычисляем новый индекс для DOM элементов и данных
            this.setNewIndex(isNext);
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
    transition: 0.5s;
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
