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
        <div class="row">
          <div class="col-md-2 col-xs-1"></div>
          <div class="col-md-8 col-xs-10">
            <q-input
              inverted-light
              color="white"
              placeholder="输入城市/景点 或是想去的地方"
              :after="[{icon:'fas fa-search-location'}]"
              v-model="search">
              <q-autocomplete
                :static-data="{field: 'label', list: countries}"
                :filter="advFilter"/>
              <q-popover
                no-focus
                fit
                v-show="!search">
                <div class="row viewList">
                  <div class="col-sm-4 col-xs-12">
                    <q-list>
                      <q-list-header>热门目的地</q-list-header>
                      <q-item>
                        <q-item-main>珠海</q-item-main>
                      </q-item>
                    </q-list>
                  </div>
                  <div class="col-sm-4 col-xs-12"></div>
                  <div class="col-sm-4 col-xs-12"></div>
                </div>
              </q-popover>
            </q-input>
          </div>
          <div class="col-md-2 col-xs-1"></div>
        </div>
      </div>
    </q-carousel-control>
  </q-carousel>
</template>

<script>
  import _ from '../../../node_modules/lodash';

  export default {
    name: "SectionCarousel",
    data() {
      return {
        search: '',
        countries: [
          {label: '广州市', icon: 'fas fa-map-marker-alt'},
          {label: '深圳市', icon: 'fas fa-map-marker-alt'},
          {label: '珠海市', icon: 'fas fa-map-marker-alt'},
          {label: '[网美景点]香山公园，秋季赏枫胜地', stamp: '北京市'},
          {label: '珠海长隆[海豚剧场]精彩不容错过！精彩变身演出抢先看', stamp: '珠海，长隆', rightTextColor: 'pink-13'}
        ]
      }
    },
    methods: {
      advFilter(terms, {field, list}) {
        return _.filter(list, context => {
          return context[field].match(terms)
        })
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

  .carouselInput .main .search {
    width: 300px
  }

  .row {
    right: 18px
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

  @media (max-width: 576px) {
    .viewList {
      width: 280px
    }
  }
</style>
