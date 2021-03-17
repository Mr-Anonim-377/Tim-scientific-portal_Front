<template>
    <div class="calendar-item-body">
        <h3>{{ articleData.date }}</h3>
        <p>{{ articleData.text }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CalendarItem',
        props: {
            articleData: {},
        },

        mounted() {
            console.log(this.articleData);
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
</style>
