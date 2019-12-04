 <template>
  <v-flex>
    <AppBar/>
    <ListTurma />
    <AppFloatingButton
    url="/cadastroturmas"
    />
  </v-flex>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import ListTurma from "../components/TurmasList.vue";
import AppFloatingButton from '../components/FloatingButton.vue'
export default {
  components: {
    AppBar,  
    ListTurma,
    AppFloatingButton
  }
};
</script>
