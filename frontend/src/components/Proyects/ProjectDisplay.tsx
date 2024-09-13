import { Link } from "react-router-dom";
import { ValuePropositionFields } from "../../types";
import { renderRichText } from "../../helpers/RichTextProcessor";

type ProjectDisplayProps = {
  projects: Pick<ValuePropositionFields, "title" | "headline" | "icon" | "type" | "body">[];
  ids: string[];
};

export default function ProjectDisplay({ projects, ids }: ProjectDisplayProps) {
  console.log(ids);
  return (
    
      <section className="flex flex-col items-center">
        {projects.map((project, index) => (
          <div className="flex flex-col lg:flex-row w-full mb-6 ">
            {/* {console.log(ids[index])} */}
            <div className="lg:w-1/2 space-y-5" key={index}>
              <p
                className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400"
                key={index}
              >
                {project.type}
              </p>
              <Link
                className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white"
                to={`/projects/${ids[index]}`}
              >
                {project.title}{" "}
              </Link>
              <div
                className="text-base tracking-wider text-gray-800 capitalize dark:text-gray-300 line-clamp-5"
                key={index}
              >
                {project.body && (
              <div
                dangerouslySetInnerHTML={{ __html: renderRichText(project.body) }}
              />
            )}
                
              </div>
              
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
