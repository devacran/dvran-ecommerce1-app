<script lang="ts">
import { defineComponent } from "vue";
import { useWishListStore } from "../stores/wish-list";
export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
    styleType: {
      type: String,
    },
  },
  setup(props) {
    const wishList = useWishListStore();
    const isFavorite = wishList.list.find(
      (item) => item.id === props.product.id
    );
    return {
      handleClick() {
        wishList.addItem(props.product);
      },
      isFav: isFavorite,
    };
  },

  computed: {
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
});
</script>

<template>
  <div :style="containerClass">
    <div :style="imgContainerClass">
      <div v-if="styleType !== 'wish'" class="wish-button">
        <a v-on:click="handleClick">
          <img
            v-if="!product.isFavorite"
            src="../assets/WishIconInactive.png"
          />
        </a>
        <a v-on:click="handleClick"
          ><img v-if="product.isFavorite" src="../assets/WishIconActive.png"
        /></a>
      </div>
      <img class="product-img" :src="product.image" />
      <slot></slot>
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
