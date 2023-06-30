<template>
  <div v-if="products" class="row justify-content-center mx-5" >
    <cardComp
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </div>
  <div v-else>Loading..</div>
</template>
<script>
import cardComp from "@/components/cardComp.vue";
export default {
  created() {
    this.$store.dispatch("getproducts");
    // console.log(this.products);
  },
  computed: {
    products() {
      return this.$store.state.products;
      
    },
  },
  components: { cardComp },
};
</script>

