// СТРАНИЦА 404

<template>
	<section>
		<div class="plug">
			<img src="https://i.gifer.com/5xDL.gif" alt="" />
			<h1>Страница находится в разработке</h1>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Page404',
	};
</script>

<style scoped>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: calc(100vh - 420px);
	}

	.plug {
		margin: 100px auto;
		text-align: center;
		font-size: 30px;
		font-family: Arial;
		color: #3f7e77;
	}
</style>
