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
				<button class="form-btn" v-on:click="authenticate()">Login</button>
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
	import loginSvc from 'services/login';
	export default {
	  data() {
      return {
				heading: config.get('app.pages.login.headings.main'),
				email: null,
				password: null,
				flash: {
					message: null,
					error: false
				}
			}
		},
		methods: {
      authenticate() {
				loginSvc(this.email, this.password, (err, result) => {
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
				width: 90%;
				padding: 3%;
				display: flex;
				flex-direction: row;
				.icon-container {
					display: flex;
					justify-content: center;
					align-items: center;
					&::before {
						font-family: 'FontAwesome';
						color: $app-white;
						font-weight: 100;
						font-size: 1.5em;
					}
					&#email-icon::before {
						content: "\f2c3";
					}
					&#password-icon::before {
						content: "\f084";
					}
					width: 20%;
					height: 50px;
					background-color: $app-blue;
				}
				input {
					font-family: Roboto;
					font-weight: 100;
					width: 80%;
					height: 50px;
					padding: 10px;
					border: 1px solid $app-blue;
					outline: none;
				}
				button.form-btn {
					font-family: Roboto;
					font-weight: 300;
					font-size: 1.5em;
					width: 100%;
					border: 0;
					background-color: $app-blue;
					height: 50px;
					color: $app-white;
					outline: none;
					&:hover {
						background-color: lighten($app-blue, 20%);
					}
				}
			}
		}
	}

</style>
