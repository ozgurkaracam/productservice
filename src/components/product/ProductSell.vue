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
                            <option v-for="product in getProducts" :key="product.key" :value="product.key" >{{product.title}}</option>
                        </select>
                    </div>
                    <div class="card mb-2 border border-danger">
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
                        <input type="text" class="form-control" placeholder="Ürün adetini giriniz..">
                    </div>
                    <hr>
                    <button class="btn btn-primary">Kaydet</button>
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
                selectedProduct:{
                    count:0,
                    title:'',
                    price:0,
                    description:''
                }
            }
        },
        methods:{
            selectProduct(event){
                // TODO 1 selected product işlemini getter ile yapacaksın.
                this.selectedProduct=this.getProducts.filter(v=>v.key==event.target.value)[0];
            }
        }
    }
</script>
<style scoped>
    .border-danger {
        border-style: dashed !important;
    }
</style>