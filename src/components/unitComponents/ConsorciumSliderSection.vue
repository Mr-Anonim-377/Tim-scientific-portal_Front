/*

Section -Cлайдер консорциум (страница консорциума)

Принимает типы объектов:
        - CONSORTIUM_MEMBER
            - title: Название участника консорциума
            - image: Логотип участника консорциума

*/

<template>
    <section class="consortium-section">
        <div class="container">
            <div class="content">
                <div class="consortium-container">
                    <div class="consortium-slider">
                        <div class="consortium-circle">
                            <div class="innerCircle"></div>
                        </div>
                        <div class="consortium-circle">
                            <div class="innerCircle"></div>
                        </div>
                        <div class="consortium-circle">
                            <div class="innerCircle"></div>
                        </div>
                        <div class="consortium-circle">
                            <div class="innerCircle"></div>
                        </div>
                        <div class="consortium-circle">
                            <div class="innerCircle"></div>
                        </div>
                        <div class="consortium-circle">
                            <div class="innerCircle"></div>
                        </div>
                        <div class="consortium-circle">
                            <div class="innerCircle"></div>
                        </div>

                        <div class="consortium-logo"></div>

                        <div class="consortium-controls">
                            <div class="consortium-arrow-left"></div>
                            <div class="consortium-arrow-right"></div>
                        </div>
                    </div>
                </div>
                <div class="consortium-content">
                    <h3>{{ currentTitle }}</h3>
                    <div v-for="p in currentDescription" :key="p">
                        <p>{{ p }}</p>
                    </div>
                </div>

                <div class="consortium-footer">
                  <a :href="links[i]">
                    <div class="button">Перейти на сайт</div>
                  </a>
                  <!-- <router-link style="text-decoration: none" :to="{name:'notFound'}">
                    Стать участником консорциума
                  </router-link> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;

export default {
    name: "ConsorciumSection",
    props: {
        moduleData: {},
    },

    data() {
        return {
          links:[
            "https://www.timacad.ru/",
            "http://www.frccsc.ru/",
            "https://arriam.ru/",
            "https://spbu.ru/",
            "https://www.vir.nw.ru/",
            "http://esoil.ru/",
            "https://www.fbras.ru/"
          ],
            i: 0,
            sliderDataIndex: 0,
            currentTitle: this.moduleData[0].title,
            currentDescription: this.moduleData[0].text.split(" ; "),

            positions: {
                circle1: {
                    width: "250px",
                    height: "250px",
                    transform: "translate(292px, 491px)",
                    zIndex: 4,
                },
                circle2: {
                    width: "190px",
                    height: "190px",
                    transform: "translate(1px, 357px)",
                    zIndex: 3,
                },
                circle3: {
                    width: "150px",
                    height: "150px",
                    transform: "translate(20px, 117px)",
                    zIndex: 2,
                },
                circle4: {
                    width: "120px",
                    height: "120px",
                    transform: "translate(258px, 0px)",
                    zIndex: 1,
                },
                circle5: {
                    width: "120px",
                    height: "120px",
                    transform: "translate(455px, 0px)",
                    zIndex: 1,
                },
                circle6: {
                    width: "150px",
                    height: "150px",
                    transform: "translate(663px, 117px)",
                    zIndex: 1,
                },
                circle7: {
                    width: "190px",
                    height: "190px",
                    transform: "translate(644px, 357px)",
                    zIndex: 1,
                },
            },
        };
    },

    methods: {
        moveCircle(index, position) {
            this.consortiumCircles
                .eq(index)
                .css("width", this.positions[position].width);
            this.consortiumCircles
                .eq(index)
                .css("height", this.positions[position].height);
            this.consortiumCircles
                .eq(index)
                .css("transform", this.positions[position].transform);
        },

        changePosition(i, arr, isNext) {
            let indexList = {
                i: i,
            };
            let z = 2;
            let j = 1;

            for (let k = 1; k < arr.length - i; k++) {
                indexList[`i${z}`] = i + j;
                j++;
                z++;
            }

            j = 0;

            for (let k = z; k <= 7; k++) {
                indexList[`i${z}`] = j;
                z++;
                j++;
            }

            let { i2, i3, i4, i5, i6, i7 } = indexList;

            if (isNext) {
                this.moveCircle(i, "circle2");
                this.consortiumCircles.eq(i).css("opacity", "0.5");
                this.moveCircle(i2, "circle3");
                this.moveCircle(i3, "circle4");
                this.moveCircle(i4, "circle5");
                this.moveCircle(i5, "circle6");
                this.moveCircle(i6, "circle7");
                this.moveCircle(i7, "circle1");
                this.consortiumCircles.eq(i7).css("opacity", "1");
            } else if (!isNext) {
                this.moveCircle(i, "circle7");
                this.consortiumCircles.eq(i).css("opacity", "0.5");
                this.moveCircle(i2, "circle1");
                this.consortiumCircles.eq(i2).css("opacity", "1");
                this.moveCircle(i3, "circle2");
                this.moveCircle(i4, "circle3");
                this.moveCircle(i5, "circle4");
                this.moveCircle(i6, "circle5");
                this.moveCircle(i7, "circle6");
            }
        },
    },

    mounted() {
        this.consortium = $(".consortium");
        this.consortiumCircles = $(".consortium-circle");

        $(".consortium-arrow-left").on("click", () => {
            let isNext = false;
            this.changePosition(this.i, this.consortiumCircles, isNext);
            this.i = this.i === 6 ? 0 : this.i + 1;

            this.currentTitle = this.moduleData[this.i].title;
            this.currentDescription = this.moduleData[this.i].text.split(' ; ')
        });

        $(".consortium-arrow-right").on("click", () => {
            let isNext = true;
            this.changePosition(this.i, this.consortiumCircles, isNext);
            this.i =
                this.i === 0 ? this.consortiumCircles.length - 1 : this.i - 1;

            this.currentTitle = this.moduleData[this.i].title;
            this.currentDescription = this.moduleData[this.i].text.split(' ; ')

        });
    },
};
</script>

