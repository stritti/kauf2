<template>
  <b-card
    class="supporter-card"
  >
    <template #header>
      <b-card-img-lazy
        v-if="supporter.Logo"
        :src="supporter.Logo[0].thumbnails.large.url"
        class="supporter-card__logo"
        @click="clickURL"
      />
      <h3
        class="supporter-card__name"
        @click="clickURL"
      >
        {{ supporter.Name }}
      </h3>
    </template>
    <b-card-text
      class="supporter-card__address"
      @click="clickURL"
    >
      <div v-if="supporter.Street">
        {{ supporter.Street }}
      </div>
      <div v-if="supporter.Zip || supporter.City">
        <span v-if="supporter.Zip">{{supporter.Zip}}&nbsp;</span>
        <span v-if="supporter.City">{{ supporter.City }}</span>
      </div>
      <div v-if="supporter.Website">
        <a
          :href="supporter.Website"
          target="_blank"
          rel="noopener noreferrer"
        >{{ supporter.Website }}</a>
      </div>
    </b-card-text>
    <b-card-text>
      <div>
        <a :href="`/supporter/${supporter.id}/poster`" target="_blank">Poster drucken ...</a>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    supporter: {
      type: Object,
      required: true
    }
  },
  methods: {
    clickURL () {
      if (this.supporter.Website) {
        window.location.href = this.supporter.Website
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.supporter-card {
  cursor: pointer;
  font-size: 0.8em;

  &__logo {
    height: 4rem;
    width: auto;
  }
  &__name {
    font-size: 1.5rem;
  }

  .card-img {
    max-width: 120px;
  }
}

.supporter-card:hover {
  box-shadow: 0 0 5px #727272;
  transition: ease-in-out 0.35s;
}
</style>
