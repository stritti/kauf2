<template>
  <div class="products mt-5">
    <h1>Produkte</h1>
    <h2>Was sollen wir sammeln? Was wird benötigt?</h2>
    <b-row>
      <b-col cols="8">
        <p>
          Die Tafel in deinem Ort wird vermutlich durch Lebensmittelläden,
          Bäcker, Metzger usw. regelmäßig mit Produkten beliefert.
        </p>
        <p>
          Dabei ist jedoch festzustellen, dass gerade <strong>haltbare Produkte</strong>
          nicht auf der Liste sind. Das lange Mindeshaltbarkeitsdatum (MHD)
          ermöglicht einen langfristigen Verkauf.
        </p>
        <p>
          Um jedoch den Menschen, die auf die Tafel angewiesen sind, auch die
          Möglichkeit zu geben haltbare Produkte zu erwerben, möchten wir mit
          der <strong>Aktion Kauf2</strong> genau diese Produkte sammeln.
        </p>
        <p>
          Im Folgenden einige Anregungen:
        </p>
      </b-col>
      <b-col>
        <b-img
          src="@/assets/dosen.png"
          fluid
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        md="4"
        sm="6"
      >
        <h3>Konserven</h3>
        <ul>
          <li>Kidneybohnen</li>
          <li>Grüne Bohnen</li>
          <li>Ölsardinen</li>
          <li>Thunfisch</li>
          <li>Tomaten ins Stücken</li>
          <li>Mais</li>
          <li>Karottengemüse</li>
          <li>Erbsen</li>
          <li>Bohneneintopf</li>
          <li>Tomatenmark</li>
          <li>Dosenmilch</li>
          <li>Ananas</li>
          <li>Birnen</li>
          <li>Aprikosen</li>
          <li>Pfirsich</li>
        </ul>
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <h3>Einmachgläser</h3>
        <ul>
          <li>Essiggurken</li>
          <li>Mixed Pickels</li>
          <li>Rotkraut</li>
          <li>Marmelade</li>
          <li>Honig</li>
          <li>Nuss Nougat Creme</li>
          <li>Tomatensoße</li>
          <li>Apfelmus</li>
          <li>Schattenmorellen</li>
          <li>Oliven</li>
        </ul>
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <h3>Instant Produkte</h3>
        <ul>
          <li>Kakao</li>
          <li>Schwarztee</li>
          <li>Kaffee</li>
        </ul>
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <h3>Hygieneartikel</h3>
        <ul>
          <li>Zahnbürste &amp; Zahncreme</li>
          <li>Duschgel</li>
          <li>Shampoo</li>
          <li>Seife</li>
          <li>Spülmittel, Allzweckreiniger</li>
          <li>Waschpulver (kleine Packungen)</li>
        </ul>
      </b-col>
      <b-col
        md="4"
        sm="6"
      >
        <h3>und vieles mehr</h3>
        <ul>
          <li>Nudeln</li>
          <li>Reis</li>
          <li>Linsen</li>
          <li>Salz</li>
          <li>Zucker</li>
          <li>Mehl</li>
          <li>Sonnenblumenöl</li>
          <li>&hellip;</li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'Products',
  metaInfo: {
    title: 'Übersicht von Produkten'
  }
}
</script>
