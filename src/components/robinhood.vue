<template>
  <div class="rh-container">
		<div class="rh-wrapper">
			<h3>{{ heading }}</h3>
			<div class="input-container">
				<span class="icon-container" id="email-icon"></span>
				<input type="text" class="form-input" placeholder="Username" v-model="username" />
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
import config from 'config';
export default {
  data() {
    return {
      heading: config.get('app.pages.robinhood.headings.main'),
      username: null,
      password: null,
      flash: {
        message: null,
        error: false
      },
      formButton: config.get('app.pages.robinhood.formbutton')
    }
  },
  methods: {
    authenticate() {}
  }
}
</script>



<style lang="scss" scoped>
	@import '../assets/styles/index';
	.rh-container {
		height: inherit;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.rh-wrapper {
			@include box($width: 400px);
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			.input-container {
				@include input-container();
				.icon-container {
          @include icon-container($username-icon: "", $background-color: $robinhood-dark, $icon-color: $robinhood-green);
          &#email-icon {
            background-image: url('../assets/images/rh-logo.png');
            background-size: 60px 60px;
            background-repeat: no-repeat;
            background-position: center; 
          }
				}
				input {
					@include input-field($border-color: $robinhood-dark);
				}
				button.form-btn {
					@include input-button($background-color: $robinhood-green);
				}
			}
		}
	}
</style>
