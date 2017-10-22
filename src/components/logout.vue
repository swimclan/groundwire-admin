<template>
	<div class="logout-container">
		<h4>You have logged out of GroundWire</h4>
		<router-link to="login">Return to login</router-link>
		<div class="logout-error" v-bind:if="flash.error">{{flash.message}}</div>
	</div>
</template>

<script>
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
		})
	},
	methods: {
		...mapMutations([
			'setAuth'
		])
	}
}
</script>
