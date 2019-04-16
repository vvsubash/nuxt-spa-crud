<template>
	<div>{{this.$store.state.auth.user}}</div>
</template>

<script>
export default {
	validate({ params, store }) {
		return params.sub == store.state.auth.user.sub;
	}
};
</script>
