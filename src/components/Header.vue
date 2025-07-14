<template>
  <header
    class="w-full flex justify-center bg-blue-800 dark:bg-slate-800 text-blue-200 dark:text-slate-200 fixed top-0 z-50"
  >
    <div class="w-[960px] py-[20px] flex justify-between items-center">
      <div class="text-5xl">Simple Todo App</div>
      <div class="flex gap-4">
        <button @click="toggleTheme">{{ theme }}</button>
        <nav class="flex gap-2">
          <RouterLink
            v-for="link in links"
            :key="link.text"
            :to="link.path"
            class="py-2 px-3 rounded-xl text-blue-800 dark:text-slate-800"
            :class="{
              'bg-white': $route.path !== link.path,
              'bg-blue-200 dark:bg-slate-200': $route.path === link.path,
            }"
          >
            {{ link.text }}
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

import useTheme from "@/composables/useTheme";

const route = useRoute();
const links = ref([
  { path: "/", text: "Active" },
  { path: "/done", text: "Completed" },
  { path: "/delete", text: "Deleted" },
]);

const { theme, toggleTheme } = useTheme();
</script>
