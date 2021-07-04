<template>
    <div class="dynamics-block">
        <div class="dynamics-block-wrapper">
            <div class="dynamics-block__title">
                <TitleSection
                    :compact-title="true"
                    :title="sectionData.title"
                    :header-visible="true"
                    :style-title="styleTitleDynamics.style"
                />
            </div>
            <div class="dynamics-block-progressBar">
                <!-- Начальное значение прогресс бара -->
                <span class="dynamics-block-progressBar__minValue">
                    {{ isPercent ? '0%' : '0' }}
                </span>

                <!-- Прогресс-бар -->
                <div class="dynamics-block-progressBar__wraper">
                    <div
                        class="dynamics-block-progressBar__progressLineWrapper"
                    >
                        <div
                            class="dynamics-block-progressBar__progressLine"
                            :class="{ complite: getProgressPercent == 100 }"
                            :style="{ width: +getProgressPercent + '%' }"
                        ></div>
                    </div>
                    <!-- Текущие проценты прогресс бара -->
                    <div class="dynamics-block-progressBar__currentPercent">
                        {{ isPercent ? percentShow : getProgressPercent + '%' }}
                    </div>
                    <!-- Текущее значение прогресс бара (шкала под прогресс баром) -->
                    <div
                        v-if="
                            +getProgressPercent > 4 && +getProgressPercent < 93
                        "
                        :style="{ left: +getProgressPercent - 3 + '%' }"
                        class="dynamics-block-progressBar__currentValue"
                    >
                        <p>
                            {{
                                isPercent
                                    ? sectionData.dynamicsPercent + '%'
                                    : sectionData.dynamicsValue
                            }}
                        </p>
                        <img
                            src="../../assets/image/ProgressBarItem.svg"
                            alt=""
                        />
                    </div>
                </div>

                <!-- Максимальное значение прогресс бара -->
                <span class="dynamics-block-progressBar__maxValue">
                    {{
                        isPercent
                            ? sectionData.totalPercent + '%'
                            : sectionData.totalValue
                    }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import TitleSection from '../unitComponents/TitleSection';

export default {
    name: 'ProgressItem',
    components: {
        TitleSection
    },
    props: {
        sectionData: {}
    },

    data() {
        return {
            /**
             * Стили
             */
            styleTitleDynamics: {
                style: [
                    'font-size: 20px; letter-spacing: 0.01px; color: #4D5668'
                ]
            }
        };
    },

    computed: {
        /**
         * Делим totalPercent на 100 и получаем 1 процент
         * Далее делим dynamicPercent на 1 процент и получаем кол-во процентов
         * Округляем в большую сторону
         */
        getProgressPercent: function() {
            if (this.isPercent) {
                return Math.ceil(
                    this.sectionData.dynamicsPercent /
                        (this.sectionData.totalPercent / 100)
                );
            }

            return Math.ceil(
                this.sectionData.dynamicsValue /
                    (this.sectionData.totalValue / 100)
            );
        },

        /**
         * Определяем единицы измерения
         */
        isPercent: function() {
            if (this.sectionData.dynamicsValue) {
                return false;
            }
            return true;
        },

        /**
         * Обрабатываем кейс скрытия плашки у прогресс-бара процентов -> тогда отображаем проценты по центру
         */
        percentShow: function() {
            if (this.getProgressPercent > 92 || this.getProgressPercent < 5)
                return this.sectionData.dynamicsPercent + '%';
            return '';
        }
    }
};
</script>

<style scoped>
.dynamics-block-progressBar__currentValue p {
    position: absolute;
    bottom: -7px;
    color: #3f7e77;
    display: block;
    right: 14px;
    font-size: 14px;
}
.dynamics-block-progressBar__currentValue {
    width: max-content;
    position: absolute;
    top: 48px;
    margin-left: 1px;
}

.dynamics-block-progressBar__progressLineWrapper {
    width: 100%;
    height: 48px;
    border-radius: 7px;
    overflow: hidden;
}

.dynamics-block-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
}

.dynamics-block-progressBar {
    position: relative;
}

.dynamics-block-progressBar__minValue {
    display: block;
    content: '0%';
    width: max-content;
    position: absolute;
    top: 59px;
    z-index: 1;
    font-size: 14px;
}
.dynamics-block-progressBar__maxValue {
    display: block;
    content: '100%';
    width: max-content;
    position: absolute;
    top: 59px;
    right: 47px;
    z-index: 1;
    font-size: 14px;
}

.dynamics-block-progressBar__currentPercent {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: max-content;
    width: max-content;
    color: #f8f5e6;
    font-size: 20px;
    font-weight: 600;
}

.dynamics-block {
    display: flex;
    border-bottom: 2px solid #c4c4c4;
    padding: 50px 0 75px;
    flex-wrap: wrap;
}
.dynamics-block:last-child {
    border: none;
}

.dynamics-block-progressBar__wraper {
    width: 742px;
    height: 50px;
    background: rgba(77, 86, 104, 0.2);
    border: 1px solid #4d5668;
    box-sizing: border-box;
    border-radius: 10px;
    margin-left: auto;
    position: relative;
    /* overflow: hidden; */
    margin-right: 47px;
}

.dynamics-block-progressBar__progressLine {
    height: 100%;
    /* width: 70%; */
    border-right: 22px solid transparent;
    border-bottom: 50px solid #3f7e77;
}
.complite {
    border-right: none;
}
</style>
