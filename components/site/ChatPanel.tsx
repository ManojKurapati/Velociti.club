"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { chatCopy } from "@/content/chat";
import { createEngine, tokenize, type ChatAnswer } from "@/lib/chat/engine";
import type { ChatEntry } from "@/lib/chat/types";
import { track } from "@/lib/analytics";

type Message = { id: number; role: "user" | "bot"; text: string; links?: { title: string; url: string }[] };

const SMALL_TALK: { test: RegExp; reply: string }[] = [
  { test: /^(hi|hello|hey|hiya|good (morning|afternoon|evening)|salaam|marhaba)\b/i, reply: "Hello! What would you like to know about Velociti?" },
  { test: /^(thanks|thank you|thx|cheers|great|perfect|ok|okay)\b/i, reply: "You're welcome. Anything else I can help you find?" },
];

let enginePromise: Promise<(q: string) => ChatAnswer> | null = null;
function loadEngine() {
  enginePromise ??= fetch("/chat-index.json")
    .then((r) => r.json() as Promise<ChatEntry[]>)
    .then(createEngine);
  return enginePromise;
}

export function ChatPanel({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([{ id: 0, role: "bot", text: chatCopy.greeting }]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    loadEngine();
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const push = (m: Omit<Message, "id">) => setMessages((prev) => [...prev, { ...m, id: nextId.current++ }]);

  const ask = async (q: string) => {
    const question = q.trim();
    if (!question || busy) return;
    setInput("");
    push({ role: "user", text: question });
    const talk = SMALL_TALK.find((s) => s.test.test(question) && tokenize(question).length <= 3);
    if (talk) return push({ role: "bot", text: talk.reply });
    setBusy(true);
    try {
      const answer = await loadEngine();
      const result = answer(question);
      if (result.matched) {
        push({
          role: "bot",
          text: result.entry.answer,
          links: [result.entry, ...result.related].map((e) => ({ title: e.title, url: e.url })),
        });
      } else {
        push({ role: "bot", text: chatCopy.fallback, links: [{ title: "Book a workflow audit", url: "/contact" }, ...result.related.slice(0, 2).map((e) => ({ title: e.title, url: e.url }))] });
      }
      track("chat_question_answered", { is_answered: result.matched, matched_topic: result.matched ? result.entry.id : "none" });
    } catch {
      push({ role: "bot", text: "Sorry, I couldn't load answers just now. Please email info@velociti.club." });
    } finally {
      setBusy(false);
    }
  };

  return (
    <section
      role="dialog"
      aria-label={chatCopy.title}
      className="fixed z-[60] flex flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-[0_24px_60px_rgba(15,17,21,0.18)] max-sm:inset-x-3 max-sm:bottom-[88px] max-sm:top-3 sm:bottom-[92px] sm:right-5 sm:h-[min(600px,calc(100vh-140px))] sm:w-[380px]"
    >
      <header className="night flex items-start justify-between gap-3 bg-night px-5 py-4">
        <div>
          <p className="text-[16px] font-semibold text-white">{chatCopy.title}</p>
          <p className="t-mono mt-1 text-[10px] text-cobalt-on-night">{chatCopy.subtitle}</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Close chat" className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-night-body hover:text-white">
          <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
          </svg>
        </button>
      </header>

      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-paper px-4 py-4" aria-live="polite">
        {messages.map((m) =>
          m.role === "user" ? (
            <p key={m.id} className="ml-auto max-w-[85%] rounded-[16px] rounded-br-[4px] bg-cobalt px-4 py-2.5 text-[15px] leading-snug text-white">
              {m.text}
            </p>
          ) : (
            <div key={m.id} className="max-w-[92%] rounded-[16px] rounded-bl-[4px] border border-line bg-surface px-4 py-3 text-[15px] leading-relaxed text-ink">
              <p>{m.text}</p>
              {m.links && m.links.length > 0 && (
                <ul className="mt-3 flex flex-col gap-1.5 border-t border-line pt-3">
                  {m.links.map((l, i) => (
                    <li key={l.url + i}>
                      <Link href={l.url} onClick={onClose} className="link text-[14px]">
                        {i === 0 ? `${chatCopy.readMore}: ${l.title}` : l.title} →
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ),
        )}
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {chatCopy.suggestions.map((s) => (
              <button key={s} type="button" onClick={() => ask(s)} className="min-h-10 rounded-full border border-line bg-surface px-3.5 text-[14px] text-ink hover:border-ink">
                {s}
              </button>
            ))}
          </div>
        )}
        {busy && <p className="text-[14px] text-body">Searching the site…</p>}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(input);
        }}
        className="flex items-center gap-2 border-t border-line bg-surface p-3"
      >
        <label htmlFor="chat-input" className="sr-only">
          Your question
        </label>
        <input
          id="chat-input"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={chatCopy.placeholder}
          autoComplete="off"
          maxLength={300}
          className="min-h-11 flex-1 rounded-full border border-line bg-paper px-4 text-[15px] text-ink placeholder:text-[#8a8c93] focus:border-cobalt focus:outline-none"
        />
        <button type="submit" aria-label="Send" disabled={!input.trim() || busy} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white disabled:opacity-40">
          <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
    </section>
  );
}
