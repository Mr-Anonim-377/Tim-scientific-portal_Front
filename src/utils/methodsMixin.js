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
			setUri(`crm/v1/page/modules?pageType=${pageType}`);

			// Получаем модули
			// Храним их в this.modules
			await this.GET_DATA_FROM_API().then((response) => {
				console.log(response);
				this.modules = response.data.modules;
			});

			for (let module in this.modules) {
				let moduleID = this.modules[module].id;

				setUri(`/crm/v1/page/modules/objects?moduleId=${moduleID}`);

				await this.GET_DATA_FROM_API().then((response) => {
					let moduleType = this.modules[module].moduleType;

					this[moduleType] = [];


					response.data.forEach((moduleItem) => {
						this[moduleType].push({
							title: moduleItem.contents.filter(
								(item) => item.contentType === "TITLE"
							),

							text: moduleItem.contents.filter(
								(item) => item.contentType === "TEXT"
							),

							image: moduleItem.contents.filter(
								(item) => item.contentType === "IMAGE"
							),

							date: moduleItem.contents.filter(
								(item) => item.contentType === "DATE"
							),
						});
					});
				});
			}
		},
	},
};
