<template>
  <div class="navbar">
    <!-- 面包屑 -->
    <!-- 右侧下拉菜单 -->
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="hover">
        <div class="avatar-wrapper">
          <img src="/src/assets/vue.svg" alt="" srcset="">
          <el-icon><ArrowDown /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <router-link to="/about">
              <el-dropdown-item>关于页</el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/aniviaH">
              <el-dropdown-item>我的Github</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 1 1px 4px rgba(0, 21, 41, 0.08);

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    cursor: pointer;
  }

  &.focus {
    outline: none;
  }

  .avatar-container {
    margin-right: 30px;
    
  }
}
</style>