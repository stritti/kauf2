<template>
  <b-container
    class="poster"
    fluid
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
    <b-row class="poster__content yellow-bg py-5">
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
    <b-row class="poster__content yellow-bg py-5">
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
    <div class="poster__footer">
      <b-row class="mt-5">
        <b-col>
          <div class="poster__supporter-headline">Diese Aktion wird unterstützt von:</div>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="4">
          <VueQRCodeComponent
            :size="120"
            :text="`https://www.aktion-kauf2.de/?utm_source=QRCode&utm_medium=Plakat&utm_campaign=Plakat&utm_content=${supporter.Name}`" />
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
    </div>
  </b-container>
</template>

<script>
import supporterService from '@/services/supporter.service'
import VueQRCodeComponent from 'vue-qrcode-component'

export default {
  name: 'SupporterPosterView',
  components: {
    VueQRCodeComponent
  },
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

<style lang="scss" scoped>
@import '@/assets/scss/custom-vars.scss';

$poster-width: 297mm;
$poster-height: 420mm;
$poster-margin: calc($poster-width * 0.1);

body {
  width: $poster-width;
  min-width: 210mm;
  height: $poster-height;
  min-height:$poster-width;
  margin-left: auto;
  margin-right: auto;
}
.poster {
  width: $poster-width;
  min-width: 210mm;
  height: $poster-height;
  min-height: $poster-width;

  .yellow-bg {
    background-color: $yellow;
  }

  &__logo {
    .logo {
      width: 86%;
      margin-top: calc($poster-margin/2);
      margin-left: $poster-margin;
      margin-bottom: 0;
    }
  }
  &__url {
    font-size: 46px;
    font-weight: 600;
    color: $red;
    margin-left: $poster-margin;
    margin-top: - 1.75cm;
  }
&__content {
    padding-top: 0;
    padding-left: $poster-margin;
    padding-right: $poster-margin;

    p {
      font-size: 28px;
      font-weight: 400;
      text-align: left;
    }
  }
  &__slogan {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 46px;

    .red {
      color: $red;
    }
  }
  &__qr-code {
    max-height: 3cm;
  }
  &__supporter-headline {
    font-size: 28px;
    font-weight: 600;
  }
  &__supporter-logo {
    max-height: 3cm;
  }
  &__footer {
    position: relative;
    bottom: 0;
    width: 100%;
  }
}
</style>
