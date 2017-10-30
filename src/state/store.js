// store.js
import Vue from 'vue';
import Vuex from 'vuex';

// the root, initial state object
const state = {
  authenticated: false,
  connected: false,
  currentRoute: null,
  user: null
}
const getters = {
  user: state => state.user,
  authenticated: state => state.authenticated,
  connected: state => state.connected,
  currentRoute: state => state.currentRoute
}

const mutations = {
  toggleAuth: state => state.authenticated = !state.authenticated,
  setAuth: (state, auth) => state.authenticated = auth === true,
  setConnected: (state, connected) => state.connected = connected === true,
  setUser: (state, user) => state.user = user,
  setRoute: (state, name) => state.currentRoute = name
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export const store =  new Vuex.Store({
  state,
  getters,
  mutations
})