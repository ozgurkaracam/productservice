<template>
    <div class="container">
        <div class="row">
            <div class="col-6 offset-3 pt-3 card mt-5 shadow">
                <div class="card-body">
                    <h3>Ürün Çıkışı</h3>
                    <hr>
                    <div class="form-group">
                        <label>Ürün Adı</label>
                        <select class="form-control" @change="selectProduct($event)">
                            <option value=""></option>
                            <option v-for="product in getProducts" :key="product.key" :value="product.key" >{{product.title}}</option>

                        </select>
                    </div>
                    <div class="card mb-2 border border-danger" v-if="selectedProduct!=null">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-12 text-center">
                                    <div class="mb-3">
                                        <span class="badge badge-info">Stok : {{selectedProduct.count}}</span>
                                        <span class="badge badge-primary">Fiyat : {{selectedProduct.price | currency}}</span>
                                    </div>
                                    <p class="border border-warning p-2 text-secondary">{{ selectedProduct.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Adet</label>
                        <input type="number" class="form-control" placeholder="Ürün adetini giriniz.." v-model="sellCount">
                    </div>
                    <hr>
                    <button class="btn btn-primary" @click="sellProduct">Kaydet</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default{
        computed:{
            ...mapGetters(['getProducts'])
        },
        data(){
            return{
                selectedProduct:null,
                sellCount:0
            }
        },
        methods:{
            selectProduct(event){
                // TODO 1 selected product işlemini getter ile yapacaksın.
                this.selectedProduct=this.getProducts.filter(v=>v.key==event.target.value)[0];
            },
            sellProduct(){
                // this.$store.dispatch('sellProduct',{
                //     product:this.selectedProduct,
                //     sellCount:this.sellCount
                // });
                // TODO 2 firebase puth patch problem.
            }
        }

    }
</script>
<style scoped>
    .border-danger {
        border-style: dashed !important;
    }
</style>