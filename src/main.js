import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes} from "./route";
import Vuex from 'vuex';
import store from './product/store'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);


const router=new VueRouter({
    'mode':'history',
    routes
}

);


new Vue({
  render: h => h(App),
  router,
    store
}).$mount('#app')
