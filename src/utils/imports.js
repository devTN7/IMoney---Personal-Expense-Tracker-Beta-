/* Register global component for app (layouts) */
import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/authentication-layout.vue"))
  );

  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default-layout.vue"))
  );
}
