<script lang="ts">
export default {
  name: "PxOnlyMobile",
};
</script>

<template>
  <div class="only-mobile">
    <slot />
  </div>
</template>

<styles lang="scss" scoped>
.only-mobile {
  @include media-query(tablet) {
    display: none;
  }
}
</styles>
