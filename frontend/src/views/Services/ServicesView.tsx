import { useQuery } from "@tanstack/react-query";
import ServiceSmall from "../../components/Services/ServiceSmall";
import { getServices } from "../../api/ServicesAPI";
import {
  ApiRequest,
  Entry,
  Cartridge,
  ProductServiceTileFields,
} from "../../types";

export default function ServicesView() {
  const {
    data,
    isError,
    isLoading,
  }: {
    data: undefined | ApiRequest;
    isError: null | boolean;
    isLoading: boolean;
  } = useQuery({
    queryKey: ["ServicesPage"],
    queryFn: getServices,
    retry: 10,
  });

  if (isLoading || isError) return <p>Loading...</p>;

  const elements: ProductServiceTileFields[] = [];
  const listSection: Entry<Cartridge>[] = data?.fields
    ?.sections as Entry<Cartridge>[];
  const products: Entry<ProductServiceTileFields>[] = listSection?.[0]?.fields
    ?.items as Entry<ProductServiceTileFields>[];

  products.slice(0, products.length-1).forEach((item: Entry<ProductServiceTileFields>) => {
    const element: ProductServiceTileFields = {
      title: item.fields?.title ?? "",
      ctaText: item.fields?.ctaText ?? "",
      internalTitle: item.fields?.internalTitle ?? "",
      url: item.fields?.url ?? "",
      allingment: item.fields?.allingment ?? ["left"],
      icon: item.fields?.icon!,
      interestedInThis: item.fields?.interestedInThis!,
      date: item.fields?.date!,
    };
    elements.push(element);
  });

  return (
    <>
      
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

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-5">
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
