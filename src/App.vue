<template>
  <div class="app">
    <Header />

    <RouterView />
  </div>
</template>

<script setup>
import { ref, reactive, provide } from "vue";

import Header from "@/components/Header.vue";

const active = ref([]);
const done = ref([]);

provide("tasks", {
  active: active,
  done: done,
  methods: {
    addNewTask(newTask) {
      active.value.push(newTask);
    },

    moveToDone(id) {
      const idx = active.value.findIndex((elem) => elem.id === id);

      if (idx !== -1) {
        const [doneTask] = active.value.splice(idx, 1);
        done.value.push({ ...doneTask, isDone: true });
      }
    },

    handleDelete(id) {
      done.value = done.value.filter((elem) => elem.id !== id);
    },
  },
});
</script>
