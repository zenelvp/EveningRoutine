const cards = [
  {
    title: "FALL ASLEEP IN 15 MINUTES OR LESS",
    desc: "No more lying there for hours with your mind racing. The cortisol reset protocol teaches your body to shift from work mode to sleep mode. You'll hit the pillow and actually drift off instead of replaying every meeting from the day.",
  },
  {
    title: "SLEEP 7+ HOURS STRAIGHT  5 NIGHTS A WEEK",
    desc: "Stop waking up at 2 AM and 4 AM like clockwork. The thermal sleep switch and stress offload method keep you in deep sleep all night long. Your wife won't have to deal with your tossing and turning anymore.",
  },
  {
    title: "WAKE UP SHARP AND READY TO DOMINATE",
    desc: "Remember when you used to bounce out of bed feeling like you could tackle anything. That mental clarity and steady energy comes back when your body gets real recovery. No more brain fog during important meetings or snapping at your kids because you're exhausted.",
  },
  {
    title: "STAY CONSISTENT EVEN WITH YOUR CRAZY SCHEDULE",
    desc: "This isn't some perfect world routine that falls apart when life gets messy. The system adapts to travel, late dinners, and unpredictable evenings. You get both a 90-minute version and a 30-minute backup plan that still delivers results.",
  },
];

export default function Sleep30() {
  return (
    <section className="space">
      <div className="container">
        <div className="flex flex-col gap-3 text-center mb-12">
          <h2>SLEEP LIKE YOU DID AT 30</h2>
          <p>
            Here&apos;s what happens when you master the 4-week evening routine
            built specifically for men your age:
          </p>
        </div>

        {/* Row 1 – exactly 3 cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((item, i) => (
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
