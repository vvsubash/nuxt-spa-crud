<template>
	<div>
		<form action>
			<fieldset class="p-4">
				<label for="Name" class="text-xl font-medium">Name:</label>
				<input type="text" class="border-2 rounded-sm h-10 w-64 m-2">
			</fieldset>
		</form>
		<button @click="signIn">login</button>
		{{this.$auth.user}}
	</div>
</template>
<script>
export default {
	data() {
		return {
			googleUser: null
		};
	},
	methods: {
		signIn() {
			this.$auth.loginWith("google");
		}
	}
};
</script>
