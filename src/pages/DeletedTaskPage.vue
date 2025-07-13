<template>
  <div class="w-[960px] mx-auto mt-[120px] flex flex-col gap-4">
    <div class="flex justify-between text-3xl">
      <h1>Deleted tasks</h1>
      <span>{{ deleted.length }}</span>
    </div>

    <PostList class="opacity-40" :tasks="deleted" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import PostList from "@/components/PostList.vue";

const { deleted } = inject("tasks");
</script>
