<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="14" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Cadastrar Turmas</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <form>
                  <v-text-field
                    prepend-icon="home"
                    v-model="nomeTurma"
                    label="Nome da Turma"
                  ></v-text-field>
                </form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="secondary" @click="submit"
                  >Cadastrar</v-btn
                >
                <v-btn color="secondary" @click="$router.push('/home')"
                  >Voltar ao menu</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'

import Jwtdecoder from 'jwt-decode'

const { mapState, mapActions } = createNamespacedHelpers('moduloPessoas')
export default {
  data: () => ({
      nomeTurma: "",
  }),
  methods: {
    ...mapActions(['cadastrarTurma']),
    submit() {
        this.cadastrarTurma({
          nomeTurma: this.nomeTurma,
          coordenadorId: Object.assign({}, Jwtdecoder(localStorage.getItem('token')).unique_name)[2]
        }).then(this.$router.push('/home'))
    }
  }
};
</script>
