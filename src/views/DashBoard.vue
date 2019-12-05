 <template>
  <v-app>
    <AppBar />
    <h1 class="text-center">Sistema Escolar</h1>
    <v-container>
      <div>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-card max-width="344" class="mx-auto" elevation="5" shaped>
                <v-card-title color="primary">Turma</v-card-title>

                <div class="title text-center pb-3">Quantidade de Turmas</div>

                <v-card-text>
                  <p>1</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" md="6">
              <v-card max-width="344" class="mx-auto" elevation="5" shaped>
                <v-card-title color="primary">Professor</v-card-title>

                <div class="title text-center pb-3">Quantidade de Professores</div>

                <v-card-text>
                  <p>2</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" md="6">
              <v-card max-width="344" class="mx-auto" elevation="5" shaped>
                <v-card-title color="primary">Aluno</v-card-title>

                <div class="title text-center pb-3">Quantidade de Alunos</div>

                <v-card-text>
                  <p>3</p>
                </v-card-text>
              </v-card>
            </v-col>

            <v-spacer></v-spacer>
            <v-col cols="12" md="6">
              <v-card max-width="344" class="mx-auto" elevation="5" shaped>
                <v-card-title color="teal">Coordenador</v-card-title>

                <div class="title text-center pb-3">Quantidade de Coordenadores</div>

                <v-card-text>
                  <p>4</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
    <v-spacer></v-spacer>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    AppBar,
    Footer
  }
};
</script>
<style scoped>
h2 {
  size: 30px;
}
</style>
