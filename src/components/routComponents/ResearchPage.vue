/*
Page - Страница Исследований

Тип страницы -

Используемые модули:
*/
<template>

    <bannerPromoResearchSection/>

    <ResearchSection
            :sectionData="researchData"
            :style="listResearch"
    />
    <p class="researchSection__text" :style="btnStyle" @click="showToggle">
        Смотреть еще
    </p>
</template>

<script>
    import BannerPromoResearchSection from "../unitComponents/BannerPromoResearchSection";
    import ResearchSection from "../unitComponents/ResearchSection";
    export default {
        name: "ResearchPage",
        components: {
            ResearchSection,
            BannerPromoResearchSection,
        },
        methods: {
            showToggle: function () {
                let height = 370 * Math.ceil(this.researchData.length / 3);
                this.listResearch = { height: `${height}px` };
                this.btnStyle = { opacity: 0, margin: "0 auto", height: 0 };
            },
        },
        data() {
            return {
                btnStyle: {},
                researchData:[
                    {
                        img:"https://s1.1zoom.ru/big3/576/Lilies_of_the_valley_490423.jpg",
                        text:"Отдаленная гибридизация",
                        years:"2020"
                    },
                    {
                        img:"https://s1.1zoom.ru/big3/576/Lilies_of_the_valley_490423.jpg",
                        text:"Отдаленная гибридизация",
                        years:"2020"
                    },
                    {
                        img:"https://s1.1zoom.ru/big3/576/Lilies_of_the_valley_490423.jpg",
                        text:"Отдаленная гибридизация",
                        years:"2020"
                    },
                    {
                        img:"https://s1.1zoom.ru/big3/576/Lilies_of_the_valley_490423.jpg",
                        text:"Отдаленная гибридизация",
                        years:"2020"
                    },
                    {
                        img:"https://s1.1zoom.ru/big3/576/Lilies_of_the_valley_490423.jpg",
                        text:"Отдаленная гибридизация",
                        years:"2020"
                    },
                    {
                        img:"https://s1.1zoom.ru/big3/576/Lilies_of_the_valley_490423.jpg",
                        text:"Отдаленная гибридизация",
                        years:"2020"
                    },
                    {
                        img:"https://s1.1zoom.ru/big3/576/Lilies_of_the_valley_490423.jpg",
                        text:"Отдаленная гибридизация",
                        years:"2020"
                    },
                    {
                        img:"https://s1.1zoom.ru/big3/576/Lilies_of_the_valley_490423.jpg",
                        text:"Отдаленная гибридизация",
                        years:"2020"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .researchSection__text{
        font-size: 15px;
        line-height: 17px;
        text-decoration-line: underline;
        color: #3F7E77;
        margin: 25px auto 100px auto;
        text-align: center;
        cursor: pointer;
    }
</style>