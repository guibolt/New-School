<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" sm="8" lg="4" md="6" xs="2">
            <!-- Top do Card no centro da tela escrito Turmas -->
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Turmas</v-toolbar-title>
            </v-toolbar>

            <v-list subheader class="elevation-12">
              <v-list-group
                v-for="turma in lstTurmas"
                :key="turma.id"
                :prepend-icon="turma.icon"
                no-action
              >
                <template v-slot:activator>
                  <v-list-item-content @click="buscarTurmaID(turma)">
                    <v-list-item-title v-text="turma.nomeTurma"></v-list-item-title>
                  </v-list-item-content>
                </template>
                <v-divider></v-divider>
                <v-list-group no-action sub-group>
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title @mouseover="show = true" @mouseout="show = false">
                        <v-badge right color="green" v-model="show">
                          <template v-slot:badge>
                            <span
                              v-if="ATurmaSelecionada.professores"
                            >{{ ATurmaSelecionada.professores.length }}</span>
                            <span v-else>Não há professores</span>
                          </template>
                          <span class="ml-5">
                            <strong>Professores</strong>
                          </span>
                        </v-badge>
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item
                    v-for="professor in ATurmaSelecionada.professores"
                    :key="professor.id"
                  >
                    <v-icon color="red" title="Professor" justify="left">
                      {{
                      professor.icon
                      }}
                    </v-icon>
                    <v-list-item-title class="ml-8">{{ professor.nome }}</v-list-item-title>
                    <v-list-item-icon>
                      <v-btn icon title="Mais informações" @click="selectPerson(professor)">
                        <v-icon color="blue">info</v-icon>
                      </v-btn>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-group>

                <v-divider></v-divider>

                <v-list-group sub-group no-action>
                  <template v-slot:activator>
                    <v-list-item-content v-if="ATurmaSelecionada.professores">
                      <v-list-item-title @mouseover="showA = true" @mouseout="showA = false">
                        <v-badge right color="green" v-model="showA">
                          <template v-slot:badge>
                            <span
                              v-if="ATurmaSelecionada.alunos"
                            >{{ ATurmaSelecionada.alunos.length }}</span>
                            <span v-else>Não há professores</span>
                          </template>
                          <span class="ml-5">
                            <strong>Alunos</strong>
                          </span>
                        </v-badge>
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <v-list-item v-for="aluno in ATurmaSelecionada.alunos" :key="aluno.id">
                    <v-icon color="green" title="Aluno" justify="left">
                      {{
                      aluno.icon
                      }}
                    </v-icon>
                    <v-list-item-title class="ml-8">
                      {{
                      aluno.nome
                      }}
                    </v-list-item-title>
                    <v-list-item-icon>
                      <v-btn icon title="Mais Informações" @click="selectPerson(aluno)">
                        <v-icon color="blue">info</v-icon>
                      </v-btn>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-group>
                <v-divider></v-divider>
              </v-list-group>
            </v-list>
            <v-dialog
              class="mx-auto pa-6 transition-swing"
              v-model="showInfo"
              persistent
              max-width="700"
              @click.stop="showInfo = true"
            >
              <template v-slot:activator="{ on }"></template>
              <v-card class="mx-auto">
                <v-card-title class="headline">Mais Informações</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-list-item-title>
                    <v-list-item-icon class="pa-1 ml-5">
                      <v-icon color="primary">person</v-icon>
                    </v-list-item-icon>

                    <strong>Nome:</strong>
                    {{ pessoaSelecionada.nome }}
                    <strong>Idade:</strong>
                    {{ pessoaSelecionada.idade }}
                    <strong>Sexo:</strong>
                    {{ pessoaSelecionada.sexo }}
                    <strong>Tipo:</strong>
                    {{ descobrirTipo(pessoaSelecionada) }}
                  </v-list-item-title>
                  <v-list-item-action>
                    <v-btn
                      title="Cancelar"
                      color="red darken-1"
                      text
                      @click="showInfo = !showInfo"
                      icon
                    >
                      <v-icon color="red darken-1">cancel</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("moduloPessoas");
export default {
  data() {
    return {
      pessoaSelecionada: {},
      dialog: false,
      show: false,
      showA: false,
      showFilter: false,
      showEdit: false,
      showInfo: false,
      alertSucess: true
    };
  },
  computed: {
    ...mapState(["lstTurmas", "ATurmaSelecionada"])
  },
  methods: {
    ...mapActions(["buscarTurmas", "buscarTurmaID"]),
    exibirInformacoes(turma) {},
    selectPerson(pessoa) {
      this.showInfo = !this.showInfo;
      var vm = this.$data;
      vm.pessoaSelecionada = Object.assign({}, pessoa);
    },
    descobrirTipo(pessoaSelecionada) {
      return pessoaSelecionada.cpf ? "Professor" : "Aluno";
    }
  },
  async created() {
    await this.buscarTurmas()
    console.log("Turmas?: ", this.lstTurmas[0]);
  }
};
</script>
>
