<template>
  <div class="flex flex-col gap-2">
    <Post
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @move="handleMove(task.id)"
      @return="handleReturn(task.id)"
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

const emit = defineEmits(["move", "return"]);

const handleMove = (id) => {
  emit("move", id);
};

const handleReturn = (id) => {
  emit("return", id);
};
</script>
