<template>
  <!-- The link tag is sent to be used in the blog with nuxt -->
  <tv-sidebar :data="list" :limit="5" />
</template>

<script>
import { TvSidebar } from '@todovue/tv-sidebar';
import '@todovue/tv-sidebar/style.css';

const list = {
  title: "Recent Blog Posts",
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
