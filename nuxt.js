import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-sidebar',
    configKey: 'tvSidebar'
  },
  setup(_options, nuxt) {
    const sidebarCss = '@todovue/tv-sidebar/style.css';
    const labelCss = '@todovue/tv-label/style.css';
    
    const pushUnique = (path) => {
      if (!nuxt.options.css.includes(path)) {
        nuxt.options.css.push(path);
      }
    };
    
    pushUnique(sidebarCss);
    pushUnique(labelCss);
  }
})
