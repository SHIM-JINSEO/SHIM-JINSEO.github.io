import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Publication/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/Publication/"!</div>;
}
