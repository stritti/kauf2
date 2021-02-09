<template>
  <div class="post-it">
    Test
  </div>
</template>

<script>
export default {
  name: 'PostIt'

}
</script>

<style lang="scss" scoped>
.post-it {
  text-decoration:none;
  color:#000;
  background:#ffc;
  display:block;
  height:10em;
  width:10em;
  padding:1em;
  box-shadow: 5px 5px 7px rgba(33,33,33,.7);
  transition: transform .15s linear;
}
</style>
