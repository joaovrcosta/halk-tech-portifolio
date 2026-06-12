import Pic1 from "../../../public/images/projects/the-truth-lies/the-truth-lies-5.webp";
import Pic2 from "../../../public/projects/ttl/p-1.png";
import Pic3 from "../../../public/images/projects/the-truth-lies/the-truth-lies-2.png";
import Pic4 from "../../../public/images/projects/isadora-online/mobile-mock.png";
import Pic5 from "../../../public/images/projects/isadora-online/laptop-mock.png";
import Pic6 from "../../../public/images/projects/isadora-online/isadora-print-3.png";
import Pic7 from "../../../public/images/projects/wills-group/laptop-img.png";
import Pic8 from "../../../public/images/projects/wills-group/smartphone-img.jpg";
import Pic9 from "../../../public/images/projects/wills-group/website-img.png";
import Pic10 from "../../../public/images/projects/gym-shark/foto-1.png";
import Pic11 from "../../../public/images/projects/gym-shark/tentando.png";
import Pic12 from "../../../public/images/projects/gym-shark/foto-3.png";
import ProjectShowcase from "@/components/projects";

const projects = [
  {
    title: "The Truth Lies",
    description:
      "The 'The Truth Lies' teaser site for Call of Duty: Black Ops 6 features a 90s-style TV and a mysterious campaign where activists cover historical monuments with blindfolds, emphasizing the phrase. It builds intrigue for the game's Gulf War-era setting.",
    images: [Pic1, Pic2, Pic3],
    link: "/projects/the-truth-lies",
  },
  {
    title: "Wills Group",
    description:
      "The 'Dash In' official website for The Wills Group features a modern-style interface and a fresh campaign where users discover premium food rewards, emphasizing customer convenience. It builds intrigue for the brand's new chef-crafted menu selection.",
    images: [Pic7, Pic8, Pic9],
    link: "/projects/the-truth-lies",
  },
  {
    title: "Isadora Online",
    description:
      "Isadora Online is a stylish e-commerce platform from Argentina, offering a curated collection of women’s fashion. Designed for modern women, the site features a seamless shopping experience with trendy and high-quality clothing.",
    images: [Pic5, Pic4, Pic6],
    link: "/projects/isadora-online",
  },
  {
    title: "GymShark",
    description:
      "The official Gymshark store features a cutting-edge activewear collection and a fresh campaign where fitness enthusiasts find premium seamless gear, emphasizing high-performance conditioning. It builds excitement for the brand's new athlete-approved apparel selection.",
    images: [Pic10, Pic12, Pic11],
    link: "/projects/isadora-online",
  },
];

export default function ProjectsPage() {
  return (
    <div data-header-theme="dark" className="bg-[#0e0e0e]">
      <div
        className="relative px-4 md:px-8 h-[80vh] md:h-[100vh] flex items-center justify-center bg-[radial-gradient(circle_at_bottom_right,_#5F5F5F_0%,_#fff_80%)]"
      >
        <div aria-hidden className="absolute inset-x-0 top-0 h-24 z-[1]">
          <div data-header-theme="light" className="absolute inset-y-0 left-0 w-[55%]" />
          <div data-header-theme="dark" className="absolute inset-y-0 right-0 w-[45%]" />
        </div>
        <div className="relative w-full md:px-20">
          <h1 className="text-black font-medium text-4xl md:text-[80px] max-w-[1120px] leading-tight md:leading-[85px]">
            Our partnerships shape the human experience and transform businesses
          </h1>
          <div className="mt-8">
            <ul className="text-black flex flex-wrap gap-2">
              {["All", "E-commerce", "Landing Page", "Brand"].map((label) => (
                <li key={label} className="flex-grow sm:flex-grow-0">
                  <button className="rounded-full border border-black w-full sm:w-auto text-black flex items-center justify-center px-4 py-2 hover:bg-black hover:text-white transition-all duration-150 ease-in-out">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {projects.map((project, index) => (
        <ProjectShowcase key={index} project={project} index={index} />
      ))}
    </div>
  );
}
