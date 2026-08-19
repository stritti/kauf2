<template>
  <b-navbar
    variant="dark"
    toggleable="md"
    data-bs-theme="dark"
  >
    <b-container class="d-flex">
      <b-navbar-brand to="/">
        <b-img
          class="logo"
          src="/img/kauf_2.png"
          height="30"
        />
      </b-navbar-brand>

      <b-navbar-toggle
        target="nav-collapse"
        class="ms-auto"
      />

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav class="ms-auto">
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



<style lang="scss">
  .logo {
    transform: rotate(-5deg);
  }

  // Fix navbar toggler icon visibility on dark navbar
  .navbar .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='3' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    width: 1.5em;
    height: 1.5em;
  }

  .navbar .navbar-toggler {
    border-color: rgba(255, 255, 255, 0.5);
    border-width: 2px;
    padding: 0.5rem 0.75rem;
  }

  // Ensure the toggler is visible and properly positioned
  .navbar-toggler {
    position: relative;
    z-index: 1;
  }
</style>
