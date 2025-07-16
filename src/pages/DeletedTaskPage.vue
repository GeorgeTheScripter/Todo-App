<template>
  <div class="w-[960px] mx-auto mt-[88px] flex flex-col gap-4 pt-8">
    <div
      class="flex justify-between text-3xl text-blue-800 dark:text-slate-200"
    >
      <h1>Deleted tasks</h1>
      <span>{{ deleted.length }}</span>
    </div>

    <PostList class="opacity-40" :tasks="deleted" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import PostList from "@/components/PostList.vue";
import { tasksKey } from "@/composables/useTasks";

const { deleted } = inject(tasksKey);
</script>
