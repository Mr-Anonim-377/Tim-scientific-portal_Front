<template>
    <section v-if="loadSuccess">
        <TitleSection title="Заголовок" :headerVisible="true" />
        <p>некоторый текст</p>
        <!-- <div v-html="NEWS_TEXT.TEXT[0].text"></div> -->
    </section>
    <div v-else>
        <Preloader />
    </div>
</template>

<script>
    import Preloader from './../unitComponents/CommonElements/Preloader';
    // import testMixin from '../../utils/methodsMixin.js';

    import TitleSection from '../unitComponents/TitleSection';

    export default {
        // mixins: [testMixin],
        props: {
            pageId: String,
        },
        name: 'KnowledgeBaseItem',
        components: {
            TitleSection,
            Preloader,
        },
        data() {
            return {
                loadSuccess: true,
            };
        },
        async mounted() {
            // await this.getModulesTest('', this.pageId);
            // setTimeout(() => {
            // this.loadSuccess = true;
            // }, 500);
        },
    };
</script>

<style scoped>
    section {
        color: #3f7e77;
    }

    section {
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

    /* .bannerSlider__years {
        position: relative;
        text-align: center;
        margin: 20px auto 50px auto;
    } */
    /* 
    .bannerSlider__years:before {
        content: '';
        position: absolute;
        width: 35px;
        height: 1px;
        background: #3f7e77;
        left: 490px;
        top: 11px;
    }

    .bannerSlider__years:after {
        content: '';
        position: absolute;
        width: 35px;
        height: 1px;
        background: #3f7e77;
        right: 490px;
        top: 11px;
    } */
</style>
