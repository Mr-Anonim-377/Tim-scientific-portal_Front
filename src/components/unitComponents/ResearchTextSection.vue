// ТЕКСТОВАЯ СЕКЦИЯ НА СТРАНИЦЕ ИССЛЕДОВАНИЯ

<template>
    <section>
        <div class="backgroud-container">
            <div class="container">
                <TitleSection
                    :title="
                        sectionData.NAME
                            ? sectionData.NAME[0].title
                            : sectionData.TITLE[0].title
                    "
                ></TitleSection>

                <h2 class="researchText__title">Об исследовании</h2>
                <div class="flex-container">
                    <div class="researchText-text">
                        <p
                            v-for="p in sectionData.TEXT[0].text.split(' ; ')"
                            :key="p"
                        >
                            {{ p }}
                        </p>
                    </div>

                    <div class="researchText-controls">
                        <router-link :to="{ name: 'notFound' }">
                            <ButtonElement title="Результаты исследования" />
                        </router-link>

                        <router-link :to="{ name: 'notFound' }">
                            <ButtonElement title="Записаться на событие" />
                        </router-link>

                        <router-link :to="{ name: 'notFound' }">
                            <ButtonElement title="Подписаться на новости" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TitleSection from './TitleSection';
import ButtonElement from './CommonElements/ButtonElement';

export default {
    name: 'ResearchTextSection',
    components: {
        TitleSection,
        ButtonElement,
    },
    props: {
        sectionData: [],
    },
};
</script>

<style scoped>
section {
    min-height: 674px;
    width: 100%;
    background: url('../../assets/image/TEMP/1.png') no-repeat center / cover;
    position: relative;
    z-index: 0;
}

.backgroud-container {
    padding: 100px 0;

    width: 100%;
    height: 100%;

    background-color: rgba(63, 126, 119, 0.8);
}

.flex-container {
    display: flex;
}

/* Текстовый контент */
.researchText-text {
    width: 795px;
    color: #f8f5e6;
}

.researchText-text p {
    font-size: 15px;
    color: #f8f5e6;
    margin: 0 0 20px 0;
    max-width: 677px;
    letter-spacing: 1px;
    line-height: 19px;
}

.researchText__title {
    font-family: Roboto;
    font-size: 24px;
    color: white;
    color: #f8f5e6;
}

.researchText__title::after {
    display: block;
    content: '';
    width: 35px;
    height: 1px;
    background-color: #f8f5e6;
    margin: 30px 0;
}

/* Кнопки */
.researchText-controls {
    width: 40%;
    margin-left: 80px;
}

.researchText-controls button {
    width: 100%;
    margin-bottom: 50px;
    margin-left: auto;
    background: #f8f5e6;
    color: #3f7e77;
}
</style>
