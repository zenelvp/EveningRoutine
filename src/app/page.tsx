import CoreProblem from "@/components/ui/CoreProblem";
import Cta from "@/components/ui/Cta";
import Faq from "@/components/ui/Faq";
import Hero from "@/components/ui/hero/Hero";
import Pricing from "@/components/ui/Pricing";
import Sleep30 from "@/components/ui/Sleep30";
import Testimonials from "@/components/ui/Testimonials";
import TheGuy from "@/components/ui/TheGuy";
import Tracking from "@/components/ui/Tracking";
import Ultimate4Week from "@/components/ui/Ultimate4Week";
import WeekBreakdown from "@/components/ui/WeekBreakdown";
import Who from "@/components/ui/Who";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreProblem />
      <Who />
      <Sleep30 />
      <WeekBreakdown />
      <Tracking />
      <Testimonials />
      <TheGuy />
      <Ultimate4Week />
      <Pricing />
      <Faq />
      <Cta />
      <section className="py-8 bg-theme">
        <div className="container">
          <div className="flex items-center flex-wrap justify-between gap-8">
            <p className="max-w-[550px] text-body">
              © 2025 The Ultimate 4-Week Evening Routine. All rights reserved.
            </p>
            <p className="max-w-[550px] text-body">
              This product is not intended to diagnose, treat, cure, or prevent
              any disease. Consult with your physician before starting any new
              health program.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
