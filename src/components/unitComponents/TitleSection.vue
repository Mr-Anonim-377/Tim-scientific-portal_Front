<template>
    <div class="text-blue" v-if="headerVisible">
        <img src="../../assets/image/Line.svg">
        <h2>{{title}}</h2>
    </div>
    <div class="text-white" v-else>
        <img src="../../assets/image/Line2.svg">
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    export default {
        name: "newSectionHeader",
        props: {
            title: String,
            headerVisible:String
        },
    }
</script>

<style scoped>
    h2{
        font-size: 36px;
        margin-top: 16px;
        font-weight: 900;
    }
    .text-white{
        color: #FFFFFF;
        text-align: center;
    }
    .text-blue{
        color: #3F7E77;
        text-align: center;
    }

</style>
