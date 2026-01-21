<template>
  <tv-sidebar :data="list" :new-label-text="'NEW'" />
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
      isNew: true,
    },
    {
      id: 2,
      title: "The Benefits of Meditation and How to Get Started",
      link: "/the-benefits-of-meditation-and-how-to-get-started",
    },
    {
      id: 3,
      title: "The Top 5 Destinations for Adventure Travel",
      link: "/the-top-5-destinations-for-adventure-travel",
      isNew: true,
    },
    // ...
  ],
};
</script>
