import { useMemo, useState } from "react";
import { ValuePropositionFields, Entry } from "../types";

type PortfolioDisplayProps = {
  fields: string[];
  elements: Entry<ValuePropositionFields>[];
};

export default function PortfolioDisplay({
  fields,
  elements,
}: PortfolioDisplayProps) {

  const [typeShowing, setTypeShowing] = useState<string>(fields[0]);

  function portFolioElements(
    type: string,
  ): Omit<ValuePropositionFields, "internalTitle" | "body" | "date" | "propertiesList" | "url" | "date">[] {

    const list = elements
      .filter((element) => element.fields?.type === type)
      .map((element) => {
        return {
          title: element.fields?.title,
          headline: element.fields?.headline,
          type: element.fields?.type,
          icon: element.fields?.icon,
        };
      });

    return list;
  }

  const list = useMemo(() => portFolioElements(typeShowing), [typeShowing]);

  function handleClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    type: string,
  ): void {
    e.preventDefault();
    // console.log(type);
    setTypeShowing(type); 
  }

  // console.log(list);

  return (
    <section className="bg-white dark:bg-gray-800 rounded-lg">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
          Portfolio
        </h1>

        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            </h1>

            <div className="mt-4 space-y-4 lg:mt-8">
              {fields.map((type: string) => {
                return (
                  <a
                    key={type}
                    className="block text-gray-500 dark:text-blue-600 hover:underline"
                    onClick={(e) => handleClick(e, type)} 
                  >
                    {type}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {list.map((element: Omit<ValuePropositionFields, "internalTitle" | "body" | "date" | "propertiesList" | "url" | "date"> ) => {
                return (
                  <div key={element.title}> {/* Añadido key para cada elemento */}
                    <img
                      className="object-cover w-full rounded-lg h-96"
                      src={element.icon?.fields?.asset?.fields?.file?.url} //"https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                      alt=""
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                      {element.title}
                    </h2>
                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400">
                      {element.headline}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
