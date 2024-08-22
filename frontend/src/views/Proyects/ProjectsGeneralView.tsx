import React, { useMemo, useState } from "react";
import ProjectDisplay from "../../components/Proyects/ProjectDisplay";
import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../../api/ProjectsAPI";
import { PortfolioFieldElement, sys } from "../../types";

export default function ProjectsGeneralView() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ProjectsPage"],
    queryFn: getProjects,
    retry: 10,
  });

  if (isLoading || isError) return <p>Loading...</p>;

  interface JsonData {
    fields?: {
      sections?: Array<{
        fields?: {
          items?: Array<{
            fields?: {
              type?: string;
              title?: string;
              icon?: string;
              headline?: string;
            };
            sys?: sys;
          }>;
        };
      }>;
    };
  }

  function PortfolioFields(data: JsonData): string[] {
    const types: string[] = [];

    if (data.fields?.sections) {
      if (data.fields.sections.length > 0) {
        const firstSection = data.fields.sections[0];

        if (firstSection?.fields?.items) {
          const cartridges = firstSection.fields.items;

          for (const cartridge of cartridges) {
            const type = cartridge.fields?.type;

            if (type) {
              types.push(type);
            }
          }
        }
      }
    }

    return types;
  }

  function getProjectsByType(data: JsonData, type: string) {
    const projects: PortfolioFieldElement[] = [];
    const ids: string[] = [];

    if (data.fields?.sections) {
      for (const section of data.fields.sections) {
        if (section?.fields?.items) {
          const filteredItems = section.fields.items.filter(
            (item) => item.fields?.type === type,
          );

          filteredItems.forEach((item) => {
            projects.push({
              title: item.fields?.title || "",
              type: item.fields?.type || "",
              headline: item.fields?.headline || "",
              icon: item.fields?.icon || "",
            });
            if (item.sys) {
              ids.push(item.sys.id);
            }
          });
        }
      }
    }

    return { projects, ids };
  }
  
  const fields = PortfolioFields(data);
  const [typeShowing, setTypeShowing] = useState<string>(fields[0]);

  const { projects: ProjectsShowing, ids: idShowing } = getProjectsByType(data, "Animation");

  console.log(idShowing);
  console.log(fields);
  console.log(ProjectsShowing);

  const list = useMemo(() => getProjectsByType(data, typeShowing), [typeShowing]);

  function handleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    field: string,
  ) {
    e.preventDefault();
    setTypeShowing(field); 
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Latest Work
        </h1>

        <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
          {fields.map((field, index) => (
            <button
              key={index}
              className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400"
              onClick={(e) => {
                handleClick(e, field);
              }}
            >
              {field}
            </button>
          ))}
        </div>

        <section className="mt-8 space-y-8 lg:mt-12">
          <ProjectDisplay projects={list.projects} ids={list.ids} />
        </section>
      </div>
    </section>
  );
}
