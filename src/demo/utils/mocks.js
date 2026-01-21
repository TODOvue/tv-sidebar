import Default from './demos/default.vue?raw';
import DefaultWithLimit from './demos/defaultWithLimit.vue?raw';
import Categories from './demos/categories.vue?raw';
import CategoriesWithLimit from './demos/categoriesWithLimit.vue?raw';
import Image from './demos/image.vue?raw';
import ImageClickable from './demos/imageClickable.vue?raw';
import CategoriesCustom from './demos/categoriesCustom.vue?raw';

const list = [
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
    title: "The Top 5 Destinations for Adventure Travel",
    link: "/the-top-5-destinations-for-adventure-travel",
  },
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
  {
    id: 6,
    title: "The Benefits of Guest Blogging",
    link: "/the-benefits-of-guest-blogging",
  },
  {
    id: 7,
    title: "How to Create High-Quality Visual Content for Your Blog",
    link: "/how-to-create-high-quality-visual-content-for-your-blog",
  },
  {
    id: 8,
    title: "The Power of Email Marketing for Your Blog",
    link: "/the-power-of-email-marketing-for-your-blog",
  },
  {
    id: 9,
    title: "Why Branding is Essential for Your Blog",
    link: "/why-branding-is-essential-for-your-blog",
  },
  {
    id: 10,
    title: "How to Stay Motivated as a Blogger",
    link: "/how-to-stay-motivated-as-a-blogger",
  },
];

const labels = [
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
];

const onClickItem = (item) => {
  console.log("Item clicked:", item);
}

export const demos = [
  {
    id: 1,
    title: "Sidebar with default settings",
    propsData: {
      linkTag: "nuxt-link",
      data: {
        title: "Most Popular Blogs",
        list,
      },
      onClick: onClickItem,
    },
    description: "A sidebar using default settings without any props.",
    html: Default,
  },
  {
    id: 2,
    title: "TvSidebar shows a list of entries with limit 5",
    description: "A sidebar showing a list of entries limited to 5 items.",
    propsData: {
      linkTag: "nuxt-link",
      limit: 5,
      data: {
        title: "Recent Blog Posts",
        list,
      },
      onClick: onClickItem,
    },
    html: DefaultWithLimit,
  },
  {
    id: 3,
    title: "TvSidebar shows a list of categories",
    description: "A sidebar showing a list of categories without any limit.",
    propsData: {
      isLabel: true,
      data: {
        title: "Categories",
        labels: labels,
      },
      onClick: onClickItem,
    },
    html: Categories,
  },
  {
    id: 4,
    title: "TvSidebar shows a list of categories with limit 5",
    description: "A sidebar showing a list of categories limited to 5 items.",
    propsData: {
      isLabel: true,
      limit: 5,
      data: {
        title: "Categories",
        labels: labels,
      },
      onClick: onClickItem,
    },
    html: CategoriesWithLimit,
  },
  {
    id: 5,
    title: "TvSidebar image not clickable",
    description: "A sidebar showing an image that is not clickable.",
    propsData: {
      isImage: true,
      data: {
        title: "TODOvue Blog",
        image: {
          src: "https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763701508/jarnmxxvmhbisvpzzfwu.webp",
          alt: "TODOvue Blog",
        },
      },
    },
    html: Image,
  },
  {
    id: 6,
    title: "TvSidebar image clickable",
    description: "A sidebar showing an image that is clickable.",
    propsData: {
      isImage: true,
      data: {
        title: "TODOvue Blog",
        image: {
          src: "https://cris-dev.com/images/projects/TODOvue.png",
          alt: "TODOvue Blog",
          link: "https://todovue.blog",
        },
      },
      clickable: true,
      onClick: onClickItem,
    },
    html: ImageClickable,
  },
  {
    id: 7,
    title: "TvSidebar shows a list of categories with outline and size sm",
    description: "A sidebar showing a list of categories with outline style and small size.",
    propsData: {
      isLabel: true,
      isOutline: true,
      size: "sm",
      data: {
        title: "Categories",
        labels: labels,
      },
      onClick: onClickItem,
    },
    html: CategoriesCustom,
  },
];
