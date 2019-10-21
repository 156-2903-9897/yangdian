// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import Swiper from 'swiper'; 
import  './css/reset.css'

import moment from 'moment'

import '../node_modules/swiper/css/swiper.min.css'
import Swiper from 'swiper'
import qs from 'qs'

Vue.prototype.$http=axios

Vue.config.productionTip = false

/* eslint-disable no-new */
import store from './store/index'
new Vue({
  el: '#app',
  router,
  store,
  // Swiper,
  components: { App },
  template: '<App/>'
})
