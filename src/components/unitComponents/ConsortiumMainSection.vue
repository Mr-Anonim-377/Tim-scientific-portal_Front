<template>
    <section class="consortiumMainSection">
        <TitleSection
                :title="this.titleConsortium"
                :headerVisible="visibleConsortium"
        />
        <div class="consortiumMainSection-container">
    <div class="consortium-item"
         v-for="consortiumItem in sectionData"
         :key="consortiumItem">

         <!-- FIXME поправить пути после доработки миксина -->
        <img :src="consortiumItem.image[0].value.url">
         <!-- FIXME поправить пути после доработки миксина -->
        <p>{{consortiumItem.title[0].value.text}}</p>

    </div>

        </div>
        <router-link style="text-decoration: none" :to="{name:'Consortium'}">
            <ButtonElement/>
        </router-link>
    </section>
</template>

<script>
    import TitleSection from "./TitleSection"
    import ButtonElement from "./CommonElements/ButtonElement";


    export default {
        name: "ConsortiumMain",
        components: {
            TitleSection,
            ButtonElement
        },
        props:{
            sectionData:[]
        },
        data() {
            return{
                visibleConsortium: true,
                titleConsortium:"Консорциум",
            }
        },
    }
</script>

<style scoped>
    .consortiumMainSection{
        text-align: center;
        max-width: 1108px;
        align-items: center;
        margin: 100px auto;
    }

    .consortiumMainSection-container{
        display: flex;
        flex-wrap: wrap;
        margin: 100px -23px 0 -23px;
        justify-content: center;
    }

    .consortium-item{
        width: 242px;
        height: 191px;
        text-align: center;
        margin: 0 23px 62px 23px;
    }
    .consortium-item p{
        width: 242px;
        color: #3F7E77;
        font-size: 15px;
    }
</style>
