import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { navItems } from '../nav-items';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-full w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <h1 className="text-2xl font-bold text-teal-600">RetroBoost</h1>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    location.pathname === item.to && "bg-teal-100 text-teal-800"
                  )}
                >
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Button className="w-full" variant="outline">
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;