// ЭЛЕМЕНТ ЗАГОЛОВКА СЕКЦИИ

<template>
	<div class="text-blue" v-if="headerVisible">
		<img src="../../assets/image/Line.svg" />
		<h2>{{ title }}</h2>
	</div>
	<div class="text-white" v-else>
		<img src="../../assets/image/Line2.svg" />
		<h2>{{ title }}</h2>
	</div>
</template>

<script>
	export default {
		/**
		 * @param {String} title - название заголовка
		 * FIXME @param {String} headerVisible - в зависимости от наличия параметра менятеся цвет заголовка
		 */
		name: 'newSectionHeader',
		props: {
			title: String,
			headerVisible: Boolean,
		},
	};
</script>

<style scoped>
	h2 {
		font-size: 36px;
		margin-top: 16px;
		font-weight: 900;
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
</style>
