const cards = [
  {
    title: "Executives and Managers",
    desc: "High-stress leaders who need sharp decision-making and can't afford brain fog during important meetings.",
  },
  {
    title: "Business Owners and Entrepreneurs",
    desc: "Men running companies who must stay competitive and can't let poor sleep undermine everything they've built.",
  },
  {
    title: "Consultants and Sales Professionals",
    desc: "Performance-driven professionals whose income depends on being sharp, persuasive, and mentally present with clients.",
  },
  {
    title: "Fathers and Husbands",
    desc: "Men who want to show up fully for their families instead of being too exhausted to be the partner and dad they want to be.",
  },
  {
    title: "Fitness-Focused Professionals",
    desc: "Active men who know recovery is crucial for performance but struggle with sleep despite working out regularly.",
  },
];

export default function Who() {
  return (
    <section className="space">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <h2>Who Is This For</h2>
          <p>
            This system works for professional men who refuse to accept normal
            aging
          </p>
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
