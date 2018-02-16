import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import './css/style.css'

const debug = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = debug
Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
