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
                    <v-list-item-content>
                      <v-list-item-title class="headline">
                        {{
                        item.nome
                        }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{
                        item.tipo
                        }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-img height="600" :src="item.src" class="circle" width="100%"></v-img>
                  <v-card-text>{{item.frase}}</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon :href="item.link" target="_blank">
                      <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon :href="item.git" target="_blank">
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
          nome: "Rafael Vieira ",
          tipo: "Desenvolvedor Full-Stack",
          src: require("../assets/Rafa.jpg"),
          link: "https://www.linkedin.com/in/rafael-vieira-9a991616b/",
          git: "https://github.com/DrFaelSan",
          frase:
            " Tente mover o mundo – o primeiro passo será mover a si mesmo.  -Platão"
        },
        {
          nome: "Guilherme Reis",
          tipo: "Desenvolvedor Full-Stack",
          src: require("../assets/Gui.jpg"),
          link: "https://www.linkedin.com/in/guilherme-dos-reis-3976798a/",
          git: "https://github.com/guibolt",
          frase:
            "Quando vires um homem bom, tenta imitá-lo; quando vires um homem mau, examina-te a ti mesmo. -Confúncio"
        },
        {
          nome: "André Victor",
          tipo: "Desenvolvedor Back-End",
          src: require("../assets/andre.jpg"),
          link:
            "https://www.linkedin.com/in/andr%C3%A9-victor-de-souza-elias-147b9b170/",
          git: "https://github.com/AndreNew1",
          frase:
            "A alegria que se tem em pensar e aprender faz-nos pensar e aprender ainda mais. -Aristóteles"
        },
        {
          nome: "Matheus Santana",
          tipo: "Desenvolvedor Mobile",
          src: require("../assets/matheus.jpg"),
          link: "https://www.linkedin.com/in/matheus-brito-670643146/",
          git: "https://github.com/MatheusSantana397",
          frase:
            "Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta. -Albert Einstein"
        }
      ]
    };
  }
};
</script>
<style scoped>
.circle {
  border-radius: 50%;
  background-color: grey;
}
</style>