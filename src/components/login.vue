<template>
  <div class="login-container">
		<div class="login-wrapper">
			<h3>{{ heading }}</h3>
			<div class="input-container">
				<span class="icon-container" id="email-icon"></span>
				<input type="email" class="form-input" placeholder="Email Address" v-model="email" />
			</div>
			<div class="input-container">
				<span class="icon-container" id="password-icon"></span>
				<input type="password" class="form-input" placeholder="Password" v-model="password" />
			</div>
			<div class="input-container">
				<button class="form-btn" v-on:click="authenticate()">{{ formButton }}</button>
			</div>
			<div class="form-message" v-bind:class="{ error: flash.error }">
				{{flash.message}}
			</div>
		</div>
	</div>
  
</template>

<script>
	import router from '../router.js';
	import config from 'config';
	import {login} from 'services/authentication';
	import {check} from 'services/authentication';
	import {mapMutations} from 'vuex';
	
	export default {
		created() {
			check((err, res) => {
				if (res.authorized) {
					this.setAuth(true);
				}
			});
		},
	  data() {
      return {
				heading: config.get('app.pages.login.headings.main'),
				email: null,
				password: null,
				flash: {
					message: null,
					error: false
				},
				formButton: config.get('app.pages.login.formbutton')
			}
		},
		methods: {
			...mapMutations(['setAuth']),
      authenticate() {
				login(this.email, this.password, (err, result) => {
					if (!result.error) this.setAuth(true);
					this.flash.message = result.message;
					this.flash.error = result.error;
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/index';
	.login-container {
		height: inherit;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.login-wrapper {
			@include box($width: 400px);
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			.input-container {
				@include input-container();
				.icon-container {
					@include icon-container();
				}
				input {
					@include input-field();
				}
				button.form-btn {
					@include input-button();
				}
			}
		}
	}
</style>
