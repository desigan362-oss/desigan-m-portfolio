const stars = [
  ["left-[5%] top-[14%]", "animation-delay:0.2s"],
  ["left-[14%] top-[72%]", "animation-delay:1.1s"],
  ["left-[27%] top-[24%]", "animation-delay:2s"],
  ["left-[39%] top-[82%]", "animation-delay:0.7s"],
  ["left-[53%] top-[12%]", "animation-delay:1.7s"],
  ["left-[66%] top-[70%]", "animation-delay:0.4s"],
  ["left-[77%] top-[20%]", "animation-delay:2.4s"],
  ["left-[88%] top-[78%]", "animation-delay:1.3s"],
  ["left-[94%] top-[35%]", "animation-delay:0.9s"],
] as const;

export function SolarSystemBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,var(--color-pastel-blue),transparent_42%),radial-gradient(circle_at_20%_20%,var(--color-pastel-peach),transparent_36%)] opacity-80" />
      {stars.map(([position, delay]) => (
        <span key={position} className={`absolute ${position} size-1.5 rounded-full bg-accent shadow-[0_0_14px_var(--color-accent)] animate-twinkle`} style={{ animationDelay: delay }} />
      ))}

      <div className="absolute -right-28 top-1/2 size-[520px] -translate-y-1/2 md:right-[2%] md:size-[680px]">
        <div className="absolute inset-[7%] rounded-full border border-ink/15 animate-solar-spin">
          <span className="absolute left-[9%] top-[12%] size-5 rounded-full bg-coral shadow-lg md:size-7" />
        </div>
        <div className="absolute inset-[20%] rounded-full border border-ink/20 animate-solar-spin-slow">
          <span className="absolute bottom-[5%] right-[18%] size-8 rounded-full bg-lime shadow-lg md:size-11" />
        </div>
        <div className="absolute inset-[34%] rounded-full border border-ink/20 animate-solar-spin">
          <span className="absolute -left-2 top-1/2 size-4 rounded-full bg-accent shadow-lg md:size-6" />
        </div>
        <div className="absolute inset-[45%] rounded-full bg-coral shadow-[0_0_80px_var(--color-coral)]" />
      </div>

      <span className="absolute left-0 top-[18%] h-0.5 w-36 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-70 animate-comet" />
      <span className="absolute left-0 top-[58%] h-0.5 w-24 rounded-full bg-gradient-to-r from-transparent via-coral to-transparent opacity-70 animate-comet [animation-delay:4.2s]" />
      <div className="absolute inset-0 bg-gradient-to-r from-panel via-panel/90 to-panel/15" />
    </div>
  );
}