import { createAPIFileRoute } from "@tanstack/react-start/api";

export const APIRoute = createAPIFileRoute("/api/counter")({
  GET: async ({ request }) => {
    return new Response("Counter is 0 at " + request.url);
  },
});
