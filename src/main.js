import { createApp } from 'vue'
// import App from './App.vue'
import App2 from './App2.vue'
import store from './store'

const app = createApp(App2);
app.use(store);
app.mount('#app');
