// store.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// the root, initial state object
const state = {
  credentials: [
        {
            username: "mherron",
            firstName: "Matthew",
            surname: "Herron",
            password: "password1"
        },
        {
            username: "chastings",
            firstName: "Chris",
            surname: "Hastings",
            password: "password2"
        }
    ],
    widgets: [
        "Account",
        "Risk Settings",
        "Stop Strategy",
        "Stock Picks",
        "Activate",
        "Save Settings"
    ],
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