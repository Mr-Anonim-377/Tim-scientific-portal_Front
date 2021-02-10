// ЭЛЕМЕНТ КНОПКИ

<template>
	<button class="buttonSection" :style="modifiers">{{ titleValue }}</button>
</template>

<script>
	export default {
		/**
		 * @param {Object} modifiers - Принимает объект с кастомными стилями
		 * @param {String} title - Принимает текст кнопки, по умолчанию имеет значение "Подробнее"
		 */

		name: 'ButtonElement',
		props: ['modifiers', 'title'],
		data() {
			return {
				titleValue: this.title ? this.title : 'Подробнее',
			};
		},
	};
</script>

<style scoped>
	.buttonSection {
		width: 300px;
		height: 60px;
		background: #3f7e77;
		border-radius: 54px;
		margin: auto;
		/* font-family: 'Gilroy-Bold'; */
		font-family: Roboto;
		color: #f8f5e6;
		padding: 16px;
		font-size: 18px;
		line-height: 22px;
		border: 0;
	}
	.buttonSection:active,
	:hover,
	:focus {
		outline: none;
	}
</style>
