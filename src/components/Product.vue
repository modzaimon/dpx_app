<template lang="">
  <div>
    <div class="container mt-5 mb-5">
    <h1 class="mt-4">All Product</h1>
      <div class="card">
        <div class="row g-0">
          <div class="col-md-6 border-end">
            <div class="d-flex flex-column justify-content-center">
              <div class="main_image">
                <img
                  :src="img_link"
                  id="main_product_image"
                  width="350"
                />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="p-3 right-side">
              <div class="d-flex justify-content-between align-items-center">
                <h3>{{name}}</h3>
                
                <span class="heart"><i class="bx bx-heart"></i></span>
              </div>
              <div class="mt-2 pr-3 content">
                <p><b> SKU </b>: {{sku}}</p>
                <p>{{desc}}</p>
                <p><b>Size</b> : {{size}}</p>
                <p><b>Weight</b> : {{weight}}</p>
              </div>
              <h3><b> ฿</b>{{price}} <small> / price</small></h3>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "sku", "name", "img_link", "desc", "price", "size", "weight"],
};
</script>

<style >
body{background-color: #ecedee}
.card {
  border: none;
  overflow: hidden;
}
.main_image {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  height: 400px;
  width: 100%;
  overflow: hidden;
}
.content p {
  font-size: 12px;
}
.right-side {
  position: relative;
}
</style>
