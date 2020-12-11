<template>
    <section class="researchSection">
        <TitleSection
                :title="this.titleResearch"
                :headerVisible="visibleResearch"
        />
        <div class="researchSection-container" :style="listResearch">
            <div class="research-block "
            v-for="data in sectionData"
                 :key="data"
            >
                <img :src="data.img">
                <h3>{{data.text}}</h3>
                <p>{{data.years}}</p>

              <router-link style="text-decoration: none" :to="{name:'notFound'}">
                <ButtonSection
                        class="research__btn"
                        :modifiers="modifiers.btn"
                />
                </router-link>

            </div>
        </div>
    </section>
</template>

<script>

    import TitleSection from "../unitComponents/TitleSection";
    import ButtonSection from "../unitComponents/CommonElements/ButtonElement";
    export default {
        name: "ResearchSection",
        components: {
            ButtonSection,
            TitleSection
        },
        props:{
            sectionData:{},
            listResearch:{}
        },
        data() {
            return {
                modifiers: {
                    btn: [
                        "width: 170px; height: 35px; font-size: 14px; line-height: 17px; padding: 10px;",
                    ],
                },
                titleResearch: "Исследования",
                visibleResearch: true,
            };
        },
    }
</script>

<style scoped>
    .researchSection{
        text-align: center;
        max-width: 1141px;
        align-items: center;
        margin: 84px auto 100px auto;
        overflow: hidden;
    }
    .researchSection-container{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        flex-wrap: wrap;
        color: #3F7E77;
        height: 443px;
        text-align: center;
        margin: 114px -10px 0 -10px;
    }
    .research-block{
        width: 270px;
        height: 443px;
        margin: 0 10px 25px 10px;
    }
    .research-block img{
        width: 240px;
        height: 240px;
        padding: 16px;
        border-radius: 50%;
        border: 3px solid #3F7E77;
        margin: 30px auto 28px auto;
    }
    .research-block h3{
        width: 193px;
        height: 40px;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        margin: auto;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .research-block p{
        font-size: 15px;
        line-height: 70%;
        text-align: center;
        position: relative;
    }
    .research-block p:before {
        content: "";
        position: absolute;
        width: 35px;
        height: 1px;
        background: #3f7e77;
        left: 162px;
        top: 3px;
    }
    .research-block p:after {
        content: "";
        position: absolute;
        width: 35px;
        height: 1px;
        background: #3f7e77;
        right: 162px;
        top: 3px;
    }

    .research__btn {
        display: none;
        margin: 0 auto 30px auto;
    }
    .researchSection-container :hover .research__btn{
        display: block;
        background-color: #3f7e77;
    }
    .researchSection-container :hover{
    background-color: #f8f5e6;
    }
</style>
