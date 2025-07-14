<template>
  <div
    v-if="selectedPost"
    @click.stop="methods.closePopup()"
    class="top-0 bottom-0 right-0 left-0 fixed flex justify-center items-center bg-[rgba(0,0,0,0.5)]"
  >
    <div
      @click.stop
      class="bg-blue-100 dark:bg-slate-800 rounded-xl p-2 w-[560px] h-[250px] flex flex-col justify-between text-blue-800 dark:text-slate-200"
    >
      <div class="flex flex-col h-full pl-3">
        <span
          @click.stop="methods.closePopup()"
          class="self-end cursor-pointer w-[20px] h-[20px] text-red-400 flex items-center justify-center text-[20px]"
          >&times;</span
        >
        <form
          @submit.prevent="saveChanges"
          class="w-full flex flex-col justify-between h-full"
        >
          <div class="flex flex-col gap-2">
            <input
              class="w-full text-2xl outline-0"
              name="text"
              v-model="editablePost.title"
              placeholder="Title"
              maxlength="50"
            />
            <input
              class="w-full outline-0"
              name="text"
              v-model="editablePost.description"
              placeholder="Description"
              maxlength="250"
            />
          </div>

          <div class="flex justify-between">
            <div class="self-end">
              <p class="text-[18px]/[60%] flex items-center gap-2">
                status:
                <span :class="`block py-2 px-3  rounded-md ${statusColor}`">{{
                  selectedPost.status
                }}</span>
              </p>
            </div>

            <button class="py-1 px-4 bg-blue-200 rounded-md cursor-pointer">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Form from "./Form.vue";
import { inject, computed, ref, watch } from "vue";

const { selectedPost, methods, TASK_STATUS, COLORS } = inject("tasks");

const editablePost = ref({
  title: "",
  description: "",
  id: null,
  status: "",
});

watch(
  selectedPost,
  (newValue) => {
    if (newValue) {
      editablePost.value = { ...newValue };
    }
  },
  { immediate: true }
);

const saveChanges = () => {
  if (!selectedPost.value) return;
  if (editablePost.value.title === "" || editablePost.value.title === "") {
    alert("Заполните поля");
  } else {
    Object.assign(selectedPost.value, editablePost.value);
    methods.closePopup();
  }
};

const statusColor = computed(() => {
  if (!editablePost.value) return "";

  switch (editablePost.value.status) {
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
