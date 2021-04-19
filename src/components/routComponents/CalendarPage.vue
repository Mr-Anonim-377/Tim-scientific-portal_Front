<template>
    <div v-if="loadSuccess">
        <section class="calendar">
            <div class="calendar-container-banner">
                <TitleSection :styleTitle="styleTitle.style" :title="CALENDAR_BANNER.TITLE[0].title" :headerVisible="visibleCalendar" />
                <div class="banner-date">
                    {{ CALENDAR_BANNER.DATE[0].date }}
                </div>
                <p>{{ CALENDAR_BANNER.TEXT[0].text }}</p>
            </div>

            <div class="calendar-container-information">
                <div class="calendar-container-information__docs">
                    <documents-section
                        v-if="this.CALENDAR_TEXT.DOC"
                        :sectionData="this.CALENDAR_TEXT"
                        :localData="{ title: 'Информация о событии: Вавиловская школа-конференция аспирантов и молодых ученых' }"
                    />
                </div>

                <p v-for="paragraph in this.CALENDAR_TEXT.TEXT[0].text.split(' ; ')" :key="paragraph">
                    {{ paragraph }}
                </p>
            </div>
        </section>
    </div>

    <div v-else>
        <Preloader />
    </div>
</template>

<script>
    import TitleSection from '../unitComponents/TitleSection';
    import Preloader from '../unitComponents/CommonElements/Preloader.vue';
    import mixin from '../../utils/methodsMixin';
    import DocumentsSection from '@/components/unitComponents/DocumentsSection';

    export default {
        name: 'CalendarPage',
        components: {
            Preloader,
            TitleSection,
            DocumentsSection,
        },
        props: {
            pageId: String,
        },
        mixins: [mixin],
        data() {
            return {
                loadSuccess: false,
                /**
                 * Стили
                 */
                styleTitle: {
                    style: ['font-size: 26px; letter-spacing: 0.06em; max-width: 1200px; margin: 10px auto 0 auto'],
                },
            };
        },

        async mounted() {
            await this.getModulesTest('', this.pageId);
            console.log(this.modules);

            console.log(this.CALENDAR_BANNER);
            console.log(this.CALENDAR_TEXT.DOC);
            console.log(this.CALENDAR_SLIDER);
            setTimeout(() => {
                this.loadSuccess = true;
            }, 500);
        },
    };
</script>

<style scoped>
    p {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.1em;
        color: #f8f5e6;
    }

    .calendar-container-information__docs {
        transform: translateX(28px);
        margin: 50px 0;
        font-weight: normal;
        text-align: right;
    }

    .calendar {
        margin: auto;
        min-height: calc(100vh - 870px);
    }

    .calendar-container-banner {
        width: 100%;
        background: linear-gradient(0deg, rgba(63, 126, 119, 0.8), rgba(63, 126, 119, 0.8)), url('../../assets/image/calendarBackgroundPage.png');
        background-size: cover;
        margin: auto;
        padding: 96px 0 158px 0;
    }

    .banner-date {
        width: 282px;
        height: 45px;
        background: #f8f5e6;
        margin: 39px auto 41px auto;
        padding: 10px;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        line-height: 132.19%;
        letter-spacing: 0.2em;
        color: #3f7e77;
    }

    .calendar-container-information {
        max-width: 1200px;
        margin: 60px auto 102px auto;
    }

    .calendar-container-information p {
        font-size: 14px;
        line-height: 150%;
        color: #4d5668;
        text-align: left;
        margin-bottom: 30px;
    }

    .information-img {
        display: flex;
        justify-content: space-between;
    }

    .img-block {
        width: 341px;
        height: 226px;
    }

    .img-block img {
        width: 100%;
        height: 100%;
    }
</style>
