<template>
  <v-app>
    <v-content>
      <AppBar />
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" sm="8" lg="4" md="6" xs="2">
            <v-carousel
              hide-delimiters
              cycle
              hide-delimiter-background
              show-arrows-on-hover
              height="100%"
            >
              <v-carousel-item v-for="(item, i) in items" :key="i">
                <v-card class="mx-auto">
                  <v-list-item>
                    <!-- <v-list-item-avatar color="blue"></v-list-item-avatar> -->
                    <v-list-item-content>
                      <v-list-item-title class="headline">{{
                        item.nome
                      }}</v-list-item-title>
                      <v-list-item-subtitle>{{
                        item.tipo
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-img
                    height="194"
                    src="../assets/Rafa.jpg"
                    alt="img"
                    width="100%"
                  ></v-img>
                  <!-- <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
                    height="194"
                  ></v-img> -->

                  <v-card-text
                    >Nesse projeto ajudei a implementar o visual do das Turmas e
                    da Página Inicial.</v-card-text
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon :src="item.link" link>
                      <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </v-btn>
                    <v-spacer></v-spacer>

                    <v-btn icon>
                      <font-awesome-icon :icon="['fab', 'github']" />
                    </v-btn>
                    <v-spacer></v-spacer>
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
          tipo: "Desenvolvedor Full Stack",
          src: "/assets/Rafa.jpg",
          link: "google.com",
          git: ""
        },
        {
          nome: "Guilherme",
          tipo: "Desenvolvedor Full Stack",
          src: "/assets/Gui.jpg",
          link: "google.com",
          git: ""
        },
        {
          nome: "André",
          tipo: "Desenvolvedor Back-end",
          src: "/assets/Andre.jpg",
          link: "google.com",
          git: ""
        },
        {
          nome: "Matheus",
          tipo: "Desenvolvedor Black-Tropend",
          src: "/assets/matheus.jpg",
          link: "google.com",
          git: ""
        }
      ]
    };
  }
};
</script>
