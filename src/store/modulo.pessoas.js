import axios from "axios";

const baseURL = process.env.VUE_APP_URL;

const apiClient = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

export const moduloPessoas = {
  namespaced: true,
  state: {
    lstPessoas: [],
    lstTurmas: [],
    ATurmaSelecionada: {},
    load: false,
    error: undefined
  },
  mutations: {
    loading: state => (state.load = true),
    cadastrarUsuario: (state, pessoa) => state.lstPessoas.push(pessoa),
    cadastrarTurma: (state, turma) => state.lstTurmas.push(turma),
    casoFalha: (state, message) => (state.error = message),
    trazerPessoas: (state, pessoas) => (state.lstPessoas = pessoas),
    editarPessoa: (state, pessoa) => {
      const indice = state.lstPessoas.findIndex(t => t.id === pessoa.id);
      state.lstPessoas.splice(indice, 1, pessoa);
    },
    removerPessoa: (state, pessoa) => {
      const indice = state.lstPessoas.findIndex(t => t.id === pessoa.id);
      state.lstPessoas.splice(indice, 1);
    },
    trazerTurmas: (state, turmas) => (state.lstTurmas = turmas),
    buscaUmaTurma: (state, turma) => (state.ATurmaSelecionada = turma),
    buscarQtdTurmas: state => state.lstTurmas.length
  },
  actions: {
    async cadastrarPessoa({ commit }, pessoa) {
      console.log("pessoa: ", pessoa);
      commit("loading");
      await apiClient
        .post(pessoa.tipo, pessoa)
        .then(resp => {
          console.log("virá ?:", resp);

          if (resp.data.status === false)
            return commit("casoFalha", response.data.resultado);

          console.log("resposta", resp.data);
          commit("cadastrarUsuario", pessoa);
        })
        .catch(error => {
          console.log("Falha", error);

          commit("casoFalha", error.message);
        });
    },
    async cadastrarTurma({ commit }, turma) {
      commit("loading");
      await apiClient
        .post("Turmas", turma)
        .then(resp => {
          console.log("virá ?:", resp);

          if (resp.data.status === false)
            return commit("casoFalha", response.data.resultado);

          console.log("resposta", resp.data);
          commit("cadastrarTurma", turma);
        })
        .catch(error => {
          console.log("Falha", error);

          commit("casoFalha", error.message);
        });
    },
    async buscarPessoas({ commit }, tipo) {
      commit("loading");
      await apiClient
        .get(tipo)
        .then(resp => {
          if (resp.data.status === false)
            return commit("casoFalha", response.data.resultado);

          console.log("resposta", resp.data);
          commit("trazerPessoas", resp.data.resultado);
        })
        .catch(error => {
          console.log("Falha", error);

          commit("casoFalha", error.message);
        });
    },
    async mudarPessoa({ commit }, pessoa) {
      commit("loading");
      await apiClient
        .put(`${pessoa.tipo}/${pessoa.id}`, pessoa)
        .then(resp => {
          if (resp.data.status === false)
            return commit("casoFalha", response.data.resultado);

          console.log("resposta do put", resp.data);
          commit("editarPessoa", resp.data.resultado);
        })
        .catch(error => {
          console.log("Falha", error);

          commit("casoFalha", error.message);
        });
    },
    async deletarPessoa({ commit }, pessoa) {
      commit("loading");
      await apiClient
        .delete(`${pessoa.tipo}/${pessoa.id}`)
        .then(resp => {
          if (resp.data.status === false)
            return commit("casoFalha", response.data.resultado);

          console.log("resposta do delete", resp.data);
          commit("removerPessoa", resp.data.resultado);
        })
        .catch(error => {
          console.log("Falha", error);

          commit("casoFalha", error.message);
        });
    },
    async buscarTurmas({ commit }) {
      commit("loading");
      await apiClient
        .get("Turmas")
        .then(resp => {
          if (resp.data.status === false)
            return commit("casoFalha", response.data.resultado);

          console.log("resposta do getTurmas", resp.data);
          commit("trazerTurmas", resp.data.resultado);
        })
        .catch(error => {
          console.log("Falha", error);

          commit("casoFalha", error.message);
        });
    },
    async buscarTurmaID({ commit }, turma) {
      commit("loading");
      await apiClient
        .get(`Turmas/${turma.id}`)
        .then(resp => {
          if (resp.data.status === false)
            return commit("casoFalha", response.data.resultado);

          console.log("resposta do getPorId", resp.data);
          commit("buscaUmaTurma", resp.data.resultado);
        })
        .catch(error => {
          console.log("Falha", error);

          commit("casoFalha", error.message);
        });
    },
    //buscar quantidade de turmas
    async buscarQtdTurmas({ commit }) {
      commit("loading");
      await apiClient
        .get("Turmas")
        .then(resp => {
          if (resp.data.status === false)
            return commit("casoFalha", response.data.resultado);

          console.log("resposta do getTurmas quantidade", resp.data);
          commit("trazerTurmas", resp.data.resultado.length);
        })
        .catch(error => {
          console.log("Falha", error);

          commit("casoFalha", error.message);
        });
    }
  }
};
