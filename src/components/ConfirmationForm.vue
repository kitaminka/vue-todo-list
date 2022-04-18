<template>
	<div class="confirmation-form">
		<p class="confirmation-form__message">{{message}}</p>
		<div class="confirmation-form__btns">
			<app-button variant="success" @click="$emit('confirm')">Confirm</app-button>
			<app-button variant="delete" @click="$emit('cancel')">Cancel</app-button>
		</div>
	</div>
</template>

<script>
import AppButton from '@/components/AppButton';
export default {
	name: 'ConfirmationForm',
	components: {
		AppButton
	},
	props: {
		message: String
	}
}
</script>

<style scoped>
.confirmation-form {
	width: 250px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	align-items: center;
}
.confirmation-form__message {
	color: #002493;
	margin-bottom: 10px;
}
.confirmation-form__btns {
	width: 200px;
	display: flex;
	justify-content: space-between;
}
</style>