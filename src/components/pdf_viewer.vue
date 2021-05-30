<template>
  <div id="app">
    <vue-pdf-app id="pdf_display_height" pdf="https://d1.islamhouse.com/data/en/ih_books/single2/en_jesus_the_Messiah.pdf"></vue-pdf-app>
  </div>
</template>

<script>
import VuePdfApp from "vue-pdf-app";
// import this to use default icons for buttons
import "vue-pdf-app/dist/icons/main.css";

export default {
  name: 'pdf_viewer',

  components: {
    VuePdfApp
  },

  props: ['file_content_pdf'],

  data(){
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#pdf_display_height {
  height: 100vh;
}
</style>
