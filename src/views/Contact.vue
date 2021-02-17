<template>
  <div class="contact mt-5">
    <h1>Kontakt</h1>
    <p>Kommt bald ...</p>
    <b-button @click="addSupporter">
      Add
    </b-button>
  </div>
</template>

<script>
import supporterService from '@/services/supporter.service'

export default {

  methods: {
    addSupporter () {
      supporterService.save({
        Name: 'Test'
      })
    }
  }
}
</script>
