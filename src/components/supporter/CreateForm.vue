<template>
  <div class="create-form">
    <b-form
      v-if="showForm"
      @submit="onSubmit"
    >
      <b-form-group
        label="öffentlicher Name des Teams"
        description="Mit diesem Namen erscheint dein Team auf der Webseite"
      >
        <b-form-input
          v-model="supporter.Name"
          type="text"
          placeholder="Team-Name"
          size="lg"
          required
        />
      </b-form-group>

      <hr>

      <h3>öffentliche Adresse</h3>
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Strasse"
          >
            <b-form-input
              v-model="supporter.Street"
              type="text"
              placeholder="Strasse"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3">
          <b-form-group
            label="PLZ"
          >
            <b-form-input
              v-model="supporter.Zip"
              type="number"
              placeholder="PLZ"
              required
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            label="Ort"
          >
            <b-form-input
              v-model="supporter.City"
              type="text"
              placeholder="Ort"
              required
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Webseite"
          >
            <b-form-input
              v-model="supporter.Website"
              type="url"
              placeholder="https://www.webseite.de"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <hr>

      <h3>Kontakt</h3>
      <p>Die Kontaktdaten werden nicht öffentlich gemacht.</p>
      <b-form-group
        label="Ansprechpartner*in"
        description="Name des Ansprechpartners des Teams"
      >
        <b-form-input
          v-model="supporter['Contact Name']"
          type="text"
          placeholder="Name Ansprechpartner*in"
          required
        />
      </b-form-group>
      <b-form-group
        label="E-Mail"
        description="Wir werden Ihre E-Mail niemals an Dritte weitergeben und erscheint auch nicht auf der Website"
      >
        <b-form-input
          v-model="supporter.Email"
          type="email"
          placeholder="E-Mail"
          required
        />
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="my-5"
      >
        Anmeden
      </b-button>
    </b-form>
    <b-alert
      v-if="success"
      variant="success"
      class="my-5"
      show
    >
      Vielen Dank für ihre Unterstützung! <br>
      Ihre Anmeldung wird nach einem Review freigeschaltet
      und wir informieren sie dann per Email.
    </b-alert>
  </div>
</template>

<script>
import supporterService from '@/services/supporter.service'
export default {
  name: 'CreateForm',
  data () {
    return {
      supporter: {},
      showForm: true,
      success: false,
      errorSubmit: null
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      this.showForm = false
      const data = {
        Status: 'requested',
        ...this.supporter
      }
      supporterService.save(data)
        .then(() => {
          this.success = true
        })
        .catch((ex) => {
          this.errorSubmit = ex
          this.showForm = true
        })
    }
  }
}
</script>

<style>

</style>
