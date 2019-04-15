<template>
	<div>
		<button @click="signIn">login</button>
		<br>
		{{this.$auth.user}}
		<br>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	methods: {
		signIn() {
			this.$auth.loginWith("google");
		}
	}
};
</script>
