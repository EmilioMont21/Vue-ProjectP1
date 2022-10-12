import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './views/Home'
import Login from './views/Login'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(
  {
    state: {
      authenticated: false
    },
    mutations: {
      setAuthentication(state, status){
        state.authenticated = status;
      }
    }
  }
)

const router = new VueRouter({
  routes: [
      {
          path: '/',
          redirect: {
              name: "login"
          }
      },
      {
          path: "/login",
          name: "login",
          component: Login
      },
      {
          path: "/home",
          name: "home",
          component: Home,
          beforeEnter: (to, from, next) => {
              if(store.state.authenticated == false) {
                  next("/login");
              } else {
                  next();
              }
          }
      }
  ]
});

new Vue({
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app')