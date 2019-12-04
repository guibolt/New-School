<template>
  <v-app id="inspire">
    <v-content>
      <AppBar/>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" sm="8" lg="4" md="6" xs="2">
            <v-toolbar color="primary" dark>
              <v-toolbar-title v-if="tipo === 'Alunos'"
                >Alunos Cadastrados</v-toolbar-title
              >
              <v-toolbar-title v-else
                >Professores Cadastrados</v-toolbar-title
              >
               <v-spacer></v-spacer>
              <v-btn icon @click="showFilter = !showFilter">
                <v-icon>filter_list</v-icon>
              </v-btn>
              <!-- <v-btn icon @click="showFilter = !showFilter">
                <v-icon>search</v-icon>
              </!--> 
            </v-toolbar>
            <v-row justify="center">
              <v-dialog v-model="showFilter" persistent max-width="290">
                <template v-slot:activator="{ on }"></template>
                <v-card>
                  <v-card-title class="headline">Selecione</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-select
                      :items="items"
                      solo
                      :value="tipo"
                      v-model="tipo"
                      label="Escolha"
                    ></v-select>
                    <v-btn
                      title="Cancelar"
                      color="red darken-1"
                      text
                      @click="showFilter = false"
                    >
                      <v-icon>cancel</v-icon>
                    </v-btn>
                    <v-btn
                      title="Confirmar"
                      color="green darken-1"
                      text
                      @click="buscarNovamente"
                    >
                      <v-icon>done</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>

            <v-list subheader>
              <v-list-item v-for="pessoa in lstPessoas" :key="pessoa.id">
                <v-list-item-content>
                  <v-list-item-title>
                    <strong>Nome:</strong>
                    {{ pessoa.nome }}
                    <strong>Idade:</strong>
                    {{ pessoa.idade }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-icon>
                  <v-btn
                    icon
                    title="Mais informações"
                    @click="selectPerson(pessoa)"
                  >
                    <v-icon color="blue">info</v-icon>
                  </v-btn>
                </v-list-item-icon>

                <v-list-item-icon>
                  <v-btn icon title="Editar" @click="selecionarEEditar(pessoa)">
                    <v-icon color="green">edit</v-icon>
                  </v-btn>
                  <v-btn icon title="Remover" @click="selecionarPessoa(pessoa)">
                    <v-icon color="red">delete</v-icon>
                  </v-btn>
                </v-list-item-icon>
              </v-list-item>
              <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="290">
                  <template v-slot:activator="{ on }"></template>
                  <v-card>
                    <v-card-title class="headline"
                      >Deseja Remover este cadastro?</v-card-title
                    >
                    <v-card-text>Este é um processo irreversível</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        title="Cancelar"
                        color="red darken-1"
                        text
                        @click="dialog = false"
                      >
                        <v-icon>cancel</v-icon>
                      </v-btn>
                      <v-btn
                        title="Confirmar"
                        color="green darken-1"
                        text
                        @click="removerPessoa(pessoaSelecionada)"
                      >
                        <v-icon>done</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </v-list>
            <v-row justify="center">
              <v-dialog v-model="showEdit" persistent max-width="350">
                <template v-slot:activator="{ on }"></template>
                <v-card class="mx-auto">
                  <v-card-title class="headline">Editar Cadastro</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-form>
                      <v-text-field
                        prepend-icon="person"
                        name="name"
                        label="Nome"
                        type="text"
                        v-model="pessoaSelecionada.nome"
                      ></v-text-field>
                      <v-text-field
                        prepend-icon="N"
                        name="age"
                        label="Idade"
                        type="text"
                        v-model="pessoaSelecionada.idade"
                      ></v-text-field>

                      <v-btn
                        title="Cancelar"
                        color="red darken-1"
                        text
                        @click="showEdit = false"
                      >
                        <v-icon>cancel</v-icon>
                      </v-btn>
                      <v-btn
                        title="Confirmar"
                        color="green darken-1"
                        text
                        @click="salvarEdicao(pessoaSelecionada)"
                      >
                        <v-icon>save</v-icon>
                      </v-btn>
                    </v-form>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
            <v-dialog
              v-model="showInfo"
              persistent
              max-width="500"
              @click.stop="showInfo = true"
            >
              <template v-slot:activator="{ on }"></template>
              <v-card class="mx-auto">
                <v-card-title class="headline">Mais Informações</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-list-item-title>
                    <v-icon>person</v-icon>
                    <strong>Nome:</strong>
                    {{ pessoaSelecionada.nome }}
                    <strong>Idade:</strong>
                    {{ pessoaSelecionada.idade }}
                    <strong>Sexo:</strong>
                    {{ pessoaSelecionada.sexo }}
                  </v-list-item-title>
                </v-card-actions >
                <v-btn
                  title="Cancelar"
                  color="red darken-1"
                  text
                  @click="showInfo = !showInfo"
                >
                  <v-icon>cancel</v-icon>
                </v-btn>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-container>
      <AppFloatingButton
      url="cadastropessoas"
      />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import AppFloatingButton from '../components/FloatingButton.vue'
import {createNamespacedHelpers} from 'vuex'


const { mapActions, mapState } = createNamespacedHelpers('moduloPessoas') 
export default {
  components:{
    AppBar,
    AppFloatingButton
  },
  data() {
    return {
      pessoaSelecionada: {},
      dialog: false,
      showFilter: false,
      showEdit: false,
      showInfo: false,
      tipo: "Alunos",
      items: ["Professores", "Alunos"],
      alertSucess: true
    };
  },
  computed:{
      ...mapState(['lstPessoas'])
  },
  methods: {
    ...mapActions(['buscarPessoas','mudarPessoa','deletarPessoa']),
    descobrirTipo(pessoaSelecionada) {
      return pessoaSelecionada.cpf ? "Professores" : "Alunos";
    },

    selecionarEEditar(pessoa) {
      var vm = this.$data;
      this.showEdit = !this.showEdit;
      vm.pessoaSelecionada = Object.assign({}, pessoa);
    },
     async salvarEdicao(pessoaSelecionada) {
       pessoaSelecionada.tipo = pessoaSelecionada.tipo = this.descobrirTipo(pessoaSelecionada)
     await this.mudarPessoa(pessoaSelecionada)
      await this.buscarNovamente(this.tipo)
      this.showEdit = !this.showEdit;
    },
     removerPessoa(pessoaSelecionada) {
      pessoaSelecionada.tipo = this.descobrirTipo(pessoaSelecionada)
      this.deletarPessoa(pessoaSelecionada)
      this.dialog = !this.dialog;
    },
    selecionarPessoa(pessoa) {
      this.dialog = !this.dialog;
      var vm = this.$data;
      vm.pessoaSelecionada = Object.assign({}, pessoa);
    },
    selectPerson(pessoa) {
      this.showInfo = !this.showInfo;
      var vm = this.$data;
      vm.pessoaSelecionada = Object.assign({}, pessoa);
    },
     buscarNovamente(){
       this.buscarPessoas(this.tipo)
      this.showFilter = false
    }

  },
   created(){
     this.buscarPessoas(this.tipo)
  },
}
</script>
