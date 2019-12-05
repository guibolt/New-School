import Vue from "vue";
import Vuex from "vuex";
import Jwtdecoder from "jwt-decode";
import axios from 'axios'

Vue.use(Vuex);

const baseURL = process.env.VUE_APP_URL;

const apiClient = axios.create({
  baseURL,
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
  }
})

export const login = {
  namespaced: true,
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    loginSuccessful: false
  },
  mutations: {
    carregandoAutenticacao(state) {
      state.status = "loading";
    },
    sucessoAutenticacao(state,user,token) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    sucessoCadastro(state) {
      state.status = "success";
    },
    erroAutenticacao(state) {
      state.status = "error";
    },
    fazerLogout(state) {
      state.status = "";
      state.token = "";
    },
    loginSucesso: (state, resultado) => {      
      if (resultado != null) {                
          state.loginSucessful = true;
      }
  }
  },

  actions: {
    logar({ commit }, user) {
      apiClient.post('/usuarios/login',user)
      .then(resp =>{
        console.log("Resultado do Login", resp.data.resultado);

            const token = resp.data.resultado.accessToken
            const user = Object.assign({}, Jwtdecoder(token).unique_name);

            localStorage.setItem("token", token);
            commit("sucessoAutenticacao",user, token, );
            console.log("usuario", user);
      }).catch(err => console.log("Erro no login", err))

    },
    registrar({ commit }, user) {
      commit("carregandoAutenticacao")
      apiClient.post('/usuarios',user).then(resp =>{
        commit("sucessoCadastro")
        console.log('Resultado do resgistro:', resp)
      })
      .catch(err => {
        commit("erroAutenticacao", err);
        console.log(err)
      })
    },
    logout({ commit }) {
      commit("fazerLogout");
      localStorage.removeItem('token');
    }
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
};
