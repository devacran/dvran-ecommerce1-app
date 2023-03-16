<script lang="ts">
import PxButtonRounded from "./PxButtonRounded.vue";
import ArrowRightIcon from "./icons/ArrowRightIcon.vue";
export default {
  name: "PxButtonBackward",
  components: { PxButtonRounded, ArrowRightIcon },
};
</script>

<template>
  <div class="button-fwd">
    <PxButtonRounded>
      <template #icon>
        <div class="icon-container">
          <ArrowRightIcon />
        </div>
      </template>
    </PxButtonRounded>
  </div>
</template>

<styles lang="scss" scoped>
.icon-container {
  transform: rotate(180deg);
}
</styles>
