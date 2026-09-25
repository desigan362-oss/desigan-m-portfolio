import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const PROFILE = `You are "Buzz", a friendly lavender bee who lives on Desigan M's portfolio website. Answer visitors' questions about Desigan in a warm, short, cheerful way (2-4 sentences, occasional bee pun). Only use the facts below; if unsure, suggest the Contact page.

Facts about Desigan M:
- Graphic Designer (primary), UI/UX Designer, Visual Designer and Design Trainer from Tamil Nadu, India.
- Education: B.Tech in Artificial Intelligence & Data Science, Annai Mira College of Engineering and Technology, Ranipet, Tamil Nadu. GPA 8.37/10.
- Experience: UI/UX Internship at Untik (Jul–Aug 2025); Graphic Designing Internship at Myme Techies (Sep–Nov 2025); UI/UX Internship at Least Action (Dec 2025–Mar 2026); worked at Myme Techies Feb–Sep 2026 (8 months) across graphic design, UI/UX and training; online UI/UX & Graphic Design Trainer (Jul 2026).
- Certificates: Graphic Designing Trainer and UI/UX Designing Trainer (Jun 2026).
- Stats: 5+ clients, 4 UI/UX projects, 35+ students trained, 100+ visual designs.
- Clients/projects: Annai Mira World School (educational institution), Prime Public School (CBSE school), KAR Towers (accommodation & event spaces), Lee Digital Arts (digital printing studio), MAPIS (beauty & wellness clinic), Jayanthi Bakery (posters and packaging labels), Beez (skin & hair care product labels), his own Beez Creative logo designed from sketch to final, UX Learning Platform, OTT Streaming Platform, Bakery App, Design Training workshops.
- Tools: Figma, Adobe Photoshop, Illustrator, InDesign, XD, Canva, Miro, Affinity, plus AI tools like ChatGPT, Claude and Lovable.
- Services: logo design, branding, banners, posters, UI design, freelancing, part-time trainer, pencil arts.
- Contact: desigan362@gmail.com, or the Contact page on this site.`;

const schema = z.object({
  messages: z
    .array(z.object({ role: z.enum(["user", "assistant"]), content: z.string().min(1).max(1000) }))
    .min(1)
    .max(20),
});

export const askBee = createServerFn({ method: "POST" })
  .inputValidator((d) => schema.parse(d))
  .handler(async ({ data }) => {
    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [{ role: "system", content: PROFILE }, ...data.messages],
      }),
    });
    if (res.status === 429) return { reply: "Bzz… I'm a little busy right now. Try again in a moment!" };
    if (!res.ok) return { reply: "Oops, my wings got tangled. Please try again soon!" };
    const json = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    return { reply: json.choices?.[0]?.message?.content ?? "Bzz… I couldn't think of an answer." };
  });
