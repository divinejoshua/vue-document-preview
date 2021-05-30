<template>
  <div id="app">
    <h2 style="text-decoration: underline;">File/Document viewer in Vue</h2>
    <div class="pdf_display">
      <h3>For PDF:</h3>
      <pdf_viewer :file_content_pdf="file_value_pdf"></pdf_viewer>
      <div style="margin-top: 10px;">
        <input type="text" placeholder="provide pdf url..." ref="pdf_comp" id="file_value">
        <button id="pdf_btn" @click="previewFile_pdf">submit file</button>
      </div>
    </div>
    <hr style="margin-top: 20px;">
    <div>
      <h3>For Excel:</h3>
      <excel_viewer></excel_viewer>
    </div>
    <hr style="margin-top: 20px;">
    <div>
      <h3>For Images:</h3><excel_viewer></excel_viewer>
    </div>





 <hr style="margin-top: 100px;">
    <div>
      <h3>For word:</h3>
    <VueDocPreview value="https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc" type="office" />

 <hr style="margin-top: 100px;">

      <h3>For excel:</h3>
    <VueDocPreview value="https://dornsife.usc.edu/assets/sites/298/docs/ir211wk12sample.xls" type="office" />

 <hr style="margin-top: 100px;">

      <h3>For presentation:</h3>
    <VueDocPreview value="https://acdbio.com/sites/default/files/sample.ppt" type="office" />


 <hr style="margin-top: 100px;">
      <h3>For text:</h3>
    <VueDocPreview value="readTextFil" type="text" />
    </div>

  </div>
</template>

<script>
import pdf_viewer from './components/pdf_viewer.vue'
import excel_viewer from './components/excel_viewer.vue'
import VueDocPreview from 'vue-doc-preview'

export default {
  name: 'App',

  components: { pdf_viewer, excel_viewer, VueDocPreview },

  data(){
    return {
      file_value_pdf: ''
    }
  },

  methods: {
    previewFile_pdf(){
      this.file_value_pdf = this.$refs.pdf_comp.value
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

#file_value {
  padding: 6px;
}

#pdf_btn {
  padding: 6px;
}
</style>
