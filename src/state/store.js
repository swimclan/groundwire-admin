// store.js
import Vue from 'vue';
import Vuex from 'vuex';

// the root, initial state object
const state = {
  authenticated: false,
  connected: false,
  currentRoute: null,
  user: new String(),
  preference: null
}
const getters = {
  user: state => state.user,
  username: state => state.user.indexOf('@') !== -1 ? state.user.split('@')[0] : null,
  authenticated: state => state.authenticated,
  connected: state => state.connected,
  currentRoute: state => state.currentRoute,
  activePref: state => state.preference
}

const mutations = {
  toggleAuth: state => state.authenticated = !state.authenticated,
  setAuth: (state, auth) => state.authenticated = auth === true,
  setConnected: (state, connected) => state.connected = connected === true,
  setUser: (state, user) => state.user = user ? user : new String(),
  releaseUser: (state) => state.user = new String(),
  setRoute: (state, name) => state.currentRoute = name,
  setActivePref: (state, pref) => state.preference = pref
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export const store =  new Vuex.Store({
  state,
  getters,
  mutations
})