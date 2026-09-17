import { createFileRoute } from "@tanstack/react-router";
import { SatQueryWorkspace } from "@/components/satquery/workspace";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <SatQueryWorkspace />;
}
