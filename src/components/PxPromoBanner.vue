<script lang="ts">
export default {
  name: "PxPromoBanner",
};
</script>

<template>
  <div class="banner">FREE DELIVERY ON ALL ORDERS OVER $99</div>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #9caf85;
  font-size: $font-size-s;
  color: white;
}
</style>
