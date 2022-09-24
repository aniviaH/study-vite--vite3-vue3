<script lang="jsx">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup () {
    const counter = ref(0)
    const onClick = () => {
      counter.value++
    }

    // 返回render函数
    return () => (
      <>
        <div>comp-jsx--444</div>
        <button onClick={onClick}>{counter.value}</button>
      </>
    )
  }
})

// 下面写法响应式不生效-需要如上写法setup里面return渲染函数
// export default defineComponent({
//   render () {
//     const counter = ref(0)
//     const onClick = () => {
//       console.log('onClick---');
//       counter.value++
//     }
//     return (
//       <>
//       <div>comp-jsx--333</div>
//       <button onclick={onClick}>{counter}</button>
//       </>
//     )
//   }
// })

// 原始jsx
// export default {
//   data () {
//     return {
//       counter: 0
//     }
//   },
//   methods: {
//     onClick () {
//       this.counter++
//     },
//   },
//   render () {
//     return (
//       <>
//         <div>comp-jsx--333</div>
//         <button onClick={this.onClick}>{this.counter}</button>
//       </>
//     )
//   }
// }

</script>

<style lang="scss" scoped>

</style>