<template>
  <footer>
    <b-container>
      <b-row>
        <b-col>&copy; {{ year }} - kauf2</b-col>
        <b-col>Impressum</b-col>
        <b-col>Kontakt</b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }

}
</script>

<style lang="scss">
  @import '@/assets/scss/custom-vars.scss';
  footer {
    color: $light;
    background-color: $dark;
    min-height: 60px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>
