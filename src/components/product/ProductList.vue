<template>
  <div>
    <ul
      v-if="productList"
      class="product-list"
    >
      <list-item
        v-for="product in productList"
        :key="product.id"
        :product="product"
      />
    </ul>
    <div
      v-else
      class="d-flex align-items-center loading"
    >
      <b-spinner /> Lade Daten &hellip;
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAirtableList } from '@/composables/useAirtableList'
import { productService } from '@/services/product.service'
import ListItem from './ListItem.vue'
import type { Product, WithId } from '@/types/models'

const props = defineProps<{ categoryId: number }>()

const { list: productList } = useAirtableList<WithId<Product>>(
  () => productService.getList(props.categoryId),
  'Fehler beim Laden der Produkt-Daten'
)
</script>

<style lang="scss">
@import '@/assets/scss/custom-vars.scss';
.product-list {
  margin-bottom: 0;
  padding-left: 1.5rem;
}
.loading {
  min-height: 200px;
  .spinner-border {
    margin-right: 0.5rem;
  }
}
</style>
