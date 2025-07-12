<template>
  <div class="w-[960px] mx-auto mt-[120px] flex flex-col gap-4">
    <div class="flex justify-between text-3xl">
      <h1>All tasks</h1>
      <span>{{ active.length }}</span>
    </div>

    <Form @addTask="methods.addNewTask" />

    <PostList :tasks="active" @move="methods.moveToDone" />
  </div>
</template>

<script setup>
import { inject } from "vue";
import PostList from "@/components/PostList.vue";
import Form from "@/components/Form.vue";

const { active, methods } = inject("tasks");
</script>
