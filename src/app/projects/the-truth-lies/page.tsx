import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import projects from "../../../../projects.json";

export default function ProjectPage() {
  const project = projects[2];

  if (!project) {
    return <div className="text-center mt-20 text-2xl">Project not found</div>;
  }

  return (
    <div className="mt-[70px] w-full flex items-center">
      <div className="max-w-[1346px] mx-auto p-8 lg:mt-16 mt-2">
        <div className="flex lg:flex-row flex-col">
          <div className="w-full">
            <Image
              src={project.logo}
              alt={project.title}
              className="w-[200px] h-[120px]"
              width={200}
              height={200}
            />
          </div>
          <div className="space-y-8">
            <p className="text-[#787878]">{project.description}</p>
            <div>
              <h3 className="text-lg">Technologies</h3>
              <ul className="flex gap-3 items-center flex-wrap py-4">
                {project.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="border py-1 px-2 rounded-full hover:bg-white hover:text-black cursor-pointer"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Link
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 border rounded-full px-6 py-2 hover:bg-white hover:text-black cursor-pointer">
                  Visit <ArrowRight size={20} />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="py-8">
            <h3 className="text-2xl">About the Project</h3>
          </div>
          <div className="space-y-4">
            {project.screenshots.map((image: string, index: number) => (
              <Image
                key={index}
                src={image}
                alt={project.title}
                className="w-full h-full rounded-2xl"
                width={1346}
                quality={100}
                height={757}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center py-16 lg:flex-row flex-col">
          <div className="flex-1">
            <h3 className="text-8xl">{project.briefTitle}</h3>
          </div>
          <div className="flex-1">
            <p>{project.briefDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
