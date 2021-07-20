'use strict';
// Глобальные методы, используемые в проекте
import axios from 'axios';

export default {
    data() {
        return {
            url: String,
        };
    },

    methods: {
        // Метод для парса данных с бэка
        // В качестве агрумента принимает строковое значение типа страницы
        async getModulesTest(pageType, pageId) {
            if (pageId) {
                this.url = `/crm/v1/page/byId?pageId=${pageId}`;
            } else {
                this.url = `/crm/v1/page/byType?pageType=${pageType}`;
            }

            // Получаем модули
            // Храним их в this.modules
            await axios
                .get(this.url)
                .then((response) => {
                    this.modules = response.data.modules;
                })
                .catch(() => false);

            for (let module in this.modules) {
                // Логирование неорректно созданных данных
                const errors = [];

                let moduleID = this.modules[module].id;

                this.url = `/crm/v1/page/modules/objects?moduleId=${moduleID}`;

                await axios
                    .get(this.url)
                    .then((response) => {
                        let moduleType = this.modules[module].moduleType;
                        this[moduleType] = [];

                        if (response) {
                            response.data.forEach((moduleItem) => {
                                if (!this[moduleType][moduleItem.objectType])
                                    this[moduleType][moduleItem.objectType] =
                                        [];

                                let titleValue = moduleItem.contents
                                    .filter(
                                        (item) => item.contentType === 'TITLE'
                                    )
                                    .map(
                                        (item) =>
                                            item.value?.text ||
                                            (errors.push({
                                                moduleType,
                                                item,
                                            }) &&
                                                '')
                                    )
                                    .join(' ; ');

                                let textValue = moduleItem.contents
                                    .filter(
                                        (item) => item.contentType === 'TEXT'
                                    )
                                    .map(
                                        (item) =>
                                            item.value?.text ||
                                            (errors.push({
                                                moduleType,
                                                item,
                                            }) &&
                                                '')
                                    )
                                    .join(' ; ');

                                let imageValue = moduleItem.contents
                                    .filter(
                                        (item) => item.contentType === 'IMAGE'
                                    )
                                    .map(
                                        (item) =>
                                            item.value?.url ||
                                            (errors.push({
                                                moduleType,
                                                item,
                                            }) &&
                                                '')
                                    )
                                    .join(' ; ');

                                let dateValue = moduleItem.contents
                                    .filter(
                                        (item) => item.contentType === 'DATE'
                                    )
                                    .map(
                                        (item) =>
                                            item.value?.date ||
                                            (errors.push({
                                                moduleType,
                                                item,
                                            }) &&
                                                '')
                                    )
                                    .join(' ; ');

                                let linkValue = moduleItem.contents
                                    .filter(
                                        (item) => item.contentType === 'LINK'
                                    )
                                    .map(
                                        (item) =>
                                            item.value?.url ||
                                            (errors.push({
                                                moduleType,
                                                item,
                                            }) &&
                                                '')
                                    )
                                    .join(' ; ');

                                let totalPercent = moduleItem.contents
                                    .filter(
                                        (item) =>
                                            item.contentType === 'TOTAL_PERCENT'
                                    )
                                    .map(
                                        (item) =>
                                            item.value?.percent ||
                                            (errors.push({
                                                moduleType,
                                                item,
                                            }) &&
                                                '')
                                    )
                                    .join(' ; ');

                                let dynamicsPercent = moduleItem.contents
                                    .filter(
                                        (item) =>
                                            item.contentType ===
                                            'DYNAMIC_PERCENT'
                                    )
                                    .map(
                                        (item) =>
                                            item.value?.percent ||
                                            (errors.push({
                                                moduleType,
                                                item,
                                            }) &&
                                                '')
                                    )
                                    .join(' ; ');

                                let dynamicsValue = moduleItem.contents
                                    .filter(
                                        (item) =>
                                            item.contentType === 'DYNAMIC_VALUE'
                                    )
                                    .map(
                                        (item) =>
                                            item.value?.value ||
                                            (errors.push({
                                                moduleType,
                                                item,
                                            }) &&
                                                '')
                                    )
                                    .join(' ; ');

                                let totalValue = moduleItem.contents
                                    .filter(
                                        (item) =>
                                            item.contentType === 'TOTAL_VALUE'
                                    )
                                    .map(
                                        (item) =>
                                            item.value?.value ||
                                            (errors.push({
                                                moduleType,
                                                item,
                                            }) &&
                                                '')
                                    )
                                    .join(' ; ');

                                this[moduleType][moduleItem.objectType].push({
                                    title: titleValue ? titleValue : null,

                                    text: textValue ? textValue : null,

                                    image: imageValue ? imageValue : null,

                                    date: dateValue ? dateValue : null,

                                    link: linkValue ? linkValue : null,

                                    totalPercent: totalPercent
                                        ? totalPercent
                                        : null,

                                    dynamicsPercent: dynamicsPercent
                                        ? dynamicsPercent
                                        : null,

                                    totalValue: totalValue ? totalValue : null,

                                    dynamicsValue: dynamicsValue
                                        ? dynamicsValue
                                        : null,

                                    _pageLink: moduleItem.pageLink,

                                    _tag: moduleItem.tag,

                                    // Связанные сущности парятся в компонентах, тут просто передаю ответ от сервера
                                    _childModuleObject:
                                        moduleItem.childModuleObject
                                            ? moduleItem.childModuleObject
                                            : null,
                                });
                            });
                        }
                    })
                    .catch(() => false);

                /* Выводим логи ошибок в verbose */
                if (errors.length > 0) {
                    console.debug('');
                    console.debug(
                        '%cНекорректные данные! Данные объекты необходимо удалить из административной панели для корректной работы портала.',
                        'color: #E56C6C; font-weight: bold'
                    );
                    console.debug('Данные сломаных объектов: ', errors);
                    console.debug(
                        'Модуль, связанный со сломанными объектами: ' + moduleID
                    );
                }
            }
        },

        /* Метод проверки авторизации */
        async authCheck() {
            return new Promise((resolve, reject) => {
                axios
                    .get('/user/auth?roleName=ROLE_USER', {
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                    })
                    .then((response) => {
                        localStorage.setItem('isAuth', true);
                        return resolve(response);
                    })
                    .catch(() => {
                        localStorage.setItem('isAresponseth', false);
                        return reject(false);
                    });
            });
        },

        /**
         * Дебаггер
         *
         * @param {string} message - сообщение для дебага
         * @param {any} data - объект для дебага
         * @param {boolean} useDebugger - если true, ставится точка остановки после вывода в консоль
         *
         * self используется для доступа к компоненту vue с консоли браузера (this в коде)
         */
        debug(message, data, useDebugger) {
            console.debug(message, data);
            if (useDebugger) {
                //eslint-disable-next-line
                const self = this;
                //eslint-disable-next-line
                debugger;
            }
        },
    },

    mounted() {
        /**
         * Запрещаем скролл при использовании миксина для корректного отображения прелоодора на небольших экранах
         */
        let body = document.querySelector('body');
        body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
    },

    watch: {
        loadSuccess: function () {
            /**
             * Возвращаем скролл после загрузки
             */
            document.querySelector('body').style.overflow = 'visible';
        },
    },
};
