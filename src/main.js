import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes} from "./route";
import Vuex from 'vuex';
import store from './product/store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueResource);

Vue.filter('currency',(value)=>{
    return value+' TL';
});


const router=new VueRouter({
    'mode':'history',
    routes,
    VueResource
}

);


new Vue({
  render: h => h(App),
  router,
    store
}).$mount('#app')
