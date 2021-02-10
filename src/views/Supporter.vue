<template>
  <div class="about">
    <h1>Unterstützer</h1>
    <p>Organisationen, Vereine und Firmen, die diese Aktion unterstützen.</p>
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
