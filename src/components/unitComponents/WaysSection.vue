<template>
    <div class="waysSection-container">
        <img :src="require('../../assets/image/ways/' + items.img)">
        <div class="waysSection__text">
            <h2>{{items.title}}</h2>
            <p>{{items.text}}</p>
            <ButtonElement/>
        </div>
    </div>
    <div
            v-if="items.id < 5"
            class="waysSection-line"></div>
</template>

<script>
    import ButtonElement from "./CommonElements/ButtonElement";
    export default {
        name: "SectionWaysItems",
        components: {ButtonElement},
        props:{
            items:{}
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
    }

    .waysSection__text p{
        font-size: 15px;
        line-height: 17px;
        margin-bottom: 50px;
        width: 659px;
        margin-top: 40px;
        position: relative;
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
