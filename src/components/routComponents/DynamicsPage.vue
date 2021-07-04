<template>
    <div v-if="loadSuccess">
        <section class="purposes-container">
            <PurposesSection
                style="margin: auto"
                :stile-title="styleTitle.style"
                :section-data="PROJECT_GOALS"
            />
        </section>
        <section class="dynamics">
            <div class="dynamics-container">
                <TitleSection
                    title="Динамика достижения результатов программы создания и развития 
					научного центра мирового уровня «Агротехнологии будущего» на 2020-2025 годы"
                    :header-visible="true"
                    :style-title="styleTitle.styleDynamics"
                />

                <ProgressItem
                    v-for="progressBar in DYNAMIC_GOALS.DYNAMIC_GOAL"
                    :key="progressBar"
                    :section-data="progressBar"
                />
            </div>
        </section>
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
import PurposesSection from '../unitComponents/PurposesSection';
import testMixin from '@/utils/methodsMixin';
import TitleSection from '../unitComponents/TitleSection';
import Preloader from './../unitComponents/CommonElements/Preloader';
import ProgressItem from '../unitComponents/ProgressItem';

export default {
    name: 'DynamicsPage',
    components: {
        PurposesSection,
        Preloader,
        TitleSection,
        ProgressItem
    },
    mixins: [testMixin],
    data() {
        return {
            /**
             * Стили
             */
            styleTitle: {
                style: [
                    'font-size: 26px; letter-spacing: 0.01em; margin-bottom: 94px;'
                ],
                styleDynamics: ['font-size: 26px; margin-bottom: 96px']
            },

            loadSuccess: false
        };
    },

    async mounted() {
        await this.getModulesTest('GOALS');
        setTimeout(() => {
            this.loadSuccess = true;
        }, 500);
    }
};
</script>

<style scoped>
p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #4d5668;
}

.purposes-container {
    width: 1200px;
    margin: 77px auto 0 auto;
}

.dynamics {
    text-align: center;
    width: 100%;
    background: #f8f5e6;
    padding: 65px 0 40px 0;
    background-size: cover;
}

.dynamics-container {
    width: 1200px;
    margin: auto;
    padding-top: 20px;
}
</style>
