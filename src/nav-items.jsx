import { Home, LayoutDashboard, ClipboardList, BarChart2, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <LayoutDashboard className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Retrospective Boards",
    to: "/boards",
    icon: <ClipboardList className="h-4 w-4" />,
    page: <div>Retrospective Boards</div>, // Placeholder
  },
  {
    title: "Action Items",
    to: "/action-items",
    icon: <Home className="h-4 w-4" />,
    page: <div>Action Items</div>, // Placeholder
  },
  {
    title: "Analytics",
    to: "/analytics",
    icon: <BarChart2 className="h-4 w-4" />,
    page: <div>Analytics</div>, // Placeholder
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <div>Settings</div>, // Placeholder
  },
];