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

<script>
import supporterService from '@/services/supporter.service'
import ListItem from './ListItem.vue'
export default {
  name: 'List',
  components: { ListItem },
  props: {
    randomNumber: {
      type: Number,
      required: false,
      default: null
    }
  },
  data () {
    return {
      supporterList: null
    }
  },
  created () {
    supporterService.getList()
      .then(result => {
        if (this.randomNumber) {
          this.supporterList = this.getRandom(result, this.randomNumber)
        } else {
          this.supporterList = result
        }
      })
  },
  methods: {
    getRandom (arr, n) {
      const result = new Array(n)
      let len = arr.length
      const taken = new Array(len)
      if (n > len) { throw new RangeError('getRandom: more elements taken than available') }
      while (n--) {
        const x = Math.floor(Math.random() * len)
        result[n] = arr[x in taken ? taken[x] : x]
        taken[x] = --len in taken ? taken[len] : len
      }
      return result
    }
  }
}
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
