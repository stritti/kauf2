<template>
  <div class="supporter mt-5">
    <h1>Unterstützer</h1>
    <p>
      Organisationen, Vereine und Firmen, welche die Aktion
      <strong>kauf2</strong> unterstützen.
    </p>
    <p>
      Du möchtest dein Team auch hier aufgelistet sehen?
      <b-button
        to="supporter/request"
        class="my-3"
        variant="primary"
        size="sm"
      >
        Jetzt registrieren &hellip;
      </b-button>
    </p>
    <list />
  </div>
</template>

<script>
import List from '@/components/supporter/List.vue'

export default {
  name: 'Supporter',
  components: { List }
}
</script>
