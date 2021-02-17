<template>
  <div class="create-form">
    <b-form
      v-if="showForm"
      @submit="onSubmit"
    >
      <b-form-group
        label="Name"
      >
        <b-form-input
          v-model="contact.Name"
          type="text"
          placeholder="Name"
          required
        />
      </b-form-group>
      <b-form-group
        label="E-Mail"
        description="Wir werden Ihre E-Mail niemals an Dritte weitergeben und erscheint auch nicht auf der Website"
      >
        <b-form-input
          v-model="contact.Email"
          type="email"
          placeholder="E-Mail"
          required
        />
      </b-form-group>
      <b-form-group label="Nachricht">
        <b-form-textarea
          v-model="contact.Notes"
          rows="6"
          max-rows="24"
        />
      </b-form-group>

      <b-button
        type="submit"
        variant="primary"
        class="my-5"
      >
        Senden
      </b-button>
    </b-form>
    <b-alert
      v-if="success"
      variant="success"
      class="my-5"
      show
    >
      Die Nachricht wurde erfolgreich versendet.<br>
      Vielen Dank für ihre Nachricht!
    </b-alert>
  </div>
</template>

<script>
import contactService from '@/services/contact.service'
export default {
  name: 'CreateForm',
  data () {
    return {
      contact: {},
      showForm: true,
      success: false,
      errorSubmit: null
    }
  },
  methods: {
    onSubmit (event) {
      event.preventDefault()
      this.showForm = false
      contactService.send(this.contact).then(() => {
        this.success = true
      })
    }
  }
}
</script>

<style>

</style>
