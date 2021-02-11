<template>
  <div>
    <b-card-group
      v-if="supporterList"
      columns
    >
      <supporter-item
        v-for="supporter in supporterList"
        :key="supporter.id"
        :supporter="supporter"
      />
    </b-card-group>
    <div
      v-else
      class="d-flex align-items-center loading"
    >
      <b-spinner /> Lade Daten &hellip;
    </div>
  </div>
</template>

<script>
import supporterService from '@/services/supporter.service'
import SupporterItem from './SupporterItem.vue'
export default {
  name: 'SupporterList',
  components: { SupporterItem },
  data () {
    return {
      supporterList: null
    }
  },
  created () {
    supporterService.getList()
      .then(result => {
        this.supporterList = result
      })
  }

}
</script>

<style lang="scss" scoped>
.loading {
  min-height: 200px;
  .spinner-border {
    margin-right: 0.5rem;
  }
}
</style>
