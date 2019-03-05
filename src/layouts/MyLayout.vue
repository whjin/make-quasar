<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        text-color="pink-13"
        inverted>

        <q-toolbar-title>
          好玩旅游网
          <div slot="subtitle">WeFunWeb</div>
        </q-toolbar-title>
        <div class="gt-xs">
          <q-btn class="q-mr-md" @click="$router.push('/Place')" flat>精选景点</q-btn>
          <q-btn class="q-mr-md" flat>美食地图</q-btn>
          <q-btn class="q-mr-md" flat>夜宿晓行</q-btn>
          <q-btn class="q-mr-md" flat>登录</q-btn>
          <q-btn class="q-mr-md" flat>注册</q-btn>
        </div>
        <div class="lt-sm">
          <q-btn
            icon="fas fa-bars"
            flat
            @click="rightDrawerOpen=true"/>
        </div>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="rightDrawerOpen"
      content-class="bg-grey-10"
      side="right">
      <q-list
        no-border
        link
        inset-delimiter
        dark>
        <q-list-header>好玩旅游网</q-list-header>
        <q-item to="/Place">
          <q-item-side icon="fas fa-search-location"/>
          <q-item-main label="精选景点"/>
        </q-item>
        <q-item>
          <q-item-side icon="fas fa-map-marked-alt"/>
          <q-item-main label="美食地图"/>
        </q-item>
        <q-item>
          <q-item-side icon="fas fa-utensils"/>
          <q-item-main label="夜宿晓行"/>
        </q-item>
        <q-item>
          <q-item-side icon="fas fa-sign-in-alt"/>
          <q-item-main label="登录"/>
        </q-item>
        <q-item>
          <q-item-side icon="far fa-edit"/>
          <q-item-main label="注册" sublabel="忘记密码？"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
  import {openURL} from 'quasar'

  export default {
    name: 'MyLayout',
    data() {
      return {
        rightDrawerOpen: false
      }
    },
    methods: {
      openURL
    }
  }
</script>

<style>
</style>
