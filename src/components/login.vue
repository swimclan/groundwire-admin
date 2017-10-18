<template>
  <div class="login-container">
  	<div class="container">
  		<div class="box">
  		  <div class="form-container">
  		      <h4>{{ heading }}</h4>
  		      <div class="form-group">
  		        <input type="email" class="form-control" placeholder="Email Address" v-model="email" />
  		      </div>
  		      <div class="form-group">
  		        <input type="password" class="form-control" placeholder="Password" v-model="password" />
  		      </div>
  		      <button class="connect" v-on:click="authenticate()">
  		      Connect</button>
			  <div class="message" v-bind:class="{ error: flash.error }">
				  {{flash.message}}
			  </div>
  		    </div>
  		</div>
  	</div>	
  </div>
</template>

<script>
	import router from '../router.js';
	import config from 'config';
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
				let formdata = new FormData();
				formdata.append('emailAddress', this.email);
				formdata.append('password', this.password);
				fetch(config.get('ajax.login.url'), {
					method: 'POST',
					credentials: 'include',
					mode: 'cors',
					body: formdata
				})
				.then((res) => {
					if (res.status === 401) {
						this.flash.error = true;
						this.flash.message = config.get('messages.flash.login.unauthorized');
					} else if (res.status === 200) {
						this.flash.error = false;
						this.flash.message = config.get('messages.flash.login.success');
					} else {
						this.flash.error = true;
						this.flash.message = config.get('messages.flash.server.error');
					}
					
				})
				.catch((err) => {
					this.flash.error = true;
					this.flash.message = config.get('messages.flash.server.error');
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/component.scss';
	.form-control, button.connect {
		width: 100%;
		height: 50px;
		font-size: 20px;
		margin-top: 20px;
	}
	button.connect {
		background-color: $app-blue;
		color: $app-white;
		border: 0;
	}
	.form-container {
		display: table-cell;
		vertical-align: middle;
	}
	.message {
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
	}
</style>
