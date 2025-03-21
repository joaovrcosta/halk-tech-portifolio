import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    title: "Design & Animation",
    items: ["Figma", "Adobe XD", "Axure RP", "Framer", "Sketch", "Photoshop"],
  },
  {
    title: "Front-end Development",
    items: [
      "HTML5",
      "CSS3L",
      "Javascript",
      "React",
      "Next.js",
      "Material UI",
      "ShadnUI",
      "Radix",
      "SASS",
      "Style Components",
      "jQuery",
      "Three.JS",
      "Tailwind CSS",
      "Zustand",
      "Redux",
      "Shopify API",
      "Stripe",
      "MobX",
    ],
  },
  {
    title: "Back-end Development",
    items: [
      "NodeJS",
      "NestJS",
      "Wordpress",
      "Express.JS",
      "Fastify",
      "Sanity CMS",
      "Strapi CMS",
      "Contentful CMS",
    ],
  },
  {
    title: "Database Solutions",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "AWS"],
  },
];

export default function Section() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={container}
      className="relative flex bg-white"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)", y }}
    >
      <div className="lg:p-20 p-8 w-full space-y-10">
        <h2 className="lg:text-6xl text-4xl text-black">
          Technologies I work with
        </h2>
        <div className="border-b my-4"></div>

        {techCategories.map((category) => (
          <div key={category.title} className="lg:w-[50%]">
            <div className="px-1 py-3 mb-3 mt-3 border-b border-[#000] w-[50%]">
              <h4 className="text-2xl text-black">{category.title}</h4>
            </div>
            <ul className="flex gap-3 items-center flex-wrap">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="border py-1 px-2 rounded-full text-black hover:bg-[#e5e5e5] cursor-pointer transition-all ease-in-out duration-150"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
