<template>
  <div class="app">
    <Header />

    <RouterView />
    <Popup v-if="isPopupOpened" :post="selectedPost" @close="closePopup" />
  </div>
</template>

<script setup>
import { ref, reactive, provide } from "vue";

import Header from "@/components/Header.vue";
import Popup from "@/components/Popup.vue";

const TASK_STATUS = {
  ACTIVE: "active",
  DONE: "done",
  DELETED: "deleted",
};

const active = ref([]);
const done = ref([]);
const deleted = ref([]);
const isPopupOpened = ref(false);
const selectedPost = ref(null);

provide("tasks", {
  active: active,
  done: done,
  deleted: deleted,
  isPopupOpened: isPopupOpened,
  selectedPost: selectedPost,
  TASK_STATUS: TASK_STATUS,
  methods: {
    addNewTask(newTask) {
      active.value.push({ ...newTask, status: TASK_STATUS.ACTIVE });
    },

    moveToDone(id) {
      const idx = active.value.findIndex((elem) => elem.id === id);

      if (idx !== -1) {
        const [doneTask] = active.value.splice(idx, 1);
        done.value.push({ ...doneTask, status: TASK_STATUS.DONE });
      }
    },

    handleDelete(id) {
      const idx = done.value.findIndex((elem) => elem.id === id);

      if (idx !== -1) {
        const [doneTask] = done.value.splice(idx, 1);
        deleted.value.push({ ...doneTask, status: TASK_STATUS.DELETED });
      }
    },

    handleReturn(id) {
      const idx = done.value.findIndex((elem) => elem.id === id);

      if (idx !== -1) {
        const [doneTask] = done.value.splice(idx, 1);
        active.value.push({ ...doneTask, status: TASK_STATUS.ACTIVE });
      }
    },

    openPopup(post) {
      selectedPost.value = post;
      isPopupOpened.value = true;
    },

    closePopup() {
      isPopupOpened.value = false;
      selectedPost.value = null;
    },
  },
});
</script>
