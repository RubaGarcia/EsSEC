import { Link } from "react-router-dom";
import { PortfolioFieldElement } from "../../types";

type ProjectDisplayProps = {
  projects: Pick<PortfolioFieldElement, "title" | "headline" | "icon">[];
  ids: string[];
};


export default function ProjectDisplay({ projects, ids }: ProjectDisplayProps) {


  console.log(ids);
  return (
    <section className="lg:flex lg:items-center">
      {projects.map((project, index) => (
        <>
        {/* {console.log(ids[index])} */}
          <div className="lg:w-1/2 ">
            <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
              {project.headline}
            </p>
            <Link
              className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white"
              to={`/projects/${ids[index]}`}
            >
              {project.title}{" "}
            </Link>
          </div>

          <div className="mt-4 lg:w-1/2 lg:mt-0">
            <img
              className="object-cover w-full h-64 rounded-lg md:h-96"
              src={project.icon}
              alt=""
            />
          </div>
        </>
      ))}
    </section>
  );
}
