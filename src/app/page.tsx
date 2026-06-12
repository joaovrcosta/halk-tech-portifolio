import Intro from "@/components/intro";
import Description from "@/components/description";
import Section from "@/components/section";
import Stacks from "@/components/stacks";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Intro />
      <Description />
      <Section />
      <Stacks />
      <Footer />
    </main>
  );
}
