<template>
  <div class="product">
    <router-link
      :to="'/product/'+info.id" class="product-main">
      <img v-lazy="info.image">
      <h4>{{info.name}}</h4>
      <div class="product-color"
           :style="{background: colors[info.color]}"></div>
      <div class="product-cost">￥ {{info.cost}}</div>
      <div class="product-add-cart"
           @click.prevent="handleCart">加入购物车
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'product',
  props: {
    info: Object
  },
  data () {
    return {
      colors: {
        白色: '#ffffff',
        金色: '#dac272',
        蓝色: '#233472',
        红色: '#f2352e'
      }
    }
  },
  methods: {
    handleCart () {
      this.$store.commit('addCart', this.info.id)
    }
  }
}
</script>

<style scoped lang="less">
  @prefix-cls:"product";
  .@{prefix-cls} {
    width: 25%;
    float: left;
    &-main{
      position: relative;
      display: block;
      margin: 16px;
      padding: 16px;
      border: 1px solid #dddee1;
      border-radius: 6px;
      overflow: hidden;
      background: #ffffff;
      text-align: center;
      & img{
        width: 100%;
      }
    }
    & h4{
      color: #222222;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &:hover h4{
      color: #0070c9;
    }
    &-color{
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid #dddee1;
      border-radius: 50%;
      margin: 6px auto;
    }
    &-cost{
      color: #de4037;
      margin-top: 6px;
    }
    &-add-cart{
      position: absolute;
      display: none;
      padding: 4px 8px;
      background: #2d8cf0;
      color: #ffffff;
      font-size: 12px;
      border-radius: 3px;
      cursor: pointer;
      top: 5px;
      right: 5px;
    }
    &:hover .@{prefix-cls}{
      display: inline-block;
    }
  }
  /*.product {
    width: 25%;
    float: left;
  }

  .product-main {
    position: relative;
    display: block;
    margin: 16px;
    padding: 16px;
    border: 1px solid #dddee1;
    border-radius: 6px;
    overflow: hidden;
    background: #ffffff;
    text-align: center;
  }

  .product-main img{
    width: 100%;
  }

  h4{
    color: #222222;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .product-main:hover h4{
    color: #0070c9;
  }

  .product-color{
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #dddee1;
    border-radius: 50%;
    margin: 6px auto;
  }

  .product-cost{
    color: #de4037;
    margin-top: 6px;
  }

  .product-add-cart{
    position: absolute;
    display: none;
    padding: 4px 8px;
    background: #2d8cf0;
    color: #ffffff;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    top: 5px;
    right: 5px;
  }

  .product-main:hover .product-add-cart{
    display: inline-block;
  }*/
</style>
