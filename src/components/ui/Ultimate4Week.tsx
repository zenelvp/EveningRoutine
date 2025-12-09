const cards = [
  {
    title: "Cortisol Reset Protocol",
    desc: "Simple breathing & positioning rituals that downregulate stress hormones in the evening.",
  },
  {
    title: "90-min full / 30-min express",
    desc: "A thorough wind-down for focused evenings and a compact plan for busy nights.",
  },
  {
    title: "Environment & timing",
    desc: "Exactly when to stop caffeine, how to set bedroom temperature, and light timing to realign circadian rhythm.",
  },
  {
    title: "Stress Offload Method",
    desc: "A reliable end of day ritual to capture worries so your brain stops replaying tomorrow's to do list.",
  },
  {
    title: "Tracking & optimization",
    desc: "Logs and templates so you can measure sleep improvements and tweak for your biology.",
  },
  {
    title: "Travel & special situations",
    desc: "Practical hotel, flight, and travel setups that work anywhere.",
  },
];

export default function Ultimate4Week() {
  return (
    <section className="space">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mb-20">
          <h2>
            What Makes The Ultimate 4-Week Evening Routine Truly Different
          </h2>
          <p className="lg:max-w-lg lg:ml-auto">
            Most sleep advice treats every guy the same. A 25 years old can get
            away with poor habits because his hormones cover for him. At 42, you
            need smarter strategies.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-bg shadow">
              {/* Removed the week label */}
              <h3 className="text-xl font-semibold mb-2 text-theme">
                {item.title}
              </h3>
              <p className="text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
