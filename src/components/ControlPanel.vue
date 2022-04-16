<template>
	<div class="control-panel">
		<app-button class="control-panel__btn" @click="$emit('showDialog')">Create task</app-button>
		<app-button class="control-panel__btn" @click="this.confirmationDialogShow = true" variant="delete">Clear list</app-button>
		<app-dialog v-model:show="confirmationDialogShow">
			<confirmation-form @confirm="clearListConfirm" @cancel="this.confirmationDialogShow = false" :message="'Remove all tasks from the list?'" />
		</app-dialog>
	</div>
</template>

<script>
import AppButton from '@/components/AppButton';
import { mapActions } from 'vuex';
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
	width: 250px;
	justify-content: space-between;
}
.control-panel__btn {
	font-size: 18px;
}
</style>