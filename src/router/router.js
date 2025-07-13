import { createMemoryHistory, createRouter } from "vue-router";

import ActiveTaskPage from "@/pages/ActiveTaskPage.vue";
import DoneTaskPage from "@/pages/DoneTaskPage.vue";
import DeletedTaskPage from "../pages/DeletedTaskPage.vue";

const routes = [
  { path: "/", component: ActiveTaskPage },
  { path: "/done", component: DoneTaskPage },
  { path: "/delete", component: DeletedTaskPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
