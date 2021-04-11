<template>
    <router-link style="text-decoration: none" :to="{ name: `calendar`, params: { pageId: this.articleData._pageLink } }">
        <div class="calendar-item-body">
            <h3>{{ transformDate(articleData.date) }}</h3>
            <p>{{ articleData.text }}</p>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: 'CalendarItem',
        props: {
            articleData: {},
        },
        methods: {
            /**
             * Трансформируем номер месяца в строк
             * @param {string} numberMouth - номер месяца
             * @return {string} - текстовое представление месяца
             */
            transformMouth(numberMouth) {
                switch (+numberMouth) {
                    case 1:
                        return 'Января';
                    case 2:
                        return 'Февраля';
                    case 3:
                        return 'Марта';
                    case 4:
                        return 'Апреля';
                    case 5:
                        return 'Мая';
                    case 6:
                        return 'Июня';
                    case 7:
                        return 'Июля';
                    case 8:
                        return 'Августа';
                    case 9:
                        return 'Сентября';
                    case 10:
                        return 'Октября';
                    case 11:
                        return 'Ноября';
                    case 12:
                        return 'Декабря';
                    default:
                        break;
                }
            },

            /**
             * Трансформируем дату формата ДД.ММ.ГГ в тайтл события
             */
            transformDate(string) {
                let dateArr = string.split('.').slice(0, 2);
                return dateArr[0] + ' ' + this.transformMouth(dateArr[1]);
            },
        },
    };
</script>

<style scoped>
    /* Основные стили адаптива в CalendarSection.vue */
    .calendar-item-body {
        width: 200px;
    }

    .calendar-item-body h3 {
        margin: 0;
    }
    p,
    h3 {
        color: #f8f5e6;
    }

    h3 {
        font-family: Roboto;
        font-size: 14px;
        line-height: 19px;
        border-bottom: 1px solid;
        width: fit-content;
        margin: 53px 0 20px 0;
        letter-spacing: 0.04em;
    }

    p {
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.03em;
        overflow: hidden;
    }

    @media (max-width: 1650px) {
        .calendar-item-body {
            margin-right: 10px;
        }
    }
</style>
