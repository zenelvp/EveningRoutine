const cards = [
  {
    title: "Sleep & Cortisol Tracker",
    desc: "Log your bedtime, wake time, total sleep, and energy levels. Watch the trends improve week by week as your system optimizes.",
  },
  {
    title: "Evening Stress Offload Worksheet",
    desc: "Capture worries, categorize them, and create action plans. Your brain stops racing because it knows everything is handled.",
  },
  {
    title: "90-Minute Wind-Down Checklist",
    desc: "Never wonder what to do next. Follow the step-by-step guide that takes you from stressed executive to relaxed sleeper.",
  },
];

export default function Tracking() {
  return (
    <section className="space">
      <div className="container">
        <div className="text-center">
          <h2>Tracking Tools & Checklists</h2>
        </div>

        {/* Row 1 – exactly 3 cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.slice(0, 3).map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-bg shadow">
              <h3 className="text-xl font-semibold mb-2 text-theme">
                {item.title}
              </h3>
              <p className="text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Row 2 – exactly 2 cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.slice(3, 5).map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-bg shadow">
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
