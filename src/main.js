import Vue from 'vue'
import App from './App.vue'
import VueExcelViewer from '@uublue/vue-excel-viewer'
import '@uublue/vue-excel-viewer/lib/vue-excel-viewer.css'

Vue.config.productionTip = false

Vue.use(VueExcelViewer)

new Vue({
  render: h => h(App),
}).$mount('#app')
