import { useQuery } from "@tanstack/react-query";
import ResourceElement from "../../components/Resources/ResourceElement";
import { getResources } from "../../api/ResourcesAPI";
import { ResourceElement as ResourceElementType } from "../../types";

type ResourcesData = {
  fields: {
    sections: Array<{
      fields: {
        items: ResourceElementType[];
      };
    }>;
  };
}

export default function ResourcesView() {
  const { data, isError, isLoading } = useQuery<ResourcesData>({
    queryKey: ["ResourcesView"],
    queryFn: getResources,
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError || !data) return <p>Error al cargar los datos</p>;

  console.log(data, isError, isLoading);

  // Accede a los recursos correctamente
  const resources = data.fields.sections[0].fields.items;

  const resourcesTyped = resources.map((resource) => ({
    title: resource.fields.title,
    headline: resource.fields.headline,
    icon: resource.fields.icon,
    date: resource.fields.date,
    url: resource.fields.url,
  }));

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          From the blog
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {resourcesTyped.map((resource, index) => (
            <ResourceElement
              key={index}
              {...resource}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
