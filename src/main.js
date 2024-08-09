import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router/index.js'; // Importa el router desde su archivo

const app = createApp(App);
const pinia = createPinia();


app.use(pinia);
app.use(router); // Usa Vue Router con la aplicación antes de montarla
app.mount('#app');
