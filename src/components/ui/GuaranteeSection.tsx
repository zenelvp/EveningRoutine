"use client";

import { TbBadge } from "react-icons/tb";
import Button from "../button/Button";

export default function GuaranteeSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#00D378]/10 border border-[#00D378] p-8 my-12 rounded-3xl ">
      {/* Left Side */}
      <div className="flex flex-col justify-between gap-8 h-full">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
          <TbBadge /> 30-Day Sharp Executive <br /> Guarantee
        </h2>
        <div className="w-max text-center hidden lg:block ">
          <Button
            href="https://whop.com/checkout/5assdGvu4UWeuvECwV-yFpp-9UCD-OGWH-U0F5ooQYdxKk/"
            label=" SECURE MY SLEEP TRANSFORMATION NOW"
          />

          <p className="text-sm text-gray-300 mt-5">
            Instant Lifetime Access - Limited Time Bonus Included
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="space-y-5 text-gray-200">
        <p>
          Try The Ultimate 4-Week Evening Routine completely risk free for 30
          full days.
        </p>

        <p className="font-semibold text-white">
          If you don&apos;t feel noticeably sharper and more energetic within
          the first two weeks, or if you&apos;re not sleeping 7+ hours at least
          5 nights per week by day 30, just send me an email.
        </p>

        <p>
          I&apos;ll refund every penny immediately. No questions asked. No hoops
          to jump through.
        </p>

        <p>
          You keep all the materials as my gift for giving it an honest try.
        </p>

        <p>
          This isn&apos;t just about getting your money back. It&apos;s about
          getting your edge back.
        </p>

        <p>
          I&apos;m so confident this system will work for you that I&apos;m
          willing to take all the risk.
        </p>

        <p className="font-semibold text-white">
          You have nothing to lose except another month of exhausted mornings
          and foggy thinking.
        </p>
        <div className="lg:w-max text-center block lg:hidden mt-12">
          <Button
            href="https://whop.com/checkout/5assdGvu4UWeuvECwV-yFpp-9UCD-OGWH-U0F5ooQYdxKk/"
            label=" SECURE MY SLEEP TRANSFORMATION NOW"
          />

          <p className="text-sm text-gray-300 mt-5">
            Instant Lifetime Access - Limited Time Bonus Included
          </p>
        </div>
      </div>
    </div>
  );
}
