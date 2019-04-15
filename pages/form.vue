<template>
	<div>
		<button @click="signIn">login</button>
		<br>
		{{this.$auth.user}}
		<br>
		<div v-if="this.$auth.loggedIn">
			<router-link :to="'/'+ this.$auth.user.sub +'/cows'">LinkTitle</router-link>
		</div>
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
