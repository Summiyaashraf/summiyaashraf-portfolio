"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Send,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  X,
} from "lucide-react";
import { FOUNDER_HOSTS, FOUNDER_LINKS, founderLinkProps } from "@/lib/founder-links";

type ChatMessage = {
  id: string;
  role: "user" | "bot";
  text: string;
};

const SUGGESTIONS = [
  "Hi there!",
  "What has Summiya founded?",
  "Show me her top projects",
  "What is Summiya's tech stack?",
  "How can I hire Summiya?",
];

const GREETING =
  "Hello! 👋 I'm Summiya's AI Portfolio Assistant. Summiya Ashraf is the Founder of Rozgarbot & Co-Founder of Sflyra.site. Ask me about her ventures, projects, technical skills, or how to get in touch with her.";

const ERROR_TEXT =
  "I hit a temporary glitch. Please try again in a moment, or email summiyaashraf689@gmail.com.";

/* Only these hosts may ever become clickable links, so a prompt-injected
   or hallucinated URL can never be rendered as an anchor. */
const ALLOWED_HOSTS = new Set([
  ...FOUNDER_HOSTS,
  "github.com",
  "linkedin.com",
  "facebook.com",
  "instagram.com",
  "x.com",
  "vercel.com",
  "cncmakinati.com",
  "aunaturelshop.pk",
  "summiyaashraf-portfolio.vercel.app",
  "hackathon-web-3-48f3.vercel.app",
]);

/* Any reply that touches the ventures or founder status gets the two
   founder link buttons appended, so the flagship URLs are always one
   click away no matter which intent triggered the answer. */
const FOUNDER_MENTION = /rozgarbot|sflyra|founder|co-founder|venture/i;

function isSafeUrl(raw: string): boolean {
  const value = raw.trim();

  if (value.startsWith("/") && !value.startsWith("//")) return true;

  try {
    const url = new URL(value);
    if (url.protocol === "mailto:") return true;
    if (url.protocol !== "https:") return false;
    return ALLOWED_HOSTS.has(url.hostname.toLowerCase().replace(/^www\./, ""));
  } catch {
    return false;
  }
}

const LINK_PATTERN =
  /\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|\/[^\s)]*)\)|(https?:\/\/[^\s)\s]+)|([\w.+-]+@[\w-]+\.[\w.]+)/g;

function hostIcon(href: string) {
  const lower = href.toLowerCase();
  if (lower.startsWith("mailto:") || lower.includes("@")) return Mail;
  if (lower.includes("facebook.com")) return Facebook;
  if (lower.includes("instagram.com")) return Instagram;
  if (lower.includes("linkedin.com")) return Linkedin;
  if (lower.includes("github.com")) return Github;
  return null;
}

