import TvSidebar from './components/TvSidebar.vue'

(TvSidebar as any).install = (app: any) => {
    app.component('TvSidebar', TvSidebar)
};

export const TvSidebarPlugin = {
    install(app: any) {
        app.component('TvSidebar', TvSidebar)
    }
}

export { TvSidebar }
export default TvSidebar
