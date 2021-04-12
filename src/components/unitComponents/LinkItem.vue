<template>
    <article>
        <div class="header">
            <h2>{{ linkData.title }}</h2>
        </div>

        <div class="link">
            <a href="#">{{ linkData.link }}</a>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'LinkItem.vue',
        props: {
            linkData: {},
        },
    };
</script>

<style scoped>
    article {
        padding: 30px 0 0;
        color: #3f7e77;
        text-align: center;
    }

    a {
        color: #729c97;
        text-align: center;
    }
</style>
