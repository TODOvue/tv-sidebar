<template>
  <!-- The link tag is sent to be used in the blog with nuxt -->
  <tv-sidebar isImage :data="image" />
</template>

<script>
import { TvSidebar } from '@todovue/tv-sidebar';

const image = {
  title: "TODOvue Blog",
  image: {
    src: "https://todovue.com/vue.webp",
    alt: "Image",
    link: "https://todovue.com/",
  }
};
</script>
