<template>
  <form @submit.prevent="onSubmit">
    <!--START: MAIN FORM-->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  id="total"
                  class="text-4xl text-dark w-full outline-none mt-1"
                  type="text"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-1">
                <input
                  id="category"
                  class="text-2xl text-dark w-full outline-none"
                  type="text"
                  placeholder="Select a category"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span class="flex-none w-10 mr-4">
                  <i class="t2ico t2ico-document text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-1">
                <input
                  id="note"
                  class="text-dark w-full outline-none"
                  type="text"
                  placeholder="Note"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-calendar text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2 border-b border-gray-100">
                <div class="text-dark w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-wallet text-2xl"></i>
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!--START: DETAIL BUTTON-->
    <div class="row mt-8" v-if="!isMoreDetails">
      <button
        @click="isMoreDetails = true"
        class="bg-white rounded-lg py-3 w-full text-primary font-semibold"
      >
        More Details
      </button>
    </div>

    <template v-if="isMoreDetails">
      <!--START: ADVANCED FORM-->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div
                  class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                >
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-location text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-1">
                  <input
                    id="location"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="Select a location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div
                  class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                >
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-users text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-1">
                  <input
                    id="withPerson"
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="With Person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!--START: UPLOAD PHOTOS-->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="withPerson" class="flex items-center text-primary">
                <div
                  class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                >
                  <span class="flex-none w-10 mr-4">
                    <i class="t2ico t2ico-camera text-2xl"></i>
                  </span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-1">
                  <div class="w-full font-semibold">Upload Photos</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </template>

    <button type="submit" class="bg-primary text-white">Test</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useUser } from "@/composables/useUser";

export default {
  setup() {
    const isMoreDetails = ref(false);
    const { getUser } = useUser();

    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());

    function onSubmit() {
      const user = getUser();
      const transaction = {
        total: total.value,
        category: category.value,
        note: note.value,
        time: time.value,
        userID: user.uid,
      };

      console.log(transaction);
    }

    return { isMoreDetails, total, category, note, time, onSubmit };
  },
};
</script>
