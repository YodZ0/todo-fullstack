import { createRoute } from "@tanstack/react-router";
import { MainPage } from "@/pages/main";
import { mainLayoutRoute } from "./main-layout";

export const mainRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/",
  component: MainPage,
});
