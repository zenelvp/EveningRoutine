"use client";

import Button from "@/components/button/Button";
import Image from "next/image";

export default function ThankYouPage() {
  return (
    <div className="container flex flex-col items-center pb-12 pt-12">
      {/* Thank You Section */}
      <div className="lg:max-w-5xl w-full text-center">
        <h1 className="font-extrabold mb-4 text-theme">
          Thank You <br /> Your Evening Routine Is Ready!
        </h1>
        <p className="text-lg mb-4" style={{ color: "var(--color-desc)" }}>
          You Just Made a Decision 90% of Men Never Make.
          <br />
          Most men <strong>know</strong> their sleep is wrecking their energy,
          hormones, and performance… but they keep putting off fixing it.
        </p>
        <p className="text-lg mb-4" style={{ color: "var(--color-desc)" }}>
          <strong>You didn’t.</strong>
        </p>
        <p className="text-lg mb-4" style={{ color: "var(--color-desc)" }}>
          By grabbing the <em>4-Week Evening Routine for Men 35+</em>, you’ve
          taken the exact first step that separates men who stay stuck… from men
          who <strong>get their edge back</strong>.
        </p>
        <p className="text-lg mb-6" style={{ color: "var(--color-desc)" }}>
          This is the moment your nights start restoring you instead of draining
          you.
        </p>
        {/* <Button
          href="/"
          label="👉 Get Instant Access to Your Evening Routine Program"
        /> */}
      </div>

      {/* Upsell Section */}
      <div
        id="upsell"
        className="mt-12 w-full rounded-xl"
        style={{
          backgroundColor: "var(--color-body)",
          color: "var(--color-white)",
        }}
      >
        <h2
          className="mb-6 text-center"
          style={{ color: "var(--color-title)" }}
        >
          Want Faster Results? <br /> Unlock the Complete Sleep Optimization
          System.
        </h2>
        <p className="mb-8 text-center" style={{ color: "var(--color-desc)" }}>
          When you upgrade today, you get the full step‑by‑step video course
          designed to turn your sleep into a{" "}
          <strong>predictable nightly advantage</strong> — in just 4 weeks.
        </p>

        <h3 className="mb-4 text-center text-theme">
          🔓 When You Upgrade, You Unlock:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: "var(--color-bg)",
              border: `1px solid var(--color-border)`,
            }}
          >
            <h3
              className="font-semibold text-xl mb-3"
              style={{ color: "var(--color-title)" }}
            >
              [The Complete Sleep Optimization Course - $ 297]
            </h3>
            <p className="mb-4 text-sm" style={{ color: "var(--color-desc)" }}>
              (video modules + action steps)
            </p>
            <ul
              className="list-disc list-inside space-y-2"
              style={{ color: "var(--color-desc)" }}
            >
              <li>Data‑Tracking Workflows for Oura / Whoop</li>
              <li>Weekly Adjustment Checklists to improve sleep consistency</li>
              <li>The 90‑Minute Wind‑Down Blueprint for men 35+</li>
              <li>Partner & boundary scripts</li>
              <li>
                Hormone‑friendly recovery protocols for deeper REM + slow wave
                sleep
              </li>
            </ul>
          </div>

          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: "var(--color-bg)",
              border: `1px solid var(--color-border)`,
            }}
          >
            <h3
              className="font-semibold text-xl mb-3"
              style={{ color: "var(--color-title)" }}
            >
              🎁 FREE BONUS WHEN YOU UPGRADE TODAY
            </h3>
            <h3 className="text-theme text-2xl mb-6">
              The 30-Day Morning Vitality Reset for Men 35+ ( $ 97 Value)
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Morning Vitality Daily Checklist ($49 Value)</li>
              <li>30-Day Tracking Dashboard Template ( $69 Value)</li>
              <li>Safe Supplement Dosing Guide ($67 Value)</li>
              <li>Troubleshooting Roadblocks Worksheet ($37 Value)</li>
            </ul>
            <p className="mt-3 text-sm">
              👉That&apos;s a Total Value: ( $ 319 ) in bonuses Included FREE
              only when you upgrade today. Once you leave this page, this bonus
              bundle disappears permanently.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="max-h-[750px]">
            <Image
              src="/assets/img/pr.svg"
              alt=""
              width="800"
              height="800"
              className="max-h-[650px] object-contain"
            />
          </div>
          <div>
            <div
              className="mb-8 text-sm"
              style={{ color: "var(--color-desc)" }}
            >
              This 30-day Morning Vitality Blueprint helps men 35+:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Boost morning testosterone naturally</li>
                <li>
                  Higher morning energy and clearer mood from a circadian
                  aligned routine
                </li>
                <li>Improve mental clarity and focus</li>
                <li>Build momentum from the moment you wake up</li>
              </ul>
            </div>

            {/* What You Already Have / Unlock */}
            <div
              className="mb-8 text-sm"
              style={{ color: "var(--color-desc)" }}
            >
              <h3 className="font-semibold text-lg mb-2">✔ You Already Have</h3>
              <ul className="list-disc list-inside mb-4">
                <li>
                  The Ultimate 4‑Week Evening Routine For Men 35+ (Get Instant
                  Access above)
                </li>
              </ul>

              <h3 className="font-semibold text-lg mb-2">
                🔓 You Unlock When You Upgrade
              </h3>
              <ul className="list-disc list-inside">
                <li>Full Sleep Optimization Course</li>
                <li>30‑Day Morning Vitality Reset For Men 35+ (FREE BONUS)</li>
                <li>Morning Vitality Daily Checklist (FREE BONUS)</li>
                <li>30-Day Tracking Dashboard Template (FREE BONUS)</li>
                <li>Safe Supplement Dosing Guide (FREE BONUS)</li>
                <li>Troubleshooting Roadblocks Worksheet (FREE BONUS)</li>
              </ul>
            </div>
          </div>
        </div>

        <h5 className="text-center text-theme mb-6">
          ⚠️ This Is Your Only Chance
        </h5>
        <p className="mb-6 text-sm text-center">
          This upgrade and the entire Morning Vitality Bonus Bundle is Only
          Available on this page.
          <br />
          If you close this page or click away, you Will Not See This Offer
          Again.
        </p>

        <p
          className="mb-6 text-sm text-center"
          style={{ color: "var(--color-desc)" }}
        >
          This is a One-Time Exclusive Opportunity for new Evening Routine
          customers to unlock the full system at a massive discount *plus* claim
          the full Morning Vitality Bonus Stack for Free.
        </p>

        <div className="text-center">
          <Button
            href="https://whop.com/checkout/plan_pwcvPgbnYsmgU"
            label="👉 YES — Upgrade My Access & Get The Free Morning Vitality Reset (Instant access to the full course + ALL free bonuses)"
          />
        </div>
      </div>

      {/* Footer */}
      <footer
        className="mt-16 text-center text-sm"
        style={{ color: "var(--color-desc)" }}
      >
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </footer>
    </div>
  );
}
