import { createRoute } from "@tanstack/react-router";
import { TasksPage } from "@/pages/tasks";
import { mainLayoutRoute } from "./main-layout";

export const tasksRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/",
  component: TasksPage,
});
