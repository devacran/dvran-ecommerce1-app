<script lang="ts">
import PxNavbar from "./Navbar.vue";
export default {
  name: "PxHeader",
  components: { PxNavbar },
};
</script>
<template>
  <div>
    <div>
      <a href="/"><h1>Natstore</h1></a>
    </div>
    <PxNavbar />
    <div class="banner">FREE DELIVERY ON ALL ORDERS OVER $99</div>
  </div>
</template>
<style lang="scss" scoped>
title {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 40px;
    color: black;
    text-transform: uppercase;
  }
}
.banner {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: #9caf85;
  font-size: 18px;
  color: white;
}
</style>
