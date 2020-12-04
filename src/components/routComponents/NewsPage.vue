<template>
    <section class="newsSection">
        <TitleSection :headerVisible="visibleNews" :title="this.titleNews" />
        <div class="newsSection-container" :style="listNews">
            <newsMainSection
                v-for="data in news"
                :key="data"
                :newsData="data"
                style="margin-bottom: 52px"
            />
        </div>
        <p class="newsSection__text" :style="btnStyle" @click="showToggle">
            Все новости
        </p>
    </section>
</template>

<script>
import TitleSection from "../unitComponents/TitleSection";
import newsMainSection from "../unitComponents/NewsMainSection";
export default {
    name: "researchBodyPage",
    components: {
        newsMainSection,
        TitleSection,
    },
    methods: {
        showToggle: function () {
            let height = 500 * Math.ceil(this.news.length / 3);
            this.listNews = { height: `${height}px` };
            this.btnStyle = { opacity: 0, margin: "0 auto", height: 0 };
        },
    },
    data() {
        return {
            btnStyle: {},
            listProperty: {},
            titleNews: "Новости программы",
            visibleNews: true,
            news: [
                {
                    img:
                        "https://stroy-podskazka.ru/images/article/orig/2018/03/obustrojstvo-teplic-vnutri-hitrosti-planirovki-4.jpg",
                    title: "Агротехнологии будущего",
                    years: "2020",
                    text:
                        "Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи значительно",
                },
                {
                    img:
                        "https://stroy-podskazka.ru/images/article/orig/2018/03/obustrojstvo-teplic-vnutri-hitrosti-planirovki-4.jpg",
                    title: "Агротехнологии будущего",
                    years: "2020",
                    text:
                        "Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи значительно",
                },
                {
                    img:
                        "https://stroy-podskazka.ru/images/article/orig/2018/03/obustrojstvo-teplic-vnutri-hitrosti-planirovki-4.jpg",
                    title: "Агротехнологии будущего",
                    years: "2020",
                    text:
                        "Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи значительно",
                },
                {
                    img:
                        "https://stroy-podskazka.ru/images/article/orig/2018/03/obustrojstvo-teplic-vnutri-hitrosti-planirovki-4.jpg",
                    title: "Агротехнологии будущего",
                    years: "2020",
                    text:
                        "Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи значительно",
                },
                {
                    img:
                        "https://stroy-podskazka.ru/images/article/orig/2018/03/obustrojstvo-teplic-vnutri-hitrosti-planirovki-4.jpg",
                    title: "Агротехнологии будущего",
                    years: "2020",
                    text:
                        "Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи значительно",
                },
                {
                    img:
                        "https://stroy-podskazka.ru/images/article/orig/2018/03/obustrojstvo-teplic-vnutri-hitrosti-planirovki-4.jpg",
                    title: "Агротехнологии будущего",
                    years: "2020",
                    text:
                        "Важное место в питании сегодня отводится клетчатке, содержание которой в зерне ржи значительно",
                },
            ],
        };
    },
};
</script>

<style scoped>
.newsSection-container {
    display: flex;
    margin: 98px -10px 52px -10px;
    justify-content: center;
    flex-wrap: wrap;
    height: 477px;
    overflow: hidden;
}
</style>
