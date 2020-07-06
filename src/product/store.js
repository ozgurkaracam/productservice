import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from '../store/mutations'
import * as actions from '../store/actions'
import * as getters from '../store/getters'


const state={
    products:[]
}

const getterss={
    getProducts(state){
        return state.products;

    },
    getProduct(state){
        return state;

    }
}

const mutationss={
    updateProductList(state,product){
        state.products.push(product);
    }
}

const actionss={
    initApp({commit}){
        return commit;
    },
    saveProduct({ commit }, product){
            return commit,product;
    },
    sellProduct({commit},product){
            return commit,product;
    }
}

const productmodule= {
    state,
    mutations:mutationss,
    actions:actionss,
    getters : getterss
}

Vue.use(Vuex);
export const store=new Vuex.Store({
    state:{
        purchase: 0.0,
        sale: 0.0,
        balance: 0.0
    },
    mutations,
    actions,
    getters,
    modules:{
        productmodule
    }
});