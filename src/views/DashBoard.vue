 <template>
  <v-app>
    <AppBar />
    <h1 class="text-center">Sistema Escolar</h1>
    <v-container>
      <div>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title>Turma</v-card-title>

                <div class="title text-center pb-3">Quantidade de Turmas</div>

                <v-card-text>
                  <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Fusce fermentum odio nec arcu. Aenean ut eros et nisl sagittis vestibulum. Nunc interdum lacus sit amet orci. Phasellus nec sem in justo pellentesque facilisis.</p>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card>
                <v-card-title>Professor</v-card-title>

                <div class="title text-center pb-3">Quantidade de Professores</div>

                <v-card-text>
                  <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Fusce fermentum odio nec arcu. Aenean ut eros et nisl sagittis vestibulum. Nunc interdum lacus sit amet orci. Phasellus nec sem in justo pellentesque facilisis.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" md="6">
              <v-card>
                <v-card-title>Aluno</v-card-title>

                <div class="title text-center pb-3">Quantidade de Alunos</div>

                <v-card-text>
                  <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Fusce fermentum odio nec arcu. Aenean ut eros et nisl sagittis vestibulum. Nunc interdum lacus sit amet orci. Phasellus nec sem in justo pellentesque facilisis.</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title>Coordenador</v-card-title>

                <div class="title text-center pb-3">Quantidade de Coordenadores</div>

                <v-card-text>
                  <p>Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Fusce fermentum odio nec arcu. Aenean ut eros et nisl sagittis vestibulum. Nunc interdum lacus sit amet orci. Phasellus nec sem in justo pellentesque facilisis.</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar.vue";
export default {
  components: {
    AppBar
  }
};
</script>
<style scoped>
h2 {
  size: 30px;
}
</style>
