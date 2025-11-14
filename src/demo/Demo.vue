<script setup>
import { defineAsyncComponent } from "vue"
import { TvDemo } from '@todovue/tv-demo'
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
    version="2.0.0"
  ></tv-demo>
</template>

<style scoped>

</style>
