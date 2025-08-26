import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { text: "Home", href: "/" },
    { text: "Vision", href: "/vision" },
    { text: "Team", href: "/team" },
    { text: "Testimonial", href: "/testimonial" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    if (path !== "/" && location.pathname.startsWith(path)) {
      return true;
    }
    return false;
  };

  return (
    <nav className="fixed top-0 w-full bg-white border-b z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.text}
              to={item.href}
              className={cn(
                "font-medium transition-colors duration-200",
                isActive(item.href)
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>


        {/* Right: Logo */}
        <div className="hidden md:flex items-center">
          <img src="/Logo.jpeg" alt="Align To Connect Logo" className="h-20 w-auto ml-8" />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between w-full items-center">
          <div className="flex items-center space-x-2">
            {/* Mobile: Logo at right */}
            <img src="/Logo.jpeg" alt="Align To Connect Logo" className="h-14 w-auto" />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.text}
                    to={item.href}
                    className={cn(
                      "font-medium text-lg transition-colors duration-200",
                      isActive(item.href)
                        ? "text-blue-600 font-semibold"
                        : "text-gray-600 hover:text-gray-900"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
