<template>
    <div v-if="loadSuccess">
        <section>
            <TitleSection title='Трансфер технологий осуществляемый участниками Консорциума НЦМУ "Агротехнологии будущего"' :headerVisible="true" />

            <ul>
                <li>Российский государственный аграрный университет - МСХА имени К. А. Тимирязева</li>

                <li>Санкт-Петербургский государственный университет</li>

                <li>Всероссийский научно-исследовательский институт сельскохозяйственной микробиологии</li>

                <li>ФИЦ "Почвенный институт имени В.В. Докучаева</li>

                <li>Всероссийский институт генетических ресурсов растений имени Н.И. Вавилова</li>

                <li>ФИЦ "Информатика и управление" РАН</li>

                <li>ФИЦ "Фундаментальные основы биотехнологии" РАН</li>
            </ul>
        </section>
    </div>
    <div v-else>
        <Preloader />
    </div>
</template>
<script>
    import TitleSection from '../unitComponents/TitleSection';
    // import mixin from '../../utils/methodsMixin';
    import Preloader from './../unitComponents/CommonElements/Preloader';
    export default {
        name: 'pagename',
        components: {
            TitleSection,
            Preloader,
        },
        // mixins: [mixin],
        data() {
            return {
                loadSuccess: false,
            };
        },
        async mounted() {
            // await this.getModulesTest('');
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

    ul {
        color: #3f7e77;
        font-size: 20px;
        margin: 100px auto;
        font-weight: 600;
    }

    li {
        margin: 20px 0;
    }
</style>
