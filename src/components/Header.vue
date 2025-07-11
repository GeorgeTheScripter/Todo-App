<template>
  <header class="w-full flex justify-center bg-blue-800 text-white">
    <div class="w-[960px] py-[20px] flex justify-between items-center">
      <div class="text-5xl">Simple Todo App</div>

      <nav class="flex gap-2">
        <RouterLink
          v-for="link in links"
          :key="link.text"
          class="py-2 px-3 rounded-xl text-blue-800"
          :class="{
            'bg-white': $route.path !== link.path,
            'bg-blue-200': $route.path === link.path,
          }"
          :to="link.path"
        >
          {{ link.text }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const links = ref([
  { path: "/", text: "All" },
  { path: "/done", text: "Completed" },
]);
</script>
