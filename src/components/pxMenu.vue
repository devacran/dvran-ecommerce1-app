<script lang="ts">
export default {
  name: "pxMenu",
};
</script>

<template>
  <div class="menu">
    <ul>
      <li>
        <div class="title">Wish Lists</div>
      </li>
      <li>Outfits</li>
      <li>Tops</li>
      <li>Bottoms</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 500px;
}
ul {
  text-decoration: none;
  list-style: none;
}
li {
  padding: 1em;
  font-size: 16px;
  border-bottom: 1px solid #cbcbcb;
}
.title {
  font-size: 36px;
  text-align: center;
}
</style>
