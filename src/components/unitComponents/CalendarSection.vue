<template>
    <section class="calendar">
        <h1>Календарь событий</h1>
        <div class="calendar-container">
            <!-- Дата -->
            <div class="calendar-years">
                <!-- Левая стрелка -->
                <div @click="arrowClick('left')" class="calendar-slider__arrow"></div>

                <!-- Формируем верстку из данных -->
                <div class="calendar-years-dateWrapper" v-for="item in tagsArray" :key="item.title">
                    <!-- Vue элемент для анимации -->
                    <transition :name="left ? 'date-animation' : 'date-animation-reverse'">
                        <!-- Элемент отображается только в случае, если индекс элемента в массиве соответствует this.index-->
                        <h2 v-if="tagsArray.indexOf(item) == index">{{ eventByTags[`${item}`].dateTitle }}</h2>
                    </transition>
                </div>
                <!-- Правая стрелка -->
                <div @click="arrowClick('right')" class="calendar-slider__arrow"></div>
            </div>

            <!-- Логика анимации аналогична с описанным выше -->
            <!-- Для анимации используется тот же name у transition -->
            <div class="calendar-items">
                <div class="calendar-item" v-for="item in tagsArray" :key="item.events">
                    <transition :name="left ? 'date-animation' : 'date-animation-reverse'">
                        <div class="calendar-item_container" v-if="tagsArray.indexOf(item) == index">
                            <CalendarItem
                                v-for="event in eventByTags[`${item}`].events"
                                :key="event.date"
                                :articleData="event"
                                :transformMouth="transformMouth"
                            />
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import CalendarItem from './CalendarItem';

    export default {
        name: 'CalendarSection',
        components: {
            CalendarItem,
        },
        props: {
            calendarData: {},
        },

        data() {
            return {
                left: false,
                index: 0,

                loadSuccess: false,
            };
        },
        methods: {
            /**
             * Обработчик клика: меняет индекс и направление анимации в зависимости от аргумента
             * @param {string} direction - направление -> left || right
             */
            arrowClick(direction) {
                if (direction == 'left') {
                    this.index == 0 ? (this.index = this.tagsArray.length - 1) : this.index--;
                    this.left = false;
                } else {
                    this.index == this.tagsArray.length - 1 ? (this.index = 0) : this.index++;
                    this.left = true;
                }
            },

            /**
             * Трансформируем номер месяца в строк
             * @param {string} numberMouth - номер месяца
             * @return {string} - текстовое представление месяца
             */
            transformMouth(numberMouth, nominative) {
                let stringMouth;
                switch (+numberMouth) {
                    case 1:
                        stringMouth = nominative ? 'Январь' : 'Января';
                        return stringMouth;
                    case 2:
                        stringMouth = nominative ? 'Февраль' : 'Февраля';
                        return stringMouth;
                    case 3:
                        stringMouth = nominative ? 'Март' : 'Марта';
                        return stringMouth;
                    case 4:
                        stringMouth = nominative ? 'Апрель' : 'Апреля';
                        return stringMouth;
                    case 5:
                        stringMouth = nominative ? 'Май' : 'Мая';
                        return stringMouth;
                    case 6:
                        stringMouth = nominative ? 'Июнь' : 'Июня';
                        return stringMouth;
                    case 7:
                        stringMouth = nominative ? 'Июль' : 'Июля';
                        return stringMouth;
                    case 8:
                        stringMouth = nominative ? 'Август' : 'Августа';
                        return stringMouth;
                    case 9:
                        stringMouth = nominative ? 'Сентябрь' : 'Сентября';
                        return stringMouth;
                    case 10:
                        stringMouth = nominative ? 'Октябрь' : 'Октября';
                        return stringMouth;
                    case 11:
                        stringMouth = nominative ? 'Ноябрь' : 'Ноября';
                        return stringMouth;
                    case 12:
                        stringMouth = nominative ? 'Декабрь' : 'Декабря';
                        return stringMouth;
                    default:
                        break;
                }
            },

        

            /**
             * Трансформируем тэг в читаемый вид
             */
            transformTag(tag) {
                return ['20' + tag.slice(0, 2), this.transformMouth(tag.slice(2, 4), true)].reverse().join(', ');
            },
            /**
             * Добавление события в массив компонента по тэгу
             * @param {arr} arr - массив компонента
             * @param {object} event - событие
             */
            addEvent(arr, event) {
                if (arr[`${event._tag}`]) {
                    arr[`${event._tag}`].events.push(event);
                } else {
                    arr[`${event._tag}`] = {
                        dateTitle: this.transformTag(event._tag),
                        events: [event],
                    };
                }
            },
            /**
             * Парс массива событий
             * @param {array} calendarData - входящие данные по событиям календаря
             * @param {array} eventByTags - массив, в который будем парсить события по тэгам
             * @return {array} - массив тегов, используемых на странице
             */
            getTagsArray(calendarData, eventByTags) {
                return calendarData.reduce((newArray, dataItem) => {
                    if (!newArray.includes(dataItem._tag)) {
                        newArray.push(dataItem._tag);
                    }
                    this.addEvent(eventByTags, dataItem);
                    return newArray;
                }, []);
            },
        },

        created() {
            this.eventByTags = {};
            this.tagsArray = this.getTagsArray(this.calendarData, this.eventByTags);
            /**
             * Сортируем тэги
             */
            this.tagsArray = this.tagsArray.sort((a, b) => a - b);
            /**
             * Сортируем события тэга
             */
            this.tagsArray.forEach((tag) => {
                this.eventByTags[tag].events.sort((a, b) => {
                    return (
                        +a.date
                            .split('.')
                            .reverse()
                            .join('') -
                        +b.date
                            .split('.')
                            .reverse()
                            .join('')
                    );
                });
            });
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
    }

    @media (min-width: 1650px) {
        .calendar-items {
            margin-top: 20px;
        }

        .calendar-years {
            position: absolute;
            width: 200px;
            display: flex;
            justify-content: space-between;
            overflow: hidden;
        }

        .calendar-years h2:before {
            display: none;
        }

        .calendar-years-dateWrapper {
            position: absolute;
            /* width: 0px; */
            left: 0;
            right: 0;
            margin: auto;
        }

        .calendar-years-dateWrapper h2 {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            text-align: center;
            width: 80%;
        }

        .calendar-item_container {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .calendar-items {
            height: 100%;
            margin-top: 50px;
            width: 100%;
        }

        .calendar-item {
            position: absolute;
            height: 583px;
            overflow: scroll;
            width: 300px;
        }

        .calendar-item::-webkit-scrollbar {
            width: 0;
        }
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
        background-image: url('../../assets/image/arrow_bold.svg');
        transform: rotate(180deg);
        width: 15px;
        height: 25px;
        background-size: cover;
        cursor: pointer;
        /* margin: 6px 0; */
    }
    .calendar-slider__arrow:last-child {
        transform: rotate(0deg);
        /* margin: 6px 0 0 0; */
    }

    .calendar-details {
        margin: 127px auto 0 auto;
        letter-spacing: 0.03em;
        border-bottom: 1px solid;
        width: fit-content;
        height: 16px;
        cursor: pointer;
    }

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

        .calendar-years {
            display: flex;
            justify-content: space-between;
            position: absolute;
            right: 16px;
            font-size: 20px;
            top: 25px;
            overflow: hidden;
            height: 25px;
        }

        .calendar-years h2:before {
            content: '';
            display: none;
        }

        .calendar-years-dateWrapper {
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

        .calendar-years-dateWrapper h2 {
            position: absolute;
            margin: auto;
        }

        .calendar-item {
            width: 100%;
        }

        .calendar-items {
            width: 100%;
            position: relative;
        }

        .calendar-item_container {
            display: flex;
            width: 100%;
        }
    }

    /* CSS классы vue для входа и выхода из анимации */
    /* Формируются по атрибуту name у vue элемента transition */
    .date-animation-enter-active {
        animation: dateAnimationShow 0.5s;
    }

    .date-animation-leave-active {
        animation: dateAnimationHide 0.5s;
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
