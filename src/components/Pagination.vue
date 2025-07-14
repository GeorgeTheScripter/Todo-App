<template>
  <div class="w-full flex justify-center">
    <div class="flex gap-1">
      <div
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="[
          'flex justify-center items-center w-[32px] h-[32px] rounded-md cursor-pointer text-blue-800 dark:text-slate-200',
          page === currentPage
            ? 'bg-blue-300 dark:bg-slate-900'
            : 'bg-blue-100 dark:bg-slate-800',
        ]"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["changePage"]);

const changePage = (page) => {
  emit("changePage", page);
};
</script>
