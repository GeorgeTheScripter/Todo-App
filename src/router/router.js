import { createMemoryHistory, createRouter } from "vue-router";

import AllTaskPage from "@/pages/AllTaskPage.vue";
import DoneTaskPage from "@/pages/DoneTaskPage.vue";

const routes = [
  { path: "/", component: AllTaskPage },
  { path: "/done", component: DoneTaskPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
