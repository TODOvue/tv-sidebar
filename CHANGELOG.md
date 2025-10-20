# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---
## [1.0.0] - 2025-01-19

### Added
- Initial release of `@todovue/tv-sidebar` component
- Three display modes:
  - **Default List Mode**: Numbered list with links
  - **Categories/Labels Mode**: Colored category labels with click events
  - **Image Mode**: Display images with optional clickable links
- Core props:
  - `data` - Main data object for sidebar content
  - `linkTag` - Support for both `router-link` (Vue Router) and `nuxt-link` (Nuxt)
  - `isImage` - Enable image display mode
  - `isLabel` - Enable categories/labels display mode
  - `limit` - Control maximum number of items displayed
  - `clickable` - Make images clickable in image mode
- Events:
  - `clickLabel` - Emitted when a label/category is clicked
  - `click` - Native click passthrough
- `useSidebar` composable for component logic:
  - Dynamic link component resolution
  - List limiting functionality
  - Label click handling
- SCSS styling with:
  - Clean, minimal design
  - Responsive layout
  - Title with separator line
  - Hover effects on links
  - Proper spacing and typography
- SSR compatibility (Nuxt 3 ready)
- Tree-shakeable build with Vue as external dependency
- TypeScript support with type definitions
- Integration with `@todovue/tv-label` for category display
- Demo playground with multiple examples:
  - Default list view
  - Default with item limit
  - Categories view
  - Categories with limit
  - Image view
  - Clickable image view
- Comprehensive documentation:
  - Installation guides for npm, yarn, and pnpm
  - Quick start for SPA and Nuxt 3/SSR
  - Component registration options
  - Props and events documentation
  - Usage examples for all modes
  - Data structure specifications
  - Styling and customization guide
  - Router integration guide
  - Accessibility notes

### Features
- Framework-agnostic sidebar component for Vue 3
- Multiple layout options for different content types
- Flexible routing system compatible with Vue Router and Nuxt
- Responsive and accessible design
- Zero DOM assumptions (SSR-safe)
- No direct `window` or `document` access
- Auto-imported styles when using the component
- Semantic HTML structure
- Keyboard navigation support
- ARIA-compliant markup

### Technical Details
- Built with Vite
- SCSS for styling with modular architecture
- Composition API with composables
- TypeScript entry point
- ES Module and CommonJS builds
- Minimal bundle size with external Vue dependency
- Node.js >= 20.19.0 required

---
[1.0.0]: https://github.com/TODOvue/tv-sidebar/pull/1/files
