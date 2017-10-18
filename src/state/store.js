// store.js
import Vue from 'vue';

// the root, initial state object
const state = {
    authenticated: false
}

// define the possible mutations that can be applied to our state
const mutations = {
	TOGGLE_AUTHENTICATION(state) {

	}
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations
})