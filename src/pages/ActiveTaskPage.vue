<template>
  <div class="w-[960px] mx-auto mt-[88px] flex flex-col gap-4 pt-8">
    <div
      class="flex justify-between text-3xl text-blue-800 dark:text-slate-200"
    >
      <h1>Active tasks</h1>
      <span>{{ active.length }}</span>
    </div>

    <Form @addTask="methods.addNewTask" />

    <PostList :tasks="active" />
  </div>
</template>

<script setup>
import { inject } from "vue";

import { tasksKey } from "@/composables/useTasks";
import PostList from "@/components/PostList.vue";
import Form from "@/components/Form.vue";

const { active, methods } = inject(tasksKey);
</script>
