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

                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div class="research-slider__controls"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ResearchSliderSection",
    props: {
        sectionData: [],
    },

    data() {
        return {
            positions: {
                circle1: {
                    transform: "translatex(0)",
                },
                circle2: {
                    transform: "translatex(290px)",
                },
                circle3: {
                    transform: "translatex(544px)",
                    width: "635px",
                    height: "635px",
                },
                circle4: {
                    transform: "translatex(0)",
                },
                circle5: {
                    transform: "translatex(0)",
                },
            },
        };
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
    width: 1718px;
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

    top: 0;
    bottom: 0;
    margin: auto;
}

.circle:nth-child(1) {
    /* transform: translate(0px, 240px); */
}
.circle:nth-child(2) {
    transform: translatex(290px);
}
.circle:nth-child(3) {
    transform: translatex(544px);
    width: 635px;
    height: 635px;
}
.circle:nth-child(4) {
    transform: translatex(1239px);
}
.circle:nth-child(5) {
    transform: translatex(1505px);
}
</style>
