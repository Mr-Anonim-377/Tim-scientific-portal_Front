<template>
    <div class="gallery">
        <div class="list">
            <div @click="showItem" v-for="item in galleryItems" :key="item.url" class="item">
                <img :src="item.url">
            </div>
        </div>
        <div ref="view" class="view"></div>
    </div>
</template>

<script>
    export default {
        name: "Gallery",
        props: {
            galleryItems: Array
        },
        methods: {
            showItem(event) {
                this.$refs.view.style.backgroundImage = `url("${event.target.src}")`;
            },
        },
        mounted() {
            this.$refs.view.style.backgroundImage = `url("${this.galleryItems[0].url}")`;
        }

    }
</script>

<style scoped>
    .gallery {
        width: 1063px;
        height: 600px;
        margin: auto;
        display: flex;
        position: relative;
        align-items: center;
    }

    .list {
        height: 100%;
        max-width: 421px;
        flex-grow: 1;
        margin-right: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        align-content: start;
        overflow-y: scroll;
    }

    .view {
        height: 100%;
        flex-grow: 3;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-color: white;
    }

    .item {
        width: 186px;
        height: 186px;
        margin-top: 20px;
        /* Градиент временно */
        background: linear-gradient(216deg, rgba(8, 81, 190, 1) 0%, rgba(60, 121, 9, 1) 60%, rgba(255, 0, 0, 1) 100%);
    }

    .item:nth-child(1),
    .item:nth-child(2) {
        margin-top: 0;
    }

    .item img {
        width: inherit;
        height: inherit;
    }
</style>