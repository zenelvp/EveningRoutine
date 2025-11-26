"use client";

import Link from "next/link";
import FutureVisionSection from "./FutureVisionSection";
import GuaranteeSection from "./GuaranteeSection";

const pricingItems = [
  { label: "Complete 4-Week Evening Routine Program", price: 297 },
  {
    label: "90-Minute Wind-Down System + 30-Minute Express Version",
    price: 97,
  },
  { label: "Cortisol Reset Protocol", price: 127 },
  { label: "Sleep & Cortisol Tracking Templates", price: 67 },
  { label: "Evening Stress Offload Worksheets", price: 47 },
  { label: "Environment Control Guide", price: 37 },
  { label: "Timing Protocols for Coffee, Alcohol & Exercise", price: 57 },
  { label: "Special Situations Guide", price: 77 },
  { label: "Lifetime Access", price: 197 },
];

export default function Pricing() {
  const totalValue = pricingItems.reduce((acc, item) => acc + item.price, 0);
  const discountedPrice = 147;

  return (
    <section className="space bg-bg">
      <div className="container">
        <h2 className="mb-12">
          Everything You Need for Better Sleep — For Only $147 Today
        </h2>
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT SIDE PRICING */}
          <div className="bg-theme p-8 rounded-xl space-y-4 text-black">
            {pricingItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="text-body">✔</span>
                  <p className="text-body">{item.label}</p>
                </span>
                <span className="font-semibold text-body">${item.price}</span>
              </div>
            ))}

            <div className="border-t border-black mt-4 pt-4 flex justify-between text-lg font-semibold">
              <h5 className="text-body">Total Value:</h5>
              <h5 className="text-body">${totalValue}</h5>
            </div>

            <div className="mt-6 text-2xl font-bold flex justify-between items-center">
              <h4 className="text-body">Your Investment Today:</h4>
              <h4 className="text-body">${discountedPrice}</h4>
            </div>

            {/* Product page link  */}

            <Link
              href="https://whop.com/checkout/5assdGvu4UWeuvECwV-yFpp-9UCD-OGWH-U0F5ooQYdxKk/"
              className="cursor-pointer"
            >
              <button className="mt-6 bg-body py-5 px-6 font-bold rounded-3xl text-white cursor-pointer">
                SECURE MY 4-WEEK ROUTINE NOW
              </button>
            </Link>

            {/* Product page link  */}
          </div>

          {/* RIGHT SIDE INFO */}
          <div className="bg-body p-8 rounded-xl space-y-4 text-gray-200">
            <h3 className="text-white mb-4">Why This Price Makes Sense</h3>
            <hr className="border border-border/20" />
            <p className="font-bold text-[17px]">
              Think about what poor sleep is costing you:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-8">
              <li>
                Missed opportunities because you&apos;re not sharp in meetings.
              </li>
              <li>Mistakes that could have been avoided with better focus.</li>
              <li>
                The strain on your marriage when you&apos;re irritable and
                exhausted.
              </li>
              <li>
                Missing your kids&apos; activities because you&apos;re too tired
                to be present.
              </li>
            </ul>
            <h5 className="mt-12 font-bold">
              One promotion you miss because of brain fog could cost you $10,000
              or more.
            </h5>
            <h5 className="mt-2">
              This system pays for itself the first time you nail an important
              presentation because you slept well the night before.
            </h5>
          </div>
        </div>
        {/* bottom sec */}
        <GuaranteeSection />
        <FutureVisionSection />
      </div>
    </section>
  );
}
