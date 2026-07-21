import { RouterProvider } from "@tanstack/react-router";
import { Toaster } from "@/shared/ui/sonner";
import { ThemeProvider } from "./providers/theme-provider";
import { router } from "./router";

export const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        visibleToasts={5}
        richColors
        expand
      />
    </ThemeProvider>
  );
};
