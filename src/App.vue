<template>
  <v-app >
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App'
  ,
  created(){
    if(localStorage.getItem('token'))
    this.$router.push('/home')
  }
}
</script>
