// СТРАНИЦА НОВОСТЕЙ

<template>
    <div v-if="loadSuccess">
        <NewsSection :tag="tag" :newsData="NEWS_SLIDER.NEWS_ITEM" :listNews="listNews" :titlePage="titlePage" />
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
    import Preloader from './../unitComponents/CommonElements/Preloader';
    import mixin from '../../utils/methodsMixin';

    import NewsSection from '../unitComponents/NewsSection';

    export default {
        name: 'researchBodyPage',
        components: {
            NewsSection,
            Preloader,
        },
        props: {
            tag: String,
        },
        computed: {
            titlePage() {
                switch (this.tag) {
                    case 'Информатика_и_управление':
                        return 'ФИЦ "Информатика и управление" РАН';
                    case 'сельскохозяйственной_микробиологии':
                        return 'Всероссийский научно-исследовательский институт сельскохозяйственной микробиологии';
                    case 'Санкт-Петербургский':
                        return 'Санкт-Петербургский государственный университет';
                    case 'Вавилова':
                        return 'Всероссийский институт генетических ресурсов растений имени Н.И. Вавилова';
                    case 'Докучаева':
                        return 'ФИЦ "Почвенный институт имени В.В. Докучаева';
                    case 'Фундаментальные_основы_биотехнологии':
                        return 'ФИЦ "Фундаментальные основы биотехнологии" РАН';
                    case 'РГАУ-МСХА':
                        return 'Российский государственный аграрный университет - МСХА имени К. А. Тимирязева';
                }

                return 'Некорректная ссылка';
            },
        },
        mixins: [mixin],
        data() {
            return {
                btnStyle: {},
                listProperty: {},
                listNews: {},
                titleNews: 'Новости Уника',
                visibleNews: true,
                loadSuccess: false,
            };
        },

        async mounted() {
            await this.getModulesTest('NEWS_PAGE');
            setTimeout(() => {
                this.loadSuccess = true;
            }, 500);
        },
    };
</script>
