<script lang="ts">
export default {
  name: "PxCarousel",
  data() {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currentIndex: 0,
      columnGap: 10 /*$space-1*/,
    };
  },
  computed: {
    currentCardIdx() {
      return this.currentIndex;
    },
    cardContainerStyle() {
      return {
        transform: `
translateX(calc(-${this.currentCardIdx * 100}% - ${
          this.currentCardIdx * this.columnGap
        }px))
        `,
      };
    },
  },
  methods: {
    next() {
      if (this.currentIndex === this.cards.length - 1) return;
      this.currentIndex++;
    },
    prev() {
      if (this.currentIndex === 0) return;
      this.currentIndex--;
    },
  },
};
</script>

<template>
  <div class="carousel-container">
    <div class="controls">
      <button class="control" @click="prev">back</button>
      <button class="control" @click="next">forward</button>
    </div>
    <div class="cards-container" :style="cardContainerStyle">
      <div class="card" :key="i" v-for="(card, i) in cards">hola {{ i }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.controls {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 $space-1;
}
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0 $space-2;
  background-color: rgba(255, 0, 0, 0.217);
  @include media-query("laptop") {
    @include max-width;
  }
}

.cards-container {
  display: flex;
  width: 100%;
  height: 100%;
  gap: $space-1;
  transition: transform 0.3s ease-in-out;
}
.card {
  background-color: aqua;
  width: 100%;
  height: 100px;
  flex-shrink: 0;
}
</style>
