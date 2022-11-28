<script lang="ts">
import PxNavbar from "./Navbar.vue";
export default {
  name: "PxHeader",
  components: { PxNavbar },
};
</script>
<template>
  <div>
    <h1>
      <a href="/">Natstore</a>
    </h1>
    <PxNavbar />
    <div class="banner">FREE DELIVERY ON ALL ORDERS OVER $99</div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #9caf85;
  font-size: $font-size-s;
  color: white;
}
</style>
