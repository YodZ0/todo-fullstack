import { createRouter } from "@tanstack/react-router";
import { NotFoundPage } from "@/pages/not-found";
import { rootRoute } from "./root";
import { protectedRoute } from "./routes/protected";
import { mainLayoutRoute } from "./routes/main-layout";
import { mainRoute } from "./routes/main";

const routeTree = rootRoute.addChildren([
  protectedRoute.addChildren([
    mainLayoutRoute.addChildren([mainRoute]),
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