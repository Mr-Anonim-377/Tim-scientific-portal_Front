// Страница консорциума

<template>
    <!--Секция слайдера консорциума-->
    <ConsortioumSliderSection v-if="loadSuccess" :moduleData="CONSORTIUM_CARUSEL.CONSORTIUM_MEMBER" />

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
    import testMixin from '../../utils/methodsMixin.js';
    import Preloader from './../unitComponents/CommonElements/Preloader';
    import ConsortioumSliderSection from '../unitComponents/ConsorciumSliderSection';

    export default {
        name: 'ConsortiumMain',
        components: {
            ConsortioumSliderSection,
            Preloader,
        },
        data() {
            return {
                consortioumData: [],
                loadSuccess: false,
            };
        },
        mixins: [testMixin],
        async mounted() {
            await this.getModulesTest('CONSORTIUM');
            setTimeout(() => {
                this.loadSuccess = true;
            }, 500);
        },
    };
</script>

<style></style>
