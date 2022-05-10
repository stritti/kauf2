<template>
  <footer>
    <b-container class="navbar-dark d-print-none pb-5">
      <nav class="navbar-nav">
        <b-row>
          <b-col
            cols="4"
            md="4"
            sm="12"
          >
            <router-link
              to="/"
              class="nav-link"
            >
              &copy; 2015 - {{ year }} Aktion kauf2
            </router-link>
          </b-col>
          <b-col
            cols="4"
            md="4"
            sm="12"
          >
            <router-link
              to="/supporter"
              class="nav-link"
            >
              Unterstützer
            </router-link>
            <router-link
              to="/supporter/request"
              class="nav-link"
            >
              Mitmachen: Team anmelden
            </router-link>

            <router-link
              to="/produkte"
              class="nav-link"
            >
              Produktliste
            </router-link>
          </b-col>
          <b-col
            cols="4"
            md="4"
            sm="12"
          >
            <router-link
              to="/kontakt"
              class="nav-link"
            >
              Kontakt
            </router-link>
            <router-link
              to="/impessum"
              class="nav-link"
            >
              Impressum
            </router-link>
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
    <b-container class="footer-bar d-none d-print-block">
      &copy; 2015 - {{ year }} Aktion kauf2: {{ currentUrl }}
    </b-container>
    <cookie-law
      theme="blood-orange"
      button-text="OK"
      class="d-print-none"
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
  data () {
    return {
      currentUrl: '',
      year: null
    }
  },
  created () {
    this.currentUrl = window.location.href
    this.year = new Date().getFullYear()
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
