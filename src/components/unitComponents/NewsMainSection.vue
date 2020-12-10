<template>
    <section class="newsSection">
        <TitleSection
                :headerVisible="visibleNews"
                :title="this.titleNews"
        />
        <div class="newsSection-container" :style="listNews">
    <div
            class="news-item"
            v-for="NEWS_ITEM in newsData"
            :key="NEWS_ITEM">
        <img :src="NEWS_ITEM.image" />
        <h3>{{ NEWS_ITEM.title}}</h3>
        <p class="news-item__years">{{
            NEWS_ITEM.date.split(".")[2]
            }}</p>
        <p class="news-item__text">{{ NEWS_ITEM.text}}</p>
        <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
        <ButtonElement :modifiers="modifiers.btn" class="news__btn" />
        </router-link>
    </div>
        </div>
    </section>
</template>

<script>
    import TitleSection from "../unitComponents/TitleSection";
import ButtonElement from "./CommonElements/ButtonElement";

export default {
    name: "NewsMain",
    components: {
        ButtonElement,
        TitleSection,
    },
    props: {
        newsData: {},
        listNews:{}
    },
    data() {
        return {
            modifiers: {
                btn: [
                    "width: 170px; height: 35px; font-size: 14px; line-height: 17px; padding: 10px;",
                ],
            },
            titleNews: "Новости программы",
            visibleNews: true,
        };
    },
};

</script>

<style scoped>
.news-item {
    width: 367px;
    height: 534px;
    margin: 0 10px 52px 10px;
}

.news-item img {
    width: 367px;
    height: 250px;
}

p,
h3 {
    font-size: 15px;
    color: #3f7e77;
    line-height: 109.19%;
}
/*Стили года и линий*/
.news-item__years {
    margin: 0 9px;
    position: relative;
}
.news-item__years:before {
    content: "";
    position: absolute;
    width: 35px;
    height: 1px;
    background: #3f7e77;
    left: 110px;
    top: 8px;
}
.news-item__years:after {
    content: "";
    position: absolute;
    width: 35px;
    height: 1px;
    background: #3f7e77;
    right: 109px;
    top: 8px;
}

h3 {
    font-weight: 900;
    margin: 17px 0 8px 0;
    height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.news-item__text {
    padding: 0 10px;
    height: 124px;
    overflow: hidden;;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
}

.news__btn {
    display: none;
    margin: 26px auto 32px auto;
}
</style>
