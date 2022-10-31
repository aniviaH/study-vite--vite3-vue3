<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        false
      "
    >
      <app-link
        v-if="onlyOneChild.meta"
        :to="resolvePath(onlyOneChild.path)"
      >
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <item
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            :title="onlyOneChild.meta.title"
          ></item>
        </el-menu-item>
      </app-link>
    </template>

    <el-sub-menu
      v-else
      ref="subMenu"
      :index="resolvePath(item.path)"
      popper-append-to-body
    >
      <template #title>
        <item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta && item.meta.title"
        ></item>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="item.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      >
      </sidebar-item>
    </el-sub-menu>
  </div>
</template>

<script setup>
import item from './Item.vue'
import AppLink from './Link.vue'

import {defineProps} from 'vue'

function hasOneShowingChild  (children) {
  return children && children.length > 0 ? false : true
}

function resolvePath (path) {
  return path || ''
}

defineProps({
  item: {
    type: Object,
    default () {
      return new Object()
    }
  }
})
</script>

<style lang="scss" scoped>

</style>