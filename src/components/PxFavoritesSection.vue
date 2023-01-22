<script lang="ts">
export default {
  name: "PxFavoritesSection",
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
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  background-color: rgba(255, 0, 0, 0.217);
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
