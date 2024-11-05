<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!--Start: Form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email Address</span>
            <input
              name="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="email"
              placeholder="example@gmail.com"
              autocomplete="username"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              name="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="password"
              placeholder="Example"
              autocomplete="current-password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign in
          </button>
          <button
            v-else
            type="button"
            class="py-3 text-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed"
            disabled
          >
            Loading
          </button>
        </div>
      </form>

      <!--Start: Error -->
      <div v-if="error" class="text-center text-red mt-4">
        <span>{{ error }}</span>
      </div>

      <!--Start: Direction-->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1">
          <router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-bold"
            >Sign up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useSignIn } from "@/composables/useSignIn";

export default {
  setup() {
    const { error, isPending, signIn } = useSignIn();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    async function onSubmit() {
      await signIn(email.value, password.value);
      if (!error.value) router.push({ name: "Profile", params: {} });
    }

    return { email, password, error, isPending, onSubmit };
  },
};
</script>
