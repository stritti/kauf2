<template>
  <div class="home">
    <b-jumbotron>
      <b-container>
        <b-row>
          <b-col md="6">
            <b-img
              class="logo"
              src="/img/kauf_2.png"
              fluid
            />
            <h3>kauf2 - Aktion zur Unterstützung des Tafelladens in deiner Nähe</h3>
          </b-col>
          <b-col>
            <div class="description mt-5">
              <p>Du kaufst ein Produkt? </p>
              <p>Dann kaufe jetzt <span class="red">zwei</span>:</p>
              <p>Eines für <span class="red">dich</span></p>
              <p>&amp;</p>
              <p>Eines für <span class="red">die Tafel</span>!</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>

    <b-container>
      <section class="my-5">
        <b-row>
          <b-col md="6">
            <h2>kauf2: die Idee</h2>
            <p>
              Sammle mit einem Team haltbare Lebensmittel
              (Konserven, Einmachgläser, Instant-Produkte,...)
              zur Unterstützung der Tafel in deinem Wohnort.
            </p>
            <p>
              Sobald eine Ration zusammen gekommen ist,
              wird diese an die Tafel übergeben.
            </p>
            <p>
              <strong>Jeder kann mit machen!</strong>
            </p>
          </b-col>
          <b-col>
            <div class="bible-text">
              <p>
                Ich habe euch in allem gezeigt, dass man so arbeiten und
                sich der Schwachen annehmen muss im Gedenken an das Wort
                des Herrn Jesus, der selbst gesagt hat:
              </p>
              <p>
                Geben ist seliger als nehmen.
              </p>
              <p>
                &dash; Bibel: Apostelgeschichte 20, 35
              </p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            cols="8"
            sm="8"
          >
            <h2>Mach mit!</h2>
            <p>
              Du willst mit machen? Es ist ganz einfach:
            </p>
            <ul>
              <li>
                Such Dir ein Team: deine Arbeitskolleg:innen, deine Schule,
                deine Kirchengemeinde, dein Verein, &hellip;
              </li>
              <li>
                Motiviere diese mit zu machen!
              </li>
              <li>
                Registriere dich, damit wir dein Team mit bei den
                <router-link to="/supporter">Unterstützern</router-link>
                veröffentlichen.
              </li>
              <li>
                Richte eine Sammelstelle für die Lebensmittel
                ein damit du mit dein Team <router-link to="/produkte">die Produkte</router-link> sammeln kannst.
              </li>
              <li>
                Wenn eine Ration zusammen gekommen ist, nimm mit
                der Tafel in deinem Wohnort Kontakt auf, um eine
                Übergabe zu vereinbaren.
                Diese freuen sich über jede Unterstützung!
              </li>
            </ul>
            <p>
              Die Aktion ist weder zeitlich noch sonstwie gebunden und kann an die örtlichen Bedürfnisse
              angepasst werden. Es ist egal, ob es eine einmalige Aktion zu einem bestimmten Termin gibt
              oder ob regelmässig gesammelt wird. Jede Kiste hilft der Tafel!
            </p>
            <p>
              Die Aktion <strong>kauf2</strong> kann eine nachhaltige Aktion werden,
              die zu einer zuverlässigen Lieferquelle deiner Tafel vor Ort wird.
            </p>
            <b-button
              to="supporter/request"
              class="my-3 mx-auto"
              style="width: 240px;"
              variant="primary"
              size="lg"
            >
              Jetzt mitmachen &hellip;
            </b-button>
          </b-col>
          <b-col>
            <b-img
              src="/img/dosen.png"
              fluid
            />
          </b-col>
        </b-row>
      </section>

      <section class="my-5">
        <h3 class="my-5">Unterstützende Teams</h3>

        <supporter-list :random-number="numberSupporter" />

        <p class="my-3">
          <router-link to="/supporter">
            <strong>Weitere Teams &hellip;</strong>
          </router-link>
        </p>
      </section>
    </b-container>
  </div>
</template>

<script>
import SupporterList from '@/components/supporter/SupporterList.vue'

export default {
  name: 'Home',
  components: { SupporterList },
  metaInfo: {
    title: 'Aktion kauf2'
  },
  data () {
    return {
      numberSupporter: 3
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/custom-vars.scss';
.jumbotron {
  background-color: $yellow;
  .logo {
    transform: rotate(-5deg);
    padding: 2rem;
  }
  .description {
    font-size: calc(1.3rem + 0.6vw);
    font-weight: 600;
    text-align: center;
  }
}
.red {
  color: $red;
}
.bible-text {
  text-decoration:none;
  color:#000;
  background:#ffc;
  display:block;
  --height:10em;
  --width:10em;
  padding:1em;
  margin: 1em;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  transition: transform .15s linear;
  transform: rotate(-5deg);
}
</style>
