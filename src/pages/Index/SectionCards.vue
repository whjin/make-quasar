<template>
  <div class="row section-card q-ma-sm">
    <div class="col-12 q-pa-sm"><b class="title">本月最精选</b></div>
    <template v-for="(data,index) in monthBestList">
      <div class="col-lg-3 col-sm-6 col-xs-12 q-pa-sm" :key="index">
        <l-card
          :title="data.title"
          :rate="data.rate"
          :comment="data.comment"
          :view="data.view"
          :locate="data.locate"
          :image="data.image"
        />
      </div>
    </template>
  </div>
</template>

<script>
  import LCard from 'src/components/LCard';

  export default {
    name: "SectionCards",
    components: {
      LCard
    },
    data() {
      return {
        monthBestList: [
          {
            title: "南山博物馆",
            rate: '4.6',
            comment: '75',
            view: '2643',
            locate: '广东 深圳市',
            image: '../statics/images/card1.jpg'
          }, {
            title: "苏州园林",
            rate: '4.8',
            comment: '82',
            view: '3621',
            locate: '江苏 苏州市',
            image: '../statics/images/card2.jpg'
          }, {
            title: "杭州西湖",
            rate: '5.0',
            comment: '99',
            view: '5812',
            locate: '浙江 杭州市',
            image: '../statics/images/card3.jpg'
          }, {
            title: "沙面大街",
            rate: '4.2',
            comment: '43',
            view: '1456',
            locate: '广东 广州市',
            image: '../statics/images/card4.jpg'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .section-card {
    margin-left: 5%
    margin-right: 5%
  }

  .title {
    font-size 24px
  }

  .q-card-title {
    font-size 16px
    line-height 24px
  }

  .q-card-media {
    max-height: 200px
  }
</style>
