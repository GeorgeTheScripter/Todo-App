<template>
  <div
    v-if="selectedPost"
    @click.stop="methods.closePopup()"
    class="top-0 bottom-0 right-0 left-0 fixed flex justify-center items-center bg-[rgba(0,0,0,0.5)]"
  >
    <div
      @click.stop
      class="bg-white rounded-xl p-2 w-[560px] h-[250px] flex flex-col justify-between"
    >
      <div class="flex flex-col pl-3">
        <span
          @click.stop="methods.closePopup()"
          class="self-end cursor-pointer w-[20px] h-[20px] text-red-400 flex items-center justify-center text-[20px]"
          >&times;</span
        >
        <h3 class="text-2xl mb-2">{{ selectedPost.title }}</h3>
        <p>{{ selectedPost.description }}</p>
      </div>

      <div class="self-end">
        <p class="text-[18px]/[60%] flex items-center gap-2">
          status:
          <span :class="`block py-2 px-3  rounded-xl ${statusColor}`">{{
            selectedPost.status
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";

const { selectedPost, methods, TASK_STATUS, COLORS } = inject("tasks");

const statusColor = computed(() => {
  if (!selectedPost.value) return "";

  switch (selectedPost.value.status) {
    case TASK_STATUS.DONE:
      return COLORS.DONE;
    case TASK_STATUS.ACTIVE:
      return COLORS.ACTIVE;
    case TASK_STATUS.DELETED:
      return COLORS.DELETE;
    default:
      return "bg-gray-200 text-gray-500";
  }
});
</script>
