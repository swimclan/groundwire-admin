<template>
  <div class="login-container">
  	<div class="container">
  		<div class="box">
  		  <div class="formContainer">
  		      <h4>Connect to RobinHood Account</h4>
  		      <div class="form-group">
  		        <textarea class="form-control" placeholder="username" v-model="credential.username">
  		        </textarea>
  		      </div>
  		      <div class="form-group">
  		        <textarea class="form-control" placeholder="password" v-model="credential.password">
  		       </textarea>
  		      </div>
  		      <button class="connect" v-on:click="authenticate(credential)">
  		      Connect</button>
			  <div class="message unloaded">
				  {{message}}
			  </div>
  		    </div>
  		</div>
  	</div>	
  </div>
</template>

<script>
	import model from '../state/model.js';
	import router from '../router.js';
	export default {
	    data() {
            return {
				credential : {
                    username: '',
					password: ''
				},
				message : '',
				state: model
			}
		},
		methods: {
            authenticate(arg) {
                const credentials = model.credentials;
                for (let i in credentials){
                    if (arg.username === credentials[i].username && arg.password === credentials[i].password) {
                        this.message = 'Login successful';
                        this.state.authenticated = true;
                        setTimeout(() => {
                            location.href = ('/#/dashboard');
							// router.go('/dashboard');
						}, 2500);
                        break;
                    } else {
                        this.message = 'Login failed';
					}
				}
				let target = document.getElementsByClassName('message')[0];
                function fadeToggle(){
                    target.className === 'message unloaded' ? target.className = 'message loaded' : target.className = 'message unloaded';
				}
				fadeToggle();
				setTimeout(() => {
                    fadeToggle();
                }, 2000);
			}
		}
	}
</script>