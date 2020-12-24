/*

Section - Консорциум (главная страница)

Принимает типы объектов:
        - CONSORTIUM_MEMBER
            - title: Название участника консорциума
            - image: Логотип участника консорциума

*/

<template>
    <section class="consortiumMainSection">
        <TitleSection :title="this.titleConsortium" :headerVisible="true" />

        <div class="consortiumTextContent">
            <div class="consortiumTextContent__text">
                <p>
                    НЦМУ «Агротехнологии будущего» входит в перечень научных
                    центров мирового уровня (утвержден на основании распоряжения
                    Правительства Российской Федерации от 24 октября 2020 года №
                    2744-р.), выполняющих исследования и разработки по
                    приоритетам научно-технологического развития Российской
                    Федерации.
                </p>

                <p>
                    Научный центр мирового уровня (НЦМУ) создан в формате
                    консорциума в рамках национального проекта «Наука».
                    Головная организация: Российский государственный аграрный
                    университет — МСХА имени К.А. Тимирязева
                </p>

                <p>Иницииатор создания центра - Трухачев Владимир Иванович</p>

                <p>Год создания НЦМУ: 2020</p>
            </div>
        </div>

        <div class="container">
            <div class="consortiumMainSection-container">
                <div
                    class="consortium-item"
                    v-for="consortiumItem in sectionData.CONSORTIUM_MEMBER"
                    :key="consortiumItem"
                >
                    <img :src="consortiumItem.image" />
                    <p>{{ consortiumItem.title }}</p>
                </div>
            </div>
        </div>
        <router-link :key="$route.fullPath" style="text-decoration: none" :to="{ name: 'Consortium' }">
            <ButtonElement/>
        </router-link>
    </section>
</template>

<script>
import TitleSection from "./TitleSection";
import ButtonElement from "./CommonElements/ButtonElement";

export default {
    name: "ConsortiumMain",
    components: {
        TitleSection,
        ButtonElement,
    },
    props: {
        sectionData: [],
    },
    data() {
        return {
            titleConsortium: "Консорциум",
            loadSucces: false
        };
    },
};
</script>

<style scoped>
.container {
    text-align: center;
    max-width: 1108px;
    align-items: center;
}

.consortiumMainSection {
    text-align: center;
    align-items: center;
    margin: 100px auto;
}

.consortiumMainSection-container {
    display: flex;
    flex-wrap: wrap;
    margin: 100px -23px 0 -23px;
    justify-content: center;
}

.consortium-item {
    width: 242px;
    height: 191px;
    text-align: center;
    margin: 0 23px 62px 23px;
}
.consortium-item p {
    width: 242px;
    color: #3f7e77;
    font-size: 15px;
}
.consortium-item img {
    max-width: 130px;
    max-height: 120px;
}

.consortiumTextContent {
    /* height: 200px; */
    margin-top: 75px;
    padding: 40px 0;
    text-align: center;
    background: linear-gradient(
            0deg,
            rgba(63, 126, 119, 0.8),
            rgba(63, 126, 119, 0.8)
        ),
        url("../../assets/image/consTextSecBack.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
}

.consortiumTextContent__text {
    width: 850px;
    margin: auto;
    color: #f8f5e6;
    /* justify-content: c; */
}
</style>
