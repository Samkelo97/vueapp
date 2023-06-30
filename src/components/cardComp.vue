<template >
  <router-link class="col-12 col-lg-4 col-md-4 col-sm-6 my-5" id="card" :to="{ names: 'Product', params:{ id:product.id } }">
    <img :src="product.image_url" :alt="product.title" />
    <div class="body">
    <h3>
      {{ product.title }}
    </h3>
    <p>{{ product.desc }}</p>
    <p>Price: R {{ product.price }}</p>
    <button class="add">add to cart</button>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style scoped>
img{
  width: 300px;
}
#card{

  box-shadow: 1px 1px 2px black;
  width: 300px;
  margin: auto;
  text-decoration: none;
}
#card:hover{
  transform: scale(1.1);
  box-shadow: 1px 1px 2px blue;
}
.add{
  background-color: black;
  color: white;
}
.add:hover{
  background-color: white;
  color: black;
  box-shadow: 1px 2px 1px blue;
}

.body{

 box-shadow: 1px 1px 2px 1px black;
  width: 100%;
  color: black;
  text-align: center;
}

</style>p
