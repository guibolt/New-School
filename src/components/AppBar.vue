<template>
  <div>
    <v-app-bar color="primary" dense dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Escola</v-toolbar-title>

      <v-spacer></v-spacer>
    
      <v-toolbar-items>
        <v-btn
        icon
        @click="logout"
        >Sair 
        <v-icon>exit_to_app</v-icon>
        </v-btn>
  
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>account_circle</v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            
            <v-list-item-title>{{userName}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="ValidaERedireciona(item)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
import Jwtdecoder from 'jwt-decode'

const { mapActions , mapState } = createNamespacedHelpers('login')

export default {
  created(){
    setTimeout(()=>{
       this.userName = Object.assign({}, Jwtdecoder(localStorage.getItem('token')).unique_name)[1]
    },1000)
  },
  data: () => ({
    userName: undefined,
    drawer: false,
    items: [
      { 
        title: "Home", 
        icon: "dashboard",
         url: "/home"
     },
        {
        title: "Alunos e Professores",
         icon: "people",
         url: "/pessoas"
     },
     {
         title: "Visualizar Turmas",
         icon: "menu_book",
         url: "/turmas"
      },
      {
        title: "Cadastrar Pessoas",
        icon: "fiber_new",
        url: "/cadastropessoas"
      },
      {
        title: "Cadastrar Turmas",
        icon: "fiber_new",
        url: "/cadastroTurmas"
      },
      {
      title: "Sobre Nós",
      icon: "info",
       url: "/sobre" 
       }
    ]
  }),
    methods: {
    ...mapActions({
      fazerLogout: 'logout'
    }),
    ValidaERedireciona(item) {
      if (item.url === this.$route.path)
        this.drawer = !this.drawer;

      else
       this.$router.push(item.url);
    },
    logout() {
       this.fazerLogout().then(this.$router.push('/login'))
    }
  }
};
</script>
