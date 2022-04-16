<template>
	<div class="control-panel">
		<app-button @click="$emit('showDialog')">Create task</app-button>
		<app-button @click="clearList" variant="delete">Clear list</app-button>
	</div>
</template>

<script>
import AppButton from '@/components/AppButton';
import { mapActions } from 'vuex';

export default {
	name: 'ControlPanel',
	components: {AppButton},
	methods: {
		...mapActions({
			clearList: 'clearList'
		})
	}
}
</script>

<style scoped>
.control-panel {
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	width: 200px;
	justify-content: space-between;
}
</style>