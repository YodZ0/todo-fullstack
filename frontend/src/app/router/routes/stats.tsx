import { createRoute } from "@tanstack/react-router";
import { StatsPage } from "@/pages/stats";
import { mainLayoutRoute } from "./main-layout";

export const statsRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/stats",
  component: StatsPage,
});
