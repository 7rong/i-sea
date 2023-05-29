import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
// // Import component
// import Loading from 'vue3-loading-overlay';
// // Import stylesheet
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import Loading from './components/LoadingComp.vue';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);

app.config.globalProperties.$filters = {
  currency,
  date,
};
app.use(VueAxios, axios);
app.use(router);
app.component('LoadingComp', Loading);
app.mount('#app');
