<template>
  <div id="app">
    <nav-bar />
    <main class="content">
      <router-view />
    </main>
    <footer-bar />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

useHead({
  title: 'Kauf2',
  titleTemplate: '%s | Aktion Kauf2'
})
</script>

<style lang="scss">
@import '@/assets/scss/custom-vars.scss';
body {
  background-color: lighten($yellow, 45);
  height: 100%;
}
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .content {
    flex-grow: 1;
    min-height: calc(100vh - 119px);
  }
  .navbar, .content, footer {
    flex-shrink: 0;
  }
}
</style>
