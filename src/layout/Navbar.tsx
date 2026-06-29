import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const activeLinkStyle = {
    className: "text-blue-500 font-semibold dark:text-blue-400",
  };

  const navLinks = [
    { to: "/Research", label: "Research" },
    { to: "/Publication", label: "Publication" },
    { to: "/Contact", label: "Contact" },
    { to: "/FunFacts", label: "Fun Facts" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <h1 className="text-lg font-bold tracking-tight">
          <Link 
            to="/" 
            activeProps={{ className: "text-foreground font-bold" }}
            inactiveProps={{ className: "text-foreground/80 hover:text-foreground font-semibold" }}
            className="transition-colors duration-200"
          >
            Jinseo Shim
          </Link>
        </h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={activeLinkStyle}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/cv.pdf"
            download
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            CV
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuGroup>
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.to} asChild>
                    <Link
                      to={link.to}
                      activeProps={activeLinkStyle}
                      inactiveProps={{ className: "text-foreground" }}
                      className="w-full cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <a
                    href="/cv.pdf"
                    download
                    className="w-full cursor-pointer text-foreground"
                  >
                    CV
                  </a>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
