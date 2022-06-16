<template>
	<div class="list-item">
		<app-checkbox
			v-model="taskCompleted"
			class="list-item__checkbox"
		/>
		<app-input
			v-if="editableTask === task.id"
			ref="editInput"
			v-model="inputDescription"
			class="list-item__input"
			placeholder="Task description"
			@keydown.enter="toggleEditing"
		/>
		<div
			v-else
			class="list-item__description"
		>
			{{ shortDescription }}
		</div>
		<div class="list-item__control-btns">
			<app-button
				class="control-btns__btn"
				@click="toggleEditing"
			>
				<img alt="Edit" src="../assets/edit.svg">
			</app-button>
			<app-button
				class="control-btns__btn"
				variant="delete"
				@click="deleteTaskButton"
			>
				<img alt="Delete" src="../assets/delete.svg">
			</app-button>
		</div>
	</div>
</template>

<script>
import AppButton from '@/components/AppButton';
import { mapActions, mapGetters } from 'vuex';
import { nextTick } from 'vue';
import AppInput from '@/components/AppInput';
import AppCheckbox from '@/components/AppCheckbox';

export default {
	name: 'TaskListItem',
	components: {
		AppCheckbox,
		AppInput,
		AppButton
	},
	data() {
		return {
			editing: false,
			inputDescription: this.task.description
		}
	},
	props: {
		task: Object
	},
	computed: {
		...mapGetters({
			editableTask: 'getEditableTask'
		}),
		taskCompleted: {
			get() {
				return this.task.completed;
			},
			set(newValue) {
				this.clearEditableTask();
				this.setTaskStatus({
					task: this.task,
					completed: newValue
				});
			}
		},
		shortDescription() {
			if (this.task.description.length > 150) return `${this.task.description.slice(0, 150)}...`;
			else return this.task.description;
		}
	},
	watch: {
		inputDescription(newInputDescription) {
			if (newInputDescription.length > 0) {
				this.setTaskDescription({
					task: this.task,
					description: this.inputDescription
				});
			}
		}
	},
	methods: {
		...mapActions({
			setTaskDescription: 'setTaskDescription',
			setTaskStatus: 'setTaskStatus',
			deleteTask: 'deleteTask',
			setEditableTask: 'setEditableTask',
			clearEditableTask: 'clearEditableTask'
		}),
		toggleEditing() {
			if (this.editableTask === this.task.id) {
				this.clearEditableTask();
			} else {
				this.inputDescription = this.task.description;
				this.setEditableTask(this.task.id);
				nextTick(() => {
					this.$refs.editInput.$el.focus();
				});
			}
		},
		deleteTaskButton() {
			this.clearEditableTask();
			this.deleteTask(this.task);
		}
	}
}
</script>

<style scoped>
.list-item {
	margin: 5px 10px;
	border-radius: 5px;
	padding: 5px 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.list-item__checkbox {
	margin: 5px;
}

.list-item__input {
	width: 80%;
	font-size: 16px;
}

.list-item__description {
	color: #002493;
	word-wrap: break-word;
	max-width: 80%;
	text-align: left;
}

.list-item__control-btns {
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.control-btns__btn {
	width: 40px;
	height: 40px;
	padding: 0;
	margin: 5px;
}

@media (max-width: 900px) {
	.list-item__description {
		max-width: 50%;
	}
}
</style>