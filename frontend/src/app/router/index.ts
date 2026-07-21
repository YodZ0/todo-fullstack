import { createRouter } from "@tanstack/react-router"
import { NotFoundPage } from "@/pages/not-found"
import { rootRoute } from "./root"
import { mainRoute } from "./routes/main"


const routeTree = rootRoute.addChildren([
  mainRoute,
])

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}