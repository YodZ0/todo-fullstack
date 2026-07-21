import { createRoute } from "@tanstack/react-router";
import { TimerPage } from "@/pages/timer";
import { mainLayoutRoute } from "./main-layout";

export const timerRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/timer",
  component: TimerPage,
});
