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
    getProduct(state,product){
        return state.products.filter(v=>v.key==product.key);
    }
}

const mutationss={
    updateProductList(state,product){
        state.products.push(product);
    }
}

const actionss={
    initApp({commit}){
        // state.products=[];
        Vue.http.get('https://productservice-88ba6.firebaseio.com/products.json')
            .then(res=>{
                    for(let key in res.body){
                        res.body[key].key=key;
                        commit('updateProductList',res.body[key]);
                    }
            });
    },
    saveProduct({ dispatch,commit }, product){
            Vue.http.post('https://productservice-88ba6.firebaseio.com/products.json',product)
                .then((response)=> {
                    product.key=response.body.name;
                    console.log(product);
                })
                .catch((err)=>console.log(err));
            commit('updateProductList',product);
            let tradeResult={
                purchase:product.price,
                sale:0,
                count:product.count
            }
            dispatch('setTradeResult',tradeResult);

    },
    sellProduct({commit},product){
            return commit,product;
    },
    deleteProduct(){

    }
}

const productmodule= {
    state,
    mutations:mutationss,
    actions:actionss,
    getters : getterss
}

Vue.use(Vuex);
export default new Vuex.Store({
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