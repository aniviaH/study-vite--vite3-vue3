<script setup>
import { reactive, ref } from 'vue'

// 直接导入组件
import Comp from 'comps/Comp.vue'
import CompJsx from 'comps/Comp-Jsx.vue';
import CompMock from 'comps/Comp-mock.vue'

import request from 'utils/request'

// 属性定义
const props = defineProps({
  msg: String
})
console.log('props---', props);

// 获取上下文 -- 已废弃
// const ctx = useContext()
// ctx.$emit('aaa')

// 定义事件
// const emits = defineEmits(['myClick'])
const emit = defineEmits({
  // no validation
  myClick: null,
  // with validation
  submit: (payload) => {
    if (payload.email && payload.password) {
      return true
    } else {
      console.warn(`Invalid submit event payload!`)
      return false
    }
  }
})
const onClick = () => {
  emit('myClick', 456)

  emit('submit', {
    email: 'aa@163.com'
  })
}
console.log('emit---', emit);

const count = ref(0)

const publicData = reactive({
  foo: 'foo'
})
const praviteData = reactive({
  bar: 'bar'
})
// 
defineExpose({
  count,
  publicData,
})

// test service
;(async () => {
  try {
    const users = await request('/api/users')
    // const users = await request('/api/50008')
    // const users = await request('/api/404')
    console.log(users)
  } catch (err) {
    console.log(err)
  }
})()
</script>

<template>
  <h1>{{ msg }}</h1>

  <comp></comp>
  <comp-jsx></comp-jsx>
  <comp-mock></comp-mock>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="$emit('myClick', '123')">emit</button>
    <button type="button" @click="onClick">emit</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  
</template>

