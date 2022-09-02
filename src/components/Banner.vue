<script lang="ts">
export default {
  name: "PxBanner",
};
</script>
<template>
  <div class="container">
    <img src="../assets/banner.jpg" />
  </div>
</template>
<style scoped>
.container {
  height: 400px;
  margin-bottom: 20px;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
