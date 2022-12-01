<script setup lang="ts">
import PxLayout from "@/components/Layout.vue";
import PxBanner from "@/components/Banner.vue";
import PxCatalog from "@/components/Catalog.vue";
</script>

<template>
  <main>
    <PxLayout>
      <template #content>
        <PxBanner></PxBanner>
        <PxCatalog></PxCatalog>
      </template>
    </PxLayout>
  </main>
</template>
