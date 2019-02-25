<template>
  <q-carousel
    color="white"
    infinite
    arrows
    autoplay
    height="400px">
    <q-carousel-slide img-src="statics/images/papercut1.jpg"/>
    <q-carousel-slide img-src="statics/images/papercut2.jpg"/>
    <q-carousel-slide img-src="statics/images/papercut3.jpg"/>
    <q-carousel-slide img-src="statics/images/papercut4.jpg"/>
    <q-carousel-slide img-src="statics/images/papercut5.jpg"/>
    <q-carousel-slide img-src="statics/images/papercut6.jpg"/>
    <q-carousel-slide img-src="statics/images/papercut7.jpg"/>
    <q-carousel-slide img-src="statics/images/papercut8.jpg"/>
    <q-carousel-slide img-src="statics/images/papercut9.jpg"/>
    <q-carousel-control
      position="center"
      slot="control-nav"
      slot-scope="carousel"
      class="carouselInput">
      <div class="main">
        <b class="title">新锐旅游网站</b>
        <p class="subtitle">您身边的好玩专家</p>
        <p>发现周边好玩的地方，玩得快乐，玩得精彩。</p>
      </div>
      <div class="row">
        <div class="col-md-2 col-xs-1"></div>
        <div class="col-md-8 col-xs-10">
          <q-input
            inverted-light
            color="white"
            placeholder="输入城市/景点 或是想去的地方"
            :after="[{icon:'fas fa-search-location'}]"
            v-model="search">
            <q-autocomplete :static-data="{field: 'label', list: countries}"/>
          </q-input>
        </div>
        <div class="col-md-2 col-xs-1"></div>
      </div>
    </q-carousel-control>
  </q-carousel>
</template>

<script>
  export default {
    name: "SectionCarousel",
    data() {
      return {
        search: ''
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .carouselInput {
    width: 90%
  }

  .carouselInput .main {
    text-align center
    color: #f50057
  }

  @media (min-width: 768px) {
    .carouselInput .title {
      font-size 48px
    }

    .carouselInput .subtitle {
      font-size 24px
    }
  }

  @media (max-width: 768px) {
    .carouselInput .title {
      font-size 24px
    }

    .carouselInput .subtitle {
      font-size 16px
    }
  }
</style>
