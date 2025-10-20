<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Sidebar (TvSidebar)
A versatile and flexible Vue 3 sidebar component with multiple display modes: lists, categories (labels), and images. Perfect for blogs, documentation sites, and web applications requiring sidebar navigation or content display. Compatible with both SPA and SSR environments (e.g. Nuxt 3).

[![npm](https://img.shields.io/npm/v/@todovue/tv-sidebar.svg)](https://www.npmjs.com/package/@todovue/tv-sidebar)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-sidebar.svg)](https://www.npmjs.com/package/@todovue/tv-sidebar)
![License](https://img.shields.io/github/license/TODOvue/tv-sidebar)

> Demo: https://tv-sidebar.netlify.app/

---
## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 3 / SSR Usage](#nuxt-3--ssr-usage)
- [Component Registration Options](#component-registration-options)
- [Props](#props)
- [Events](#events)
- [Usage Examples](#usage-examples)
  - [Default List Mode](#default-list-mode)
  - [Categories (Labels) Mode](#categories-labels-mode)
  - [Image Mode](#image-mode)
  - [With Limit](#with-limit)
- [Data Structure](#data-structure)
- [Styling](#styling)
- [Router Integration](#router-integration)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

---
## Features
- **Three display modes**: List, Categories (labels), and Image
- **Flexible routing**: Works with Vue Router (`router-link`) and Nuxt (`nuxt-link`)
- **Item limit**: Control how many items to display with the `limit` prop
- **Clickable images**: Optional clickable images that navigate on click
- **Label/Category support**: Display colored category labels with click events
- **Responsive design**: Adapts to different screen sizes
- **SSR compatible**: Works seamlessly in Nuxt 3 and SSR contexts
- **Customizable styling**: Built with SCSS for easy theming
- **Tree-shakeable**: Vue marked as external dependency

---
## Installation
Using npm:
```bash
npm install @todovue/tv-sidebar
```
Using yarn:
```bash
yarn add @todovue/tv-sidebar
```
Using pnpm:
```bash
pnpm add @todovue/tv-sidebar
```

> **Note**: This component depends on `@todovue/tv-label` for the categories mode.

---
## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import TvSidebar from '@todovue/tv-sidebar'

createApp(App)
  .use(TvSidebar) // enables <TvSidebar /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'

const sidebarData = {
  title: "Most Popular Blogs",
  list: [
    {
      id: 1,
      title: "10 Tips for Creating a Successful YouTube Channel",
      link: "/blog/youtube-tips",
    },
    {
      id: 2,
      title: "The Benefits of Meditation",
      link: "/blog/meditation",
    }
  ]
}
</script>

<template>
  <TvSidebar :data="sidebarData" />
</template>
```

---
## Nuxt 3 / SSR Usage
Create a plugin file: `plugins/tv-sidebar.client.ts` (or without `.client` suffix for SSR):
```ts
import { defineNuxtPlugin } from '#app'
import TvSidebar from '@todovue/tv-sidebar'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvSidebar)
})
```
Use anywhere with Nuxt routing:
```vue
<TvSidebar linkTag="nuxt-link" :data="sidebarData" />
```
Optional direct import (no plugin):
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'
</script>
```

---
## Component Registration Options
| Approach                                                            | When to use                                    |
|---------------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvSidebar)`                                     | Many usages across app / design system install |
| Local named import `{ TvSidebar }`                                  | Isolated / code-split contexts                 |
| Direct default import `import TvSidebar from '@todovue/tv-sidebar'` | Single usage or manual registration            |

---
## Props
| Prop      | Type    | Default        | Description                                                              |
|-----------|---------|----------------|--------------------------------------------------------------------------|
| data      | Object  | `{}`           | Main data object containing title and content (list, labels, or image).  |
| linkTag   | String  | `'router-link'`| Component to use for links: `'router-link'` or `'nuxt-link'`.            |
| isImage   | Boolean | `false`        | Enables image display mode.                                              |
| isLabel   | Boolean | `false`        | Enables categories/labels display mode.                                  |
| limit     | Number  | `0`            | Maximum number of items to display (0 = show all).                       |
| clickable | Boolean | `false`        | Makes images clickable (only applies in image mode).                     |

---
## Events
| Event name (kebab) | Emits (camel) | Description                                        |
|--------------------|---------------|----------------------------------------------------|
| `clickLabel`       | `clickLabel`  | Emitted when a label/category is clicked.          |
| `click`            | `click`       | Native click passthrough (also emitted for labels).|

Usage:
```vue
<TvSidebar 
  isLabel 
  :data="categoriesData" 
  @clickLabel="handleCategoryClick"
/>
```

---
## Usage Examples

### Default List Mode
Display a numbered list of links:
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'

const listData = {
  title: "Most Popular Blogs",
  list: [
    {
      id: 1,
      title: "10 Tips for Creating a Successful YouTube Channel",
      link: "/blog/youtube-tips",
    },
    {
      id: 2,
      title: "The Benefits of Meditation and How to Get Started",
      link: "/blog/meditation",
    },
    {
      id: 3,
      title: "The Top 5 Destinations for Adventure Travel",
      link: "/blog/adventure-travel",
    }
  ]
}
</script>

<template>
  <TvSidebar :data="listData" />
</template>
```

### Categories (Labels) Mode
Display colored category labels:
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'

const categoriesData = {
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
    }
  ]
}

function handleCategoryClick(category) {
  console.log('Category clicked:', category)
  // Navigate or filter by category
}
</script>

<template>
  <TvSidebar 
    isLabel 
    :data="categoriesData" 
    @clickLabel="handleCategoryClick"
  />
</template>
```

### Image Mode
Display an image with title:
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'

const imageData = {
  title: "TODOvue Blog",
  image: {
    src: "https://todovue.com/vue.webp",
    alt: "TODOvue Logo",
    link: "https://todovue.com/"
  }
}
</script>

<template>
  <!-- Non-clickable image -->
  <TvSidebar isImage :data="imageData" />
  
  <!-- Clickable image that navigates -->
  <TvSidebar isImage clickable :data="imageData" />
</template>
```

### With Limit
Limit the number of displayed items:
```vue
<template>
  <!-- Show only first 5 items -->
  <TvSidebar :data="listData" :limit="5" />
  
  <!-- Show only first 8 categories -->
  <TvSidebar isLabel :data="categoriesData" :limit="8" />
</template>
```

### Nuxt Integration
Using with Nuxt routing:
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'

const blogPosts = {
  title: "Recent Posts",
  list: [
    { id: 1, title: "Getting Started with Nuxt 3", link: "/blog/nuxt-3" },
    { id: 2, title: "Vue Composition API", link: "/blog/composition-api" }
  ]
}
</script>

<template>
  <TvSidebar linkTag="nuxt-link" :data="blogPosts" />
</template>
```

---
## Data Structure

### List Mode Data
```typescript
{
  title: string,
  list: Array<{
    id: number | string,
    title: string,
    link: string
  }>
}
```

### Labels/Categories Mode Data
```typescript
{
  title: string,
  labels: Array<{
    id: number | string,
    name: string,
    color: string // Hex color code
  }>
}
```

### Image Mode Data
```typescript
{
  title: string,
  image: {
    src: string,    // Image URL
    alt: string,    // Alt text for accessibility
    link: string    // Link URL (used when clickable=true)
  }
}
```

---
## Styling
The component uses SCSS for styling. Styles are automatically included when you import the component. The sidebar includes:
- Clean, minimal design
- Responsive layout
- Title with separator line
- Hover effects on links
- Proper spacing and typography

To customize styles, you can override the CSS classes:
```css
.tv-sidebar-body {
  /* Container styles */
}

.tv-sidebar {
  /* Main sidebar styles */
}

.tv-sidebar-title h1 {
  /* Title styles */
}

.tv-sidebar-content-li {
  /* List item styles */
}
```

---
## Router Integration
The component automatically adapts to your routing solution:

**Vue Router (SPA)**:
```vue
<TvSidebar linkTag="router-link" :data="data" />
```

**Nuxt Router (SSR)**:
```vue
<TvSidebar linkTag="nuxt-link" :data="data" />
```

The `linkComponent` computed property in the composable handles the dynamic component resolution.

---
## Accessibility
- Semantic HTML structure with proper heading hierarchy
- Alt text support for images
- Link text for screen readers
- Keyboard navigation support through native link elements
- Color contrast considerations for labels

---
## SSR Notes
- No direct DOM access (`window` / `document`) → safe for SSR
- Compatible with Nuxt 3 out of the box
- Styles are bundled and auto-imported
- Dynamic component resolution works in both client and server contexts
- Use `linkTag="nuxt-link"` for Nuxt applications

---
## Development
```bash
git clone https://github.com/TODOvue/tv-sidebar.git
cd tv-sidebar
npm install
npm run dev     # run demo playground
npm run build   # build library
```
Local demo served from Vite using `index.html` + `src/demo` examples.

---
## Contributing
PRs and issues welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

---
## License
MIT © TODOvue

---
## Dependencies
- `vue` (^3.0.0) - Peer dependency
- `@todovue/tv-label` - Used for category/label display mode

---
### Attributions
Crafted with ❤️ for the TODOvue component ecosystem by Cristhian Daza
