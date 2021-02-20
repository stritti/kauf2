<template>
  <li
    class="product-item"
    v-text="product.Name"
  />
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
