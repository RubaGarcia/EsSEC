import { useQuery } from "@tanstack/react-query";
import PortfolioDisplay from "../components/PortfolioDisplay";
import ReviewSlider from "../components/ReviewSlider";
import { getPage } from "../api/HomeAPI";
import { PersonFieldsReview, PersonReview } from "../types";

export default function MainView() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["HomePage"],
    queryFn: getPage,
  });

  if (isLoading) return <p>Loading...</p>

  console.log(data, isError, isLoading);

  const elements = data?.fields.sections;

  const characteristics = elements?.find(
    (element: any) => element.fields.internalTitle === "characteristics",
  );

  const aux = characteristics?.fields.textBlurb.content[0].content;

  const extractTexts = (content: any[]): string[] => {
    let texts: string[] = [];
    content.forEach((node: any) => {
      if (node.nodeType === "text" && node.value) {
        texts.push(node.value);
      } else if (node.content) {
        texts = texts.concat(extractTexts(node.content));
      }
    });
    return texts;
  };

  const texts = aux ? extractTexts(aux) : [];

  interface JsonData {
    fields?: {
      sections?: Array<{
        fields?: {
          items?: Array<{
            fields?: {
              type?: string;
            };
          }>;
        };
      }>;
    };
  }
  
  function PortfolioFields(data: JsonData): string[] {
    const types: string[] = [];
  
    // Verifica si la estructura existe
    if (
      data.fields?.sections &&
      data.fields.sections.length > 1 &&
      data.fields.sections[1].fields?.items
    ) {
      const items = data.fields.sections[1].fields.items;
      
      // Recorre cada elemento en items y extrae el campo 'type'
      for (const item of items) {
        const type = item.fields?.type;
        if (type) {
          types.push(type);
        }
      }
    }
  
    return types;
  }

  

  //console.log(PortfolioFields(data));

 const reviewer:PersonReview = data?.fields.sections[2].fields.items[0];

  const listReview = data?.fields.sections[2].fields.items;
  
  listReview.push(reviewer);
  //console.log(listReview);

  return (
    <>
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              Easiest way to create your website
            </h1>

            {texts.map((text: string, index: number) => (
              <div className="mt-8 space-y-5" key={index}>
                <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-2 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="mx-2">{text}</span>
                </p>
              </div>
            ))}

            <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
              <form className="flex flex-col lg:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />
                <button
                  type="button"
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                >
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src=/*FIXME: Necesario método que verifique la estructura {data.fields.sections[0].items[0].icon.asset.id} */"https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="glasses photo"
          />
        </div>
      </div>
      <PortfolioDisplay 
        fields={PortfolioFields(data)} 
        elements={data?.fields.sections[1].fields.items}
      />
      {/* {console.log('*********',reviewer)} */}
      <ReviewSlider 
        reviewer={listReview}
      />
    </>
  );
}


