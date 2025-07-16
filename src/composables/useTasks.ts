import { ref, type Ref, InjectionKey } from "vue";

export type TypeTaskStatus = "Active" | "Completed" | "Deleted";
export type TypeTaskColors =
  | "bg-green-200 text-green-500"
  | "bg-blue-200 text-blue-500"
  | "bg-red-200 text-red-500"
  | "bg-blue-200 text-blue-500";

export type TypeTask = {
  title: string;
  description: string;
  id: number | null;
  status: TypeTaskStatus | null | undefined | "";
};

export const TASK_STATUS: Record<string, TypeTaskStatus> = {
  ACTIVE: "Active",
  DONE: "Completed",
  DELETED: "Deleted",
};

export const COLORS: Record<string, TypeTaskColors> = {
  DONE: "bg-green-200 text-green-500",
  RETURN: "bg-blue-200 text-blue-500",
  DELETE: "bg-red-200 text-red-500",
  ACTIVE: "bg-blue-200 text-blue-500",
};

export type ProvidedTasks = TypeUseTaskReturn & {
  TASK_STATUS: typeof TASK_STATUS;
  COLORS: typeof COLORS;
};

export const tasksKey: InjectionKey<ProvidedTasks> = Symbol("tasks");

export type TypeUseTaskReturn = {
  active: Ref<TypeTask[]>;
  done: Ref<TypeTask[]>;
  deleted: Ref<TypeTask[]>;
  isPopupOpened: Ref<boolean>;
  selectedPost: Ref<TypeTask | null>;

  methods: {
    addNewTask: (newTask: TypeTask) => void;
    moveToDone: (id: number) => void;
    handleDelete: (id: number) => void;
    handleReturn: (id: number) => void;
    openPopup: (post: TypeTask) => void;
    closePopup: () => void;
  };
};

export default function useTasks(): TypeUseTaskReturn {
  const active: Ref<TypeTask[]> = ref([]);
  const done: Ref<TypeTask[]> = ref([]);
  const deleted: Ref<TypeTask[]> = ref([]);
  const isPopupOpened: Ref<boolean> = ref(false);
  const selectedPost: Ref<TypeTask | null> = ref(null);

  const addNewTask = (newTask: TypeTask) => {
    active.value.push({ ...newTask, status: TASK_STATUS.ACTIVE });
  };

  const moveToDone = (id: number) => {
    const idx = active.value.findIndex((elem) => elem.id === id);

    if (idx !== -1) {
      const [doneTask] = active.value.splice(idx, 1);
      done.value.push({ ...doneTask, status: TASK_STATUS.DONE });
    }
  };

  const handleDelete = (id: number) => {
    const idx = done.value.findIndex((elem) => elem.id === id);

    if (idx !== -1) {
      const [doneTask] = done.value.splice(idx, 1);
      deleted.value.push({ ...doneTask, status: TASK_STATUS.DELETED });
    }
  };

  const handleReturn = (id: number) => {
    const idx = done.value.findIndex((elem) => elem.id === id);

    if (idx !== -1) {
      const [doneTask] = done.value.splice(idx, 1);
      active.value.push({ ...doneTask, status: TASK_STATUS.ACTIVE });
    }
  };

  const openPopup = (post: TypeTask) => {
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
