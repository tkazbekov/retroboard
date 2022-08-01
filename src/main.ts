import { createApp } from "vue";
import { createPinia } from "pinia";

import Socket from '@/plugins/socket';

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Socket, {
    uri: `${document.location.hostname}:3000`,
    options: {}
});

app.mount("#app");
