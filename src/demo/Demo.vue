<script setup>
import { defineAsyncComponent } from "vue"
const TvSidebar = defineAsyncComponent(/* webpackChunkName: "tvSidebar" */() => import('../components/TvSidebar.vue'))
import { demos } from './utils/mocks.js'
</script>

<template>
  <tv-demo
    :component="TvSidebar"
    :variants="demos"
    hide-background
    nameComponent="TvSidebar"
    npmInstall="@todovue/tv-sidebar"
    sourceLink="https://github.com/TODOvue/tv-sidebar"
    urlClone="https://github.com/TODOvue/tv-sidebar.git"
    version="2.0.2"
  />
</template>

<style scoped>

</style>
