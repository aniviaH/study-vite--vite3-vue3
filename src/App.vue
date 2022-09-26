<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from 'comps/HelloWorld.vue'

import {ref} from 'vue'
import {useStore} from 'vuex'

const store = useStore()
const onAdd = () => {
  // store.dispatch('add')
  store.commit('add')
}

const input = ref('')
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="tip">Click on the Vite and Vue logos to learn more</p>

  <router-view></router-view>

  <div>
    <router-link to="/">去到路由首页</router-link>
    <br>
    <router-link to="/about">去到about页面</router-link>
  </div>
  <div>
    store:
    <!-- <button @click="onAdd">{{store.state.counter}}</button> -->
    <button @click="() => $store.commit('add')">{{store.state.counter}}</button>
  </div>

  <div>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

    <el-input v-model="input" placeholder="Please input" />
  </div>
</template>

<!-- 使用vite-config中的配置值 css.preprocessorOptions. -->
<style scoped lang="sass">
.tip
  color: $injectedColor // red
  
</style>

<style lang="scss">
  .tip {
    color: $injectedColor;
  }
</style>

<style scoped lang="styl">
  .tip {
    color: $injectedColor;
  }
</style>

<style lang="scss">
  @import './styles/mixin.scss';
  body {
    @include scrollbar;
  }
</style>