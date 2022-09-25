<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from 'comps/HelloWorld.vue'

import {useStore} from 'vuex'
const store = useStore()
const onAdd = () => {
  // store.dispatch('add')
  store.commit('add')
}

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
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
