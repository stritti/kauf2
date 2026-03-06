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
          src="/img/kauf_2.png"
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

  // Fix navbar toggler icon visibility on dark navbar
  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.85%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  .navbar-dark .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.3);
  }
</style>
