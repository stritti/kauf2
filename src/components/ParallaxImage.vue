<template>
  <div
    class="parallax"
    :style="`background-image: url('${src}');`"
  />
</template>

<script>
export default {
  name: 'ParallaxImage',
  props: {
    src: {
      type: String,
      required: true
    }
  }

}
</script>

<style lang="scss" scoped>
.parallax {
  /* The image used */
  /*background-image: url("@/assets/sammelaktion-nak-stockach.jpg")*/
  filter:blur(3px);

  /* Set a specific height */
  min-height: 380px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/* Turn off parallax scrolling for all tablets and phones. Increase/decrease the pixels if needed */
@media only screen and (max-device-width: 1366px) {
  .parallax {
    background-attachment: scroll;
  }
}
@media only print {
  .parallax {
    display: none;
  }
}
</style>
