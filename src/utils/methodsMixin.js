'use strict';
// Глобальные методы, используемые в проекте

import {mapActions} from "vuex";
import {setBasePath, setUri} from "../utils/сommonMethods";

export default {
    methods: {
        ...mapActions(["GET_DATA_FROM_API","POST_DATA_FROM_API"]),


        customRequest(basePath,uri){
           setBasePath(basePath)
           setUri(uri)
            var currentResponse;
            this.POST_DATA_FROM_API().then((response) => {
                currentResponse = response;
            })
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

                    response.data.forEach(moduleItem => {

                        if (!this[moduleType][moduleItem.objectType]) this[moduleType][moduleItem.objectType] = [];

                        let titleValue = moduleItem.contents.filter(
                            (item) => item.contentType === "TITLE"
                        )
                            .map(item => item.value.text).join(" ; ");


                        let textValue = moduleItem.contents.filter(
                            (item) => item.contentType === "TEXT"
                        )
                            .map(item => item.value.text).join(" ; ");

                        let imageValue = moduleItem.contents.filter(
                            (item) => item.contentType === "IMAGE"
                        )
                            .map(item => item.value.url).join(" ; ");

                        let dateValue = moduleItem.contents.filter(
                            (item) => item.contentType === "DATE"
                        )
                            .map(item => item.value.date).join(" ; ");


                        this[moduleType][moduleItem.objectType].push({

                            title: titleValue ? titleValue : null,

<<<<<<< HEAD
							_pageLink: moduleItem.pageLink,
						});
					});
				});
			}
		},
	},
=======
                            text: textValue ? textValue : null,

                            image: imageValue ? imageValue : null,

                            date: dateValue ? dateValue : null,

                            _pageLink: moduleItem.pageLink
                        });
                    });
                });
            }
        },
    },
>>>>>>> 0ff92c6266c853e1c146b1acd8f6a4b0e3985058
};
