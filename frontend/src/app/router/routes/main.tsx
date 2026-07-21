import { createRoute } from "@tanstack/react-router";
import { MainPage } from "@/pages/main";
import { rootRoute } from "../root";

export const mainRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: MainPage,
});
