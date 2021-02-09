<template>
  <footer>
    <b-container>
      <b-row>
        <b-col>kauf2</b-col>
        <b-col>Impressum</b-col>
        <b-col>Kontakt</b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar'

}
</script>

<style lang="scss">
  @import '@/assets/scss/custom-vars.scss';
  footer {
    color: $light;
    background-color: $dark;
  }
</style>
