// Standard root route
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../layout/Navbar";
import Aside from "../layout/Aside";

export const Route = createRootRoute({
  component: () => (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row md:mx-100">
        <Aside />
        <main className="flex-1 p-2">
          <Outlet />
        </main>
      </div>
    </div>
  ),
});
