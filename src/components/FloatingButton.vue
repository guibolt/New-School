<template>
  <v-speed-dial fixed bottom right direction="top" transition="slide-y-reverse-transition">
    <template v-slot:activator>
      <v-btn color="primary" fab title="Novo Cadastro" @click="$router.push(url)">
        <v-icon>add</v-icon>
      </v-btn>
    </template>
  </v-speed-dial>
</template>

<script>
export default {
  name: "AppFloatingButton",
  props:{
    url: String
  }
};
</script>
