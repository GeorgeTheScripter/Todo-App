<template>
  <div class="p-4 bg-blue-100 rounded-xl flex flex-col gap-2">
    <h3 class="text-xl font-medium">{{ props.task.title }}</h3>
    <div class="flex flex-col gap-5">
      <p>
        {{ props.task.description }}
      </p>

      <div class="flex gap-1">
        <button class="px-3 py-2 bg-blue-200 rounded-xl" @click="handleDelete">
          done
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  task: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const emit = defineEmits(["delete"]);

const handleDelete = () => {
  emit("delete", props.task.id);
};
</script>
