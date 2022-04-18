<template>
	<div class="control-panel">
		<app-button class="control-panel__btn" @click="$emit('showDialog')">Create task</app-button>
		<app-button
				class="control-panel__btn"
				@click="this.confirmationDialogShow = true"
				variant="delete"
				v-if="sortedTasks.length > 0"
		>Clear list</app-button>
		<app-dialog v-model:show="confirmationDialogShow">
			<confirmation-form @confirm="clearListConfirm" @cancel="this.confirmationDialogShow = false" :message="'Remove all tasks from the list?'" />
		</app-dialog>
	</div>
</template>

<script>
import AppButton from '@/components/AppButton';
import { mapActions, mapGetters } from 'vuex';
import ConfirmationForm from '@/components/ConfirmationForm';
import AppDialog from '@/components/AppDialog';

export default {
	name: 'ControlPanel',
	components: {
		ConfirmationForm,
		AppButton,
		AppDialog
	},
	data() {
		return {
			confirmationDialogShow: false,
		}
	},
	computed: {
		...mapGetters({
			sortedTasks: 'getSortedTasks'
		})
	},
	methods: {
		...mapActions({
			clearList: 'clearList'
		}),
		clearListConfirm() {
			this.clearList();
			this.confirmationDialogShow = false
		}
	}
}
</script>

<style scoped>
.control-panel {
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.control-panel__btn {
	margin: 0 10px;
}
</style>