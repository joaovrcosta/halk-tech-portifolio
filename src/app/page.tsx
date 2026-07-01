import Intro from "@/components/intro";
import Description from "@/components/description";
import Section from "@/components/section";
import Kpi from "@/components/kpi";
import Stacks from "@/components/stacks";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Intro />
      <Description />
      <Section />
      <Kpi />
      <Stacks />
      <Footer />
    </main>
  );
}
