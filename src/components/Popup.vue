<template>
  <div
    v-if="tasks.selectedPost.value"
    @click.stop="tasks.methods.closePopup()"
    class="top-0 bottom-0 right-0 left-0 fixed flex justify-center items-center bg-[rgba(0,0,0,0.5)]"
  >
    <div
      @click.stop
      class="bg-blue-100 dark:bg-slate-800 rounded-xl p-2 w-[560px] h-[250px] flex flex-col justify-between text-blue-800 dark:text-slate-200"
    >
      <div class="flex flex-col h-full pl-3">
        <span
          @click.stop="tasks.methods.closePopup()"
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
                  tasks.selectedPost.value?.status
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

<script setup lang="ts">
import { inject, computed, ref, watch, ComputedRef, Ref } from "vue";
import {
  tasksKey,
  TypeTaskStatus,
  TypeTask,
  type ProvidedTasks,
} from "@/composables/useTasks";

const tasks: ProvidedTasks = inject(tasksKey)!;

const editablePost = ref<TypeTask>({
  title: "",
  description: "",
  id: null,
  status: "",
});

watch(
  tasks.selectedPost,
  (newValue) => {
    if (newValue) {
      editablePost.value = { ...newValue };
    }
  },
  { immediate: true }
);

const saveChanges = () => {
  if (!tasks.selectedPost.value) return;
  if (
    editablePost.value.title === "" ||
    editablePost.value.description === ""
  ) {
    alert("Заполните поля");
  } else {
    Object.assign(tasks.selectedPost.value, editablePost.value);
    tasks.methods.closePopup();
  }
};

const statusColor: ComputedRef<string> = computed(() => {
  if (!editablePost.value) return "";

  switch (editablePost.value.status) {
    case tasks.TASK_STATUS.DONE:
      return tasks.COLORS.DONE;
    case tasks.TASK_STATUS.ACTIVE:
      return tasks.COLORS.ACTIVE;
    case tasks.TASK_STATUS.DELETED:
      return tasks.COLORS.DELETE;
    default:
      return "bg-gray-200 text-gray-500";
  }
});
</script>
