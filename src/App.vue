<template>
  <div id="app">
    <nav-bar />
    <main class="container content">
      <router-view />
    </main>
    <footer-bar />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'
export default {
  components: { NavBar, FooterBar }
}
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
    min-height: 100%;
  }
  .navbar, .content, footer {
    flex-shrink: 0;
  }
}
</style>
