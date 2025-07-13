<template>
  <div
    class="p-4 bg-blue-100 rounded-xl flex flex-col gap-2"
    @click.stop="methods.openPopup(task)"
  >
    <h3 class="text-xl font-medium">{{ props.task.title }}</h3>
    <div class="flex flex-col gap-5">
      <p>
        {{ props.task.description }}
      </p>

      <div class="flex gap-1">
        <button
          v-if="props.task.status === TASK_STATUS.ACTIVE"
          class="px-3 py-2 bg-blue-200 rounded-xl cursor-pointer"
          @click.stop="methods.moveToDone(task.id)"
        >
          Mark as done
        </button>

        <button
          v-if="props.task.status === TASK_STATUS.DONE"
          class="px-3 py-2 bg-blue-200 rounded-xl cursor-pointer"
          @click.stop="methods.handleReturn(task.id)"
        >
          Return
        </button>

        <button
          v-if="props.task.status === TASK_STATUS.DONE"
          class="px-3 py-2 bg-blue-200 rounded-xl cursor-pointer"
          @click.stop="methods.handleDelete(task.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from "vue";

const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const { TASK_STATUS, methods } = inject("tasks");
</script>
