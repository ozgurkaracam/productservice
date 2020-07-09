<template>
    <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">
    <span class="navbar-text mr-auto">
        <strong>vuejsegitim.com</strong> | gkandemir
    </span>
        <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Alış Tutarı : </strong>
        <span class="badge badge-danger">{{ $store.state.purchase | currency}}</span>
    </span>
        <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
        <strong>Satış Tutarı : </strong>
        <span class="badge badge-success">{{ $store.state.sale | currency }}</span>
    </span>
        <span class="navbar-text navbar-nav my-2 my-lg-0">
        <strong>Bakiye : </strong>
        <span class="badge badge-primary">{{ $store.state.balance | currency }}</span>
    </span>
    </nav>
</template>
<script>

    export default {
        data(){
            return{
                purchase:0
            }
        },
        created() {
            this.$store.dispatch('getTradeResult')
        }
    }
</script>