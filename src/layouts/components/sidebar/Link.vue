<template>
  <component
    :is="type"
    v-bind="linkProps(to)"
  >
    <slot/>
  </component>
</template>

<script setup>
import {isExternal as isExt} from 'utils/validate'
import {computed, defineProps} from 'vue'

const props = defineProps({
  to: {
    tupe: String,
    required: true
  }
})

const isExternal = computed(() => isExt(props.to))

const type = computed(() => {
  if (isExternal.value) {
    return 'a'
  }
  return 'router-link'
})

const linkProps = (to) => {
  
}

</script>

<style lang="scss" scoped>

</style>