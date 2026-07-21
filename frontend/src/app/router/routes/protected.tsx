import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../root";

export const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "protected",
  beforeLoad: ({ context, location }) => {
    console.log(
      `Protected route. Context: ${context.isAuthenticated}. Location: ${location.href}`,
    );
  },
});
