import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import axios from 'axios';
import VueAxios from 'vue-axios';

createApp(App).use(VueAxios,axios).mount('#app')
//createApp(App).use(router).mount('#app')
