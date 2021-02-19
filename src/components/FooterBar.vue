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
              &copy; {{ year }} Kauf2
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
    <cookie-law
      theme="blood-orange"
      button-text="OK"
    >
      <div slot="message">
        Wir verwenden Cookies, um unsere Website zu verbessern.
        Informationen zum <router-link to="/privacy">
          Datenschutz
        </router-link>.
      </div>
    </cookie-law>
  </footer>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
  name: 'FooterBar',
  components: { CookieLaw },
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
