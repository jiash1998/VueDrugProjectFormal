import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";//axios
import VueAxios from "vue-axios";//axios
import Blob from "../src/excel/Blob.js";//导出excel
import Export2Excel from "../src/excel/Export2Excel.js";//导出excel
//  npm install --save script-loader!vendor/Blob
// import Echarts from 'echarts';

Vue.use(ElementUI);
// Vue.use(Echarts);
Vue.use(VueAxios,axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
