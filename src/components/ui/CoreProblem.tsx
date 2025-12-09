"use client";

import Image from "next/image";

const sleepData = [
  {
    header: "Core Problem",
    title: "The Executive Sleep Trap",
    content: [
      {
        type: "text",
        value: "You built your career on being sharp and reliable.",
      },
      {
        type: "text",
        value:
          "Now you're lying in bed, physically exhausted but mentally wired. Your brain won't shut off. You toss and turn for an hour or two.",
      },
      {
        type: "text",
        value:
          "When you finally fall asleep, you wake up at 2 AM. Then 4 AM. Then you're up for good at 5:30, feeling like you got hit by a truck.",
      },
      { type: "text", value: "This isn't just about being tired." },
      {
        type: "text",
        value:
          "Your decision-making is off. You snap at your wife over small things. You fall asleep during your kid's bedtime story. Colleagues start to notice you're not as sharp.",
      },
      {
        type: "smtext",
        value:
          "**The worst part? Everyone says it's normal. \"That's just getting older.\"**",
      },
      { type: "text", value: "But that's complete garbage." },
    ],
    highlightBox: {
      title: "Here's what's really happening:",
      points: [
        "Your cortisol - the stress hormone - stays elevated all evening. At 25, your body could handle it. At 42, it keeps you wired when you should be winding down.",
        "This isn't about willpower. It's not about trying harder.",
        "Your body chemistry changed. So your approach needs to change too.",
        "The good news? Once you know how to lower evening cortisol, sleep becomes predictable again.",
      ],
    },
    image: "/assets/img/trap.png",
  },
  {
    header: "Focus on the Opportunity",
    title: "The Cortisol Reset Protocol",
    content: [
      {
        type: "text",
        value:
          "While other men of your age accept declining sleep as normal aging, you can use science to sleep better than you did in your thirties.",
      },
      {
        type: "text",
        value:
          "The secret? A structured evening routine that systematically lowers cortisol and activates your body's natural sleep switches.",
      },
      {
        type: "text",
        value:
          "This isn't another list of random sleep tips. It's a proven 4-week system that retrains your nervous system to shift from performance mode to recovery mode.",
      },
      { type: "smtext", value: "Here's what makes it different:" },
      {
        type: "text",
        value:
          "Built specifically for professional men 35 and older. Your stress levels. Your schedule. Your hormones change.",
      },
      {
        type: "text",
        value:
          "Uses timing, light control, temperature regulation, and stress offload techniques that actually work for busy executives.",
      },
      {
        type: "text",
        value:
          "Includes both a 90-minute deep routine and a 30-minute express version for chaotic evenings.",
      },
      {
        type: "text",
        value:
          "Tracks your progress with data, so you see measurable improvements week by week.",
      },
    ],
    highlightBox: {
      title: "The result?",
      points: [
        "You fall asleep within 15 minutes. Sleep 7-8 hours straight. Wake up naturally before your alarm, feeling sharp and ready to dominate your day.",
        "Your wife sees you as her strong partner again. You're present with your kids. Colleagues respect your clear thinking.",
        "You get your edge back.",
      ],
    },
    image: "/assets/img/Tnd.png",
  },
];

export default function CoreProblem() {
  return (
    <section className="space py-12">
      <div className="container mx-auto space-y-12">
        {sleepData.map((sleep, idx) => (
          <div
            key={idx}
            className={`flex flex-col lg:flex-row items-center gap-8 ${
              idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1 space-y-[24px] text-white">
              <h3 className="text-sm text-theme">{sleep.header}</h3>
              <h2 className="text-3xl font-bold">{sleep.title}</h2>

              {sleep.content.map((item, index) => {
                if (item.type === "text") {
                  return (
                    <p key={index} className="text-base">
                      {item.value}
                    </p>
                  );
                } else if (item.type === "smtext") {
                  return (
                    <p
                      key={index}
                      className="text-base text-secondary font-semibold mt-2"
                    >
                      {item.value}
                    </p>
                  );
                }
              })}

              {/* Highlight Box */}
              <div className="bg-theme text-black p-6 rounded-lg mt-6">
                <h5 className="font-bold text-body mb-2">
                  {sleep.highlightBox.title}
                </h5>
                {sleep.highlightBox.points.map((point, index) => (
                  <p key={index} className="mb-2 text-body">
                    {point}
                  </p>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 h-auto w-full">
              <Image
                src={sleep.image}
                width={600}
                height={400}
                alt="Sleeping man"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
