<template>
  <b-container
    id="poster"
    fluid
    class="poster"
  >
    <b-row
      class="poster__logo yellow-bg"
      align-v="stretch"
    >
      <b-col cols="10">
        <b-img
          class="logo"
          src="/print/kauf_2.png"
        />
        <div class="poster__url">
          www.aktion&#x2011;kauf2.de
        </div>
      </b-col>
    </b-row>
    <b-row class="poster__content yellow-bg">
      <b-col>
        <div class="poster__slogan">
          Du kaufst ein Produkt?
        </div>
        <div class="poster__slogan">
          Dann kauf jetzt
          <span class="red">&nbsp;2</span>:
        </div>
        <div class="poster__slogan">
          Eines für
          <span class="red">&nbsp;dich</span>
        </div>
        <div class="poster__slogan">
          &amp;
        </div>
        <div class="poster__slogan">
          Eines für die
          <span class="red">&nbsp;Tafel</span>!
        </div>
      </b-col>
    </b-row>
    <b-row class="poster__content yellow-bg pb-3">
      <b-col cols="8">
        <p>
          Wir sammeln haltbare Lebensmittel (Konserven, Einmach-Gläser,
          &hellip;) und Produkte des täglichen Bedarfs zur Unterstützung
          der Tafel.
        </p>
        <p>
          Sobald eine Ration zusammen gekommen ist,
          wird diese an die Tafel übergeben.
        </p>
      </b-col>
      <b-col>
        <b-img
          src="/print/dosen.png"
          fluid
        />
      </b-col>
    </b-row>
    <b-row class="poster__footer mt-5">
      <b-col>
        <div class="poster__supporter-headline">Diese Aktion wird unterstützt von:</div>
      </b-col>
    </b-row>
    <b-row class="poster__footer mt-3">
      <b-col cols="4">
        <b-img
          class="poster__qr-code"
          src="/print/qrcode_plakat.png"
          fluid
        />
      </b-col>
      <b-col align-self="start">
        <b-row>
          <b-col cols="4">
            <b-img
              class="poster__supporter-logo"
              :src="supporter.Logo[0].thumbnails.large.url"
              fluid
            />
          </b-col>
          <b-col>
            <h3 class="supporter-card__name">
              {{ supporter.Name }}
            </h3>
            <div v-if="supporter.Street">
              {{ supporter.Street }}
            </div>
            <div v-if="supporter.Zip || supporter.City">
              <span v-if="supporter.Zip">{{ supporter.Zip }}&nbsp;</span>
              <span v-if="supporter.City">{{ supporter.City }}</span>
            </div>
            <div v-if="supporter.Website">
              <a
                :href="supporter.Website"
                target="_blank"
                rel="noopener noreferrer"
              >{{ supporter.Website }}</a>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import supporterService from '@/services/supporter.service'

export default {
  name: 'SupporterPosterView',
  props: {
    supporterId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      supporter: null
    }
  },
  mounted () {
    this.fetchSupporter()
  },
  methods: {
    fetchSupporter () {
      supporterService.getSupporter(this.supporterId).then(supporter => {
        this.supporter = supporter
        setTimeout(() => {
          window.print()
        }, 1000)
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/custom-vars.scss';

@media print {
  body {
    margin: 0;
    padding: 0;
    print-color-adjust: exact;
  }
}

#app {
  .navbar, .footer {
    display: none;
  }
}

.poster {
  width: 100%;
  height: calc(100vw * 1.414);
  max-height: calc(100vw * 1.414);

  .yellow-bg {
    background-color: $yellow;
  }

  &__logo {
    .logo {
      width: 80%;
      margin: calc(100vw * 0.05);
      margin-bottom: 0;
    }
  }
  &__url {
    font-size: calc(100vw * 0.04);
    font-weight: 600;
    color: $red;
    margin-left: calc(100vw * 0.05 + 15px);
    margin-top: - calc(100vw * 0.05);
  }
&__content {
    padding-top: 0;
    padding: calc(100vw * 0.05);
    padding-right: calc(100vw * 0.025);
    padding-bottom: calc(100vw * 0.025);

    p {
      font-size: calc(100vw * 0.025);
      font-weight: 400;
      text-align: left;
    }
  }
  &__slogan {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: calc(100vw * 0.04);

    .red {
      color: $red;
    }
  }
  &__qr-code {
    max-height: 3cm;
  }
  &__supporter-headline {
    font-size: calc(100vw * 0.025);
    font-weight: 600;
  }
  &__supporter-logo {
    max-height: 3cm;
  }
  &__footer {
    padding-right: calc(100vw * 0.025);
    padding-left: calc(100vw * 0.025);
  }
}
</style>
