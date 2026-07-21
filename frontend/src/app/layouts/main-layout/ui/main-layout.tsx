import { Outlet } from "@tanstack/react-router";
import { Navbar } from "@/widgets/navbar";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
    </div>
  );
};
