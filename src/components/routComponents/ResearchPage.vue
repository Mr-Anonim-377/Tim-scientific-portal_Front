// СТРАНИЦА КОНКРЕТНОГО ИССЛЕДОВАНИЯ

<template>
    <div v-if="loadSuccess">
        <!-- Текстовая секция исследования -->
        <ResearchTextSection :sectionData="BANNER" />

        <!-- Лист исследователей -->
        <div v-if="RESEARCH_MEMBER_ARRAY?.RESEARCH_MEMBER">
            <ResearcMembersSection :sectionData="RESEARCH_MEMBER_ARRAY.RESEARCH_MEMBER" />
        </div>

        <!-- Слайдер -->
        <ResearchSliderSection :sectionData="RESEARCH_IMAGE_SLIDER" />

        <!-- Новости -->
        <!-- NOTE пока убрал т.к. секция пустая -->
        <!-- <NewsSection :newsData="NEWS_CAROUSEL.NEWS_ITEM.slice(0, 3)" /> -->
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
    import testMixin from '../../utils/methodsMixin.js';
    import Preloader from './../unitComponents/CommonElements/Preloader';

    import ResearchTextSection from '../unitComponents/ResearchTextSection';
    import ResearcMembersSection from '../unitComponents/ResearcMembersSection';
    import ResearchSliderSection from '../unitComponents/ResearchSliderSection';
    // import NewsSection from '../unitComponents/NewsSection';

    export default {
        name: 'ResearchPage',
        components: {
            ResearchTextSection,
            ResearcMembersSection,
            ResearchSliderSection,
            // NewsSection,
            Preloader,
        },
        props: {
            pageId: String,
        },
        mixins: [testMixin],
        data() {
            return {
                loadSuccess: false,
            };
        },
        async mounted() {
            // NOTE Вызов для новостей
            await this.getModulesTest('MAIN_PAGE');
            await this.getModulesTest('', this.pageId);

            setTimeout(() => {
                this.loadSuccess = true;
            }, 500);
        },
    };
</script>

<style>
    /*Новости*/
    .newsSection__text {
        text-align: center;
    }

    .NewsSection {
        margin-bottom: 100px;
    }
</style>
