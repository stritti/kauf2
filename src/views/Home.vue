<template>
  <div class="home">
    <b-jumbotron
      header="kauf2"
      lead="Aktion zur Unterstützung der regionalen Tafel Läden"
    >
      <b-row>
        <b-col md="4">
          <b-img
            class="logo"
            src="@/assets/kauf_2.png"
            fluid
          />
        </b-col>
        <b-col>
          <div class="description">
            <p>Du kaufst ein Produkt? Dann kaufe jetzt <span class="red">zwei</span>:</p>
            <p>Eines für <span class="red">dich</span></p>
            <p>&amp;</p>
            <p>Eines für <span class="red">die Tafel</span>!</p>
          </div>
        </b-col>
      </b-row>
    </b-jumbotron>
    <section>
      <b-row>
        <b-col md="6">
          <h2>Kauf2: die Idee</h2>
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
              &dash; Apostelgeschichte 20, 35
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
              Such Dir ein Team: deine Arbeitskollegen,
              deine Kirchengemeinde, dein Verein, &hellip;
            </li>
            <li>
              Motiviere diese mit zu machen!
            </li>
            <li>
              Registriere dich, damit wir dein Team mit bei den <router-link to="/supporter">
                Unterstützern
              </router-link> veröffentlichen.
            </li>
            <li>
              Richte eine Sammelstelle für die Lebensmittel
              ein, wo du mit deinem Team die Produkte sammelst.
            </li>
            <li>
              Wenn eine Ration zusammen gekommen ist, nimm mit
              der Tafel in deinem Wohnort Kontakt auf, um eine
              Übergabe zu vereinbaren.
            </li>
          </ul>
          <p>
            Die Aktion ist weder zeitlich noch sonstwie gebunden.
          </p>
          <p>
            Die Aktion <strong>Kauf2</strong> soll eine nachhaltige Aktion sein,
            die zu einer zuverlässigen Lieferquelle deiner Tafel
            vor Ort wird.
          </p>
          <b-button
            to="supporter/request"
            class="my-3"
            variant="primary"
          >
            Jetzt registrieren &hellip;
          </b-button>
        </b-col>
        <b-col>
          <b-img
            src="@/assets/dosen.png"
            width="220"
          />
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss">
@import '@/assets/scss/custom-vars.scss';
.jumbotron {
  background-color: $yellow;
  .logo {
    transform: rotate(-5deg);
    padding: 2rem;
  }
  .description {
    font-size: 1.5rem;
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
