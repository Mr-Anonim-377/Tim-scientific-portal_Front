// Страницу маркетинга копируем с новости без слайдера

<template>
    <!-- eslint-disable vue/no-v-html -->
    <section v-if="loadSuccess" class="bannerSlider">
        <TitleSection
            :title="NEWS_TITLE.TITLE[0].title"
            :header-visible="true"
        />

        <p class="bannerSlider__years">{{ NEWS_DATE.DATE[0].date }}</p>

        <div v-html="NEWS_TEXT.TEXT[0].text"></div>
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
    name: 'NewItemsPage',
    components: {
        TitleSection,
        Preloader,
    },
    mixins: [testMixin],
    data() {
        return {
            loadSuccess: false,
        };
    },
    async mounted() {
        await this.getModulesTest('', 'b39581c0-5c44-4a5f-ace9-3a3549452d60');
        setTimeout(() => {
            this.loadSuccess = true;
        }, 500);
    },
};
</script>

<style scoped>
section {
    color: #3f7e77;
}

.bannerSlider {
    max-width: 1140px;
    align-items: center;
    margin: 100px auto 170px auto;
    min-height: calc(100vh - 1010px);
}

.bannerSlider p {
    font-size: 15px;
    line-height: 150%;
    color: #3f7e77;
    margin-bottom: 20px;
}

.bannerSlider__years {
    position: relative;
    text-align: center;
    margin: 20px auto 50px auto;
}

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
}
</style>
