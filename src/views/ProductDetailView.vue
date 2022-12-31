<script setup>
import Product from '../components/Product.vue'
</script>

<template>
  <main>
    <Product v-bind="product" />
  </main>
</template>

<script>

export default {
  props : ["id"] ,
  data() {
    return {
      product:{}
    }
  },created(){
    fetch('http://127.0.0.1:8000/api/product/'+this.id)
    .then(res => res.json())
    .then((result) => {
      this.product = result.data
      console.log();
    })
  }
  
}

</script>
