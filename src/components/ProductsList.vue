<template lang="">
    <div class="col-3 mb-4">
      <div class="card " :id="id">
        <img :src="img_link" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
            <p class="card-text">
                <b>sku</b> : {{sku}}<br>
                <b>Proce</b> : {{price}}
            </p>
            <router-link class="btn btn-primary" :to="{
                name: 'product',
                params: { id: id }
            }">Go Detail</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ["id","sku", "name", "img_link", "desc","price","size","weight"],
};
</script>

<style lang=""></style>
