// store.js
import Vue from 'vue';
import Vuex from 'vuex';
import {strategies, preferences, createPreferences} from 'services/preferences';
import {disconnect} from 'services/authentication';

// the root, initial state object
const state = {
  authenticated: false,
  connected: false,
  currentRoute: null,
  user: new String(),
  preference: null,
  strategies: [],
  preferences: {}
}
const getters = {
  user: state => state.user,
  username: state => state.user.indexOf('@') !== -1 ? state.user.split('@')[0] : null,
  authenticated: state => state.authenticated,
  connected: state => state.connected,
  currentRoute: state => state.currentRoute,
  activePref: state => state.preference,
  prefSelected: state => state.preference !== null,
  strategies: state => state.strategies,
  preferences: state => state.preferences
}

const mutations = {
  toggleAuth: state => state.authenticated = !state.authenticated,
  setAuth: (state, auth) => state.authenticated = auth === true,
  setConnected: (state, connected) => state.connected = connected.result ? connected.result !== 'OK' : connected === true,
  setUser: (state, user) => state.user = user ? user : new String(),
  releaseUser: (state) => state.user = new String(),
  setRoute: (state, name) => state.currentRoute = name,
  toggleActivePref: (state, pref) => state.preference = state.preference !== pref ? pref : null,
  releasePref: (state) => state.preference = null,
  setStrategies: (state, strategies) => state.strategies = strategies,
  setPreferences: (state, preferences) => state.preferences = preferences,
  setPrefProp: (state, {prop, val}) => state.preferences[prop] = val,
  noop: (state) => true
}

const actions = {
  async setStrategies ({ commit }) {
    commit ('setStrategies', await strategies());
  },
  async setPreferences ({ commit }, cb) {
    commit ('setPreferences', await preferences());
    cb ? cb(state.preferences) : false;
  },
  async savePreferences ({ commit, state }, cb) {
    commit ('noop', await createPreferences(state.preferences));
    cb ? cb(state.preferences) : false;
  },
  async disconnect({ commit }) {
    commit ('setConnected', await disconnect());
  }
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export const store =  new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})