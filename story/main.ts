import { createApp } from 'vue';
import App from './app.vue';
import V3Component from 'src'


const app = createApp(App);
app.use(V3Component)

app.mount('#app');
