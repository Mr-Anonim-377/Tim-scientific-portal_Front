<template>
    <div class="calendar-item">
        <h3>{{ title }}</h3>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CalendarItem',
        data() {
            return {
                title: '12 июля',
                message:
                    '12-15 июля 2021 года в рамках НЦМУ будет проходить конференция BIATA-2021 (BIOINFORMATICS: FROM ALGORITHMS TO APPLICATIONS)',
            };
        },
    };
</script>

<style scoped>
    /* Основные стили адаптива в CalendarSection.vue */
    .calendar-item {
        width: 200px;
    }

    .calendar-item h3 {
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
</style>
