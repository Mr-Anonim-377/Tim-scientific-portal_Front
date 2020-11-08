<template>
    <div class="info-carousel__project">
        <p>{{profile_project}}</p>
    </div>
</template>

<script>
    export default {
        name: "SectionProfileTitle",
        props:{
            profile_project: String
        }
    }
</script>

<style  scoped>
    .info-carousel__project{
        width: 100%;
        height: 100%;
        background: darkblue;
        font-weight: bold;
        font-size: 12px;
        text-align: center;
        color: #FFFFFF;
    }
</style>