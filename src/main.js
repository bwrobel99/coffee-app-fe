import "./sass/style.css";

import "@fortawesome/fontawesome-free/css/all.css";
import "vue-toast-notification/dist/theme-bootstrap.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ToastPlugin from "vue-toast-notification";

import App from "./App.vue";
import router from "./router";

// add cors to update server proxy
import cors from "cors";

const app = createApp(App);

app.use(cors);
app.use(createPinia());
app.use(router);
app.use(ToastPlugin);

app.mount("#app");
