<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home">home</div>
  <div class="mt-6" v-if="user">{{ user.displayName }}</div>
</template>

<script>
import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    return { user };
  },
};
</script>
