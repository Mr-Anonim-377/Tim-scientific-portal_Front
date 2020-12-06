/*

Section - Консорциум (главная страница)

Принимает типы объектов:
        - CONSORTIUM_MEMBER
            - title: Название участника консорциума
            - image: Логотип участника консорциума

*/

<template>
    <section class="consortiumMainSection">
        <TitleSection
            :title="this.titleConsortium"
            :headerVisible="true"
        />
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
        <router-link style="text-decoration: none" :to="{ name: 'Consortium' }">
            <ButtonElement />
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
        };
    },
};
</script>

<style scoped>
.consortiumMainSection {
    text-align: center;
    max-width: 1108px;
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
</style>
