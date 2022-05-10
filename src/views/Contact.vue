<template>
  <b-container class="contact mt-5">
    <h1>Kontakt</h1>
    <contact-form />
  </b-container>
</template>

<script>

import ContactForm from '@/components/contact/ContactForm.vue'

export default {
  components: { ContactForm },
  metaInfo: {
    title: 'Kontakt'
  }
}
</script>
