<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const active = ref(route.name as string)

watch(active, (val) => {
  router.push({ name: val! })
})
</script>

<template>
  <router-view />
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" name="home">首页</van-tabbar-item>
    <van-tabbar-item icon="bars" name="order">订单</van-tabbar-item>
    <van-tabbar-item icon="contact" name="me">我的</van-tabbar-item>
  </van-tabbar>
</template>

<style scoped>
.home {
}
</style>
