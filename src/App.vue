<template>
  <div class="bg-blue-200 dark:bg-slate-700 h-full">
    <Header />

    <RouterView />
    <Popup v-if="tasks.isPopupOpened" />
  </div>
</template>

<script setup lang="ts">
import { provide, InjectionKey } from "vue";

import Header from "@/components/Header.vue";
import Popup from "@/components/Popup.vue";

import useTasks from "@/composables/useTasks";
import {
  type TypeUseTaskReturn,
  TASK_STATUS,
  COLORS,
  tasksKey,
} from "@/composables/useTasks";

const tasks: TypeUseTaskReturn = useTasks();

provide(tasksKey, { ...tasks, TASK_STATUS, COLORS });
</script>
