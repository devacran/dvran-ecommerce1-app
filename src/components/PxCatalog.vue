<script setup lang="ts">
import { ProductsService } from "@/api";
import type { Product } from "@/api/index.types";
import ProductCard from "@/components/PxProductCard.vue";
import { ref } from "vue";

const products = ref<Product[]>([]);
const productsService = new ProductsService();
productsService.getProducts().then((data) => {
  products.value = data;
});
</script>

<script lang="ts">
export default {
  name: "PxCatalog",
};
</script>

<template>
  <div>
    <div class="container">
      <nav>
        <div>New Arrival</div>
        <div>Special</div>
        <div>Featured</div>
      </nav>
      <div class="grid">
        <ProductCard
          v-for="(product, i) in products"
          :product="product"
          :key="i"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
nav {
  display: flex;
  height: 2em;
  align-items: center;
  margin-bottom: 20px;
  font-size: $font-size-s;
  div {
    margin: 0 2em;
  }
}
.container {
  padding-top: var(--space-4);
  padding-bottom: var(--space-2);
  background-color: #dcdcdc;
  border: 1px solid transparent;
}
.grid {
  width: calc(100% - 2rem);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  background-color: #dcdcdc;
}
@media only screen and (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media only screen and (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
