"use client";

export default function FutureVisionSection() {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT CARD */}
      <div className="bg-[#142718] rounded-xl border border-[#2E4A32] p-8 md:p-10 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Future Vision
        </h2>

        <p>
          It’s 6 months from now. Your head hits the pillow at 10:30 PM. Your
          mind is <span className="font-semibold">calm</span>. Your body is{" "}
          <span className="font-semibold">ready</span>.
        </p>

        <p>Within 15 minutes, you&apos;re asleep.</p>

        <p>
          You sleep straight through for 7 solid hours. No tossing. No turning.
          No 3 AM wake-ups staring at the ceiling.
        </p>

        <p>
          Your alarm goes off at 6 AM, but you’re already stirring naturally.
          You feel... refreshed. Sharp. Ready.
        </p>

        <p>That fog that used to cloud your morning meetings. Gone.</p>

        <p>
          The irritability that made you snap at your wife over small things.
          Disappeared.
        </p>

        <p>
          The exhaustion that made you fall asleep during your kid’s bedtime
          story. A thing of the past.
        </p>

        <p className="font-semibold">
          This isn’t just about sleep. This is about reclaiming who you are.
        </p>
      </div>

      {/* RIGHT CARD */}
      <div className="bg-[#341A1A] rounded-xl border border-[#573232] p-8 md:p-10 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          But here&apos;s what happens if you don&apos;t act...
        </h2>

        <p>
          Six months from now, you’re still lying awake frustrated. Still waking
          up groggy. Still relying on coffee to function and wine to wind down.
        </p>

        <p>
          That promotion you wanted. It goes to someone sharper. Someone who
          doesn’t make tired mistakes.
        </p>

        <p>
          Your family starts handling more decisions without you. Not because
          they don&apos;t love you, but because they can&apos;t rely on your
          judgment when you&apos;re exhausted.
        </p>

        <p className="font-semibold">
          The gap between who you used to be and who you’re becoming gets wider
          every night.
        </p>

        <p className="text-[#FF8A8A] font-semibold">
          The cost of doing nothing isn’t just poor sleep. It’s watching
          everything you’ve built slowly slip away while you’re too tired to
          fight for it.
        </p>
      </div>
    </div>
  );
}
