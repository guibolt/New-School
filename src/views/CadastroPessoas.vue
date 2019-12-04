<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Cadastro de Professores E Alunos</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form @keyup.native.enter="submit">
                  <v-container fluid>
                    <v-card-title>Selecione a data de nascimento</v-card-title>
                  </v-container>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-row justify="center">
                      <v-date-picker v-model="pessoa.dataDeNascimento"></v-date-picker>
                    </v-row>
                  </v-col>
                  <v-select
                    :items="items"
                    solo
                    :value="pessoa.tipo"
                    v-model="$v.pessoa.tipo.$model"
                    label="Escolha"
                    :error-messages="mustSelectType"
                  ></v-select>
                  <v-text-field
                    prepend-icon="person"
                    name="name"
                    label="Nome"
                    type="text"
                    :error-messages="nameErrors"
                    :success="!$v.pessoa.nome.$invalid"
                    v-model.trim="$v.pessoa.nome.$model"
                  ></v-text-field>
                  <v-text-field
                    v-if="pessoa.tipo == 'Professores'"
                    prepend-icon="N"
                    name="cpf"
                    label="Cpf"
                    type="text"
                    :error-messages="mustSelectCpf"
                    :success="!$v.pessoa.cpf.$invalid"
                    v-model="$v.pessoa.cpf.$model"
                    v-mask="mask"
                  ></v-text-field>
                  <v-toolbar-title>Escolha o Sexo</v-toolbar-title>
                  
                  <v-radio-group
                    :error-messages="mustSelectSex"
                    :success="!$v.pessoa.sexo.$invalid"
                    v-model="$v.pessoa.sexo.$model"
                    :mandatory="false"
                  >
                    <v-radio label="Feminino" value="feminino"></v-radio>
                    <v-radio label="Masculino" value="masculino"></v-radio>
                  </v-radio-group>
                  <v-flex v-if="pessoa.tipo === 'Alunos'">
            <v-toolbar-title>Escolha se o Aluno é bolsista</v-toolbar-title>
                  <v-checkbox
                  
                  v-model="pessoa.bolsista"
                  label="É Bolsista`"
                ></v-checkbox>
                  </v-flex>
                   
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="secondary" :disabled="$v.$invalid" @click="submit()">Confirmar</v-btn>
                <v-btn color="secondary" @click="$router.push('/home')">Voltar ao menu</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mask } from "vue-the-mask";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import { match } from "minimatch";
import {createNamespacedHelpers} from 'vuex'

const { mapActions } = createNamespacedHelpers('moduloPessoas')
export default {
  directives: {
    mask
  },
  data: () => ({
    mask: "###.###.###-##",
    items: ["Professores", "Alunos"],
    pessoa: {
      nome: "",
      sexo: "",
      dataDeNascimento: "",
      cpf: "",
      tipo: undefined,
      bolsista: false
    }
  }),
  validations() {
    const validations = {
      pessoa: {
        nome: {
          required,
          minLength: minLength(3),
          match: new RegExp("[a-z-A-Z]")
        },
        sexo: {
          required
        },
        dataDeNascimento: {
          required
        },
        tipo: {
          required
        }
      }
    };

    if (this.pessoa.tipo === "Alunos") return validations;

    return {
      pessoa: {
        ...validations.pessoa,
        cpf: {
          required,
          minLength: minLength(11)
        }
      }
    };
  },
  computed: {
    nameErrors() {
      const errors = [];
      const name = this.$v.pessoa.nome;
      if (!name.$dirty) return errors;

      !name.required && errors.push("Nome é obrigatório!");
      !name.minLength &&
        errors.push(
          `Insira pelo menos ${name.$params.minLength.min} caracteres!`
        );

      !name.match && errors.push("Somente letras!");
      return errors;
    },
    mustSelectSex() {
      const errors = [];

      const sex = this.$v.pessoa.sexo;
      if (!sex.$dirty) return errors;

      !sex.required && errors.push("Sexo é obgradorio");
      return errors;
    },
    mustSelectDate() {
      const errors = [];

      const date = this.$v.pessoa.dataDeNascimento;
      if (!date.$dirty) return errors;

      !date.required && errors.push("Data é obgradoria");
      return errors;
    },
    mustSelectCpf() {
      const errors = [];

      const cpf = this.$v.pessoa.cpf;
      if (!cpf.$dirty) return errors;

      !cpf.required && errors.push("Cpf é obgradorio");
      !cpf.minLength &&
        errors.push(
          `Insira pelo menos ${cpf.$params.minLength.min} caracteres!`
        );

      return errors;
    },
    mustSelectType() {
      const errors = [];

      if (this.pessoa.tipo === undefined) errors.push("É necessario escolher!");

      return errors;
    }
  },
  methods: {
    ...mapActions(['cadastrarPessoa']),
   async submit() {
     
  
      const aPessoa = {
        nome: this.pessoa.nome,
        sexo: this.pessoa.sexo,
        dataDeNascimento: this.pessoa.dataDeNascimento,
        cpf: this.pessoa.cpf.match(/\d+/g).map(Number).toString().split(',').join(''),
        tipo: this.pessoa.tipo
      }
      console.log("This pessoa", this.pessoa)
      console.log("tipo pessoa", this.pessoa.tipo)
      console.log("const pessoa", aPessoa)

       await this.cadastrarPessoa(aPessoa).then(this.$router.push('/home'))
    }
  }
};
</script>
