// СТРАНИЦА НОВОСТИ

<template>
    <!-- eslint-disable vue/no-v-html -->
    <section v-if="loadSuccess" class="bannerSlider">
        <TitleSection
            :title="NEWS_TITLE.TITLE[0].title"
            :header-visible="true"
        />

        <p class="bannerSlider__years">{{ NEWS_DATE.DATE[0].date }}</p>

        <!-- Секция слайдера -->
        <div v-if="NEWS_IMAGE_CAROUSEL?.IMAGE">
            <NewsSliderSection :urls="NEWS_IMAGE_CAROUSEL.IMAGE" />
        </div>

        <div v-html="transformHhtmlLinks(NEWS_TEXT.TEXT[0].text)"></div>
    </section>
    <div v-else>
        <Preloader />
    </div>
</template>

<script>
import Preloader from './../unitComponents/CommonElements/Preloader';
import testMixin from '../../utils/methodsMixin.js';

import TitleSection from '../unitComponents/TitleSection';
import NewsSliderSection from '../unitComponents/NewsSliderSection';

export default {
    name: 'NewItemsPage',
    components: {
        // NewsMain,
        TitleSection,
        NewsSliderSection,
        Preloader
    },
    mixins: [testMixin],
    props: {
        pageId: String
    },
    data() {
        return {
            loadSuccess: false,
            titleNews: 'Агротехнологии будущего'
        };
    },
    async mounted() {
        await this.getModulesTest('', this.pageId);
        setTimeout(() => {
            this.loadSuccess = true;
        }, 500);
    },

    methods: {
        transformHhtmlLinks(string) {
            return string
                .split(' ')
                .map(word => {
                    if (word.slice(0, 5) === 'https')
                        return `<a href=${word}}">${word}</a>`;
                    return word;
                })
                .join(' ')
                .split('<br>')
                .map(word => {
                    if (word.slice(0, 5) === 'https')
                        return `<a href=${word}}">${word}</a>`;
                    return word;
                })
                .join(' ');
        }
    }
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
