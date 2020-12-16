"use strict";

/*

SliderSceleton

Для использования слайдера необхоидимо, чтобы в компоненте присутствовали следующие данные:

	- positions: {circle1: {}, circle2: {} ... }

			Объкт, содержащий необхоидмые для перемещения слайдов css свойства.

			Внутри объектов circle ключ - название css свойсвта
								   значение - значение css свойства

	- sliderData: {}

			Объект, содержащий данные для слайдера с бэка или локально

	- $circles

			DOM контейнер для всех динамических элементов слайдера

	- $arrows

			DOM коллекция контролов для слайдера

	- $leftArrow / $rightArrow

			Правый и левый DOM элементы контролов
*/

export default {
	data() {
		return {
			// Индекс DOM элементов слайдера
			i: 0,

			// Индекс для данных слайдера
			sliderDataIndex: 0,
		};
	},

	methods: {
		// Рассчет новых индексов положения слайдов
		setNewIndex(isNext) {
			if (isNext) {

				// Рассчет индекса активного элемента в верстке
				this.i = this.i === 0 ? this.$circles.length - 1 : this.i - 1;

				// Рассчет индекса активного элемента в данных
				this.sliderDataIndex =
					this.sliderDataIndex === this.sliderData.length - 1
						? 0
						: this.sliderDataIndex + 1;
			} else {

				// Рассчет индекса активного элемента в верстке
				this.i = this.i === 4 ? 0 : this.i + 1;

				// Рассчет индекса активного элемента в данных
				this.sliderDataIndex =
					this.sliderDataIndex === 0
						? this.sliderData.length - 1
						: this.sliderDataIndex - 1;
			}
		},

		// Задержка на элементы управления слайдером
		setControlsPing(ping) {
			this.$arrows.css("pointer-events", "none");
			setTimeout(() => {
				this.$arrows.css("pointer-events", "auto");
			}, ping);
		},

		// Вычисление соседних DOM элементов при движении
		// Функция возвращает объект со значениями i2, i3, i4 и т.д.
		getNeighborIndex(i, arr) {
			let indexList = {
				i: i,
			};
			let z = 2;
			let j = 1;

			for (let k = 1; k < arr.length - i; k++) {
				indexList[`i${z}`] = i + j;
				j++;
				z++;
			}

			j = 0;

			for (let k = z; k <= 7; k++) {
				indexList[`i${z}`] = j;
				z++;
				j++;
			}

			return indexList;
		},

		// Движение элемента слайдера
		moveCircle(propertyList, index, position) {
			propertyList.forEach((property) => {
				this.$circles.eq(index);

				this.$circles
					.eq(index)
					.css(property, this.positions[position][property]);
			});
		},
	},
};
