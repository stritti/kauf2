<template>
  <b-card-group columns>
    <supporter-item
      v-for="supporter in supporterList"
      :key="supporter.id"
      :supporter="supporter"
    />
  </b-card-group>
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

</style>
