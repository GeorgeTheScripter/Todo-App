<template>
  <div class="app">
    <Header>Simple Todo App</Header>

    <!-- <aside
      class="border-r-[1px] border-blue-800 w-fit px-5 py-1.5 flex flex-col gap-5 fixed transition duration-150 ease-in-out"
    >
      <nav>
        <ul>
          <li><a href="">All Tasks</a></li>
          <li><a href="">Favoritre</a></li>
          <li><a href="">Done</a></li>
        </ul>
      </nav>

      <button
        class="px-5 py-2 bg-blue-800 rounded-xl cursor-pointer text-white"
      >
        + New category
      </button>
    </aside> -->

    <div class="w-[960px] mx-auto my-[32px] flex flex-col gap-4">
      <div class="flex justify-between text-3xl">
        <h1 class="">All tasks</h1>
        <span>{{ tasks.length }}</span>
      </div>

      <div class="flex flex-col gap-2">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="p-4 bg-blue-100 rounded-xl flex flex-col gap-2"
        >
          <h3 class="text-xl font-medium">{{ task.title }}</h3>
          <div class="flex flex-col gap-5">
            <p>
              {{ task.description }}
            </p>

            <div class="flex gap-1">
              <button class="px-3 py-2 bg-blue-200 rounded-xl">favorite</button>
              <button class="px-3 py-2 bg-blue-200 rounded-xl">done</button>
            </div>
          </div>
        </div>
      </div>

      <Form @addTask="handleSubmit" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Header from "@/components/Header.vue";
import Form from "./components/Form.vue";

const tasks = ref([]);

const handleSubmit = (newTask) => tasks.value.push(newTask);
</script>
