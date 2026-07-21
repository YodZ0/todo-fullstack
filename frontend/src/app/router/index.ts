import { createRouter } from "@tanstack/react-router";
import { NotFoundPage } from "@/pages/not-found";
import { rootRoute } from "./root";
import { protectedRoute } from "./routes/protected";
import { mainLayoutRoute } from "./routes/main-layout";
import { tasksRoute } from "./routes/tasks";
import { timerRoute } from "./routes/timer";
import { statsRoute } from "./routes/stats";

const routeTree = rootRoute.addChildren([
  protectedRoute.addChildren([
    mainLayoutRoute.addChildren([
      tasksRoute,
      timerRoute,
      statsRoute,
    ]),
  ]),
]);

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
  context: { isAuthenticated: false },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}