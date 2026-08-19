<template>
  <div>
    <b-card-group
      v-if="supporterList"
      columns
    >
      <list-item
        v-for="supporter in supporterList"
        :key="supporter.id"
        :supporter="supporter"
      />
      <b-card
        v-if="!randomNumber"
        class="supporter-card request"
      >
        <template #header>
          <h4>Dein Team?</h4>
        </template>
        <b-card-text>
          Du möchtest dein Team auch hier aufgelistet sehen?
          <br>
          <b-button
            to="supporter/request"
            class="my-3"
            variant="primary"
          >
            Jetzt registrieren &hellip;
          </b-button>
        </b-card-text>
      </b-card>
    </b-card-group>
    <div
      v-else
      class="d-flex align-items-center loading"
    >
      <b-spinner /> Lade Daten &hellip;
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAirtableList } from '@/composables/useAirtableList'
import { supporterService } from '@/services/supporter.service'
import { getRandom } from '@/utils/random'
import ListItem from './ListItem.vue'
import type { Supporter, WithId } from '@/types/models'

const props = defineProps<{ randomNumber?: number | null }>()

const { list: supporterList } = useAirtableList<WithId<Supporter>>(
  async () => {
    const result = await supporterService.getList()
    return props.randomNumber ? getRandom(result, props.randomNumber) : result
  },
  'Fehler beim Laden der Unterstützer-Daten'
)
</script>

<style lang="scss">
@import '@/assets/scss/custom-vars.scss';
.loading {
  min-height: 200px;
  .spinner-border {
    margin-right: 0.5rem;
  }
}
.request {
  .card-body {
    background-color: $yellow;
  }
}
.staggered-transition {
    transition: all .5s ease;
    opacity: 1;
}
.staggered-enter, .staggered-leave {
    opacity: 0;
}
</style>
