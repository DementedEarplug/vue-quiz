import Vue from 'vue'
import BootsterapVue from 'bootstrap-vue'

// bs css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import App from './App.vue'

Vue.use(BootsterapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
