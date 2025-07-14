<template>
  <div>
    <button
      v-if="isAdded"
      @click="openForm"
      class="bg-blue-800 dark:bg-slate-800 text-white w-full rounded-xl cursor-pointer py-6"
    >
      + Add new task
    </button>

    <form v-else class="flex gap-2" @submit.prevent="addTask">
      <div class="flex flex-col w-full gap-1">
        <FormField
          v-for="field in fields"
          :key="field.id"
          v-model="form[field.key].value"
          :placeholder="form[field.key].placeholder"
          :maxLength="form[field.key].maxLength"
        />
      </div>

      <button
        class="bg-blue-800 dark:bg-slate-800 text-white w-[80px] rounded-xl cursor-pointer"
      >
        +
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import FormField from "./FormField.vue";

const form = reactive({
  title: {
    id: 1,
    value: "",
    placeholder: "title",
    maxLength: 50,
  },
  descr: {
    id: 2,
    value: "",
    placeholder: "descr",
    maxLength: 250,
  },
});

const fields = [
  { key: "title", id: 1 },
  { key: "descr", id: 2 },
];

let isAdded = ref(true);

const openForm = () => {
  isAdded.value = false;
};

const emit = defineEmits(["addTask"]);

const addTask = () => {
  if (form.title.value) {
    emit("addTask", {
      title: form.title.value,
      description: form.descr.value,
      isDone: false,
      id: Date.now(),
    });
    form.title.value = "";
    form.descr.value = "";
    isAdded.value = true;
  }
};
</script>
