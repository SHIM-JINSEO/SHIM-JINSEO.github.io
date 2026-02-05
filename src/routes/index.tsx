import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>Hi, I'm Jinseo. I am Undergraduate Stuent at GIST.</h3>
    </div>
  );
}
