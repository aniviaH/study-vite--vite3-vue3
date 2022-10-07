<template>
  <section class="app-main">
    <!-- 内部应该显示子路由页面信息 -->
    <router-view v-slot="{Component}">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </section>
</template>

<script setup>

</script>

<style scoped>
.app-main {
  /* 50 = navbar */
  min-height: calc(100vh - 50px);
  width: 100%;
}
</style>