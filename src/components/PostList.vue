<template>
  <div class="flex flex-col gap-2">
    <Post v-for="task in tasks" :key="task.id" :task="task" />
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
</script>
