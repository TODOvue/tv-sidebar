import { createApp } from 'vue'
import TvSidebar from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import '@todovue/tv-label/style.css'
import './style.scss'

const app = createApp(TvSidebar)
app.mount('#tv-sidebar')
