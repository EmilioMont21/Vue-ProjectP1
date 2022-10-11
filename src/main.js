import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
//Vue.use(Vuex);

// const store = new Vuex.Store(
//   {
//     state: {
//       authenticated: false
//     },
//     mutations: {
//       setAuthentication(state, status){
//         state.authenticated = status;
//       }
//     }
//   }
// )

new Vue({
  router,
  render: h => h(App),
  //store: store
}).$mount('#app')