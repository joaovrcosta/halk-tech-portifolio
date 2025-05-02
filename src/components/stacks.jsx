import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const gradientMap = {
  "Design & Animation":
    "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  "Front-end Development": "bg-gradient-to-r from-blue-500 to-teal-400",
  "Back-end Development": "bg-gradient-to-r from-green-500 to-lime-400",
  "Database Solutions": "bg-gradient-to-r from-purple-500 to-indigo-400",
};

const shadowMap = {
  "Design & Animation": "hover:shadow-[0_0_20px_#f472b6]",
  "Front-end Development": "hover:shadow-[0_0_20px_#38bdf8]",
  "Back-end Development": "hover:shadow-[0_0_20px_#4ade80]",
  "Database Solutions": "hover:shadow-[0_0_20px_#c084fc]",
};

const techCategories = [
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
      "StoryBook",
      "Jest",
      "Vitest",
      "Cypress",
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
    title: "Design & Animation",
    items: [
      "Figma",
      "Adobe XD",
      "Axure RP",
      "Framer",
      "Sketch",
      "Photoshop",
      "Design System",
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
      className="relative flex  bg-[radial-gradient(circle_at_bottom_right,_#5F5F5F_0%,_#030303_80%)]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)", y }}
    >
      <div className="lg:p-20 p-8 w-full space-y-10">
        <div className="flex items-center justify-center">
          <div>
            <div className="flex items-center justify-center">
              <span
                className="text-sm text-center bg-gradient-to-r from-[#00C8FF] to-[#004E63] bg-clip-text
              text-transparent font-thin mb-2"
              >
                Technologies
              </span>
            </div>
            <h2 className="lg:text-2xl text-2xl text-white text-center">
              Technologies I worked with
            </h2>
          </div>
        </div>
        {/* <div className="border-b my-4"></div> */}

        <div className="gap-4">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className={`group w-full lg:basis-[calc(50%-0.5rem)] mb-4  bg-[#171718] p-4 border border-[#27272a] rounded-3xl transition-shadow duration-300 ${
                shadowMap[category.title]
              }`}
            >
              <div className="mb-3 mt-3 w-[50%]">
                <h4 className={`lg:text-4xl text-2xl`}>{category.title}</h4>
              </div>
              <ul className="flex gap-3 items-center flex-wrap">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="py-1 px-2 rounded-sm text-[#9B9EA3] hover:bg-[#e5e5e5] cursor-pointer transition-all ease-in-out duration-150 hover:text-black"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
