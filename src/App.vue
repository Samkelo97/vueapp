<template>
  <navbarComp />
  <router-view />
  <footerComp/>
</template>

<script>
import navbarComp from "@/components/navbar.vue";
import footerComp from '@/components/footer.vue';
export default {
  components: { navbarComp,footerComp},
};
</script>
<style>
   #app {
    overflow-x: hidden;
   }
</style>
