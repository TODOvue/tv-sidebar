<script setup>
import { defineAsyncComponent } from "vue"
const TvSidebar = defineAsyncComponent(/* webpackChunkName: "tvSidebar" */() => import('../components/TvSidebar.vue'))
import { demos } from './utils/mocks.js'
</script>

<template>
  <TvDemo
    :component="TvSidebar"
    :variants="demos"
    :manual-emits="['clickLabel', 'click', 'clickImage']"
    hide-background
    component-name="TvSidebar"
    npm-install="@todovue/tv-sidebar"
    source-link="https://github.com/TODOvue/tv-sidebar"
    url-clone="https://github.com/TODOvue/tv-sidebar.git"
    version="2.1.2"
  />
</template>

<style scoped>

</style>
