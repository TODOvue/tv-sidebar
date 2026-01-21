<p align="center"><img width="150" src="https://res.cloudinary.com/dcdfhi8qz/image/upload/v1763663056/uqqtkgp1lg3xdplutpga.png" alt="TODOvue logo">
</p>

# TODOvue Sidebar (TvSidebar)
A versatile and flexible Vue 3 sidebar component with multiple display modes: lists, categories (labels), and images. Perfect for blogs, documentation sites, and web applications requiring sidebar navigation or content display. Compatible with both SPA and SSR environments (e.g. Nuxt 3).

[![npm](https://img.shields.io/npm/v/@todovue/tv-sidebar.svg)](https://www.npmjs.com/package/@todovue/tv-sidebar)
[![npm downloads](https://img.shields.io/npm/dm/@todovue/tv-sidebar.svg)](https://www.npmjs.com/package/@todovue/tv-sidebar)
[![npm total downloads](https://img.shields.io/npm/dt/@todovue/tv-sidebar.svg)](https://www.npmjs.com/package/@todovue/tv-sidebar)
![License](https://img.shields.io/github/license/TODOvue/tv-sidebar)
![Release Date](https://img.shields.io/github/release-date/TODOvue/tv-sidebar)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/@todovue/tv-sidebar)
![Node Version](https://img.shields.io/node/v/@todovue/tv-sidebar)
![Last Commit](https://img.shields.io/github/last-commit/TODOvue/tv-sidebar)
![Stars](https://img.shields.io/github/stars/TODOvue/tv-sidebar?style=social)

> Demo: https://ui.todovue.blog/sidebar

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Quick Start (SPA)](#quick-start-spa)
- [Nuxt 4 / SSR Usage](#nuxt-4--ssr-usage)
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
- [Navigation Handling](#navigation-handling)
- [Accessibility](#accessibility)
- [SSR Notes](#ssr-notes)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Four display modes**: List, Categories (labels), Image, and Grouped/Categorized
- **Hierarchical grouping**: Organize content with collapsible sections and item counters
- **Event-driven interactions**: No built-in navigation; emits click events with full objects
- **Item limit**: Control how many items to display with the `limit` prop
- **Search/Filter**: Real-time filtering across all display modes including grouped content
- **Optional clickable images**: Enable with `clickable` to emit click events for images
- **Label/Category support**: Display colored category labels with click events
- **Responsive design**: Adapts to different screen sizes
- **SSR compatible**: Works seamlessly in Nuxt 3 and SSR contexts
- **Customizable styling**: Built with SCSS for easy theming
- **Tree-shakeable**: Vue marked as external dependency

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

## Quick Start (SPA)
Global registration (main.js / main.ts):
```js
import { createApp } from 'vue'
import App from './App.vue'
import TvSidebar from '@todovue/tv-sidebar'
import '@todovue/tv-sidebar/style.css' // import styles
import '@todovue/tv-label/style.css' // import styles

createApp(App)
  .use(TvSidebar) // enables <TvSidebar /> globally
  .mount('#app')
```
Local import inside a component:
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'
import '@todovue/tv-sidebar/style.css' // import styles
import '@todovue/tv-label/style.css' // import styles

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

## Nuxt 4 / SSR Usage
Add the stylesheet to your `nuxt.config.ts`:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@todovue/tv-card/nuxt'
  ]
})
```

Create a plugin file: `plugins/tv-sidebar.client.ts` (or without `.client` suffix for SSR):
```ts
import { defineNuxtPlugin } from '#app'
import TvSidebar from '@todovue/tv-sidebar'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(TvSidebar)
})
```
Use anywhere (no router dependency required):
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'
</script>
```

## Component Registration Options
| Approach                                                            | When to use                                    |
|---------------------------------------------------------------------|------------------------------------------------|
| Global via `app.use(TvSidebar)`                                     | Many usages across app / design system install |
| Local named import `{ TvSidebar }`                                  | Isolated / code-split contexts                 |
| Direct default import `import TvSidebar from '@todovue/tv-sidebar'` | Single usage or manual registration            |

## Props
| Prop              | Type    | Default       | Description                                                                                                                              |
|-------------------|---------|---------------|------------------------------------------------------------------------------------------------------------------------------------------|
| data              | Object  | `{}`          | Main data object containing title and content (list, labels, or image).                                                                  |
| isImage           | Boolean | `false`       | Enables image display mode.                                                                                                              |
| isLabel           | Boolean | `false`       | Enables categories/labels display mode.                                                                                                  |
| isOutline         | Boolean | `false`       | Apply outline style to labels (only works with `isLabel`).                                                                               |
| size              | String  | `'md'`        | Sets size of labels (`sm`, `md`, `lg`). Only works with `isLabel`.                                                                       |
| limit             | Number  | `0`           | Maximum number of items to display (0 = show all).                                                                                       |
| clickable         | Boolean | `false`       | When `true` and `isImage`, the image becomes interactive and emits a `click` event with the image object. When `false`, image is static. |
| searchable        | Boolean | `false`       | Enables search/filter input for filtering items in real-time across all display modes.                                                   |
| searchPlaceholder | String  | `'Search...'` | Placeholder text for the search input field.                                                                                             |
| grouped           | Boolean | `false`       | Enables grouped/categorized mode with collapsible sections. Requires `data.groups` array instead of `data.list` or `data.labels`.        |
| newLabelText      | String  | `'New'`       | Text to display in the "New" badge when `isNew` is true on an item.                                                                      |
| newLabelColor     | String  | `'#FF3B30'`   | Hex color code for the "New" badge background.                                                                                           |

## Events
| Event name (kebab) | Emits (camel) | Description                                                                                                                                         |
|--------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `click`            | `click`       | Emitted when a list item is clicked, when a label is clicked, and when an image is clicked (if `clickable`). The payload is always the full object. |
| `search`           | `search`      | Emitted when the search query changes. The payload is the search string.                                                                            |

Usage:
```vue
<TvSidebar 
  isLabel 
  searchable
  :data="categoriesData" 
  @click="handleAnyClick"
  @search="handleSearch"
/>
```

## Usage Examples

### Default List Mode
Display a numbered list of items that emit the full object on click:
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'

const listData = {
  title: "Most Popular Blogs",
  list: [
    {id: 1, title: "10 Tips for Creating a Successful YouTube Channel", link: "/blog/youtube-tips"},
    {id: 2, title: "The Benefits of Meditation and How to Get Started", link: "/blog/meditation"},
    {id: 3, title: "The Top 5 Destinations for Adventure Travel", link: "/blog/adventure-travel"}
  ],
}
function handleItemClick(item) {
  console.log('Item clicked:', item)
}
</script>

<template>
  <TvSidebar :data="listData" @click="handleItemClick" />
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
Display an image with title. Make it interactive with `clickable` if desired:
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'

const imageData = {
  title: "TODOvue Blog",
  image: {
    src: "https://todovue.com/vue.webp",
    alt: "TODOvue Logo",
    link: "https://todovue.com/"
  },
}
function handleImageClick(image) {
  console.log('Image clicked:', image)
}
</script>

<template>
  <!-- Non-clickable image -->
  <TvSidebar isImage :data="imageData" />
  
  <!-- Clickable image that emits the image object -->
  <TvSidebar isImage clickable :data="imageData" @click="handleImageClick" />
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

### With Search/Filter
Enable real-time search and filtering across all display modes:
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'

const listData = {
  title: 'Blog Posts',
  list: [
    { id: 1, title: 'Getting Started with Vue 3', link: '/blog/vue-3' },
    { id: 2, title: 'Understanding Composition API', link: '/blog/composition-api' },
    { id: 3, title: 'Building Reactive Forms', link: '/blog/reactive-forms' }
  ]
}

const categoriesData = {
  title: 'Categories',
  labels: [
    { id: 1, name: 'Vue.js', color: '#4FC08D' },
    { id: 2, name: 'JavaScript', color: '#F0DB4F' },
    { id: 3, name: 'TypeScript', color: '#007ACC' }
  ]
}

function handleSearch(query) {
  console.log('Search query:', query)
  // Optionally perform additional actions
}
</script>

<template>
  <!-- Searchable list with default placeholder -->
  <TvSidebar 
    :data="listData" 
    searchable 
    @search="handleSearch"
  />
  
  <!-- Searchable labels with custom placeholder -->
  <TvSidebar 
    isLabel 
    :data="categoriesData" 
    searchable 
    search-placeholder="Filter categories..."
    @search="handleSearch"
  />
  
  <!-- Searchable with limit (filtering applied before limiting) -->
  <TvSidebar 
    :data="listData" 
    searchable 
    :limit="5"
  />
</template>
```

### Grouped/Categorized Mode
Organize content hierarchically with collapsible groups and item counters:
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'

const groupedData = {
  title: 'Blog Posts',
  groups: [
    {
      id: 1,
      name: 'Technical',
      collapsed: false,
      items: [
        { id: 1, title: '10 Tips for Creating a Successful YouTube Channel', link: '/blog/youtube' },
        { id: 2, title: 'How to Create High-Quality Visual Content', link: '/blog/visual-content' },
        { id: 3, title: 'The Power of Email Marketing', link: '/blog/email-marketing' }
      ]
    },
    {
      id: 2,
      name: 'Lifestyle',
      collapsed: true,
      items: [
        { id: 4, title: 'Why You Should Consider a Plant-Based Diet', link: '/blog/plant-based' },
        { id: 5, title: 'The Pros and Cons of Remote Work', link: '/blog/remote-work' }
      ]
    },
    {
      id: 3,
      name: 'Travel',
      collapsed: false,
      items: [
        { id: 6, title: 'The Top 5 Destinations for Adventure Travel', link: '/blog/adventure' }
      ]
    }
  ]
}

function handleItemClick(item) {
  console.log('Item clicked:', item)
}
</script>

<template>
  <!-- Basic grouped mode -->
  <TvSidebar 
    grouped 
    :data="groupedData" 
    @click="handleItemClick"
  />
  
  <!-- Grouped mode with search -->
  <TvSidebar 
    grouped 
    searchable 
    search-placeholder="Search posts..."
    :data="groupedData" 
    @click="handleItemClick"
  />
  
  <!-- Grouped mode with limit (applies to items per group) -->
  <TvSidebar 
    grouped 
    :limit="2"
    :data="groupedData" 
    @click="handleItemClick"
  />
</template>
```

### New Items Indicator
Mark items as new by adding `isNew: true` to the item object. Customize the label text with `newLabelText`.

```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'

const listData = {
  title: "Updates",
  list: [
    { id: 1, title: "Stable Release", link: "/v1", isNew: true },
    { id: 2, title: "Beta Release", link: "/beta" }
  ]
}
</script>

<template>
  <TvSidebar :data="listData" new-label-text="UPDATED" />
</template>
```
```

### Nuxt Integration
```diff
- Using with Nuxt routing:
- <TvSidebar linkTag="nuxt-link" :data="blogPosts" />
```
Nuxt works without router integration in the component. Handle navigation in your click handlers (see Navigation Handling below).

## Data Structure

### List Mode Data
```typescript
{
  title: string,
  list: Array<{
    id: number | string,
    title: string,
    link?: string, // optional; use in your click handler if you want to navigate
    isNew?: boolean // optional; displays a 'New' badge
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
    link?: string   // optional; use in your click handler for manual navigation
  }
}
```

### Grouped Mode Data
```typescript
{
  title: string,
  groups: Array<{
    id: number | string,
    name: string,           // Group/category name
    collapsed: boolean,     // Initial collapsed state
    items: Array<{
      id: number | string,
      title: string,
      link?: string,       // optional; use in your click handler if you want to navigate
      isNew?: boolean      // optional; displays a 'New' badge
    }>
  }>
}
```

## Styling
The component uses SCSS for styling. Styles are automatically included when you import the component. The sidebar includes:
- Clean, minimal design
- Responsive layout
- Title with separator line
- Hover effects on interactive items
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

## Navigation Handling
Since the component does not perform navigation, handle it in your click handlers. Example with Vue Router:
```vue
<script setup>
import { TvSidebar } from '@todovue/tv-sidebar'
import { useRouter } from 'vue-router'

const router = useRouter()

const listData = {
  title: 'Recent Posts',
  list: [
    { id: 1, title: 'Getting Started with Nuxt 3', link: '/blog/nuxt-3' },
    { id: 2, title: 'Vue Composition API', link: '/blog/composition-api' }
  ]
}

function handleClick(item) {
  if (item?.link) router.push(item.link)
}
</script>

<template>
  <TvSidebar :data="listData" @click="handleClick" />
</template>
```

## Accessibility
- Semantic structure with clear headings
- Alt text support for images
- Interactive items emit click events; if you need keyboard accessibility, consider handling `keydown` (Enter/Space) on your side or wrapping with accessible elements/roles
- Color contrast considerations for labels

## SSR Notes
- No direct DOM access (`window` / `document`) → safe for SSR
- Compatible with Nuxt 3 out of the box
- Styles are bundled and auto-imported
- No router/nuxt-link dependency inside the component

## Development
```bash
git clone https://github.com/TODOvue/tv-sidebar.git
cd tv-sidebar
npm install
npm run dev     # run demo playground
npm run build   # build library
```
Local demo served from Vite using `index.html` + `src/demo` examples.

## Contributing
PRs and issues welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).

## License
MIT © TODOvue

## Dependencies
- `vue` (^3.0.0) - Peer dependency
- `@todovue/tv-label` - Used for category/label display mode

### Attributions
Crafted with ❤️ for the TODOvue component ecosystem by Cristhian Daza
