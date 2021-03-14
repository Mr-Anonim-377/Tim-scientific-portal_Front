<template>
    <!-- TODO реализовать смену месяца и списка событий через анимацию -->

    <!-- 1.1 При нажатии на контрол анимация сдвигает контрол в определенную сторону и делает его прозрачным -->
    <!-- 1.2 У родителя overflow: hidden -->
    <!-- 1.3 В момент полного исчезновения название месяца меняется и передвигается на другую сторону обертки (пользователь не видит ) -->
    <!-- 1.4 После смены названия месяца элемент появляется с другой стороны и плавно возвращается в начальное положение-->

    <!-- TODO смоделировать данные с бэка после парса -->

    <!-- TODO почитать про встроенные анимации vue -->
    <!-- 3.1 Если ничего не найдется, контролируем анимацию с помощью JS -->
    <!-- 3.2 Методы анимации должны быть универсальными для даты и списка событий-->
    <!-- 3.2.1 Текущий список и текущая дата должна лежать в data()  -->

    <section class="calendar">
        <h1>Календарь событий</h1>
        <div class="calendar-container">
            <!-- Дата -->
            <div class="calendar-years">
                <!-- Левая стрелка -->
                <div class="calendar-slider__arrow"></div>

                <div class="calendar-yaers-dateWrapper">
                    <h2>Июль, 2021</h2>
                </div>
                <!-- Правая стрелка -->
                <div class="calendar-slider__arrow"></div>
            </div>

            <div class="calendar-items-wrapper">
                <CalendarItem />
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
    };
</script>

<style scoped>
    .calendar-years {
        border: 1px solid white;
    }

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
        margin: 6px 0 0 30px;
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
            height: auto;
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

        .calendar-items-wrapper {
            display: flex;
            margin-bottom: 20px;
        }

        .calendar-details {
            margin: 0 auto;
        }

        .calendar > h1 {
            border-bottom: 1px solid #606a80;
            padding-bottom: 20px;
        }

        .calendar-item {
            width: 200px;
        }

        .calendar-item h3 {
            margin: 0;
        }

        .calendar-years {
            display: flex;
            justify-content: center;
            position: absolute;
            right: 16px;
            font-size: 20px;
            top: 25px;
        }

        .calendar-years h2:before {
            content: '';
            display: none;
        }
    }
</style>
