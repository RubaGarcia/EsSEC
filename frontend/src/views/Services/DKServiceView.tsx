import { useQuery } from "@tanstack/react-query";
import { getDigitalKit } from "../../api/ServicesAPI";
import Hero from "../../components/Services/digital-kit/Hero";
import { heroElement } from "../../types";
import PricingPlan from "../../components/Services/digital-kit/PricingPlan";

export default function DKServiceView() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["DigitalKitPage"],
    queryFn: getDigitalKit,
    retry: 10,
  });

  // console.log(data);

  if (isLoading || isError) return <p>Loading...</p>;

  const webPageElements = data.fields.sections;

  const heroValues: heroElement = {
    body: webPageElements[0].fields.textBlurb,
    title: webPageElements[0].fields.title,
  };

  const pricingPlans:{
    name:string,
    price:number
  }[] = [];
  
  webPageElements[1].fields.items.forEach((item:any) => {
    const element = {
      name: item.fields.title,
      price: item.fields.ctaText
    }
    // console.log(element)
    pricingPlans.push(element);
  })

  // console.log(pricingPlans);




  return (
    <>
      <Hero hero={heroValues} />

      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <p className="text-xl text-center text-gray-500 dark:text-gray-300">
            Choose your plan
          </p>

          <h1 className="mt-4 text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Pricing Plan
          </h1>

          <div className="mt-6 space-y-8 xl:mt-12">
            {pricingPlans.map((plan) => (
              <PricingPlan name={plan.name} price={plan.price} />
            ))}

            

            <div className="flex justify-center">
              {/* <button className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Choose Plan
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
