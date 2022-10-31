<template>
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <!-- <div class="sidebar-container">侧边栏...</div> -->
    <sidebar ></sidebar>
    <!-- 右侧内容区 -->
    <div class="main-container">
      <nav-bar></nav-bar>

      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/layouts/components/NavBar.vue'
import AppMain from '@/layouts/components/AppMain.vue'
import Sidebar from '@/layouts/components/sidebar/index.vue'

</script>


<!-- <style lang="scss">
  @import '../styles/mixin.scss';
  .app-wrapper {
    @include scrollbar;
  }
</style> -->

<style lang="scss" scoped>
@import '../styles/mixin.scss';


.app-wrapper {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
}

.sidebar-container {
  width: 300px;
  background-color: cyan;
}
.main-container {
  flex: 1;
}
</style>