<script lang="ts">
export default {
  name: "PxOnlyTablet",
};
</script>

<template>
  <div class="only-tablet">
    <slot />
  </div>
</template>

<styles lang="scss" scoped>
.only-mobile {
  display: none;
  @include media-query(tablet) {
    display: block;
  }
}
</styles>
