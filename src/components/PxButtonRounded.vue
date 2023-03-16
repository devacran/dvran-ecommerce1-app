<script lang="ts">
export default {
  name: "PxButtonRounded",
};
</script>

<template>
  <button class="button">
    <slot name="icon"></slot>
  </button>
</template>

<styles lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid $color-white-dark;
  background-color: $color-white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: $color-white-light;
    border: 1px solid $color-black-light;
  }
  &:active {
    background-color: $color-white-dark;
  }
}
</styles>
