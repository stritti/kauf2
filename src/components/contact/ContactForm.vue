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
    <b-alert
      v-if="errorSubmit"
      variant="danger"
      class="my-5"
      show
    >
      Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
    </b-alert>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { contactService } from '@/services/contact.service'
import type { ContactMessage } from '@/types/models'

const contact = reactive<ContactMessage>({ Name: '', Email: '', Notes: '' })
const showForm = ref(true)
const success = ref(false)
const errorSubmit = ref<string | null>(null)

async function onSubmit(event: Event) {
  event.preventDefault()
  showForm.value = false
  try {
    await contactService.send(contact)
    success.value = true
  } catch (error) {
    errorSubmit.value = error instanceof Error ? error.message : String(error)
    showForm.value = true
  }
}
</script>


