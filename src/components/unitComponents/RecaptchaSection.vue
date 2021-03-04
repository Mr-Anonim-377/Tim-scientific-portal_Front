<template>
	<div id="g-recaptcha" class="g-recaptcha" :data-sitekey="sitekey"></div>
</template>

<script>
	export default {
		name: 'RecaptchaSection',
		data() {
			return {
				sitekey: '6Lex4mcaAAAAAOFAD17jDblINvr3grQE4f7Sa1oP',
				widgetId: 0,
			};
		},
		methods: {
			execute() {
				window.grecaptcha.execute(this.widgetId);
			},
			reset() {
				window.grecaptcha.reset(this.widgetId);
			},
			render() {
				if (window.grecaptcha) {
					this.widgetId = window.grecaptcha.render('g-recaptcha', {
						sitekey: this.sitekey,
						size: 'visible',

						callback: () => {
							this.$emit('verify');
						},
					});
				}
			},
		},
		mounted() {
			// render the recaptcha widget when the component is mounted
			this.render();
		},
	};
</script>

<style scoped></style>
