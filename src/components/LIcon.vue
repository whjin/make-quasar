<template>
  <div class="layout" :style="{color:color}">
    <q-icon :class="icon"/>
    {{text}}
  </div>
</template>

<script>
  export default {
    name: "LIcon",
    props: {
      text: String,
      icon: String,
      color: String
    }
  }
</script>

<style lang="stylus" scoped>
  .layout {
    display: inline-block
    font-size 14px
  }
</style>
