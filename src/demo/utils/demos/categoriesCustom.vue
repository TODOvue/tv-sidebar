<template>
  <!-- The link tag is sent to be used in the blog with nuxt -->
  <tv-sidebar isLabel is-outline size="sm" :data="labels" />
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
    {
      id: 2,
      name: "JavaScript",
      color: "#F0DB4F",
    },
    {
      id: 3,
      name: "HTML",
      color: "#E34F26",
    },
    {
      id: 4,
      name: "CSS",
      color: "#1572B6",
    },
    {
      id: 5,
      name: "Git - GitHub",
      color: "#F05032",
    },
    {
      id: 6,
      name: "Bootstrap",
      color: "#7952B3",
    },
    {
      id: 7,
      name: "React",
      color: "#61DBFB",
    },
    {
      id: 8,
      name: "Angular",
      color: "#DD1B16",
    },
    {
      id: 9,
      name: "Sass",
      color: "#CC6699",
    },
    {
      id: 10,
      name: "TypeScript",
      color: "#007ACC",
    },
    {
      id: 11,
      name: "Node.js",
      color: "#339933",
    },
    {
      id: 12,
      name: "Express.js",
      color: "#000000",
    },
    {
      id: 13,
      name: "jQuery",
      color: "#0769AD",
    },
    {
      id: 14,
      name: "PHP",
      color: "#777BB4",
    },
    {
      id: 15,
      name: "Laravel",
      color: "#FF2D20",
    },
    {
      id: 16,
      name: "Python",
      color: "#3776AB",
    },
    {
      id: 17,
      name: "Django",
      color: "#092E20",
    },
    {
      id: 18,
      name: "Ruby",
      color: "#CC342D",
    },
    {
      id: 19,
      name: "Ruby on Rails",
      color: "#CC0000",
    },
    {
      id: 20,
      name: "GraphQL",
      color: "#E10098",
    },
    {
      id: 21,
      name: "RESTful API",
      color: "#008080",
    },
    {
      id: 22,
      name: "OAuth",
      color: "#444444",
    },
    {
      id: 23,
      name: "JSON",
      color: "#000000",
    },
    {
      id: 24,
      name: "XML",
      color: "#FF6600",
    },
    {
      id: 25,
      name: "MongoDB",
      color: "#47A248",
    },
    {
      id: 26,
      name: "MySQL",
      color: "#4479A1",
    },
    {
      id: 27,
      name: "PostgreSQL",
      color: "#336791",
    },
    {
      id: 28,
      name: "Firebase",
      color: "#FFCA28",
    },
    {
      id: 29,
      name: "Amazon Web Services",
      color: "#FF9900",
    },
    {
      id: 30,
      name: "Google Cloud Platform",
      color: "#4285F4",
    },
  ],
};
</script>
