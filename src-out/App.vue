<template>
  <div id="app">
    <!-- 暂时有问题，后面有时间在研究 -->
    <!-- <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style></style>
