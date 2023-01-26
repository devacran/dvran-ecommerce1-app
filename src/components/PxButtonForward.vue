<script lang="ts">
import PxButtonRounded from "./PxButtonRounded.vue";
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";
export default {
  name: "PxButtonForward",
  components: { PxButtonRounded, ArrowRightIcon },
};
</script>

<template>
  <div class="button-fwd">
    <PxButtonRounded>
      <template #icon>
        <ArrowRightIcon />
      </template>
    </PxButtonRounded>
  </div>
</template>

<styles lang="scss" scoped></styles>
