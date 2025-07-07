<template>
  <div>
    <button
      v-if="isAdded"
      @click="openForm"
      class="bg-blue-800 text-white w-full rounded-xl cursor-pointer py-6"
    >
      + Add new task
    </button>
    <form v-else class="flex gap-2" @submit.prevent="addTask">
      <div class="flex flex-col w-full gap-1">
        <input
          v-model="newTask.title"
          placeholder="title"
          class="bg-blue-100 w-full py-2 px-4 rounded-xl"
        />
        <input
          v-model="newTask.description"
          placeholder="description"
          class="bg-blue-100 w-full py-2 px-4 rounded-xl"
        />
      </div>

      <button class="bg-blue-800 text-white w-[80px] rounded-xl cursor-pointer">
        +
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const newTask = reactive({ title: "", description: "" });
const emit = defineEmits(["addTask"]);
let isAdded = ref(true);

const openForm = () => {
  isAdded.value = false;
};

const addTask = () => {
  emit("addTask", { ...newTask, id: Date.now() });
  newTask.title = "";
  newTask.description = "";
  isAdded.value = true;
};
</script>
