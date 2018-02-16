<template>
  <div id="app">
    <div class="header">
      <router-link to="/list" class="header-title">电商网站示例</router-link>
      <div class="header-menu">
        <router-link to="/cart" class="header-menu-cart">购物车<span v-if="cartList.length">{{cartList.length}}</span>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    cartList () {
      return this.$store.state.cartList
    }
  }
}
</script>

<style>
</style>
