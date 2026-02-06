import { Link } from "@tanstack/react-router";
import { List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="w-full h-auto border-b border-gray-400 flex items-center justify-between md:py-2 md:px-100">
      <h1 className="text-black md:text-xl font-bold mx-2">
        <Link to="/">Jinseo's Page</Link>
      </h1>
      <div className="hidden md:flex justify-around ">
        <h2 className="text-gray-600 px-4 mx-4">
          <Link to="/Research">Research</Link>
        </h2>
        <h2 className="text-gray-600 px-4 mx-4">
          <Link to="/Publication">Publication</Link>
        </h2>
        <h2 className="text-gray-600 px-4 mx-4">CV</h2>
        <h2 className="text-gray-600 px-4 mx-4">
          <Link to="/Contact">Contact</Link>
        </h2>
        <h2 className="text-gray-600 px-4 mx-4">
          <Link to="/FunFacts">Fun Facts</Link>
        </h2>
      </div>

      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <List />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuItem disabled>API</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
