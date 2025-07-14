<template>
  <div class="flex flex-col gap-2">
    <Post v-for="task in paginatedTask" :key="task.id" :task="task" />
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @changePage="changePage"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import Post from "@/components/Post.vue";
import Pagination from "./Pagination.vue";

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const currentPage = ref(1);
const limitPerpage = ref(4);

const totalPages = computed(() => {
  return Math.ceil(props.tasks.length / limitPerpage.value);
});

const paginatedTask = computed(() => {
  const start = (currentPage.value - 1) * limitPerpage.value;
  const end = start + limitPerpage.value;
  return props.tasks.slice(start, end);
});

const changePage = (page) => {
  currentPage.value = page;
};
</script>
