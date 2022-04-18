<template>
	<div class="control-panel">
		<app-button
				class="control-panel__btn"
				@click="showCreateTaskDialog"
		>
			Create task
		</app-button>
		<app-button
				class="control-panel__btn"
				@click="showConfirmationDialog"
				variant="delete"
				v-if="sortedTasks.length > 0"
		>
			Clear list
		</app-button>
		<app-dialog v-model:show="confirmationDialogShow">
			<confirmation-form
					@confirm="clearListConfirm"
					@cancel="this.confirmationDialogShow = false"
					:message="'Remove all tasks from the list?'"
			/>
		</app-dialog>
		<app-dialog v-model:show="createTaskDialogShow">
			<task-create-form
					@createTask="createTaskForm"
			/>
		</app-dialog>
	</div>
</template>

<script>
import AppButton from '@/components/AppButton';
import { mapActions, mapGetters } from 'vuex';
import ConfirmationForm from '@/components/ConfirmationForm';
import AppDialog from '@/components/AppDialog';
import TaskCreateForm from '@/components/TaskCreateForm';

export default {
	name: 'ControlPanel',
	components: {
		ConfirmationForm,
		AppButton,
		AppDialog,
		TaskCreateForm
	},
	data() {
		return {
			createTaskDialogShow: false,
			confirmationDialogShow: false
		}
	},
	computed: {
		...mapGetters({
			sortedTasks: 'getSortedTasks'
		})
	},
	methods: {
		...mapActions({
			clearList: 'clearList',
			clearEditableTask: 'clearEditableTask',
			createTask: 'createTask'
		}),
		showConfirmationDialog() {
			this.clearEditableTask();
			this.confirmationDialogShow = true;
		},
		showCreateTaskDialog() {
			this.clearEditableTask();
			this.createTaskDialogShow = true;
		},
		clearListConfirm() {
			this.clearList();
			this.confirmationDialogShow = false
		},
		createTaskForm(task) {
			this.createTask(task);
			this.createTaskDialogShow = false;
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