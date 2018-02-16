<template>
  <div v-if="product">
    <div class="product">
      <div class="product-image">
        <img v-lazy="product.image" :alt="product.name">
      </div>
      <div class="product-info">
        <h1 class="product-name">{{product.name}}</h1>
        <div class="product-cost">￥ {{product.cost}}</div>
        <div class="product-add-cart"
             @click="handleAddToCart">加入购物车
        </div>
      </div>
    </div>
    <div class="product-desc">
      <h2>产品介绍</h2>
      <img v-for="n in 10"
           v-lazy="`http://ordfm6aah.bkt.clouddn.com/shop/${n}.jpeg`"
           :key="n">
    </div>
  </div>
</template>

<script>
// 导入本地模拟数据用于匹配具体 Id 的商品，真实场景并不需要
import ProductData from '../datas/product'

export default {
  name: 'product',
  data () {
    return {
      // 获取路由中的参数
      id: parseInt(this.$route.params.id),
      product: null
    }
  },
  methods: {
    getProduct () {
      // 真实环境使用 ajax 获取，这里使用异步模拟
      setTimeout(() => {
        this.product = ProductData.find(item => item.id === this.id)
      }, 500)
    },
    handleAddToCart () {
      this.$store.commit('addCart', this.id)
    }
  },
  mounted () {
    // 初始化时，请求数据
    this.getProduct()
  }
}
</script>

<style scoped>
  .product {
    margin: 32px;
    padding: 32px;
    background: #ffffff;
    border: 1px solid #dddee1;
    border-radius: 10px;
    overflow: hidden;
  }

  .product-image{
    width: 50%;
    height: 550px;
    float: left;
    text-align: center;
  }

  .product-image img{
    height: 100%;
  }

  .product-info{
    width: 50%;
    padding: 150px 0 250px;
    height: 150px;
    float: left;
    text-align: center;
  }

  .product-cost{
    color: #f2352e;
    margin: 8px 0;
  }

  .product-add-cart{
    display: inline-block;
    padding: 8px 64px;
    margin: 32px;
    border: 1px solid #dddee1;
    border-radius: 10px;
    text-align: center;
  }

  .product-desc img{
    display: block;
    width: 50%;
    margin: 32px auto;
    padding: 32px;
    border-bottom: 1px solid #dddee1  ;
  }
</style>
