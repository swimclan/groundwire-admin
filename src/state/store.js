// store.js
import Vue from 'vue';
import Vuex from 'vuex';

// the root, initial state object
const state = {
  authenticated: false,
  currentRoute: null
}
const getters = {
  authenticated: state => state.authenticated,
  currentRoute: state => state.currentRoute
}

const mutations = {
  toggleAuth: state => state.authenticated = !state.authenticated,
  setAuth: (state, auth) => state.authenticated = auth === true,
  setRoute: (state, name) => state.currentRoute = name
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export const store =  new Vuex.Store({
  state,
  getters,
  mutations
})