<template>
  <b-card
    class="supporter-card"
    :title="supporter.Name"
    @click="clickURL"
  >
    <img
      v-if="supporter.Logo"
      :src="supporter.Logo[0].url"
    >
    <b-card-text>
      <span v-if="supporter.Street">{{ supporter.Street }}</span><br>
      <span
        v-if="supporter.Zip"
        v-text="supporter.Zip"
      />
      &nbsp;
      <span v-if="supporter.City">{{ supporter.City }}</span><br>
      <a
        v-if="supporter.Website"
        :href="supporter.Website"
      >{{ supporter.Website }}</a>
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

<style>
img {
  height: 60px;
  margin-left: 2rem;
}

.supporter-card {
  cursor: pointer;
  color: #727272;
  font-size: 0.8em;
  margin-top: 10px;
}

.supporter-card:hover {
  box-shadow: 0 0 5px #727272;
  transition: ease-in-out 0.35s;
}

a {
  color: rgb(67, 67, 189);
}

</style>
