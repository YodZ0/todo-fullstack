import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

export interface RouterContext {
  isAuthenticated: boolean;
}

export const rootRoute = createRootRouteWithContext<RouterContext>()({
  component: () => <Outlet />,
});
