<template>
  <tv-sidebar :data="list" searchable />
</template>

<script>
import { TvSidebar } from '@todovue/tv-sidebar';
import '@todovue/tv-sidebar/style.css';

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
