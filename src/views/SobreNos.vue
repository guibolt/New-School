<template>
  <v-app id="inspire">
    <v-content>
      <AppBar/>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="12" sm="8" lg="4" md="6" xs="2">
            <v-toolbar color="primary" dark>
              <v-toolbar-title 
                >Sobre Nós</v-toolbar-title
              >
            </v-toolbar>
            <v-card class="elevation-12">

              <v-card-text>
                Somos pessoas Movidas por codigo
              </v-card-text>
              <img src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1 " width="200" height="200">
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      
    </v-content>
  </v-app>
</template>


<script>
import AppBar from '..//components/AppBar'
export default {
  components:{
    AppBar
  }

}
</script>

<style>

</style>