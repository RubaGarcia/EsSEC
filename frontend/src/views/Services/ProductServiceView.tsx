import { useQuery } from "@tanstack/react-query";
import ProductDisplay from "../../components/Products/ProductDisplay";
import { getProducts } from "../../api/ServicesAPI";
import {
  PersonFields,
  ApiRequest,
  Cartridge,
  Entry,
  ValuePropositionFields,
  ProductServiceTileFields,
  Blurb
} from "../../types";
import Hero from "../../components/Services/product/Hero";
import TestimonialComplete from "../../components/Services/product/TestimonialComplete";
import {renderRichText} from "../../helpers/RichTextProcessor";


export default function ProductServiceView() {
  const { data, isError, isLoading }  : {data: undefined | ApiRequest, isError: null | boolean, isLoading: boolean}= useQuery({
    queryKey: ["ServicesProductPage"],
    queryFn: getProducts,
    retry: 10,
  });

  //console.log(data);

  if (isLoading || isError) return <p>Loading...</p>;

  const valuePropCartridge: Entry<Cartridge>= data?.fields?.sections?.[0] as Entry<Cartridge>;

  console.log(JSON.stringify(data))

  const hero: ValuePropositionFields = valuePropCartridge?.fields?.items?.[0].fields as ValuePropositionFields; 



  const productCartridge: Entry<Cartridge>= data?.fields?.sections?.[1] as Entry<Cartridge>;
  
  const products: Entry<ProductServiceTileFields>[] = productCartridge.fields?.items as  Entry<ProductServiceTileFields>[];



  const personCartridge: Entry<Cartridge>= data?.fields?.sections?.[2] as Entry<Cartridge>;

  const PersonReviews: Entry<PersonFields>[] = personCartridge.fields?.items as Entry<PersonFields>[];

  const bluerbProducts: Entry<Blurb>= data?.fields?.sections?.[3] as Entry<Blurb>;

  const bluerbOpinions: Entry<Blurb>= data?.fields?.sections?.[4] as Entry<Blurb>;


  return (
    <>

      <Hero hero={hero} />


      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              {bluerbProducts?.fields?.title}
            </h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              {bluerbProducts?.fields?.textBlurb && <div dangerouslySetInnerHTML={{ __html: renderRichText(bluerbProducts.fields?.textBlurb) }} />}

            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            {products.map((product, index) => (
              <ProductDisplay
                key={index}
                imageSrc={product.fields?.icon.fields?.asset?.fields?.file?.url ?? ""}
                title={product.fields?.title ?? ""}
                cta={product.fields?.ctaText?? ""}
                url={product.fields?.url?? "/"}
              />
            ))}
          </div>
          <TestimonialComplete blurb={bluerbOpinions} personReviews={PersonReviews}  />
        </div>
      </section>
    </>
  );
}
