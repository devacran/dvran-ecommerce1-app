<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
:root {
  --space-1: 1rem;
  --space-2: 2rem;
  --space-3: 3rem;
  --space-4: 4rem;
  --space-5: 4rem;
  --space-6: 4rem;
}

html {
  font-size: 62.5%;
  font-family: $font-primary;
}

body {
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

h1,
h2,
h3,
h4 {
  margin: 0;
}

h1 {
  color: $color-black;
  font-family: $font-primary;
  font-size: $font-size-xl;
  font-weight: 300;
  line-height: 1.5;
}

h2 {
  color: $color-black;
  font-family: $font-primary;
  font-size: $font-size-m;
  font-weight: 300;
  line-height: 1.5;
}

h3 {
  color: $color-black;
  font-family: $font-primary;
  font-size: $font-size-l;
  font-weight: 300;
  line-height: 1.5;

  &.h3--primary {
    color: $color-primary;
  }
}

h4 {
  color: $color-primary;
  font-family: $font-primary;
  font-size: $font-size-m;
  font-weight: 300;
  line-height: 1.5;

  &.h4--dark {
    color: $color-black;
  }
}

h5 {
  color: $color-black;
  font-family: $font-secondary;
  font-size: $font-size-m;
  font-weight: 300;
  line-height: 1.5;
}

p {
  font-family: $font-secondary;
  font-size: $font-size-s;
  line-height: 1.5;
  margin: 0;

  &.p--light {
    color: $color-white;
  }
}
</style>
