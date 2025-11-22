import type { App, Plugin } from 'vue'
import _TvSidebar from './components/TvSidebar.vue'
import './style.scss'

const TvSidebar = _TvSidebar as typeof _TvSidebar & Plugin;
TvSidebar.install = (app: App) => {
  app.component('TvSidebar', TvSidebar)
};

export { TvSidebar }

export const TvSidebarPlugin: Plugin = {
  install: TvSidebar.install
};
export default TvSidebar;

declare module 'vue' {
  export interface GlobalComponents {
    TvSidebar: typeof TvSidebar;
  }
}
