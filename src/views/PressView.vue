<template>
  <b-container class="press mt-5">
    <h1>Presse</h1>
    <p>
      Vielen Dank für Ihr Interesse an unserem Projekt. Wir werden versuchen hier
      Pressematerial und -informationen bereit zu stellen.
    </p>
    <h2 class="mt-5">Kontakt</h2>
    <p>
      Damit wir uns mit Ihnen in Kontakt setzen können, können Sie uns gerne
      über das
      <router-link to="/kontakt">Kontaktformular</router-link>
      erreichen.
    </p>
    <h2 class="mt-5">Pressematerial</h2>
    <b-card-group columns>
      <b-card
        title="kauf2 Logo"
        img-src="/img/kauf_2.png"
        img-alt="kauf2 Logo"
        img-top
      >
        <b-card-text>
          Logo der Aktion kauf2
        </b-card-text>
      </b-card>
      <b-card
        title="Slogan der Aktion kauf2"
        img-src="/img/kauf2-Slogan.png"
        img-alt="kauf2 Slogan"
        img-top
      >
        <b-card-text>
          Slogan der Aktion kauf2
        </b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Presse'
  }
}
</script>
