 <template>
  <v-footer color="primary" padless>
    <v-row justify="center" no-gutters>
      <v-menu top :offset-x="offset">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Equipe - 1</v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title color="primary">{{ item.title }}</v-list-item-title>
            <v-list-item-icon>
              <v-icon>computer</v-icon>
            </v-list-item-icon>
            <v-divider></v-divider>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-col class="primary lighten-1 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>Desenvolvido por Equipe 1</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    name: "Footer",
    items: [
      { title: "Rafael" },
      { title: "Guilherme" },
      { title: "André" },
      { title: "Matheus" }
    ],
    offset: true
  }),
  methods: {}
};
</script>