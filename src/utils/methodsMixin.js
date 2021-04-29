'use strict';
// Глобальные методы, используемые в проекте

import { mapActions } from 'vuex';
import { setBasePath, setUri } from '../utils/сommonMethods';
import axios from 'axios';

export default {
    methods: {
        ...mapActions(['GET_DATA_FROM_API', 'POST_DATA_FROM_API']),

        customRequest(basePath, uri) {
            setBasePath(basePath);
            setUri(uri);
            var currentResponse;
            this.POST_DATA_FROM_API().then((response) => {
                currentResponse = response;
            });
            return currentResponse;
        },

        // Метод для парса данных с бэка
        // В качестве агрумента принимает строковое значение типа страницы
        async getModulesTest(pageType, pageId) {
            if (pageId) {
                setUri(`/crm/v1/page/byId?pageId=${pageId}`);
            } else {
                setUri(`/crm/v1/page/byType?pageType=${pageType}`);
            }

            // Получаем модули
            // Храним их в this.modules
            await this.GET_DATA_FROM_API().then((response) => {
                this.modules = response.data.modules;
            });

            for (let module in this.modules) {
                let moduleID = this.modules[module].id;

                setUri(`/crm/v1/page/modules/objects?moduleId=${moduleID}`);

                await this.GET_DATA_FROM_API().then((response) => {
                    let moduleType = this.modules[module].moduleType;
                    this[moduleType] = [];

                    if (response) {
                        response.data.forEach((moduleItem) => {
                            if (!this[moduleType][moduleItem.objectType]) this[moduleType][moduleItem.objectType] = [];

                            let titleValue = moduleItem.contents
                                .filter((item) => item.contentType === 'TITLE')
                                .map((item) => item.value.text)
                                .join(' ; ');

                            let textValue = moduleItem.contents
                                .filter((item) => item.contentType === 'TEXT')
                                .map((item) => item.value.text)
                                .join(' ; ');

                            let imageValue = moduleItem.contents
                                .filter((item) => item.contentType === 'IMAGE')
                                .map((item) => item.value.url)
                                .join(' ; ');

                            let dateValue = moduleItem.contents
                                .filter((item) => item.contentType === 'DATE')
                                .map((item) => item.value.date)
                                .join(' ; ');

                            let linkValue = moduleItem.contents
                                .filter((item) => item.contentType === 'LINK')
                                .map((item) => item.value.url)
                                .join(' ; ');

                            let totalPercent = moduleItem.contents
                                .filter((item) => item.contentType === 'TOTAL_PERCENT')
                                .map((item) => item.value.percent)
                                .join(' ; ');

                            let dynamicsPercent = moduleItem.contents
                                .filter((item) => item.contentType === 'DYNAMIC_PERCENT')
                                .map((item) => item.value.percent)
                                .join(' ; ');

                            let dynamicsValue = moduleItem.contents
                                .filter((item) => item.contentType === 'DYNAMIC_VALUE')
                                .map((item) => item.value.value)
                                .join(' ; ');

                            let totalValue = moduleItem.contents
                                .filter((item) => item.contentType === 'TOTAL_VALUE')
                                .map((item) => item.value.value)
                                .join(' ; ');

                            this[moduleType][moduleItem.objectType].push({
                                title: titleValue ? titleValue : null,

                                text: textValue ? textValue : null,

                                image: imageValue ? imageValue : null,

                                date: dateValue ? dateValue : null,

                                link: linkValue ? linkValue : null,

                                totalPercent: totalPercent ? totalPercent : null,

                                dynamicsPercent: dynamicsPercent ? dynamicsPercent : null,

                                totalValue: totalValue ? totalValue : null,

                                dynamicsValue: dynamicsValue ? dynamicsValue : null,

                                _pageLink: moduleItem.pageLink,

                                _tag: moduleItem.tag,

                                // Связанные сущности парятся в компонентах, тут просто передаю ответ от сервера
                                _childModuleObject: moduleItem.childModuleObject ? moduleItem.childModuleObject : null,
                            });
                        });
                    }
                });
            }
        },

        /* Метод проверки авторизации */
        async authCheck() {
            return new Promise((res, rej) => {
                axios
                    .get('http://localhost:1024/user/auth?roleName=ROLE_USER', {
                        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
                    })
                    .then(() => {
                        localStorage.setItem('isAuth', true);
                        return res(true);
                    })
                    .catch(() => {
                        localStorage.setItem('isAuth', false);
                        return rej(false);
                    });
            });
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
        loadSuccess: function() {
            /**
             * Возвращаем скролл после загрузки
             */

            document.querySelector('body').style.overflow = 'visible';
        },
    },
};
