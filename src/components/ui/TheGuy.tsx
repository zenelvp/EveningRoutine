"use client";

import Image from "next/image";

const sleepData = [
  {
    text: [
      "At 38, I thought I had it figured out.",
      "Four hours of sleep. Two pots of coffee. Late work routes to “tire myself out.” I wore my exhaustion like a badge of honor. Real men don’t need much sleep, right.",
    ],
    smtext: ["Then my body started fighting back."],
    highlight: null,
  },
  {
    text: [
      "Lying awake until 2 AM despite being dead tired. Waking up multiple times. Dragging myself through meetings where I used to be the sharpest guy in the room.",
      "My wife started handling decisions I used to make easily. My kids got the irritable, impatient version of their dad.",
    ],
    highlight: {
      title: "THE WAKE-UP CALL THAT CHANGED EVERYTHING",
      items: [
        "I almost made a costly mistake during a major client presentation. My brain was so foggy I mixed up key numbers. My assistant had to jump in and save the deal.",
        "That's when it hit me. This wasn't just about being tired anymore.",
        "My career was built on being sharp and reliable. If I couldn’t think clearly, everything I'd worked for was at risk.",
      ],
      smtext: ["Then my body started fighting back."],
    },
  },
  {
    text: [],
    smtext: ["GENERIC SLEEP ADVICE FAILED ME COMPLETELY"],
    highlight: null,
  },
  {
    text: [
      "I tried everything the internet recommended.",
      "Melatonin left me groggy. Blue light glasses did nothing. Meditation apps gathered dust on my phone.",
      "The problem wasn’t that I was lazy or weak. The problem was that every solution was designed for 25 year old or people with perfect schedules.",
    ],
    highlight: null,
  },
  {
    text: [
      "Nobody was addressing what happens to men’s bodies after 35. The hormone changes. The accumulated stress. The reality of demanding careers and family responsibilities.",
    ],
    highlight: {
      title: "THE BREAKTHROUGH MOMENT",
      items: [
        "I started digging into sleep research specifically focused on professional men in their late thirties and forties.",
        "That's when I discovered the cortisol connection.",
        "Your body produces cortisol all day to keep you sharp and focused. But after years of high-stress work, that system gets stuck in the “on” position.",
        "Even when you're physically exhausted, your cortisol levels stay elevated. Your brain thinks it’s still time to perform.",
      ],
    },
  },
  {
    text: [],
    smtext: ["BUILDING THE SYSTEM THAT ACTUALLY WORKED"],
    highlight: null,
  },
  {
    text: [
      "I spent months testing different combinations of techniques.",
      "Light timing to reset my circadian rhythm. Temperature control to trigger natural drowsiness. Breathing methods to calm my nervous system.",
      "But the real breakthrough was sequencing everything correctly.",
      "It wasn't enough to just do these things. I had to do them in the right order, at the right time, in a way that actually fit my real life.",
    ],
    smtext: [],
    highlight: {
      title: "THE FIRST WEEK CHANGED EVERYTHING",
      items: [
        "Within seven days, I was falling asleep in under 20 minutes.",
        "By week two, I was sleeping through the night consistently.",
        "By week four, I felt like myself again. Sharp in meetings. Patient with my family. Energy that lasted all day without crashes.",
        "My wife noticed immediately. My colleagues started asking what I was doing differently.",
      ],
    },
  },
];

export default function SleepStory() {
  return (
    <section className="bg-[#0A0A0A] text-white space">
      <div className="container">
        <div className="mx-auto grid lg:grid-cols-2 gap-12">
          {/* LEFT SIDE IMAGE */}
          <div className=" relative lg:sticky lg:top-8 w-full h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/assets/img/theguy.png"
              alt="Person sleeping"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold leading-snug">
              I USED TO BE THE GUY WHO BRAGGED ABOUT NEEDING LESS SLEEP
            </h2>

            {sleepData.map((item, index) => (
              <div key={index} className="space-y-6">
                {/* MAIN TEXT */}
                <div className="space-y-4 text-lg leading-relaxed text-gray-200">
                  {item.text.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* SMALL TEXT (optional, e.g., for sm screens) */}
                {item.smtext && (
                  <div className="text-gray-400 text-sm">
                    {item.smtext.map((p, i) => (
                      <p key={i} className="text-theme font-bold text-[17px]">
                        {p}
                      </p>
                    ))}
                  </div>
                )}

                {/* HIGHLIGHT BOX */}
                {item.highlight && (
                  <div className="bg-theme p-6 rounded-xl space-y-3 text-[15px] leading-relaxed">
                    <h6 className="font-bold text-body">
                      {item.highlight.title}
                    </h6>
                    {item.highlight.items.map((h, i) => (
                      <p key={i} className="text-body/80">
                        {h}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h4 className="text-theme">WHY I&apos;M SHARING THIS WITH YOU</h4>
          <p className="flex flex-col gap-3 mt-8">
            <span>
              I realized I wasn&apos;t the only successful man struggling with
              this problem.{" "}
            </span>
            Every guy I talked to had the same story. I used to sleep great. Now
            lying awake frustrated. Trying random tips that don&apos;t work.
            <b>
              The solution isn&apos;t willpower or perfect conditions. It&apos;s
              understanding how your body has changed and giving it what it
              needs to shift from performance mode to recovery mode.
            </b>
            <span>
              That&apos;s why I created the Ultimate 4-Week Evening Routine for
              Men 35+.
            </span>
            <span className="text-theme font-bold">
              Because you shouldn&apos;t have to choose between career success
              and getting the sleep your body needs to sustain it.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
