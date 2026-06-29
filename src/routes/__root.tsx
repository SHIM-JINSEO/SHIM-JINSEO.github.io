// Standard root route
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../layout/Navbar";
import Aside from "../layout/Aside";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground">
      <Navbar />
      <div className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-10 flex flex-col md:flex-row gap-8 md:gap-12">
        <Aside />
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  ),
});
