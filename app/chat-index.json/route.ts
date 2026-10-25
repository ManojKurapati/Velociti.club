import { buildChatIndex } from "@/lib/chat/build-index";

// Prebuilt knowledge base for the site chat, emitted as /chat-index.json.
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildChatIndex());
}
