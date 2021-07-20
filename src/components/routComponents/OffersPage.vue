<template>
    <div v-if="loadSuccess">
        <section>
            <TitleSection
                :title="SUBMISSION_TITLE.TITLE[0].title"
                :header-visible="true"
            />
            <div
                v-for="link in SUBMISSION_LINK.SUBMISSION_ITEM"
                :key="link.title"
            >
                <LinkItem :link-data="link" />
            </div>
        </section>
    </div>
    <div v-else>
        <Preloader />
    </div>
</template>
<script>
import TitleSection from '../unitComponents/TitleSection';
import mixin from '../../utils/methodsMixin';
import Preloader from './../unitComponents/CommonElements/Preloader';

import LinkItem from './../unitComponents/LinkItem';
export default {
    name: 'OffersPage',
    components: {
        TitleSection,
        Preloader,
        LinkItem,
    },
    mixins: [mixin],
    data() {
        return {
            loadSuccess: false,
        };
    },
    async mounted() {
        await this.getModulesTest('SUBMISSION_RESULTS');
        setTimeout(() => {
            this.loadSuccess = true;
        }, 500);
    },
};
</script>
<style scoped>
section {
    max-width: 1140px;
    align-items: center;
    margin: 100px auto 170px auto;
    min-height: calc(100vh - 1010px);
}
</style>
