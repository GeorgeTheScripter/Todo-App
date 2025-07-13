import { ref } from "vue";

export const TASK_STATUS = {
  ACTIVE: "Active",
  DONE: "Completed",
  DELETED: "Deleted",
};

export const COLORS = {
  DONE: "bg-green-200 text-green-500",
  RETURN: "bg-blue-200 text-blue-500",
  DELETE: "bg-red-200 text-red-500",
  ACTIVE: "bg-blue-200 text-blue-500",
};

export default function useTasks() {
  const active = ref([]);
  const done = ref([]);
  const deleted = ref([]);
  const isPopupOpened = ref(false);
  const selectedPost = ref(null);

  const addNewTask = (newTask) => {
    active.value.push({ ...newTask, status: TASK_STATUS.ACTIVE });
  };

  const moveToDone = (id) => {
    const idx = active.value.findIndex((elem) => elem.id === id);

    if (idx !== -1) {
      const [doneTask] = active.value.splice(idx, 1);
      done.value.push({ ...doneTask, status: TASK_STATUS.DONE });
    }
  };

  const handleDelete = (id) => {
    const idx = done.value.findIndex((elem) => elem.id === id);

    if (idx !== -1) {
      const [doneTask] = done.value.splice(idx, 1);
      deleted.value.push({ ...doneTask, status: TASK_STATUS.DELETED });
    }
  };

  const handleReturn = (id) => {
    const idx = done.value.findIndex((elem) => elem.id === id);

    if (idx !== -1) {
      const [doneTask] = done.value.splice(idx, 1);
      active.value.push({ ...doneTask, status: TASK_STATUS.ACTIVE });
    }
  };

  const openPopup = (post) => {
    selectedPost.value = post;
    isPopupOpened.value = true;
  };

  const closePopup = () => {
    isPopupOpened.value = false;
    selectedPost.value = null;
  };

  return {
    active,
    done,
    deleted,
    isPopupOpened,
    selectedPost,

    methods: {
      addNewTask,
      moveToDone,
      handleDelete,
      handleReturn,
      openPopup,
      closePopup,
    },
  };
}
