<template>
    <div>
        <ul :style="listProperty">
            <li v-for="researcher in researchersListData" :key="researcher.name">
                <ResearchersItem :researchItemData="researcher"></ResearchersItem>
            </li>
        </ul>
        <p  :style="btnStyle" @click="showToggle">Показать еще</p>
    </div>
</template>

<script>
    import ResearchersItem from "./ResearcherItem";

    export default {
        name: "ResearchList",
        components: {
            ResearchersItem
        },
        props: {
            researchersListData: Array,
        },
        data () { return {
            btnStyle: {},
            listProperty:{}
        }
        },
        methods: {
            showToggle: function () {
                let height = 307.5 * (Math.ceil(this.researchersListData.length / 3));
                this.listProperty = {height:`${height}px`};
                this.btnStyle = {opacity:0,
                    margin:"0 auto",
                    height:0
                };
            },
        }
    }
</script>

<style scoped>
    ul {
        position: relative;
        width: 1067px;
        margin: 0 auto;
        padding: 0;
        transition: height 1s;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        height: 300px;
        overflow: hidden;
    }

    li {
        list-style: none;
        font-size: 30px;
        font-weight: 300;
        width: 33%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        display: block;
        width: 200px;
        height: 36px;
        margin: 25px auto;
        text-align: center;
        font-size: 30px;
        transition: 1s;
    }
</style>