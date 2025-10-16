import { Search, BarChart3, User, Menu, X, Award, Bell, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useEffect, useState, Fragment } from "react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";

import LogoLight from "@/assets/neuracore newAsset 4.svg"; // white logo for dark mode
import LogoDark from "@/assets/neuracore black newAsset 4.svg"; // black logo for light mode

const Navbar = () => {
  const location = useLocation();
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "light" | "dark") || "dark";
    setTheme(savedTheme);

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border">
      {/* Desktop Navbar */}
      <div className="hidden md:flex container mx-auto px-4 h-16 items-center justify-between bg-background shadow-md">
        {/* Logo */}
        <Link to="/ideas" className="flex items-center">
          <img
            src={theme === "dark" ? LogoLight : LogoDark}
            alt="Neuracore Logo"
            className="h-9 w-auto transition-all duration-500 ease-in-out hover:scale-105"
          />
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8 items-center">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search trending ideas..."
              className="pl-10 bg-surface border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/ideas"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/ideas") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Ideas
          </Link>
          <Link
            to="/challenges"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/challenges") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Challenges
          </Link>
          <Link
            to="/leaderboard"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/leaderboard") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Leaderboard
          </Link>

          <ThemeToggle />

          <div className="relative">
            <Link to="/dashboard">
              <BarChart3 className="w-6 h-6 text-primary hover:text-foreground cursor-pointer transition-colors" />
            </Link>
          </div>

          {/* Profile Avatar Dropdown */}
          <HeadlessMenu as="div" className="relative">
            <HeadlessMenu.Button>
              <Avatar className="w-8 h-8 cursor-pointer ring-2 ring-transparent hover:ring-primary transition-all">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-surface text-foreground">
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            </HeadlessMenu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <HeadlessMenu.Items className="absolute right-0 mt-2 w-56 bg-surface border border-border rounded-md shadow-lg focus:outline-none z-50">
                <div className="py-1">
                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile#profile"
                        className={`flex items-center px-4 py-2 text-sm ${
                          active ? "bg-primary/10" : "text-foreground"
                        }`}
                      >
                        <User className="w-4 h-4 mr-2" /> Profile
                      </Link>
                    )}
                  </HeadlessMenu.Item>

                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile#achievements"
                        className={`flex items-center px-4 py-2 text-sm ${
                          active ? "bg-primary/10" : "text-foreground"
                        }`}
                      >
                        <Award className="w-4 h-4 mr-2" /> Achievements
                      </Link>
                    )}
                  </HeadlessMenu.Item>

                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile#notifications"
                        className={`flex items-center px-4 py-2 text-sm ${
                          active ? "bg-primary/10" : "text-foreground"
                        }`}
                      >
                        <Bell className="w-4 h-4 mr-2" /> Notifications
                      </Link>
                    )}
                  </HeadlessMenu.Item>

                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile#settings"
                        className={`flex items-center px-4 py-2 text-sm ${
                          active ? "bg-primary/10" : "text-foreground"
                        }`}
                      >
                        <Settings className="w-4 h-4 mr-2" /> Settings
                      </Link>
                    )}
                  </HeadlessMenu.Item>

                  <HeadlessMenu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile#plan"
                        className={`flex items-center px-4 py-2 text-sm ${
                          active ? "bg-primary/10" : "text-foreground"
                        }`}
                      >
                        <Award className="w-4 h-4 mr-2" /> Plan
                      </Link>
                    )}
                  </HeadlessMenu.Item>
                </div>
              </HeadlessMenu.Items>
            </Transition>
          </HeadlessMenu>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex container mx-auto px-4 h-16 items-center justify-between bg-background/80 backdrop-blur-md border-b border-border">
        {/* Logo */}
        <Link to="/ideas" className="flex items-center">
          <img
            src={theme === "dark" ? LogoLight : LogoDark}
            alt="Neuracore Logo"
            className="h-9 w-auto transition-all duration-500 ease-in-out hover:scale-105"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex items-center">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background/90 backdrop-blur-md shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6 flex flex-col space-y-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-surface/80 backdrop-blur-sm border-border focus:border-primary"
            />
          </div>

          <Link
            to="/ideas"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Ideas
          </Link>
          <Link
            to="/challenges"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Challenges
          </Link>
          <Link
            to="/leaderboard"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Leaderboard
          </Link>
          <Link
            to="/dashboard"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/profile#profile"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Profile
          </Link>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
