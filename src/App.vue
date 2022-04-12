<template>
  <div class="app">
    <the-header/>
		<router-view/>
	</div>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
  components: {
    TheHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@500&display=swap');
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
  background-color: #eeffff;
}
.app {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	font-family: "Libre Franklin", sans-serif;
}
</style>