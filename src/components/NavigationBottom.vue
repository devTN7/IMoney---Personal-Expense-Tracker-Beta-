<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 bg-white pt-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-between h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="{ name: navItem.name, params: {} }">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div
      data-circle
      class="absolute top-0 left-1/2 transform -translate-x-1/2"
    ></div>
    <div
      data-circle-inset
      class="absolute flex items-center justify-center text-white bg-primary w-12 h-12 rounded-full cursor-pointer -top-6 left-1/2 transform -translate-x-1/2"
      @click="goToRoute"
    >
      <i class="t2ico t2ico-plus"></i>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { NAV_BOTTOM_ITEMS } from "@/constants";
export default {
  setup() {
    const navItems = reactive(NAV_BOTTOM_ITEMS);
    const router = useRouter();

    function goToRoute() {
      router.push({ name: "NewTransaction", params: {} });
    }
    return { navItems, goToRoute };
  },
};
</script>

<style scoped lang="css">
footer#footer > div[data-circle] {
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}

footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
