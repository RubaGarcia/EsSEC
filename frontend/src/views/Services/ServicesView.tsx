import { useQuery } from "@tanstack/react-query";
import ServiceSmall from "../../components/Services/ServiceSmall";
import { getServices } from "../../api/ServicesAPI";
import {
  ApiRequest,
  Entry,
  Cartridge,
  ProductServiceTileFields,
  Blurb,
} from "../../types";
import { renderRichText } from "../../helpers/RichTextProcessor";

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

  const servicesBlurb: Entry<Blurb> = listSection[1] as Entry<Blurb>;

  products
    .slice(0, products.length - 1)
    .forEach((item: Entry<ProductServiceTileFields>) => {
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
            {/*FIXME*/ (servicesBlurb?.fields?.title.split(' ')?.[0] && servicesBlurb?.fields?.title.split(' ')?.[1]
            ? servicesBlurb?.fields?.title.split(' ')?.[0] +" "+ servicesBlurb?.fields?.title.split(' ')?.[1]
            : "")
             ?? "Loading"} 
             
             <br />
             <span className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
             {servicesBlurb?.fields?.title.split(' ')?.[2] ?? "Loading"}{" "}
             </span>

            
            <span className="underline decoration-blue-500">
              {servicesBlurb?.fields?.title.split(' ')?.[3] ?? "Loading"}
            </span>
          </h1>

          <div className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
             { servicesBlurb.fields?.textBlurb && <div dangerouslySetInnerHTML={{ __html: renderRichText(servicesBlurb.fields?.textBlurb ) }} />}
             {" "}
          </div>

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