<style>
* {
    box-sizing: border-box;
}

.content {
    height: 100%;
}

.consortium-slider {
    width: 834px;
    height: 824px;
    position: relative;
    margin: auto;
}

.consortium-circle {
    border-radius: 100%;
    border: 3px solid #3f7e77;
    position: absolute;
    transition: all 0.4s;
    z-index: 1;
    opacity: 0.5;
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
    transition: all 0.4s;

    background-position: center;
    background-size: cover;
}

.consortium-circle:nth-child(1) {
    width: 250px;
    height: 250px;
    transform: translate(292px, 491px);
    opacity: 1;
}

.consortium-circle:nth-child(1) .innerCircle {
    background-image: url("../../assets/image/university/1.png");
    background-size: cover;
}

.consortium-circle:nth-child(2) {
    width: 190px;
    height: 190px;
    transform: translate(1px, 357px);
}

.consortium-circle:nth-child(2) .innerCircle {
    background-image: url("../../assets/image/university/2.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.consortium-circle:nth-child(3) {
    width: 150px;
    height: 150px;
    transform: translate(20px, 117px);
}

.consortium-circle:nth-child(3) .innerCircle {
    background-image: url("../../assets/image/university/3.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.consortium-circle:nth-child(4) {
    width: 120px;
    height: 120px;
    transform: translate(258px, 0px);
}

.consortium-circle:nth-child(4) .innerCircle {
    background-image: url("../../assets/image/university/4.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.consortium-circle:nth-child(5) {
    width: 120px;
    height: 120px;
    transform: translate(455px, 0px);
}

.consortium-circle:nth-child(5) .innerCircle {
    background-image: url("../../assets/image/university/5.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.consortium-circle:nth-child(6) {
    width: 150px;
    height: 150px;
    transform: translate(663px, 117px);
}

.consortium-circle:nth-child(6) .innerCircle {
    background-image: url("../../assets/image/university/6.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.consortium-circle:nth-child(7) {
    width: 190px;
    height: 190px;
    transform: translate(644px, 357px);
}

.consortium-circle:nth-child(7) .innerCircle {
    background-image: url("../../assets/image/university/7.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.consortium-logo {
    width: 160px;
    height: 182px;
    background-image: url("../../assets/image/Logo2.svg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: translate(340px, 216px);
}

.consortium-controls {
    width: 312px;
    height: 206px;
    background-image: url("../../assets/image/ELEM.svg");
    background-size: contain;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

div[class^="consortium-arrow"] {
    width: 11.5px;
    height: 25px;
    background-image: url("../../assets/image/slider-arrow-left.svg");
}

.consortium-arrow-left {
    position: absolute;
    bottom: 0;

    transform: translate(117px, -19px);
}

.consortium-arrow-right {
    position: absolute;
    bottom: 0;
    transform: translate(184px, -19px) rotate(180deg);
}

.consortium-content {
    font-family: arial;
    text-align: center;
    color: #3f7e77;
    max-width: 946px;
    margin: 0 auto 50px;
}

.consortium-content h3 {
    font-size: 24px;
    font-weight: bold;
}

.consortium-content p {
    line-height: 17px;
    font-size: 15px;
    margin-bottom: 25px;
    color: #3f7e77;
}

.button {
    padding: 15px 55px;
    background-color: #3f7e77;
    color: rgba(248, 245, 230, 1);
    border-radius: 54px;
    font-size: 24px;
    margin: 41px 0;
    margin: auto;
    width: 300px;
    margin-bottom: 25px;
    cursor: pointer;
}

.consortium-content h3::after {
    display: block;
    content: "";
    width: 37px;
    height: 1px;
    margin: auto;
    background-color: #3f7e77;
    margin-top: 25px;
}

.consortium-footer {
    text-align: center;
    margin-bottom: 50px;
}

.consortium-footer a {
    color: #3f7e77;
}
</style>
