<template>
  <div
    class="p-4 bg-blue-100 dark:bg-slate-800 rounded-xl flex flex-col gap-2 text-blue-800 dark:text-slate-200"
    @click.stop="methods.openPopup(task)"
  >
    <h3 class="text-xl font-medium">{{ task.title }}</h3>
    <div class="flex flex-col gap-5">
      <p>
        {{ task.description }}
      </p>

      <div class="flex gap-1">
        <button
          v-if="task.status === TASK_STATUS.ACTIVE"
          :class="`px-3 py-2 rounded-xl cursor-pointer ${COLORS.DONE}`"
          @click.stop="methods.moveToDone(task.id)"
        >
          Mark as complete
        </button>

        <button
          v-if="task.status === TASK_STATUS.DONE"
          :class="`px-3 py-2 rounded-xl cursor-pointer ${COLORS.RETURN}`"
          @click.stop="methods.handleReturn(task.id)"
        >
          Return
        </button>

        <button
          v-if="task.status === TASK_STATUS.DONE"
          :class="`px-3 py-2 rounded-xl cursor-pointer ${COLORS.DELETE}`"
          @click.stop="methods.handleDelete(task.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { tasksKey } from "@/composables/useTasks";

const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const { methods, TASK_STATUS, COLORS } = inject(tasksKey);
</script>
