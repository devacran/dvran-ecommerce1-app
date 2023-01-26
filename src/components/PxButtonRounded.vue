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
  background-color: $color-primary;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: $color-black;
  }
  &:active {
    background-color: $color-black;
  }
}
</styles>
