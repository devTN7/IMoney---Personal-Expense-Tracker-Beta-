import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

import { registerGlobalComponents } from "./utils/imports";
import { projectAuth } from "./configs/firebase";

let app;
// CHECK User state
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    registerGlobalComponents(app);

    app.use(router);

    app.mount("#app");
  }
});
