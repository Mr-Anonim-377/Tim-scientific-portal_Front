<template>
    <section class="purposesMainSection">
        <TitleSection
            :title="this.titlePurposes"
            :headerVisible="visiblePurposes"
        />
        <div class="purposesMainSection-container">
            <div class="purposes-item" v-for="item in sectionData" :key="item">
                <img :src="item.image[0].value.url" />
                <p>{{ item.text[0].value.text }}</p>
            </div>
        </div>
    </section>
</template>

<script>
import TitleSection from "./TitleSection";

export default {
    name: "Purposes",
    components: {
        TitleSection,
    },
    props: {
        sectionData: [],
    },
    data() {
        return {
            titlePurposes: "Цели проекта",
            visiblePurposes: true,
        };
    },
    mounted() {
    },
};
</script>

<style scoped>
/*Цели*/
.purposesMainSection {
    text-align: center;
    max-width: 1141px;
    align-items: center;
    margin: 100px auto 87px auto;
}

.purposesMainSection-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 100px -78px 0 -78px;
}

.purposes-item {
    margin: 0 38px;
}

.purposes-item img {
    width: 100px;
    height: 95px;
}
.purposes-item p {
    width: 240px;
    font-size: 15px;
    color: #3f7e77;
    margin-top: 48px;
    position: relative;
}
.purposes-item p:before {
    content: "";
    position: absolute;
    width: 35px;
    height: 1px;
    background: #3f7e77;
    left: 102px;
    top: -18px;
}
</style>
