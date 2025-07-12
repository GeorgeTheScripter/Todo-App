<template>
  <div
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
        <h3 class="text-2xl mb-2">{{ props.post.title }}</h3>
        <p>{{ props.post.description }}</p>
      </div>

      <div class="self-end">
        <p class="text-[18px]/[60%] flex items-center gap-2">
          status:
          <span :class="statusClass">{{
            props.post.isDone ? "Done" : "Active"
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const { methods } = inject("tasks");

const statusClass = computed(() => {
  const base = "block py-2 px-3  rounded-xl ";
  const status = props.post.isDone
    ? " bg-green-200 text-green-400"
    : " bg-red-200 text-red-400";
  return base + status;
});
</script>
