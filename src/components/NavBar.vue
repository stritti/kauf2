<template>
  <b-navbar
    type="dark"
    variant="dark"
    toggleable="md"
  >
    <b-container>
      <b-navbar-brand to="/">
        <b-img
          class="logo"
          src="@/assets/kauf_2.png"
          height="30"
        />
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
          <b-nav-item to="/about">
            Über
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
  .logo {
    transform: rotate(-5deg);
  }
</style>
