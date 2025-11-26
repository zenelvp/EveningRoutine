const cards = [
  {
    week: "Week 1",
    title: "Quick Wins Protocol",
    desc: "Start seeing results immediately with the most powerful techniques. You'll learn the thermal sleep switch that makes you drowsy on command and the somatic release method that melts tension from your body.",
  },
  {
    week: "Week 2",
    title: "Circadian Alignment",
    desc: "Fix your internal clock using light exposure and timing strategies. Plus the complete stress offload system that prevents work thoughts from following you to bed.",
  },
  {
    week: "Week 3",
    title: "Optimization & Tracking",
    desc: "Fine-tune everything using the included tracking templates. See exactly what's working and adjust based on your unique response patterns.",
  },
  {
    week: "Week 4",
    title: "Lock It In",
    desc: "Turn these techniques into automatic habits that stick for life. Includes troubleshooting for travel, busy periods, and family disruptions.",
  },
];

export default function WeekBreakdown() {
  return (
    <section className="space">
      <div className="container">
        <div className="flex flex-col gap-3 text-center mb-12">
          <h2>Week-by-Week Breakdown</h2>
        </div>

        {/* Row 1 – exactly 3 cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((item, i) => (
            <div key={i} className="p-6 rounded-xl bg-bg shadow">
              <p className="px-3 py-1 bg-theme/10 text-theme max-w-fit rounded-full mb-6">
                {item.week}
              </p>
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