function BotReply({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  LINK_PATTERN.lastIndex = 0;

  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > cursor) {
      nodes.push(text.slice(cursor, match.index));
    }

    const [full, label, href, bareUrl, email] = match;
    const target = href ?? (email ? `mailto:${email}` : bareUrl);
    const isSafe = Boolean(target) && isSafeUrl(target as string);

    if (isSafe) {
      const url = target as string;
      const linkLabel = label ?? email ?? url.replace(/^https?:\/\//, "");
      const Icon = hostIcon(url);
      nodes.push(
        <a
          key={`${url}-${match.index}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-medium text-[#93c5fd] transition-colors hover:border-[#7c3aed]/60 hover:text-[#c7d2fe]"
        >
          {Icon ? <Icon className="h-3 w-3" aria-hidden="true" /> : null}
          <span className="break-all">{linkLabel}</span>
        </a>,
      );
    } else {
      nodes.push(full);
    }

    cursor = match.index + full.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));

  return <>{nodes}</>;
}

function FounderLinkButtons() {
  return (
    <div className="flex flex-wrap gap-2 whitespace-normal pt-1">
      {FOUNDER_LINKS.map((link) => (
        <a
          key={link.id}
          {...founderLinkProps(link)}
          title={link.tagline}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#7c3aed]/50 bg-gradient-to-r from-[#7c3aed]/25 to-[#2563eb]/25 px-2.5 py-1.5 text-[0.7rem] font-semibold text-[#ddd6fe] transition-all hover:border-[#a78bfa]/80 hover:text-white"
        >
          <span aria-hidden="true">{link.emoji}</span>
          {link.role} @ {link.domain}
          <ExternalLink className="h-3 w-3 opacity-70" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-4 py-3 w-fit">
      {[0, 0.2, 0.4].map((delay) => (
        <motion.span
          key={delay}
          className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]"
          animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay, ease: "easeInOut" }}
        />
      ))}
      <span className="sr-only">Summiya&apos;s AI Assistant is typing</span>
    </div>
  );
}

export function AIAgentWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "greeting", role: "bot", text: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);

  const idRef = useRef(0);
  const pendingRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, pending, open]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const nextId = useCallback(() => {
    idRef.current += 1;
    return `m${idRef.current}`;
  }, []);

  const send = useCallback(
    async (raw: string) => {
      const text = raw.trim();
      if (!text || pendingRef.current) return;

      pendingRef.current = true;

      const history = messages
        .filter((message) => message.id !== "greeting")
        .slice(-9)
        .map((message) => ({
          role: message.role === "user" ? "user" : "assistant",
          content: message.text,
        }));

      setMessages((prev) => [...prev, { id: nextId(), role: "user", text }]);
      setInput("");
      setPending(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text, history }),
        });

        const raw = await response.text();

        let data: unknown;
        try {
          data = raw ? JSON.parse(raw) : null;
        } catch {
          data = null;
        }

        const reply =
          typeof data === "object" && data !== null && "reply" in data
            ? (data as { reply: unknown }).reply
            : undefined;

        setMessages((prev) => [
          ...prev,
          {
            id: nextId(),
            role: "bot",
            text:
              typeof reply === "string" && reply.trim()
                ? reply.trim()
                : ERROR_TEXT,
          },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          { id: nextId(), role: "bot", text: ERROR_TEXT },
        ]);
      } finally {
        pendingRef.current = false;
        setPending(false);
      }
    },
    [messages, nextId],
  );

  const showSuggestions = messages.length <= 1 && !pending;

  return (
    <>
      {/* Launcher */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label={
            open ? "Close Summiya's AI Assistant" : "Open Summiya's AI Assistant"
          }
          aria-expanded={open}
          className="relative grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#7c3aed] via-[#4338ca] to-[#2563eb] text-white shadow-2xl shadow-[#7c3aed]/40"
        >
          {!open && (
            <motion.span
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl border border-[#a78bfa]/60"
              animate={{ scale: [1, 1.35, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "bot"}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.18 }}
              className="relative"
            >
              {open ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bot className="h-6 w-6" aria-hidden="true" />
              )}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-label="Summiya's AI Assistant"
            className="fixed bottom-24 right-6 z-50 flex h-[32rem] max-h-[75vh] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/85 shadow-2xl shadow-[#7c3aed]/20 backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-[#7c3aed]/40 to-[#2563eb]/40 text-[#c7d2fe]">
                <Bot className="h-4.5 w-4.5" aria-hidden="true" />
                <span className="accent-dot absolute -right-0.5 -top-0.5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-foreground">
                  Summiya&apos;s AI Assistant
                </p>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                  virtual_representative
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[0.65rem] font-medium text-emerald-300">
                <span className="status-dot" />
                Active
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid h-7 w-7 place-items-center rounded-lg border border-white/10 text-muted-foreground transition-colors hover:border-[#7c3aed]/60 hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              aria-live="polite"
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.role === "user" ? "flex justify-end" : "flex justify-start"
                  }
                >
                  <div
                    className={
                      message.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-br-md border border-[#7c3aed]/40 bg-[#7c3aed]/20 px-3.5 py-2.5 text-sm text-foreground"
                        : "max-w-[90%] space-y-2 whitespace-pre-wrap break-words rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm leading-relaxed text-slate-200"
                    }
                  >
                    {message.role === "user" ? (
                      message.text
                    ) : (
                      <>
                        <BotReply text={message.text} />
                        {FOUNDER_MENTION.test(message.text) && (
                          <FounderLinkButtons />
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}

              {pending && <TypingIndicator />}

              {showSuggestions && (
                <div className="space-y-2 pt-1">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                    quick_actions
                  </p>
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => void send(suggestion)}
                      className="flex w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2 text-left text-xs text-slate-300 transition-colors hover:border-[#7c3aed]/50 hover:text-[#c7d2fe]"
                    >
                      <Sparkles
                        className="h-3 w-3 shrink-0 text-[#a78bfa]"
                        aria-hidden="true"
                      />
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer notice + input */}
            <div className="border-t border-white/10 bg-white/[0.02] px-4 py-3">
              <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.6rem] text-muted-foreground">
                <ShieldCheck className="h-3 w-3 text-emerald-400" aria-hidden="true" />
                portfolio topics only
              </p>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  void send(input);
                }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  maxLength={800}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about my projects, skills or hiring…"
                  aria-label="Message Summiya's AI Assistant"
                  className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-[#60a5fa]/70 focus:outline-none focus:ring-1 focus:ring-[#2563eb]/40"
                />
                <button
                  type="submit"
                  disabled={pending || input.trim().length === 0}
                  aria-label="Send message"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-[#7c3aed] to-[#2563eb] text-white transition-opacity disabled:opacity-40"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AIAgentWidget;
