<script setup>
  import ProductsList from "../components/ProductsList.vue"
</script>

<template>
  <div class="container">
    <div class="row">
      <h1 class="mt-4">All Product</h1>
      <ProductsList v-for="product in products" v-bind="product" />
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      products:[]
    }
  },created(){
    fetch('http://127.0.0.1:8000/api/product')
    .then(res => res.json())
    .then((result) => {
      this.products = result.data
    })
  }
  
}
</script>

