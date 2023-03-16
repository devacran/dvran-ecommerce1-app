<script lang="ts">
import SearchIcon from "./Icons/SearchIcon.vue";
import CartIcon from "./Icons/CartIcon.vue";
import BurgerIcon from "./Icons/BurgerIcon.vue";
import BrandLogo from "./Icons/BrandLogo.vue";
import PxPromoBanner from "./PxPromoBanner.vue";
export default {
  name: "PxHeader",
  components: { PxPromoBanner, SearchIcon, CartIcon, BurgerIcon, BrandLogo },
};
</script>

<template>
  <div class="container">
    <PxPromoBanner />
    <nav>
      <div class="left">
        <BurgerIcon class="burger-btn" />
        <div class="left-buttons">
          <a>MEN</a>
          <a>WOMEN</a>
          <a>KIDS</a>
          <a>SALE</a>
          <a>NEW ARRIVALS</a>
        </div>
      </div>
      <div class="brand-logo">
        <BrandLogo />
      </div>
      <div class="right">
        <div class="right-buttons">
          <a>SUSTAINABILITY</a>
          <a>RETURNS</a>
          <a>STORES</a>
        </div>
        <div class="">
          <SearchIcon />
        </div>
        <div class="">
          <CartIcon />
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
nav {
  display: grid;
  grid-template-columns: auto 1fr auto;
  height: 60px;
  align-items: center;
  padding: 0 $base-padding;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: $font-secondary;
  background-color: white;
}
.burger-btn {
  @include media-query("tablet") {
    display: none;
  }
}
.left-buttons {
  display: none;
  @include media-query("tablet") {
    display: flex;
    gap: 10px;
  }
}
.right-buttons {
  display: none;
  @include media-query("tablet") {
    display: flex;
    gap: 10px;
  }
}
.brand-logo {
  place-self: center;
  width: 100px;
}
.right {
  display: flex;
  gap: 10px;
  align-items: center;
}
.left {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
