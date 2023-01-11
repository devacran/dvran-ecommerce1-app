<script setup lang="ts">
import Layout from "@/components/PxLayout.vue";
import WishList from "@/components/PxWishList.vue";
</script>

<template>
  <Layout>
    <div class="container">
      <WishList />
    </div>
  </Layout>
</template>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns: 1fr;
}
@media only screen and (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 20px;
  }
}
</style>
