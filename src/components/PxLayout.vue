<script lang="ts">
import PxHeader from "./PxHeader.vue";
export default {
  name: "PxLayout",
  components: {
    PxHeader,
  },
};
</script>

<template>
  <div class="container">
    <PxHeader />
    <slot name="content" />
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
