<template>
  <v-app>
    <v-content>
      <AppBar />
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" sm="8" lg="4" md="6" xs="2">
            <v-carousel hide-delimiters="false">
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
              >
                <v-card max-width="344" class="mx-auto">
                  <v-list-item>
                    <!-- <v-list-item-avatar color="blue"></v-list-item-avatar> -->
                    <v-list-item-content>
                      <v-list-item-title class="headline">{{item.nome}}</v-list-item-title>
                      <v-list-item-subtitle>{{item.tipo}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

                  <v-card-text>Nesse projeto ajudei a implementar o visual do das Turmas e da Página Inicial.</v-card-text>

                  <v-card-actions>
                   <v-btn>
                   <font-awesome-icon :icon="['fab', 'faLinkedin']" />
                   </v-btn>

                    <v-btn>
                   <font-awesome-icon :icon="['fab', 'facebook-f']" />
                    </v-btn>
             
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-btn icon>Facebook</v-btn>
                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>
<script>
import AppBar from "..//components/AppBar";
import Footer from "..//components/Footer";
export default {
  components: {
    AppBar,
    Footer
  },
  data() {
    return {
      items: [
        {
          nome: "Rafael",
          tipo: "Desenvolvedor Full Stack"
        },
        {
          nome: "Guilherme",
          tipo: "Desenvolvedor Full Stack"
        },
        {
          nome: "André",
          tipo: "Desenvolvedor Back-end"
        },
        {
          nome: "Matheus",
          tipo: "Desenvolvedor Black-Tropend"
        }
      ],
      icons: [
        "fab fa-facebook",
        "fab fa-github",
        "fab fa-twitter",
        "fab fa-linkedin",
        "fab fa-instagram"
      ]
    };
  }
};
</script>