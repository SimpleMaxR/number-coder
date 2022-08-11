import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createMetaManager } from "vue-meta";
import { plugin as vueMetaPlugin } from "vue-meta";

createApp(App)
    .mount('#app')
    .use(vueMetaPlugin)
    .use(createMetaManager())

