<template>
  <!-- The link tag is sent to be used in the blog with nuxt -->
  <tv-sidebar linkTag="nuxt-link" :data="list" />
</template>

<script>
import { TvSidebar } from '@todovue/tv-sidebar';

const list = {
  title: "Most Popular Blogs",
  list: [
    {
      id: 1,
      title: "10 Tips for Creating a Successful YouTube Channel",
      link: "/10-tips-for-creating-a-successful-youtube-channel",
    },
    // ...
  ],
};
</script>
