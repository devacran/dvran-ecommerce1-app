<script lang="ts">
import PxCard from "../PxCard.vue";
import PxCarousel from "../PxCarousel.vue";
import PxOnlyMobile from "../PxOnlyMobile.vue";
export default {
  name: "PxFavoritesSection",
  components: {
    PxCarousel,
    PxOnlyMobile,
    PxCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Wool Runner",
          description: "The most comfortable shoe ever",
          img: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600,b_rgb:f5f5f5/cms/2wH3NpaR7C6czfRsOR922S/20d0195f922dd947e7f87df515cf5102/Wool_Runner-Men.jpg",
        },
        {
          id: 3,
          title: "Wool Runner 2",
          description: "The most comfortable shoe ever",
          img: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600,b_rgb:f5f5f5/cms/2wH3NpaR7C6czfRsOR922S/20d0195f922dd947e7f87df515cf5102/Wool_Runner-Men.jpg",
        },
        {
          id: 2,
          title: "Wool Runner 3",
          description: "The most comfortable shoe ever",
          img: "https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_600,b_rgb:f5f5f5/cms/2wH3NpaR7C6czfRsOR922S/20d0195f922dd947e7f87df515cf5102/Wool_Runner-Men.jpg",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <h2>Our Favorites</h2>
    <div class="tabs-container">
      <ul>
        <li>FOR EVERY DAY</li>
        <li>FOR THE RAIN</li>
        <li>FOR RUNNING</li>
      </ul>
    </div>
    <PxOnlyMobile>
      <PxCarousel>
        <template name="cards">
          <PxCard v-for="product in products" :key="product.id">
            <template #image>
              <img :src="product.img" :alt="product.title" />
            </template>
            <template #title>
              <div>{{ product.title }}</div>
            </template>
            <template #body>
              <div>{{ product.description }}</div>
            </template>
          </PxCard>
        </template>
      </PxCarousel>
    </PxOnlyMobile>
    <PxOnlyTablet>
      <div class="cards-container">
        <div class="card" v-for="product in products" :key="product.id">
          <PxCard>
            <template #image>
              <img :src="product.img" :alt="product.title" />
            </template>
            <template #title>
              <div>{{ product.title }}</div>
            </template>
            <template #body>
              <div>{{ product.description }}</div>
            </template>
          </PxCard>
        </div>
      </div>
    </PxOnlyTablet>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-bottom: $space-2;
  @include media-query("laptop") {
    @include max-width;
  }
}
h2 {
  text-align: center;
  margin: $space-2;
}
.tabs-container {
  border-block-end: 3px solid grey;
  overflow: scroll;
  width: 100%;
  margin-bottom: $space-2;
  ul {
    display: flex;
    justify-content: space-around;
    width: 1000px;
    li {
      white-space: nowrap;
      letter-spacing: 2px;
      font-size: $font-size-xs;
      font-weight: 700;
      color: grey;
      cursor: pointer;
      @include media-query("tablet") {
        font-size: $font-size-s;
      }
    }
  }
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: $space-2;
  padding: $space-2;
}
</style>
