// ЭЛЕМЕНТ ЗАГОЛОВКА СЕКЦИИ

<template>
	<!-- Компактный заголовок -->
	<div v-if="compactTitle" class="compact-title">
		<img src="../../assets/image/line3.svg" />
		<h2 :style="stileTitle">{{ title }}</h2>
	</div>

	<div v-else class="text-white" :class="{ 'text-blue': headerVisible }">
		<img v-if="headerVisible" src="../../assets/image/Line.svg" />
		<img v-else src="../../assets/image/Line2.svg" />
		<h2 :style="stileTitle">{{ title }}</h2>
	</div>
</template>

<script>
	export default {
		/**
		 * @param {String} title - название заголовка
		 * FIXME @param {String} headerVisible - в зависимости от наличия параметра менятеся цвет заголовка
		 * @param {String} compactTitle - применяет стили для "компактного" заголовка (в блоках на главной странице)
     * @param {Object} stileTitle - Принимает объект с кастомными стилями
		 */
		name: 'newSectionHeader',
		props:
      {
			title: String,
			headerVisible: Boolean,
			compactTitle: Boolean,
      stileTitle: Object,
		},
	};
</script>

<style scoped>
	h2 {
		font-size: 36px;
		/* margin-top: 16px; */
		/* font-weight: 900; */
		letter-spacing: 0.1em;
	}
	.text-white {
		color: #ffffff;
		text-align: center;
	}
	.text-blue {
		color: #3f7e77;
		text-align: center;
	}

	/* Стили для компактного заголовка */
	.compact-title {
		text-align: left;
		display: flex;
		align-items: center;
		/* margin-bottom: 50px; */
		/* margin-top: 17px; */
	}

	.compact-title h2 {
		font-size: 26px;
		font-family: Roboto;
		/* font-family: 'Gilroy-Bold'; */
		color: #3f7e77;
		margin-left: 18px;
		letter-spacing: 0.21px;
		margin-bottom: 10px;
		margin-top: 10px;
	}
</style>
