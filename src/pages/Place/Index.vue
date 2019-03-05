<template>
  <q-page>
    <q-parallax :src="localData.image" :height="400">
      <p>{{ localData.title }}</p>
    </q-parallax>

    <div class="row place-main">
      <div class="col-8 q-pa-sm">
        <q-breadcrumbs
          separator=">"
          color="light">
          <q-breadcrumbs-el :label="localData.country" to="/"/>
          <q-breadcrumbs-el :label="localData.locate" to="/"/>
          <q-breadcrumbs-el :label="localData.title" to="/"/>
        </q-breadcrumbs>
        <br>
        <span class="title">{{localData.title}}</span>

        <div class="row q-mt-lg">
          <div class="col-8">
            <l-icon
              class="q-mt-sm"
              :icon="'fas fa-tag'"
              :color="'grey'"
              :text="'景点编号：'+localData.id"
            />
            <br>
            <l-icon
              class="q-mt-sm"
              :icon="'fas fa-clock'"
              :color="'grey'"
              :text="'建议停留：'+localData.stay_time+'小时'"
            />
            <br>
            <l-icon
              class="q-mt-sm"
              :icon="'fas fa-stopwatch'"
              :color="'grey'"
              :text="'开放时间：'+localData.open_time"
            />
            <br>
            <l-icon
              class="q-mt-sm"
              :icon="'fas fa-map-marker-alt'"
              :color="'grey'"
              :text="'地理位置：'+localData.locate"
            />
          </div>
          <div class="col-4 info-right">
            <q-rating
              v-model="localData.rate"
              :max="5"
              color="amber"
              size="16px"
              disable/>
            <span class="q-ml-sm">{{localData.comment}}个评价</span>
          </div>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </q-page>
</template>

<script>
  import LIcon from 'src/components/LIcon';

  export default {
    name: "Index",
    data() {
      return {
        localData: {
          title: '宛若仙境 美轮美奂的杭州西湖',
          image: 'statics/images/local.jpg',
          country: '中国',
          locate: '浙江省',
          address: '杭州市西湖区龙井路1号',
          id: '12442',
          stay_time: '3.0',
          open_time: '24H',
          rate: 5.0,
          comment: '8920'
        }
      }
    },
    components: {
      LIcon
    }
  }
</script>

<style lang="stylus" scoped>
  .q-parallax p {
    font-size: 48px
    color: #fff
    text-align center
    margin: 0 5% 0
  }

  .place-main {
    margin-left 10%
  }

  .title {
    font-size 28px
    margin-top 20px
  }

  .q-breadcrumbs-el {
    font-style: 14px
  }

  .info-right {
    text-align right
    color: #979797
    font-size 12px
  }
</style>
