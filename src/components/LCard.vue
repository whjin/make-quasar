<template>
  <q-card inline>

    <q-card-media>
      <img :src="image"/>
    </q-card-media>

    <q-card-title>
      <span>{{title}}</span>
      <div class="q-mt-sm" slot="subtitle">
        <l-icon
          :icon="'fas fa-star'"
          :text="rate"
          :color="'orange'"
          class="q-mr-md"/>
        <span class="q-mr-sm">{{comment}}个评价</span>
        <span>{{view}}人浏览</span>
      </div>
    </q-card-title>

    <q-card-main>
      <l-icon
        :icon="'fas fa-map-marker-alt'"
        :text="locate"
        :color="'grey'"
        class="q-mr-md"/>
    </q-card-main>

  </q-card>
</template>

<script>
  import LIcon from 'src/components/LIcon';

  export default {
    name: "LCard",
    props: {
      image: String,
      title: String,
      rate: String,
      comment: String,
      view: String,
      locate: String
    },
    components: {
      LIcon
    }
  }
</script>

<style scoped>

</style>
