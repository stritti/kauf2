<template>
  <b-container class="supporter-request mt-5">
    <h1>Unterstützer werden</h1>
    <p>
      Ja, wir beteiligen uns als Team an der Aktion <strong>kauf2</strong>!
    </p>
    <create-form />
  </b-container>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import CreateForm from '@/components/supporter/CreateForm.vue'

useHead({ title: 'Anfrage Unterstützer-Teams' })
</script>


