<template>
  <tv-sidebar grouped :data="groupedData" />
</template>

<script>
import { TvSidebar } from '@todovue/tv-sidebar';
import '@todovue/tv-sidebar/style.css';

const groupedData = {
  title: "Blog Posts",
  groups: [
    {
      id: 1,
      name: "Technical",
      collapsed: false,
      items: [
        {
          id: 1,
          title: "10 Tips for Creating a Successful YouTube Channel",
          link: "/10-tips-for-creating-a-successful-youtube-channel",
        },
        {
          id: 2,
          title: "The Benefits of Meditation and How to Get Started",
          link: "/the-benefits-of-meditation-and-how-to-get-started",
        },
        {
          id: 3,
          title: "How to Create High-Quality Visual Content for Your Blog",
          link: "/how-to-create-high-quality-visual-content-for-your-blog",
        },
      ]
    },
    {
      id: 2,
      name: "Lifestyle",
      collapsed: true,
      items: [
        {
          id: 4,
          title: "Why You Should Consider a Plant-Based Diet",
          link: "/why-you-should-consider-a-plant-based-diet",
        },
        {
          id: 5,
          title: "The Pros and Cons of Remote Work",
          link: "/the-pros-and-cons-of-remote-work",
        },
      ]
    },
    {
      id: 3,
      name: "Travel",
      collapsed: false,
      items: [
        {
          id: 6,
          title: "The Top 5 Destinations for Adventure Travel",
          link: "/the-top-5-destinations-for-adventure-travel",
        },
      ]
    }
  ]
};
</script>
