<template>
    <div class="waysSection-container">
        <img :src="sectionData.image">
        <div class="waysSection__text">
            <h2>{{sectionData.title}}</h2>
            <p>{{sectionData.text}}</p>

             <router-link :to="{ path: `/all-research/${sectionData._pageLink}` }">
                          <ButtonElement/>
            </router-link>

        </div>
    </div>
    <div v-if="index !== 4"
            class="waysSection-line"></div>
</template>

<script>
    import ButtonElement from "./CommonElements/ButtonElement";
    export default {
        name: "SectionWaysItems",
        components: {ButtonElement},
        props:{
            sectionData:{},
            index: Number
        },
        mounted() {
            console.log(this.sectionData)
        }
    }
</script>

<style scoped>
    .waysSection-container{
        display: flex;
        flex-wrap: wrap;
        margin: 0px -23px 0 -23px;
    }
    .waysSection-container img{
        width: 405px;
        height: 405px;
        padding: 26px;
        border-radius: 50%;
        border: 3px solid #3F7E77;
    }
    .waysSection__text{
        color: #3F7E77;
        width: 674px;
        margin: 3px 0 0 58px;
    }
    .waysSection__text h2{
        font-size: 24px;
        line-height: 29px;
        font-weight: bold;
        text-overflow: clip;
        overflow: hidden;
        max-height: 85px;
    }

    .waysSection__text p{
        font-size: 15px;
        line-height: 17px;
        margin-bottom: 50px;
        width: 659px;
        margin-top: 40px;
        position: relative;
        /* max-height: 80px; */
    }
    .waysSection__text p:before{
        content: "";
        position: absolute;
        width: 35px;
        height: 1px;
        background: #3F7E77;
        top: -20px;
    }

    .waysSection-line{
        width: 3px;
        height: 51px;
        background: #3F7E77;
        margin-left: 182px;
    }
</style>
