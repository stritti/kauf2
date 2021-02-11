<template>
  <b-card
    class="supporter-card"
    @click="clickURL"
  >
    <template #header>
      <b-card-img-lazy
        v-if="supporter.Logo"
        :src="supporter.Logo[0].url"
      />
      <h4 v-text="supporter.Name" />
    </template>
    <b-card-text>
      <div v-if="supporter.Street">
        {{ supporter.Street }}
      </div>
      <div v-if="supporter.Zip || supporter.City">
        <span
          v-if="supporter.Zip"
          v-text="supporter.Zip"
        />
        &nbsp;
        <span v-if="supporter.City">{{ supporter.City }}</span>
      </div>
      <div v-if="supporter.Website">
        <a
          :href="supporter.Website"
        >{{ supporter.Website }}</a>
      </div>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'SupporterItem',
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
  color: #727272;
  font-size: 0.8em;
  margin-top: 10px;

  .card-img {
    max-width: 120px;
  }
}

.supporter-card:hover {
  box-shadow: 0 0 5px #727272;
  transition: ease-in-out 0.35s;
}

a {
  color: rgb(67, 67, 189);
}

</style>
