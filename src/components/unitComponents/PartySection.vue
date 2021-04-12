// СТРАНИЦА УЧАСТНИКОВ КОНСОРЦИУМА // В разработке

<template>
    <section class="partySection">
        <TitleSection :headerVisible="visibleParty" :title="this.title" />
        <!-- <div v-for="dataTitle in sectionData" :key="dataTitle"> -->
        <!-- <img :src="dataTitle.img" /> -->
        <!-- <h2>{{ dataTitle.title }}</h2> -->
        <div v-if="sectionData" class="party-container" :style="listResearch">
            <div class="party-block" v-for="researcher in sectionData" :key="researcher.text">
                <!-- <img :src="researcher.image" /> -->
                <div class="researcher-image" :style="{ backgroundImage: `url(${researcher.image})` }"></div>
                <div class="party-block__right">
                    <h3 class="party-block__text-name">
                        {{
                            researcher.text
                                .split(' ')
                                .slice(0, 1)
                                .join(' ')
                        }}
                    </h3>
                    <h3>
                        {{
                            researcher.text
                                .split(' ')
                                .slice(1, 3)
                                .join(' ')
                        }}
                    </h3>
                    <p class="party-block__text-project">
                        Участие в проектах:
                    </p>
                    <div class="project-container" v-if="researcher._childModuleObject.length > 0">
                        <div class="project-container-block" v-for="research in researcher._childModuleObject" :key="research.id">
                            <router-link style="text-decoration: none" :to="{ path: `/research/${research.pageLink}` }">
                                <img :src="research.contents.find((content) => content.contentType === 'IMAGE').value.url" />

                                <p>{{ research.contents.find((content) => content.contentType === 'TITLE').value.text }}</p>
                            </router-link>
                        </div>
                    </div>
                    <div class="project-container-none" v-else></div>
                </div>
            </div>
        </div>

        <div class="researchersEmpty" v-else>
            <h1>Исследователей нет</h1>
        </div>
        <!-- <p v-if="sectionData.length > 6" class="partySection__text" :style="btnStyle" @click="showToggle">
            Смотреть еще
        </p> -->
        <!-- </div> -->
    </section>
</template>

<script>
    import TitleSection from '../unitComponents/TitleSection';
    export default {
        name: 'PartySection',
        components: {
            TitleSection,
        },
        props: {
            sectionData: {},
            title: String,
        },
        methods: {
            showToggle: function() {
                this.listResearch = { 'max-height': 'fit-content' };
                this.btnStyle = { opacity: 0, margin: '0 auto', height: 0 };
            },
        },
        data() {
            return {
                btnStyle: {},
                titleParty: 'Участники проекта',
                visibleParty: true,
            };
        },
    };
</script>

<style scoped>
    .researcher-image {
        width: 200px;
        height: 200px;
        border: 3px solid #3f7e77;
        border-radius: 100%;
        margin: 35px 12px;
        background-size: cover;
        background-position: auto 50%;
    }
    section {
        min-height: calc(100vh - 870px);
    }
    .researchersEmpty {
        /* padding: 50px 0; */
        margin-top: 50px;
        margin-bottom: 150px;
        color: #3f7e77;
    }
    .partySection {
        text-align: center;
        max-width: 1141px;
        align-items: center;
        margin: 100px auto 52px auto;
    }
    .partySection img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 3px solid #3f7e77;
        padding: 2px;
        margin-top: 71px;
    }
    h3,
    h2 {
        font-family: Roboto;
        /* font-family: 'Gilroy-Bold'; */
        font-size: 24px;
        line-height: 29px;
        color: #3f7e77;
    }
    h2 {
        width: 560px;
        text-align: center;
        margin: 13px auto 48px auto;
        letter-spacing: 0.02em;
    }
    h3 {
        margin: 0 4px 0 0;
    }

    .party-container {
        padding-top: 50px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 0 -10px;
        /* max-height: 863px; */
        overflow: hidden;
    }

    .party-block {
        display: flex;
        width: 560px;
        height: 270px;
        background: #f8f5e6;
        border-radius: 10px;
        text-align: left;
        box-shadow: 8px 8px 5px -6px rgba(0, 0, 0, 0.2);
        margin: 0 10px 20px 10px;
    }
    .party-block img {
        width: 200px;
        height: 200px;
        border: 3px solid #3f7e77;
        border-radius: 50%;
        margin: 35px 12px;
    }
    .party-block__right {
        display: flex;
        flex-wrap: wrap;
        width: 346px;
    }
    .party-block__text-name {
        margin: 12px auto 0 auto;
        width: 100%;
    }
    .party-block__text-project {
        font-size: 15px;
        line-height: 18px;
        color: #3f7e77;
        position: relative;
        margin: 34px auto 18px auto;
        width: 100%;
        height: 20px;
    }
    .party-block__text-project:before {
        content: '';
        position: absolute;
        width: 35px;
        height: 1px;
        background: #3f7e77;
        bottom: 37px;
    }
    .project-container {
        display: flex;
        overflow-x: auto;
        margin: 0 -10px 29px -10px;
        width: 100%;
    }
    .project-container::-webkit-scrollbar {
        width: 1px;
        height: 10px;
    }
    .project-container::-webkit-scrollbar-track {
        height: 1px;
    }
    .project-container::-webkit-scrollbar-track-piece {
        height: 1%;
        background-color: rgba(63, 126, 119, 0.5);
        border-radius: 23px;
    }
    .project-container::-webkit-scrollbar-thumb {
        border-radius: 23px;
        background: #3f7e77;
        height: 9px;
    }

    .project-container-none {
        margin-top: 127px;
        width: 1px;
    }
    .project-container-block {
        width: 61px;
        margin: 0 10px;
    }
    .project-container-block img {
        width: 60px;
        height: 60px;
        padding: 2px;
        border: 3px solid #3f7e77;
        border-radius: 50%;
        margin: 0;
    }
    .project-container-block p {
        /* font-weight: 600; */
        font-size: 9px;
        line-height: 11px;
        text-align: center;
        color: #3f7e77;
        width: 61px;
        max-height: 22px;
        overflow: hidden;
        margin: 0 auto 13px auto;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .partySection__text {
        font-size: 15px;
        line-height: 132.19%;
        text-decoration-line: underline;
        color: #3f7e77;
        margin: 51px auto 0 auto;
        text-align: center;
        cursor: pointer;
    }
</style>
