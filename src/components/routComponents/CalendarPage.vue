<template>
    <div v-if="loadSuccess">
        <section class="calendar">
            <div class="calendar-container-banner">
                <TitleSection :styleTitle="styleTitle.style" :title="pageData.title" :headerVisible="visibleCalendar" />
                <div class="banner-date">
                    {{ pageData.full_date }}
                </div>
                <p>{{ pageData.place }}</p>
            </div>

            <div class="calendar-container-information">
                <p v-for="paragraph in pageData.text" :key="paragraph">
                    {{ paragraph }}
                </p>

                <!-- <div class="information-img">
                    <div class="img-block">
                        <img
                            src="https://www.timacad.ru/uploads/media/cache/full_image/uploads/images/20180709/1531153061_1530284873_b_img5ad5b4b2609317.59118158.jpg"
                        />
                    </div>

                    <div class="img-block">
                        <img
                            src="https://www.timacad.ru/uploads/media/cache/full_image/uploads/images/20180709/1531153061_1530284873_b_img5ad5b4b2609317.59118158.jpg"
                        />
                    </div>

                    <div class="img-block">
                        <img
                            src="https://www.timacad.ru/uploads/media/cache/full_image/uploads/images/20180709/1531153061_1530284873_b_img5ad5b4b2609317.59118158.jpg"
                        />
                    </div>
                </div> -->
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

    export default {
        name: 'CalendarPage',
        components: {
            Preloader,
            TitleSection,
        },

        props: {
            URI: {
                type: String,
                default: '',
            },
        },

        data() {
            return {
                pageData: JSON.parse(decodeURI(this.URI)),
                titleCalendar: 'Название первой новости из календаря событий',
                visibleCalendar: false,
                loadSuccess: false,

                /**
                 * Стили
                 */
                styleTitle: {
                    style: ['font-size: 26px; letter-spacing: 0.06em; max-width: 1200px; margin: 10px auto 0 auto'],
                },
            };
        },

        mounted() {
            // console.log(this.pageData);
            setTimeout(() => {
                this.loadSuccess = true;
            }, 1000);
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

    .calendar {
        margin: auto;
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
        margin: 129px auto 102px auto;
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
