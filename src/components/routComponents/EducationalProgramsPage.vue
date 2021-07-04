<template>
    <div v-if="loadSuccess">
        <section class="programs">
            <TitleSection
                :title="titlePrograms"
                :header-visible="true"
                :style-title="styleTitle.style"
            />
            <div class="programs-block">
                <documents-section :section-data="DOCS" />
            </div>
        </section>
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
import TitleSection from '../unitComponents/TitleSection';
import DocumentsSection from '@/components/unitComponents/DocumentsSection';
import mixin from '../../utils/methodsMixin';
import Preloader from './../unitComponents/CommonElements/Preloader';

export default {
    name: 'EducationalProgramsPage',
    components: {
        DocumentsSection,
        TitleSection,
        Preloader
    },
    mixins: [mixin],

    data() {
        return {
            titlePrograms: 'Образовательные программы',
            loadSuccess: false,
            styleTitle: {
                style: ['font-size: 26px']
            }
        };
    },
    async mounted() {
        await this.getModulesTest('EDUCATIONAL_PROGRAMS');
        setTimeout(() => {
            this.loadSuccess = true;
        }, 500);
    }
};
</script>

<style scoped>
.programs {
    max-width: 1200px;
    align-items: center;
    margin: 55px auto 100px auto;
    min-height: calc(100vh - 275px);
}

.programs-block {
    width: 800px;
    margin: 60px auto;
}
</style>
