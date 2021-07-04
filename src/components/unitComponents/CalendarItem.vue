<template>
    <router-link
        style="text-decoration: none"
        :to="{
            name: `calendar`,
            params: { pageId: articleData._pageLink }
        }"
    >
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
        transformMouth: {}
    },
    methods: {
        /**
         * Трансформируем дату формата ДД.ММ.ГГ в тайтл события
         */
        transformDate(string) {
            if (string) {
                let dateArr = string?.split('.').slice(0, 2);
                return +dateArr[0] + ' ' + this.transformMouth(dateArr[1]);
            }
            return 'Дата не указана';
        }
    }
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
