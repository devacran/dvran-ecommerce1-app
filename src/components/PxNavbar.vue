<script lang="ts">
import PxSearchBox from "./PxSearchBox.vue";
import { useWishListStore } from "../stores/wish-list";

const menuLinks = [
  { title: "New Arrivals", link: "" },
  { title: "Clothing", link: "" },
  { title: "Sports", link: "" },
  { title: "The Brand", link: "" },
  { title: "Accesories", link: "" },
  { title: "Sale", link: "" },
];
export default {
  name: "PxNavbar",
  components: { PxSearchBox },
  setup() {
    const wishList = useWishListStore();
    return {
      wishList: wishList.wishList,
    };
  },
  data: () => ({
    menuLinks,
  }),
};
</script>
<template>
  <div>
    <div class="container">
      <ul class="left-side">
        <li v-for="(link, i) in menuLinks" v-bind:key="i">
          {{ link.title }}
        </li>
      </ul>
      <div class="right-side">
        <PxSearchBox />
        <div class="buttons">
          <div class="cart-button">
            <a href="/">
              <img src="../assets/cart.svg" />
            </a>
            <span> </span>
          </div>
          <div class="wish-button">
            <router-link to="/wishlist">
              <img src="../assets/WishIconInactive.png" />
            </router-link>
            <span>{{ wishList.items.length }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.left-side {
  display: none;
}
.right-side {
  display: flex;
  height: 100%;
  justify-content: space-between;
}
.container {
  display: flex;
  height: 2em;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.cart-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3em;
  color: black;
  a {
    height: 100%;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
.wish-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3em;
  color: black;
  a {
    height: 100%;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
.buttons {
  display: flex;
  width: 6em;
}

@media only screen and (min-width: 1024px) {
  .left-side {
    display: flex;
    width: 70%;
    padding: 0 3em;
    justify-content: space-between;
    align-content: center;
    font-size: $font-size-s;
  }
}
</style>
