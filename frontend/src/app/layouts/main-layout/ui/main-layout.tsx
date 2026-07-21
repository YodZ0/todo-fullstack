import { Outlet } from "@tanstack/react-router";
import { Navbar } from "@/widgets/navbar";

export const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};
