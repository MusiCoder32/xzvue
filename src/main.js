import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import qs from 'qs'

Vue.prototype.qs = qs
axios.defaults.withCredentials = true
Vue.use(vueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//  * main.js?vue&type=script&lang=js& in ./src/App.vue
// Failed to load http://localhost:3000/users/signin: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. Origin 'http://localhost:8080' is therefore not allowed access. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.
// Webstorm-9f05ec93=86aa6396-aab6-4d00-9b96-7f55fb41ebf4
// Webstorm-9f05ec93=86aa6396-aab6-4d00-9b96-7f55fb41ebf4
