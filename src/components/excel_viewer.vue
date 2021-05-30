<template>
  <div id="app">
    <input @change="chooseFile" type="file"/>

    <excel-viewer
      ref="excelViewer"
      :height="300"
      :first-row-num="firstRowNum"
      :min-col-counts="5"
      @on-reach-top="reachTop"
      @on-reach-bottom="reachBottom"
      @on-row-select="onRowSelect"
      @on-col-select="onColSelect"
      @on-cell-select="onCellSelect"
      @on-before-open="beforeOpen"
      @on-after-open="afterOpen"
    />
  </div>
</template>

<script>

export default {
  name: 'excel_viewer',

  data(){
    return {
      firstRowNum: 2
    }
  },

  methods: {
    chooseFile(e){
      console.info("excel file select", e);
      //open excel file
      let url = "file:///C:/Users/Fade/Downloads/sampledatainsurance/sampledatainsurance.xlsx"
      const reader = new FileReader();
      url = reader.readAsDataURL(url);
      this.$refs.excelViewer.openExcelFile(url);
      // e.target.files[0]
    },

    beforeOpen() {//on before open
      console.info("excel before open");
      
    },

    afterOpen() {//on after open
      console.info("excel after open");
      // this.$refs.excelViewer.setRowBackgroundColor(5,'red');
    },

    onRowSelect(rowNum, selectRowValues) {//on row select
      console.info("row select", rowNum, selectRowValues);
      //set row background-color
      // this.$refs.excelViewer.setSelectedBackgroundColor('red');
    },

    onColSelect(colNum) {//on column select
      console.info("col select", colNum);
    },

    onCellSelect(rowNum, colNum, value) {//on cell select
      //set backgroundColor 
      // this.$refs.excelViewer.setCellBackgroundColor(rowNum, colNum, 'red');
      //freeze at cell
      this.$refs.excelViewer.freezeCellAt(rowNum, colNum);
      if (value) {
        console.info("cell select", rowNum, colNum, value);
      } else {
        console.info("cell select， value empty", rowNum, colNum);
      }
    },

    reachTop() {//on reach top
      console.info("touch top");
    },

    reachBottom() {//on reach bottom
      console.info("touch bottom");
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
