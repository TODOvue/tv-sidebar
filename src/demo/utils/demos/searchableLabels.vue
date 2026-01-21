<template>
  <tv-sidebar 
    :data="categories" 
    isLabel 
    searchable 
    search-placeholder="Buscar categorías..." 
  />
</template>

<script>
import { TvSidebar } from '@todovue/tv-sidebar';
import '@todovue/tv-sidebar/style.css';

const categories = {
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
