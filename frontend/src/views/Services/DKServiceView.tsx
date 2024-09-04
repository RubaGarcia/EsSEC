import { useQuery } from "@tanstack/react-query";
import { getDigitalKit } from "../../api/ServicesAPI";
import Hero from "../../components/Services/digital-kit/Hero";
import { Cartridge, ApiRequest, Blurb, Entry } from "../../types";
import PricingPlan from "../../components/Services/digital-kit/PricingPlan";

export default function DKServiceView() {
  const { data, isError, isLoading } : {data: undefined | ApiRequest, isError: null | boolean, isLoading: boolean}= useQuery({
    queryKey: ["DigitalKitPage"],
    queryFn: getDigitalKit,
    retry: 10,
  });

  // console.log(data);

  if (isLoading || isError) return <p>Loading...</p>;

  const blurb : Entry<Blurb> = data?.fields?.sections?.[0] as Entry<Blurb>;
  const cart: Entry<Cartridge>= data?.fields?.sections?.[1] as Entry<Cartridge>;

  const pricingPlans:{
    name:string,
    price:number
  }[] = [];
  
  cart?.fields?.items?.forEach((item:any) => {
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
      <Hero blurb={blurb} />

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
