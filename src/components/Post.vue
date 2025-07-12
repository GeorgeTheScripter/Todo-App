<template>
  <div
    class="p-4 bg-blue-100 rounded-xl flex flex-col gap-2"
    @click.stop="openPopup"
  >
    <h3 class="text-xl font-medium">{{ props.task.title }}</h3>
    <div class="flex flex-col gap-5">
      <p>
        {{ props.task.description }}
      </p>

      <div class="flex gap-1">
        <button
          class="px-3 py-2 bg-blue-200 rounded-xl cursor-pointer"
          @click.stop="handleMove(props.task.id)"
        >
          {{ btnText }}
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

const { methods } = inject("tasks");

const btnText = computed(() => {
  return props.task.isDone ? "Delete" : "Done";
});

const emit = defineEmits(["move"]);

const handleMove = (id) => {
  emit("move", id);
};

const openPopup = () => {
  methods.openPopup(props.task);
};
</script>
