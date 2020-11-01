<template>
    <div>
        <ul ref="list">
            <li v-for="item in researchersListData" :key="item.name">
                <ResearchersItem :researchItemData="item"></ResearchersItem>
            </li>
        </ul>
    </div>
    <p ref="btn" @click="showToggle">Показать еще</p>
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

        methods: {
            showToggle: function () {
                let height = 307.5 * (Math.ceil(this.researchersListData.length / 3));
                this.$refs.list.style.height = `${height}px`;
                this.$refs.btn.style.opacity = 0;
                this.$refs.btn.style.margin = "0 auto";
                this.$refs.btn.style.height = 0;
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