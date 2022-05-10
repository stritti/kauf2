<template>
  <div>
    <b-card-text
      v-if="productList"
    >
      <list-item
        v-for="product in productList"
        :key="product.id"
        :product="product"
      />
    </b-card-text>
    <div
      v-else
      class="d-flex align-items-center loading"
    >
      <b-spinner /> Lade Daten &hellip;
    </div>
  </div>
</template>

<script>
import productService from '@/services/product.service'
import ListItem from './ListItem.vue'
export default {
  name: 'List',
  components: { ListItem },
  props: {
    categoryId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      productList: null
    }
  },
  mounted () {
    productService.getList(this.categoryId)
      .then(result => {
        this.productList = result
      })
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/custom-vars.scss';
.loading {
  min-height: 200px;
  .spinner-border {
    margin-right: 0.5rem;
  }
}
</style>
