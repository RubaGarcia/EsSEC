import { useQuery } from "@tanstack/react-query";
import ProductDisplay from "../../components/Products/ProductDisplay";
import { getProducts } from "../../api/ServicesAPI";
import {
  heroElement,
  PersonFieldsReview,
  PersonReview, servicePreview,
  servicePreviewFields
} from "../../types";
import Hero from "../../components/Services/product/Hero";
import TestimonialComplete from "../../components/Services/product/TestimonialComplete";

export default function ProductServiceView() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["ServicesProductPage"],
    queryFn: getProducts,
    retry: 10,
  });

  console.log(data);

  if (isLoading || isError) return <p>Loading...</p>;

  const hero: heroElement = data.fields.sections[0].fields.items[0].fields;
  // console.log(hero)

  let products: servicePreviewFields[] = [];

  data.fields.sections[1].fields.items.forEach((item: servicePreview) => {
    // console.log(item.fields)
    const element: servicePreviewFields = {
      title: item.fields.title,
      ctaText: item.fields.ctaText,
      internalTitle: item.fields.internalTitle,
      url: item.fields.url,
      date: item.fields.date,
    };
    products.push(element);
    // products.push(item.fields)
  });

  // console.log(products)

  let PersonReviews: PersonFieldsReview[] = [];

  data.fields.sections[2].fields.items.forEach((item: PersonReview) => {
    const element: PersonFieldsReview = {
      name: item.fields.name,
      review: item.fields.review,
      image: item.fields.image,
      job: item.fields.job,
    };
    // console.log(element)
    if (element != null) {
      PersonReviews.push(element);
      // console.log(element)
    }
    // products.push(element)
  });

  // console.log(PersonReviews)

  return (
    <>
      {/* <header className="bg-white dark:bg-gray-900"> */}

      <Hero hero={hero} />

      {/* </header> */}

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Que productos ofrecemos
            </h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              veritatis sint autem nesciunt, laudantium quia tempore delect
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            {products.map((product, index) => (
              <ProductDisplay
                key={index}
                imageSrc={product.ctaText}
                title={product.title}
                abstract={product.ctaText}
              />
            ))}
          </div>
          <TestimonialComplete personReviews={PersonReviews} />
        </div>
      </section>
    </>
  );
}
