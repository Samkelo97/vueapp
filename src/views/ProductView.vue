<template>
  <div v-if="product" class="product-deatils">
    <img :src="product.image_url" :alt="product.title" />

    <div>
      <h2>{{ product.title }}</h2>
      <p>Description:{{ product.desc }}</p>
      <p>Rating:{{ product.rating }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  created() {
    this.$store.dispatch("getProduct", this.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
};
</script>
