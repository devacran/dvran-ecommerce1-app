<script lang="ts">
const mockedProductList = [
  {
    id: "d9611b16-5ac9-421d-950d-03ee545e549e",
    name: "Axis axis",
    price: "Jurkiewicz",
    description: "Spotted deer",
    gender: "Female",
    available: true,
    img: "https://img.ltwebstatic.com/images3_pi/2020/07/10/159435771787a4efbdcaa9809916d732dd4967cb83_thumbnail_405x552.webp",
  },
  {
    id: "97d0bc09-19ea-4164-a065-71ad286303d2",
    name: "Eolophus roseicapillus",
    price: "Kirman",
    description: "Cockatoo, red-breasted",
    gender: "Female",
    available: false,
    img: "https://img.ltwebstatic.com/images3_pi/2020/06/30/1593504155d4274feec77ef9e7ac44fa93f51361e4_thumbnail_405x552.webp",
  },
  {
    id: "498132b7-c9db-4566-a339-4c7763be10bf",
    name: "Cordylus giganteus",
    price: "Whitlock",
    description: "Sungazer, yellow-brown",
    gender: "Male",
    available: false,
    img: "https://img.ltwebstatic.com/images3_pi/2020/07/10/159435771787a4efbdcaa9809916d732dd4967cb83_thumbnail_405x552.webp",
  },
  {
    id: "54f1ea2f-709e-492b-a3d5-3cff0d144be2",
    name: "Haliaetus vocifer",
    price: "Bindin",
    description: "Eagle, african fish",
    gender: "Female",
    available: true,
    img: "https://img.ltwebstatic.com/images3_pi/2020/07/07/159411467818f6b9b85a86810caab3b7fedb3010b1_thumbnail_405x552.webp",
  },
  {
    id: "bd950a51-f848-444a-ac29-0288ff80b48f",
    name: "Varanus komodensis",
    price: "Brassill",
    description: "Dragon, komodo",
    gender: "Female",
    available: true,
    img: "https://img.ltwebstatic.com/images3_pi/2020/07/10/159435771787a4efbdcaa9809916d732dd4967cb83_thumbnail_405x552.webp",
  },
  {
    id: "36d266e2-7d03-4b29-9b66-949d5e63bf89",
    name: "Tayassu tajacu",
    price: "Dargie",
    description: "Collared peccary",
    gender: "Female",
    available: true,
    img: "https://img.ltwebstatic.com/images3_pi/2020/07/21/1595311643f004f7f94fcffc760aa895f96ac90110_thumbnail_405x552.webp",
  },
];
import ProductCard from "./ProductCard.vue";
export default {
  name: "PxCatalog",
  components: { ProductCard },
  computed: {
    productList() {
      return mockedProductList;
    },
  },
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
          :product="product"
          v-for="(product, i) in productList"
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
  div {
    margin: 0 2em;
  }
}
.container {
  width: 100%;
  padding-top: 30px;
  background-color: #dcdcdc;
}
.grid {
  width: 100%;
  height: 700px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  background-color: #dcdcdc;
}
</style>
