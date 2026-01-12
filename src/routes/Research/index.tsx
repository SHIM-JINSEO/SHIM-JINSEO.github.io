import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/Research/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/Research/"!</div>;
}
