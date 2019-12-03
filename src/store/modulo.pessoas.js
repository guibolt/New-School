import axios from 'axios'

const baseURL = process.env.VUE_APP_URL;

const apiClient = axios.create({
  baseURL,
  headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}) 

export const moduloPessoas = {
  namespaced: true,
  state: {
    lstPessoas:[], 
    load: false,
    error: undefined
  },
  mutations: {
    loading: state => state.load = true,
    cadastrarUsuario: (state, pessoa) => state.lstPessoas.push(pessoa),
    cadastroFalha: (state, message) => state.error = message
  
  },
  actions: {
    async cadastrarPessoa({commit}, tipo, pessoa){
      commit('loading')
      await apiClient.post(`${tipo}`,pessoa).then(resp =>{
        if(resp.data.status === false)
        return commit('cadastroFalha', response.data.resultado)
        console.log("resposta", resp.data)

        commit('cadastrarUsuario',pessoa)
        
      }).catch(error => {
        console.log('Falha', error);

        commit('cadastroFalha', error.message)
      })
    }
  }
}