<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },

  created() {
    return this.$store.dispatch('initApp');

  },
}
</script>

<style>
</style>
