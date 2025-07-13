<template>
  <div class="app">
    <Header />

    <RouterView />
    <Popup v-if="tasks.isPopupOpened" />
  </div>
</template>

<script setup>
import { ref, provide } from "vue";

import Header from "@/components/Header.vue";
import Popup from "@/components/Popup.vue";

import useTasks from "./composables/useTasks";
import { TASK_STATUS, COLORS } from "./composables/useTasks";

const tasks = useTasks();

provide("tasks", { ...tasks, TASK_STATUS, COLORS });
</script>
