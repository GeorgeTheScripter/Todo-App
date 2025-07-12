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

const active = ref([]);
const done = ref([]);
const isPopupOpened = ref(false);
const selectedPost = ref(null);

provide("tasks", {
  active: active,
  done: done,
  isPopupOpened: isPopupOpened,
  selectedPost: selectedPost,
  methods: {
    addNewTask(newTask) {
      active.value.push(newTask);
    },

    moveToDone(id) {
      const idx = active.value.findIndex((elem) => elem.id === id);

      if (idx !== -1) {
        const [doneTask] = active.value.splice(idx, 1);
        done.value.push({ ...doneTask, isDone: true });
      }
    },

    handleDelete(id) {
      done.value = done.value.filter((elem) => elem.id !== id);
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
