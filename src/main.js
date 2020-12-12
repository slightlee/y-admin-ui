import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http'
import i18n from './i18n'

Vue.use(ElementUI)
Vue.use(api)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
