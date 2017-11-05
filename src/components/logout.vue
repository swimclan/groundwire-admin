<template>
	<div class="logout-container">
		<div class="logout-wrapper">
			<h4>You have logged out of GroundWire</h4>
			<router-link class="return-login" to="login">Return to login</router-link>
			<div class="logout-error" v-bind:if="flash.error">{{flash.message}}</div>
		</div>
	</div>
</template>

<script>
import config from 'config';
import {mapMutations} from 'vuex';
import {router} from '../router';
import {logout} from 'services/authentication';
export default {
	data() {
		return {
			flash: {
				message: null,
				error: false
			}
		}
	},
	created() {
		logout((err, res) => {
			if (err) {
				this.flash.error = true;
				this.flash.message = config.get('messages.flash.server.error');
				return;
			}
			this.setAuth(false);
			this.releaseUser();
		})
	},
	methods: {
		...mapMutations([
			'setAuth',
			'releaseUser'
		])
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/index';
	.logout-container {
		height: inherit;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		.logout-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			@include box($width: 400px);
			a {
				font-weight: 100;
				text-decoration: none;
			}
		}
	}
</style>

