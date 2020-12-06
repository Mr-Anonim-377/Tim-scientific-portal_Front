"use strict";
// Глобальные методы, используемые в проекте

import { mapActions } from "vuex";
import { setUri } from "../utils/сommonMethods";

export default {
	methods: {
		...mapActions(["GET_DATA_FROM_API"]),

		// Метод для парса данных с бэка
		// В качестве агрумента принимает строковое значение типа страницы
		async getModulesTest(pageType) {
			setUri(`/crm/v1/page/byType?pageType=${pageType}`);

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

					response.data.forEach((moduleItem) => {

						if (!this[moduleType][moduleItem.objectType]) this[moduleType][moduleItem.objectType] = [];


						let titleValue = moduleItem.contents.filter(
							(item) => item.contentType === "TITLE"
						)
						.map(item => item.value.text).join(" ; ");


						let textValue = moduleItem.contents.filter(
							(item) => item.contentType === "TEXT"
						)
						.map(item => item.value.text).join(" ; ");

						let imageValue =  moduleItem.contents.filter(
							(item) => item.contentType === "IMAGE"
						)
						.map(item => item.value.url).join(" ; ");

						let dateValue = moduleItem.contents.filter(
							(item) => item.contentType === "DATE"
						)
						.map(item => item.value.date).join(" ; ");


						this[moduleType][moduleItem.objectType].push({

							title: titleValue ? titleValue : null,

							text: textValue ? textValue : null,

							image: imageValue ? imageValue : null,

							date: dateValue ? dateValue : null
						});
					});
				});
			}
		},
	},
};
