<template>
  <div>
    <HelloWorld msg="Vite + Vue" @myClick="onMyClick" @submit="onSubmit" ref="refHelloworld" />
  </div>
</template>

<script setup>
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

<style lang="scss" scoped>

</style>