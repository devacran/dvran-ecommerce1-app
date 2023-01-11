<script lang="ts">
export default {
  name: "PxMenu",
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
  display: none;
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

@media only screen and (min-width: 1024px) {
  .menu {
    width: 100%;
    height: 500px;
    display: block;
  }
}
</style>
