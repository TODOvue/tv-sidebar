<template>
  <!-- The link tag is sent to be used in the blog with nuxt -->
  <tv-sidebar isLabel :data="labels" />
</template>

<script>
import { TvSidebar } from '@todovue/tv-sidebar';
import '@todovue/tv-sidebar/style.css';
import '@todovue/tv-label/style.css';

const labels = {
  title: "Categories",
  labels: [
    {
      id: 1,
      name: "Vue.js",
      color: "#4FC08D",
    },
    // ...
  ],
};
</script>
