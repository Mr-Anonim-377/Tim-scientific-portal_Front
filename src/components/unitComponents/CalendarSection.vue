<template>
    <section class="calendar">
        <h1>Календарь событий</h1>
        <div class="calendar-container">
            <!-- Дата -->
            <div class="calendar-years">
                <!-- Левая стрелка -->
                <div @click="arrowClick('left')" class="calendar-slider__arrow"></div>

                <!-- Формируем верстку из данных -->
                <div class="calendar-yaers-dateWrapper" v-for="item in sectionData" :key="item.title">
                    <!-- Vue элемент для анимации -->
                    <transition :name="left ? 'date-animation' : 'date-animation-reverse'">
                        <!-- Элемент отображается только в случае, если индекс элемента в массиве соответсвует this.index-->
                        <h2 v-if="sectionData.indexOf(item) == index">{{ item.title }}</h2>
                    </transition>
                </div>
                <!-- Правая стрелка -->
                <div @click="arrowClick('right')" class="calendar-slider__arrow"></div>
            </div>

            <!-- Логика анимации аналогична с описанным выше -->
            <!-- Для анимации используется тот же name у transition -->
            <div class="calendar-item" v-for="item in sectionData" :key="item.events">
                <transition :name="left ? 'date-animation' : 'date-animation-reverse'">
                    <div class="calendar-item_container" v-if="sectionData.indexOf(item) == index">
                        <CalendarItem v-for="event in item.events" :key="event.date" :articleData="event" />
                    </div>
                </transition>
            </div>
        </div>
        <router-link style="text-decoration: none" :to="{ name: 'notFound' }">
            <p class="calendar-details">Все события этого месяца</p>
        </router-link>
    </section>
</template>

<script>
    import CalendarItem from './CalendarItem';

    export default {
        name: 'CalendarSection',
        components: {
            CalendarItem,
        },

        data() {
            return {
                left: false,
                index: 0,

                /**
                 * Тестовые данные
                 */
                sectionData: [
                    {
                        title: 'Июль',
                        events: [
                            {
                                date: '12 июля',
                                text:
                                    '12-15 июля 2021 года в рамках НЦМУ будет проходить конференция BIATA-2021 (BIOINFORMATICS: FROM ALGORITHMS TO APPLICATIONS)',
                            },
                        ],
                    },
                    {
                        title: 'Январь',
                        events: [
                            {
                                date: '13 июля',
                                text:
                                    '12-15 июля 2021 года в рамках НЦМУ будет проходить конференция BIATA-2021 (BIOINFORMATICS: FROM ALGORITHMS TO APPLICATIONS)',
                            },
                            {
                                date: '15 июля',
                                text:
                                    '12-15 июля 2021 года в рамках НЦМУ будет проходить конференция BIATA-2021 (BIOINFORMATICS: FROM ALGORITHMS TO APPLICATIONS)',
                            },
                        ],
                    },
                    {
                        title: 'Декабрь',
                    },
                ],
            };
        },
        methods: {
            /**
             * Обработчик клика: меняет индекс и направление анимации в зависимости от аргумента
             */
            arrowClick(direction) {
                if (direction == 'right') {
                    this.index == 0 ? (this.index = this.sectionData.length - 1) : this.index--;

                    this.left = false;
                } else {
                    this.index == this.sectionData.length - 1 ? (this.index = 0) : this.index++;

                    this.left = true;
                }
            },
        },
    };
</script>

<style scoped>
    h1,
    h3,
    p {
        color: #f8f5e6;
    }
    h1 {
        font-family: Roboto;
        font-size: 26px;
        line-height: 31px;
        text-align: center;
        margin: 0;
    }

    .calendar {
        width: 345px;
        height: 704px;
        background-image: url('../../assets/image/calendarBackground.png');
        background-size: cover;
        padding: 23px 19px 30px 20px;
    }
    .calendar-container {
        height: 456px;
        overflow: hidden;
        margin: 20px auto 0 auto;
    }
    .calendar-years {
        display: flex;
        width: 200px;
        height: 100px;
    }
    h2 {
        font-family: Roboto;
        font-size: 20px;
        line-height: 132.19%;
        color: #74be97;
        margin: 0 9px;
        position: relative;
        letter-spacing: 1px;
    }
    .calendar-years h2:before {
        content: '';
        position: absolute;
        width: 323px;
        height: 1px;
        background: #606a80;
        left: -42px;
        top: 36px;
    }
    .calendar-slider__arrow {
        background-image: url('../../assets/image/slider-arrow-left.svg');
        width: 7px;
        height: 11px;
        background-size: cover;
        cursor: pointer;
        margin: 6px 0;
    }
    .calendar-slider__arrow:last-child {
        transform: rotate(180deg);
        margin: 6px 0 0 0;
    }

    .calendar-details {
        margin: 127px auto 0 auto;
        letter-spacing: 0.03em;
        border-bottom: 1px solid;
        width: fit-content;
        height: 16px;
        cursor: pointer;
    }

    /* @media screen { */
    @media (max-width: 1650px) {
        .calendar-container {
            height: 174px;
            display: flex;
        }

        .calendar {
            width: 895px;
            height: auto;
            position: relative;
            background-image: url(/img/calendarBackground.40f216ed.png);
            background-size: 45%;
            background-repeat: no-repeat;
            background-color: #4f5666;
            background-position: right 0 bottom 0;
            padding: 23px 19px 30px 20px;
        }

        .calendar-item {
            display: flex;
            margin-bottom: 20px;
            position: absolute;
        }

        .calendar-details {
            margin: 0 auto;
        }

        .calendar > h1 {
            border-bottom: 1px solid #606a80;
            padding-bottom: 20px;
        }

        /* .calendar-item {
            width: 200px;
        } */
        /* .calendar-item h3 {
            margin: 0;
        } */

        .calendar-years {
            display: flex;
            justify-content: space-between;
            position: absolute;
            right: 16px;
            font-size: 20px;
            top: 25px;
            overflow: hidden;
        }

        .calendar-years h2:before {
            content: '';
            display: none;
        }

        .calendar-yaers-dateWrapper {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            width: 80%;
            height: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
        }

        .calendar-yaers-dateWrapper h2 {
            position: absolute;
            margin: auto;
        }

        .calendar-item_container {
            display: flex;
        }
    }

    /* CSS классы vue для входа и выхода из анимации */
    /* Формируются по атрибуту name у vue элемента transition */
    .date-animation-enter-active {
        animation: dateAnimationShow 0.7s;
    }

    .date-animation-leave-active {
        animation: dateAnimationHide 0.7s;
    }

    .date-animation-reverse-enter-active {
        animation: dateAnimationHide 0.5s ease-in reverse;
    }

    .date-animation-reverse-leave-active {
        animation: dateAnimationShow 0.5s ease-in reverse;
    }

    /* Нативные CSS анимации */
    @keyframes dateAnimationHide {
        from {
            transform: translatex(0);
            opacity: 1;
        }

        to {
            transform: translatex(-80%);
            opacity: 0;
        }
    }

    /* Анимация появления */
    @keyframes dateAnimationShow {
        from {
            transform: translatex(80%);
            opacity: 0;
        }

        to {
            transform: translatex(0);
            opacity: 1;
        }
    }
</style>
