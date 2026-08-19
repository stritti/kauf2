<template>
  <li
    class="product-item"
    v-text="product.Name"
  />
</template>

<script setup lang="ts">
import type { Product, WithId } from '@/types/models'

defineProps<{ product: WithId<Product> }>()
</script>


