import Vue from 'vue'
import Vuex from 'vuex'
import {login}  from './modulo.login'
import { moduloPessoas} from './modulo.pessoas'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    login,
    moduloPessoas
  }
})
