<template>
        <div class="institutes__img">
            <img :src="institute.img">
        </div>
</template>

<script>
    export default {
        name: "ProfileInstitutes",
        props:{
            institute:{}
        }
    }
</script>

<style>
    .institutes__img{
        width: 115px;
        height: 115px;
        align-items: center;
        justify-content: center;
        margin: 0 30px;
    }
    .institutes__img img{
        width: 100%;
        height: 100%;
    }

</style>