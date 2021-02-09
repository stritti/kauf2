<template>
  <div class="home">
    <b-jumbotron
      header="kauf2"
      lead="kauf2 - Die Aktion zur Unterstützung der regionalen Tafel Läden"
    >
      <b-row>
        <b-col md="6">
          <b-img
            class="logo"
            src="@/assets/kauf_2.png"
            fluid
          />
        </b-col>
        <b-col>
          <div class="description">
            <p>Du kaufst ein Produkt?</p>
            <p>Dann kaufe jetzt <span class="red">zwei</span>:</p>
            <p>Eines für <span class="red">dich</span></p>
            <p>&amp;</p>
            <p>Eines für <span class="red">die Tafel</span>!</p>
          </div>
        </b-col>
      </b-row>
      <b-button
        variant="primary"
        href="#"
      >
        Jetzt mitmachen!
      </b-button>
    </b-jumbotron>
    <section>
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
            Jeder kann mit machen!
          </p>
        </b-col>
        <b-col>
          <div class="cite">
            <post-it />
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
    </section>
  </div>
</template>

<script>
import PostIt from '@/components/PostIt.vue'

export default {
  name: 'Home',
  component: { PostIt }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/custom-vars.scss';
.jumbotron {
  background-color: $yellow;
  .logo {
    transform: rotate(-15deg);
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
</style>
