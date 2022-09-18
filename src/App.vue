<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive, ref, onMounted } from 'vue';
import HelloWorld from 'comps/HelloWorld.vue'

const refHelloworld = ref()

const onMyClick = (payload) => {
  console.log('onMyClick---', payload);
}
const onSubmit = (payload) => {
  console.log('onSubmit---', payload)
}

onMounted(() => {
  // https://vuejs.org/api/sfc-script-setup.html#defineexpose
  // https://vuejs.org/guide/essentials/template-refs.html#ref-on-component
  // 通过ref访问子组件实例，子组件script setup里面的数据都不能访问到，除非子组件expose的数据
  console.log('refHelloworld.value---', refHelloworld.value, );
  console.log('refHelloworld.value.publicData---', refHelloworld.value.publicData );
  console.log('refHelloworld.value.praviteData---', refHelloworld.value.praviateData );
})

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
  <HelloWorld msg="Vite + Vue" @myClick="onMyClick" @submit="onSubmit" ref="refHelloworld" />
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
