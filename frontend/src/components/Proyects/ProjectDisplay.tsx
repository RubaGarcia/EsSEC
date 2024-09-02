import { Link } from "react-router-dom";
import { ValuePropositionFields } from "../../types";

type ProjectDisplayProps = {
  projects: Pick<ValuePropositionFields, "title" | "headline" | "icon">[];
  ids: string[];
};

export default function ProjectDisplay({ projects, ids }: ProjectDisplayProps) {
  console.log(ids);
  return (
    
      <section className="flex flex-col items-center">
        {projects.map((project, index) => (
          <div className="flex flex-col lg:flex-row w-full mb-6">
            {/* {console.log(ids[index])} */}
            <div className="lg:w-1/2 " key={index}>
              <p
                className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 "
                key={index}
              >
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
                src={project.icon?.fields?.asset?.fields?.file?.url}
                alt=""
              />
            </div>
          </div>
        ))}
      </section>
    
  );
}
