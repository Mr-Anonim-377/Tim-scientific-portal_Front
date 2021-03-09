'use strict';
// Глобальные методы, используемые в проекте

import { mapActions } from 'vuex';
import { setBasePath, setUri } from '../utils/сommonMethods';

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

							this[moduleType][moduleItem.objectType].push({
								title: titleValue ? titleValue : null,

								text: textValue ? textValue : null,

								image: imageValue ? imageValue : null,

								date: dateValue ? dateValue : null,

								link: linkValue ? linkValue : null,

								totalPercent: totalPercent ? totalPercent : null,

								dinamicsPercent: dynamicsPercent ? dynamicsPercent : null,

								_pageLink: moduleItem.pageLink,
							});
						});
					}
				});
			}
		},
	},
};
