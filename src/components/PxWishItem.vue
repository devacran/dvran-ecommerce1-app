<script lang="ts">
import ProductCard from "./PxProductCard.vue";
export default {
  name: "WishItem",
  components: { ProductCard },
  props: ["product"],
  methods: {
    handleClick() {
      // this.$store.commit("setWishItem", this.product);
    },
  },
};
</script>
<template>
  <div class="container">
    <ProductCard styleType="wish" :product="product" />
    <div class="description">
      <div class="title">
        {{ product.name }}
      </div>
      <div v-on:click="handleClick" class="delete">
        Eliminar de mi lista [ - ]
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid black;
}
.description {
  position: relative;
  display: flex;
  padding-left: 20px;
  align-items: center;
  width: -webkit-fill-available;
  height: 300px;
}
.title {
  font-size: 30px;
  text-transform: uppercase;
}
.delete {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 200px;
  height: 30px;
  cursor: pointer;
}
</style>
