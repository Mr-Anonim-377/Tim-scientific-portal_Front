<template>
    <section v-if="loadSuccess">
        <TitleSection :title="VIDEOS.VIDEO[0].title" :header-visible="true" />
        <iframe
            width="1140"
            height="642"
            :src="VIDEOS.VIDEO[0].link"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </section>
    <div v-else>
        <Preloader />
    </div>
</template>

<script>
import Preloader from './../unitComponents/CommonElements/Preloader';
import testMixin from '../../utils/methodsMixin.js';

import TitleSection from '../unitComponents/TitleSection';

export default {
    name: 'KBMediaPage',
    components: {
        TitleSection,
        Preloader
    },
    mixins: [testMixin],
    props: {
        pageId: String
    },
    data() {
        return {
            loadSuccess: false
        };
    },
    async mounted() {
        await this.getModulesTest('', this.pageId);
        setTimeout(() => {
            this.loadSuccess = true;
        }, 500);
    }
};
</script>

<style scoped>
iframe {
    margin-top: 50px;
}
section {
    color: #3f7e77;
    max-width: 1140px;
    align-items: center;
    margin: 100px auto 170px auto;
    min-height: calc(100vh - 1010px);
}

section p {
    font-size: 15px;
    line-height: 150%;
    color: #3f7e77;
    margin-bottom: 20px;
}
</style>
