<template>
  <div class="supporter-request mt-5">
    <h1>Unterstützer werden</h1>
    <p>
      Ja, wir beteiligen uns als Team an der Aktion <strong>kauf2</strong>!
    </p>
    <create-form />
  </div>
</template>

<script>
import CreateForm from '@/components/supporter/CreateForm.vue'

export default {

  components: { CreateForm },
  metaInfo: {
    title: 'Anfrage Unterstützer-Teams'
  }
}
</script>

<style>

</style>
