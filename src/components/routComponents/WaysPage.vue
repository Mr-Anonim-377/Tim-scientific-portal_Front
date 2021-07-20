// СТРАНИЦА НАПРАВЛЕНИЙ ИССЛЕДОВАНИЙ
<template>
    <div v-if="loadSuccess">
        <section class="waysSection">
            <!-- Заголовок секции -->
            <TitleSection
                :title="titleWays"
                :header-visible="visibleWays"
                style="margin-bottom: 100px"
            />
            <!-- Итемы направлений -->
            <WaysSection
                v-for="(waysItem, index) in WAYS_ARRAY.WAYS_ITEM"
                :key="waysItem"
                :section-data="waysItem"
                :index="index"
            />
        </section>
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
import mixin from '../../utils/methodsMixin';
import Preloader from '../unitComponents/CommonElements/Preloader';

import TitleSection from '../unitComponents/TitleSection';
import WaysSection from '../unitComponents/WaysSection';

export default {
    name: 'WaysBody',
    components: {
        WaysSection,
        TitleSection,
        Preloader,
    },
    mixins: [mixin],
    data() {
        return {
            loadSuccess: false,
            titleWays: 'Направления исследований',
            visibleWays: true,
        };
    },
    async mounted() {
        await this.getModulesTest('WAYS');
        setTimeout(() => {
            this.loadSuccess = true;
        }, 500);
    },
};
</script>

<style scoped>
.waysSection {
    max-width: 1111px;
    align-items: center;
    margin: 100px auto 126px auto;
}
</style>
