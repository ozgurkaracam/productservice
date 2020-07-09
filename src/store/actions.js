import Vue from 'vue';
export const setTradeResult=({state,commit},tradeResult)=>{
    commit('updateTradeResult',tradeResult);
    Vue.http.put('https://productservice-88ba6.firebaseio.com/trade-result.json',{
        purchase:state.purchase,
        sale:state.sale
    })
        .then(response=>{
            console.log(response)
        });

}
export const getTradeResult=({state})=>{
    Vue.http.get('https://productservice-88ba6.firebaseio.com/trade-result.json').then(res=>{
        state.purchase=res.body.purchase;
        state.sale=res.body.sale;
    });
}