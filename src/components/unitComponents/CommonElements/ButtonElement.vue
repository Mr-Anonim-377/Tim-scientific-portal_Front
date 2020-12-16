<template>
    <button class="buttonSection" :style="modifiers">{{titleValue}}</button>
</template>

<script>
    export default {
        name: "buttonSection",
        props:["modifiers", "title"],

        data() {
            return {
                titleValue: this.title ? this.title : "Подробнее"
            }
        },
    }


</script>

<style scoped>
    .buttonSection{
        width: 300px;
        height: 60px;
        background: #3F7E77;
        border-radius: 54px;
        margin: auto;
        font-weight: bold;
        color: #F8F5E6;
        padding: 16px;
        font-size: 18px;
        line-height: 22px;
        border: 0;
    }
    .buttonSection:active,
    :hover,
    :focus {
        outline:none;
    }
</style>
