<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PxCard",
});
</script>

<template>
  <div class="card-container">
    <div class="card-image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="card-content">
      <div class="card-title" v-if="$slots.title">
        <slot name="title"></slot>
      </div>
      <div class="card-body" v-if="$slots.body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-container {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
}
.card-title {
  font-size: $font-size-s;
  font-weight: 700;
  margin-bottom: $space-1;
}
.card-content {
  padding: $space-1;
}
.card-image {
  img {
    width: 100%;
    height: 100%;
    background-color: white;
  }
}
</style>
