import { createRoute } from "@tanstack/react-router";
import { MainLayout } from "@/app/layouts/main-layout";
import { protectedRoute } from "./protected";

export const mainLayoutRoute = createRoute({
  getParentRoute: () => protectedRoute,
  id: "main-layout",
  component: MainLayout,
});
