<template>
  <b-container class="contact mt-5">
    <h1>Kontakt</h1>
    <contact-form />
  </b-container>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import ContactForm from '@/components/contact/ContactForm.vue'

useHead({ title: 'Kontakt' })
</script>
