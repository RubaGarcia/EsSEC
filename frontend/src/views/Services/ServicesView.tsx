import { useQuery } from "@tanstack/react-query";
import ServiceSmall from "../../components/Services/ServiceSmall";
import { getServices } from "../../api/ServicesAPI";
import { servicePreview, servicePreviewFields } from "../../types";

export default function ServicesView() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ServicesPage"],
    queryFn: getServices,
    retry: 10,
  });

  console.log(data);

  //   console.log(data.fields.sections[0].fields.items)
  if (isLoading || isError) return <p>Loading...</p>;
  let elements: servicePreviewFields[] = [];
  data.fields.sections[0].fields.items.forEach((item: servicePreview) => {
    // console.log(item.fields.title);
    const element: servicePreviewFields = {
        title: item.fields.title,
        ctaText: item.fields.ctaText,
        internalTitle: item.fields.internalTitle,
        url: item.fields.url,
        };
    elements.push(element);
  });
  console.log(elements);
  

  







  return (
    <>
      //TODO hacer breadcrumb
      <div className="bg-gray-200 dark:bg-gray-900">
        <div className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
          <a href="/" className="text-gray-600 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </a>

          <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>

          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Servicios
          </a>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 justify-center">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            explore our <br /> awesome{" "}
            <span className="underline decoration-blue-500">Services</span>
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            quam voluptatibus
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {elements.map((element, index) => (
              <ServiceSmall
                key={index}
                title={element.title}
                description={element.ctaText}
                link={element.url}
              />
            ))}
            
          </div>
        </div>
      </section>
    </>
  );
}
