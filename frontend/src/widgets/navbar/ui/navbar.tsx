import { Link } from "@tanstack/react-router";
import { ListChecks, Timer, LineChart } from "lucide-react";

const links = [
  { to: "/", label: "Задачи", icon: <ListChecks /> },
  { to: "/timer", label: "Таймер", icon: <Timer /> },
  { to: "/stats", label: "Статистика", icon: <LineChart /> },
] as const;

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-2 border-b border-gray-200 px-4 py-3">
      {links.map(({ to, label, icon }) => (
        <Link
          key={to}
          to={to}
          activeOptions={{ exact: to === "/" }}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground [&.active]:bg-primary [&.active]:text-primary-foreground [&_svg]:size-4"
        >
          {icon}
          {label}
        </Link>
      ))}
    </nav>
  );
};
