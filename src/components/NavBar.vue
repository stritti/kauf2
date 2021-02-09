<template>
  <b-navbar
    type="dark"
    variant="dark"
    toggleable="md"
  >
    <b-container>
      <b-navbar-brand to="/">
        kauf2
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item to="/produkte">
            Produkte
          </b-nav-item>
          <b-nav-item to="/supporter">
            Unterstützer
          </b-nav-item>
          <b-nav-item to="/kontakt">
            Kontakt
          </b-nav-item>
          <b-nav-item to="/impressum">
            Impressum
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar'

}
</script>

<style lang="scss">
  @import '@/assets/scss/custom-vars.scss';
  .navbar-light {
    background-color: $yellow;
  }
</style>
