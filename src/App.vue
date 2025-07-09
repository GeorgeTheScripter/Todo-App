<template>
  <div class="app">
    <Header>Simple Todo App</Header>

    <div class="w-[960px] mx-auto my-[32px] flex flex-col gap-4">
      <div class="flex justify-between text-3xl">
        <h1>All tasks</h1>
        <span>{{ tasks.length }}</span>
      </div>

      <PostList :tasks="tasks" @delete="handleDelete" />

      <Form @addTask="handleSubmit" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

import Header from "@/components/Header.vue";
import Form from "@/components/Form.vue";
import PostList from "@/components/PostList.vue";

const tasks = ref([]);

const handleSubmit = (newTask) => tasks.value.push(newTask);

const handleDelete = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
};
</script>
