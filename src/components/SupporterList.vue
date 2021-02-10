<template>
  <b-card-group columns>
    <b-card
      v-for="supporter in supporterList"
      :key="supporter.id"
    >
      {{ supporter.Name }}
      <img
        v-if="supporter.Logo"
        :src="supporter.Logo[0].url"
      >
    </b-card>
  </b-card-group>
</template>

<script>
import supporterService from '@/services/supporter.service'
export default {
  name: 'SupporterList',
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
