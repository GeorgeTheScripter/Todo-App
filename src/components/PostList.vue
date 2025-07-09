<template>
  <div class="flex flex-col gap-2">
    <Post
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @delete="handleDelete"
    />
  </div>
</template>

<script setup>
import Post from "@/components/Post.vue";

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(["delete"]);

const handleDelete = (id) => {
  emit("delete", id);
};
</script>
