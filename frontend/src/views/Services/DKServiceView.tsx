import { useQuery } from "@tanstack/react-query";
import { getDigitalKit } from "../../api/ServicesAPI";
import Hero from "../../components/Services/digital-kit/Hero";
import { heroElement } from "../../types";


export default function DKServiceView() {


  const { data, isError, isLoading } = useQuery({
    queryKey: ["DigitalKitPage"],
    queryFn: getDigitalKit,
    retry: 10,
  });

  console.log(data);

  if (isLoading || isError) return <p>Loading...</p>;


  const webPageElements = data.fields.sections

  const heroValues:heroElement = {
    body:webPageElements[0].fields.textBlurb,
    title:webPageElements[0].fields.title
  }


  return (
    <>
      <Hero hero={heroValues}/>

      <div className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <p className="text-xl text-center text-gray-500 dark:text-gray-300">
            Choose your plan
          </p>

          <h1 className="mt-4 text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Pricing Plan
          </h1>

          <div className="mt-6 space-y-8 xl:mt-12">
            <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl">
              <div className="flex items-center">
                

                <div className="flex flex-col items-center mx-5 space-y-1">
                  <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
                    Basic
                  </h2>

                  <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                    Save 20%
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-blue-600 sm:text-4xl">
                $49 <span className="text-base font-medium">/Month</span>
              </h2>
            </div>

            <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl">
              <div className="flex items-center">

                <div className="flex flex-col items-center mx-5 space-y-1">
                  <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
                    Popular
                  </h2>
                  <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                    Save 20%
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-blue-600 sm:text-4xl">
                $99 <span className="text-base font-medium">/Month</span>
              </h2>
            </div>

            <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl">
              <div className="flex items-center">

                <div className="flex flex-col items-center mx-5 space-y-1">
                  <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">
                    Enterprise
                  </h2>
                  <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                    Save 20%
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-blue-600 sm:text-4xl">
                $149 <span className="text-base font-medium">/Month</span>
              </h2>
            </div>

            <div className="flex justify-center">
              <button className="px-8 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
