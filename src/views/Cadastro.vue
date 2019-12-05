<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Cadastro de Usuários</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form @keyup.native.enter="submit">
              <v-text-field
                prepend-icon="person"
                name="name"
                label="Nome"
                type="text"
                :error-messages="nameErrors"
                :success="!$v.user.name.$invalid"
                v-model.trim="$v.user.name.$model"
              ></v-text-field>
              <v-text-field
                prepend-icon="email"
                name="email"
                label="Email"
                type="email"
                 :error-messages="emailErrors"
                :success="!$v.user.email.$invalid"
                v-model.trim="$v.user.email.$model"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Senha"
                type="password"
                :error-messages="passwordErrors"
                :success="!$v.user.password.$invalid"
                 v-model.trim="$v.user.password.$model"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="password"
                label="Confirma Senha"
                type="password"
                :error-messages="confirmPassword"
                :success="!$v.user.repeatPassword.$invalid"
                 v-model.trim="$v.user.repeatPassword.$model"
              ></v-text-field>
            </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                 <v-btn color="secondary"
                 @click="submit"
                 :disabled="$v.$invalid"
                 >Confirmar</v-btn>
                <v-btn color="secondary"
                @click="$router.push('/')"
                >Voltar ao Login</v-btn>
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

import { required, email, minLength, sameAs } from 'vuelidate/lib/validators' 
const { mapActions } = createNamespacedHelpers('login') 

export default {
  name: 'Login',
  data: () => ({
    user: {
      name:'',
      email: '',
      password: '',
      repeatPassword:''
    }
  }),
    validations:  {
      user: {
        name: {
          required,
          minLength: minLength(3)
        },
        email: {
          required,
          email
        },
        password: {
          required,
          minLength: minLength(6)
        },
         repeatPassword: {
           sameAsPassword: sameAs('password')
      }
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      const name = this.$v.user.name;
      if (!name.$dirty) {
        return errors;
      }
      !name.required && errors.push("Nome é obrigatório!");
      !name.minLength &&
        errors.push(
          `Insira pelo menos ${name.$params.minLength.min} caracteres!`
        );
      return errors;
    },
    emailErrors () {
      const errors = []
      const email = this.$v.user.email
      if (!email.$dirty) { return errors }
      !email.required && errors.push('Email é obrigatório!')
      !email.email && errors.push('Insira um email válido!')
      return errors
    },
    passwordErrors () {
      const errors = []
      const password = this.$v.user.password
      if (!password.$dirty) { return errors }
      !password.required && errors.push('Senha é obrigatória!')
      !password.minLength && errors.push(`Insira pelo menos ${password.$params.minLength.min} caracteres!`)
      return errors
    },
    confirmPassword() {
      const errors = []
      
      const repeatPassword = this.$v.user.repeatPassword

       if (!repeatPassword.$dirty) { return errors }
      !repeatPassword.sameAsPassword && errors.push('Senha devem ser iguais!')

      return errors
    }
  },
  methods:{
    ...mapActions(['registrar']),
    submit(){
     let user = {
          nome: this.user.name,
          email: this.user.email,
          senha: this.user.password,
          confirmaSenha: this.user.repeatPassword
        }
        this.registrar(user)
       .then(()=>{
         this.$router.push('/')
       })
       .catch(err => console.log("erro no registro", err))
    }
  }
}
</script>
