<template>
  <footer>
    <b-container class="navbar-dark">
      <nav class="navbar-nav">
        <b-row>
          <b-col>
            <router-link
              to="/"
              class="nav-link"
            >
              &copy; {{ year }} - kauf2
            </router-link>
          </b-col>
          <b-col>
            <router-link
              to="/impessum"
              class="nav-link"
            >
              Impressum
            </router-link>
          </b-col>
          <b-col>
            <router-link
              to="/privacy"
              class="nav-link"
            >
              Datenschutz
            </router-link>
          </b-col>
        </b-row>
      </nav>
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
