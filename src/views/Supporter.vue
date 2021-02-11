<template>
  <div class="about">
    <h1>Unterstützer</h1>
    <p>
      Organisationen, Vereine und Firmen, welche die Aktion
      <strong>kauf2</strong> unterstützen:
    </p>
    <supporter-list />
  </div>
</template>

<script>
import SupporterList from '@/components/SupporterList.vue'

export default {
  name: 'Supporter',
  components: { SupporterList }
}
</script>
