import Vue from 'vue'
import Vuex from 'vuex'

// aqui importamos todos los modulos del store
import oauth from './modules/oauth'
import loading from './modules/loading'
import error from './modules/error'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    oauth,
    loading,
    error
  }
})
