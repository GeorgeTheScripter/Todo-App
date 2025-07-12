<template>
  <div class="w-[960px] mx-auto mt-[120px] flex flex-col gap-4">
    <div class="flex justify-between text-3xl">
      <h1>Done tasks</h1>
      <span>{{ done.length }}</span>
    </div>

    <PostList :tasks="done" @move="methods.handleDelete" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import PostList from "@/components/PostList.vue";

const { done, methods } = inject("tasks");
</script>
