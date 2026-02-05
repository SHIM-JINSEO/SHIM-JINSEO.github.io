// Standard root route
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../layout/Navbar";
import Aside from "../layout/Aside";

export const Route = createRootRoute({
  component: () => (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex md:mx-100">
        <Aside />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  ),
});
