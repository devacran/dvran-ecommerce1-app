<script lang="ts">
export default {
  name: "ProductCard",
  props: ["product", "styleType"],
  methods: {
    handleClick() {
      // this.$store.commit("setWishItem", this.product);
    },
  },
  computed: {
    isFav() {
      return false;
      // return this.product.isFavorite;
    },
    containerClass() {
      return `
      width: 100%;
      height: 100%;
      border: 1px solid transparent;
      ${this.styleType !== "wish" ? "background-color: white" : ""}
      `;
    },
    imgContainerClass() {
      return `
        position: relative;
        margin: 10px;
        ${
          this.styleType === "wish"
            ? "margin: 0px; width: 100%; height: 100%;"
            : ""
        }
        `;
    },
  },
};
</script>
<template>
  <div :style="containerClass">
    <div :style="imgContainerClass">
      <div v-if="styleType !== 'wish'" class="wish-button">
        <a v-on:click="handleClick">
          <img v-if="!isFav" src="../assets/WishIconInactive.png" />
        </a>
        <a v-on:click="handleClick"
          ><img v-if="isFav" src="../assets/WishIconActive.png"
        /></a>
      </div>
      <img
        class="product-img"
        src="https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?k=20&m=483960103&s=612x612&w=0&h=H4TNt5SOmcNIRMqrKY7J5u2Yy-f0ZZbD_Dsqqw3if1I="
      />
    </div>
  </div>
</template>
<style scoped lang="scss">
.wish-button {
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 30px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
