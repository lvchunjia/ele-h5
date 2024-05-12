<script setup lang="ts">
import TheTop from './components/TheTop.vue'

const recommends = [
  {
    value: 1,
    label: '推荐'
  },
  {
    value: 2,
    label: '最新'
  }
]
</script>

<template>
  <div class="home-view">
    <TheTop :recommends="recommends" />
    <h2>home</h2>
    <div class="test">哈哈哈哈哈哈哈哈蛤蛤</div>
  </div>
</template>

<style scoped>
.home-view {
  .test {
    font-size: 39px;
  }
}
</style>
