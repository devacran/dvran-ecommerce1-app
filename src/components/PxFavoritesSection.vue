<script lang="ts">
import PxCarousel from "./PxCarousel.vue";
export default {
  name: "PxFavoritesSection",
  components: {
    PxCarousel,
  },
};
</script>

<template>
  <div class="container">
    <h2>Our Favorites</h2>
    <div class="tabs-container">
      <ul>
        <li>FOR EVERY DAY</li>
        <li>FOR THE RAIN</li>
        <li>FOR RUNNING</li>
      </ul>
    </div>
    <PxCarousel data="[{id: 1}]" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-bottom: $space-2;
  @include media-query("laptop") {
    @include max-width;
  }
}
h2 {
  text-align: center;
  margin: $space-2;
}
.tabs-container {
  border-block-end: 3px solid grey;
  overflow: scroll;
  width: 100%;
  margin-bottom: $space-2;
  ul {
    display: flex;
    justify-content: space-around;
    width: 1000px;
    li {
      white-space: nowrap;
      letter-spacing: 2px;
      font-size: $font-size-xs;
      font-weight: 700;
      color: grey;
      cursor: pointer;
      @include media-query("tablet") {
        font-size: $font-size-s;
      }
    }
  }
}
</style>
