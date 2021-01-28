// СЕКЦИЯ РЕЗУЛЬТАТОВ ИССЛЕДОВАНИЯ НА ГЛАВНОЙ СТРАНИЦЕ

<template>
	<section>
		<TitleSection compact-title="true" title="Результаты программы" :headerVisible="visible" />
		<div class="container">
			<div class="resultItem">
				<div class="resultItem__logo">
					<div class="resultItem__img">
						<img src="../../assets/image/results/1.png" alt="" />
					</div>
				</div>
				<div class="resultItem__text">
					<p>Доля молодых исследователей</p>
				</div>
				<div class="resultItem__percent">
					<p>55%</p>
				</div>
			</div>

			<div class="resultItem">
				<div class="resultItem__logo">
					<div class="resultItem__img">
						<img src="../../assets/image/results/2.png" alt="" />
					</div>
				</div>
				<div class="resultItem__text">
					<p>Cтатьи в Q1-Q2</p>
				</div>
				<div class="resultItem__percent">
					<p>347</p>
				</div>
			</div>

			<div class="resultItem">
				<div class="resultItem__logo">
					<div class="resultItem__img">
						<img src="../../assets/image/results/3.png" alt="" />
					</div>
				</div>
				<div class="resultItem__text">
					<p>Заявки на РИД</p>
				</div>
				<div class="resultItem__percent">
					<p>136</p>
				</div>
			</div>

			<div class="resultItem">
				<div class="resultItem__logo">
					<div class="resultItem__img">
						<img src="../../assets/image/results/4.png" alt="" />
					</div>
				</div>
				<div class="resultItem__text">
					<p>Образовательные программы</p>
				</div>
				<div class="resultItem__percent">
					<p>50</p>
				</div>
			</div>

			<div class="resultItem">
				<div class="resultItem__logo">
					<div class="resultItem__img">
						<img src="../../assets/image/results/5.png" alt="" />
					</div>
				</div>
				<div class="resultItem__text">
					<p>Колличество исследователей</p>
				</div>
				<div class="resultItem__percent">
					<p>211</p>
				</div>
			</div>

			<div class="resultItem">
				<div class="resultItem__logo">
					<div class="resultItem__img">
						<img src="../../assets/image/results/6.png" alt="" />
					</div>
				</div>
				<div class="resultItem__text">
					<p>Конференции и школы</p>
				</div>
				<div class="resultItem__percent">
					<p>99</p>
				</div>
			</div>

			<div class="resultItem">
				<div class="resultItem__logo">
					<div class="resultItem__img">
						<img src="../../assets/image/results/7.png" alt="" />
					</div>
				</div>
				<div class="resultItem__text">
					<p>Трансфер технологий</p>
				</div>
				<div class="resultItem__percent">
					<p>25</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import TitleSection from './TitleSection';

	export default {
		name: 'ResultSection',
		components: { TitleSection },
		data() {
			return {
				visible: 'true',
			};
		},
	};
</script>

<style scoped>
	.container {
		width: 1075px;
		display: flex;
		justify-content: space-between;
		/* margin-top: 50px; */
		margin: 20px 0;
		padding: 0 35px;
	}

	section {
		/* height: 500px; */
		background-color: #f8f5e6;
		padding-bottom: 20px;
		padding-top: 16px;
		color: #3f7e77;
	}

	.resultItem {
		width: 109px;
		height: 182px;
		position: relative;
	}

	.resultItem__logo {
		display: flex;
		justify-content: center;
	}

	.resultItem__img {
		width: 85px;
		height: 85px;
		border-radius: 100%;

		background-color: green;
	}

	.resultItem__img img {
		width: 85px;
		height: 85px;
	}

	.resultItem__text {
		text-align: center;
		font-size: 14px;
	}

	.resultItem__percent {
		font-size: 26px;
		text-align: center;
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.resultItem__percent p {
		margin: 0;
		font-weight: bolder;
	}
</style>
