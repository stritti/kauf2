<template>
  <b-container class="products mt-5">
    <h1>Produkte</h1>
    <h2>Was sollen wir sammeln? Was wird benötigt?</h2>
    <b-row>
      <b-col cols="8">
        <p>
          Die Tafel in deinem Ort wird vermutlich durch Lebensmittelläden,
          Bäcker, Metzger usw. regelmäßig mit Produkten beliefert.
        </p>
        <p>
          Dabei ist jedoch festzustellen, dass gerade <strong>haltbare Produkte</strong>
          nicht auf der Liste sind. Das lange Mindeshaltbarkeitsdatum (MHD)
          ermöglicht einen langfristigen Verkauf.
        </p>
        <p>
          Um jedoch den Menschen, die auf die Tafel angewiesen sind, auch die
          Möglichkeit zu geben haltbare Produkte zu erwerben, möchten wir mit
          der <strong>Aktion Kauf2</strong> genau diese Produkte sammeln.
        </p>
        <p>
          Im Folgenden einige Anregungen:
        </p>
      </b-col>
      <b-col>
        <b-img
          src="/img/dosen.png"
          fluid
        />
      </b-col>
    </b-row>

    <b-card-group columns>
      <b-card
        v-for="category in productCategoryList"
        :key="category.id"
      >
        <template #header>
          <h4 v-text="category.Name" />
        </template>
        <product-list :category-id="category.CategoryId" />
      </b-card>
    </b-card-group>
  </b-container>
</template>
<script>
import ProductList from '@/components/product/ProductList.vue'
import productCategoryService from '@/services/productCategory.service'

export default {
  name: 'Products',
  components: { ProductList },
  data () {
    return {
      productCategoryList: []
    }
  },
  metaInfo: {
    title: 'Übersicht von Produkten'
  },
  mounted () {
    productCategoryService.getList()
      .then(result => {
        this.productCategoryList = result
      })
  }
}
</script>
