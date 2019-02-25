<template>
  <q-page>
    <section-carousel/>
    <section-cards/>
  </q-page>
</template>

<script>
  import SectionCarousel from './SectionCarousel';
  import SectionCards from './SectionCards';

  export default {
    name: "Index",
    components: {
      SectionCarousel,
      SectionCards
    }
  }
</script>

<style scoped>

</style>
