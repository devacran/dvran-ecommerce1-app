<script setup lang="ts">
import PxLayout from "@/components/PxLayout.vue";
import PxBanner from "@/components/PxBanner.vue";
import PxFavoritesSection from "@/components/PxFavoritesSection.vue";
</script>

<template>
  <main>
    <PxLayout>
      <template #content>
        <PxBanner></PxBanner>
        <PxFavoritesSection />
      </template>
    </PxLayout>
  </main>
</template>
