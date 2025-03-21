import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Section() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex bg-white"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="flex-1">oi</div>
      <div className="lg:p-20 p-8 w-full space-y-10 flex-1">
        <h2 className="lg:text-6xl text-4xl ">Technologies I work with</h2>
        <div className="border-b my-4"></div>
        <div className="lg:w-[50%]">
          <div className="px-1 py-3 mb-3 border-b  border-[#000]">
            <h4 className="text-2xl whitespace-nowrap">Design & Animation</h4>
          </div>
          <div>
            <ul className="flex gap-3 items-center flex-wrap">
              <li className="border py-1 px-2 rounded-full">Figma</li>
              <li className="border py-1 px-2 rounded-full">Adobe XD</li>
              <li className="border py-1 px-2 rounded-full">Axure RP</li>
              <li className="border py-1 px-2 rounded-full">Framer</li>
              <li className="border py-1 px-2 rounded-full">Sketch</li>
              <li className="border py-1 px-2 rounded-full">Photoshop</li>
            </ul>
          </div>
        </div>

        <div className="lg:w-[50%]">
          <div className="px-1 py-3 mb-3 mt-3 border-b border-[#000] w-[50%]">
            <h4 className="text-2xl">Front-end Development</h4>
          </div>
          <div>
            <ul className="flex gap-3 items-center flex-wrap">
              <li className="border py-1 px-2 rounded-full">HTML5</li>
              <li className="border py-1 px-2 rounded-full">CSS3</li>
              <li className="border py-1 px-2 rounded-full">Javascript</li>
              <li className="border py-1 px-2 rounded-full">React</li>
              <li className="border py-1 px-2 rounded-full">Next.js</li>
              <li className="border py-1 px-2 rounded-full">Material UI</li>
              <li className="border py-1 px-2 rounded-full">ShadnUI</li>
              <li className="border py-1 px-2 rounded-full">Radix</li>
              <li className="border py-1 px-2 rounded-full">SASS</li>
              <li className="border py-1 px-2 rounded-full">
                Style Components
              </li>
              <li className="border py-1 px-2 rounded-full">jQuery</li>
              <li className="border py-1 px-2 rounded-full">Three.JS</li>
              <li className="border py-1 px-2 rounded-full">Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <div className="lg:w-[50%]">
          <div className="px-1 py-3 mb-3 mt-3 border-b border-[#000] w-[50%]">
            <h4 className="text-2xl">Back-end Development</h4>
          </div>
          <div>
            <ul className="flex gap-3 items-center flex-wrap">
              <li className="border py-1 px-2 rounded-full">NodeJS</li>
              <li className="border py-1 px-2 rounded-full">NestJS</li>
              <li className="border py-1 px-2 rounded-full">Wordpress</li>
              <li className="border py-1 px-2 rounded-full">Express.JS</li>
              <li className="border py-1 px-2 rounded-full">Fastify</li>
              <li className="border py-1 px-2 rounded-full">Sanity CMS</li>
              <li className="border py-1 px-2 rounded-full">Strapi CMS</li>
            </ul>
          </div>
        </div>

        <div className="lg:w-[50%]">
          <div className="px-1 py-3 mb-3 mt-3 border-b border-[#000] w-[50%]">
            <h4 className="text-2xl">Database Solutions</h4>
          </div>
          <div>
            <ul className="flex gap-3 items-center flex-wrap">
              <li className="border py-1 px-2 rounded-full">MySQL</li>
              <li className="border py-1 px-2 rounded-full">PostgreSQL</li>
              <li className="border py-1 px-2 rounded-full">MongoDB</li>
              <li className="border py-1 px-2 rounded-full">Firebase</li>
              <li className="border py-1 px-2 rounded-full">Supabase</li>
              <li className="border py-1 px-2 rounded-full">AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
