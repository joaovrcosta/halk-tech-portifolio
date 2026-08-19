import type { Metadata } from "next";
import Intro from "@/components/intro";
import { BrandMarquee } from "@/components/brand-marquee";
import Description from "@/components/description";
import Section from "@/components/section";
import Kpi from "@/components/kpi";
import InsightsTechTransition from "@/components/insights-tech-transition";
import Stacks from "@/components/stacks";
import Footer from "@/components/footer";
import {
  defaultDescription,
  defaultTitle,
  siteName,
  siteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function Home() {
  return (
    <main>
      <Intro />
      <BrandMarquee />
      <Description />
      <Section />
      <Kpi />
      <InsightsTechTransition />
      <div className="relative -mt-[200vh]">
        <Stacks />
      </div>
      <Footer />
    </main>
  );
}
