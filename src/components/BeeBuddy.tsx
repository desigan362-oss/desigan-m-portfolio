import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { X, Send } from "lucide-react";
import { askBee } from "@/lib/bee.functions";

type Msg = { role: "user" | "assistant"; content: string };

function Bee() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16 drop-shadow-lg" aria-hidden>
      <g className="bee-wing-l" style={{ transformOrigin: "36px 30px" }}>
        <ellipse cx="28" cy="20" rx="12" ry="16" className="fill-primary/25 stroke-primary/60" strokeWidth="1.5" />
      </g>
      <g className="bee-wing-r" style={{ transformOrigin: "44px 30px" }}>
        <ellipse cx="52" cy="20" rx="12" ry="16" className="fill-primary/25 stroke-primary/60" strokeWidth="1.5" />
      </g>
      <ellipse cx="40" cy="46" rx="22" ry="18" className="fill-accent" />
      <path d="M30 30 Q28 46 30 62" className="stroke-primary" strokeWidth="6" fill="none" />
      <path d="M44 28 Q42 46 44 64" className="stroke-primary" strokeWidth="6" fill="none" />
      <circle cx="58" cy="42" r="3" className="fill-foreground" />
      <circle cx="59" cy="41" r="1" className="fill-background" />
      <path d="M55 50 Q58 53 61 50" className="stroke-foreground" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M18 46 L12 46" className="stroke-primary" strokeWidth="3" strokeLinecap="round" />
      <path d="M56 30 Q58 20 64 18" className="stroke-foreground" strokeWidth="1.5" fill="none" />
      <circle cx="64" cy="18" r="2" className="fill-primary" />
    </svg>
  );
}

export function BeeBuddy() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I'm Buzz 🐝 Ask me anything about Desigan — his work, skills, experience or how to hire him." },
  ]);
  const ask = useServerFn(askBee);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => endRef.current?.scrollIntoView({ block: "end" }), [msgs, loading]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next = [...msgs, { role: "user" as const, content: text }];
    setMsgs(next);
    setInput("");
    setLoading(true);
    try {
      const { reply } = await ask({ data: { messages: next.slice(1).slice(-12) } });
      setMsgs((m) => [...m, { role: "assistant", content: reply }]);
    } catch {
      setMsgs((m) => [...m, { role: "assistant", content: "Bzz… something went wrong. Try again!" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 md:bottom-6 md:right-6">
      {open && (
        <div className="animate-scale-in flex h-[26rem] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-2xl">
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <p className="font-display text-sm font-bold">Buzz · Ask about Desigan</p>
            <button onClick={() => setOpen(false)} aria-label="Close chat"><X className="h-4 w-4" /></button>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 ${m.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                {m.content}
              </div>
            ))}
            {loading && <div className="w-fit rounded-2xl bg-accent px-3 py-2 text-accent-foreground">Buzzing…</div>}
            <div ref={endRef} />
          </div>
          <form onSubmit={send} className="flex gap-2 border-t border-border p-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me a question…" maxLength={1000}
              className="flex-1 rounded-full border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/40" />
            <button type="submit" disabled={loading} aria-label="Send" className="rounded-full bg-primary p-2 text-primary-foreground disabled:opacity-50">
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
      <button onClick={() => setOpen((o) => !o)} aria-label="Ask Buzz the bee about Desigan" className="bee-float relative">
        {!open && <span className="absolute -top-8 right-2 whitespace-nowrap rounded-full bg-card px-3 py-1 text-xs font-semibold text-foreground shadow-md">Ask me! 🐝</span>}
        <Bee />
      </button>
    </div>
  );
}
