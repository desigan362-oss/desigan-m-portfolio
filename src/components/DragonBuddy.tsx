import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { X, Send } from "lucide-react";
import { askDragon } from "@/lib/dragon.functions";
import dragonImgAsset from "@/assets/night-fury.png.asset.json";
const dragonImg = dragonImgAsset.url;

type Msg = { role: "user" | "assistant"; content: string };

export function DragonBuddy() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", content: "Hi! I'm Toothless 🐉 Ask me anything about Desigan — his work, skills, experience or how to hire him." },
  ]);
  const ask = useServerFn(askDragon);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [msgs, loading]);

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
      setMsgs((m) => [...m, { role: "assistant", content: "Grr… something went wrong. Try again!" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 md:bottom-6 md:right-6">
      {open && (
        <div className="animate-scale-in flex h-[26rem] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-2xl">
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <p className="font-display text-sm font-bold">Toothless · Ask about Desigan</p>
            <button onClick={() => setOpen(false)} aria-label="Close chat"><X className="h-4 w-4" /></button>
          </div>
          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3 py-2 ${m.role === "user" ? "ml-auto bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                {m.content}
              </div>
            ))}
            {loading && <div className="w-fit rounded-2xl bg-accent px-3 py-2 text-accent-foreground">Flying to find an answer…</div>}
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
      <button onClick={() => setOpen((o) => !o)} aria-label="Ask Toothless the dragon about Desigan" className="dragon-float relative">
        {!open && <span className="absolute -top-8 right-2 whitespace-nowrap rounded-full bg-card px-3 py-1 text-xs font-semibold text-foreground shadow-md">Ask me! 🐉</span>}
        <img src={dragonImg} alt="Toothless the dragon" width={1024} height={1024} className="dragon-flap h-20 w-auto drop-shadow-lg md:h-24" />
      </button>
    </div>
  );
}
