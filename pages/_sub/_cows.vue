<template>
	<div>{{cows}}</div>
</template>

<script>
import db from "~/plugins/firestore.js";
export default {
	validate({ params, store }) {
		return params.sub == store.state.auth.user.sub;
	},
	transition: "bounce",
	data() {
		return {
			cows: [],
			y: "x"
		};
	},
	firestore() {
		const uid = this.$auth.user.sub;
		return {
			cows: db
				.collection("users")
				.doc(uid)
				.collection("cows")
		};
	}
};
</script>

<style scoped>
</style>