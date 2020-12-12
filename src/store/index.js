import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import AppStore from './modules/AppStore.js';

export default new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: {
  },
  modules: {
    app: AppStore
  }
})

