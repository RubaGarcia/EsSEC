import { useQuery } from "@tanstack/react-query";
import PortfolioDisplay from "../components/PortfolioDisplay";
import ReviewSlider from "../components/ReviewSlider";
import { getPage } from "../api/HomeAPI";
import { PersonFields, ValuePropositionFields, Cartridge } from "../types";
import type { ApiRequest, Blurb, Entry, localeProp} from "../types";



export default function MainView(locale:localeProp) {
  const {
    data /* ,error */,
    isLoading,
  }: { data: undefined | ApiRequest; error: null | Error; isLoading: boolean } =
    useQuery({
      queryKey: ["HomePage"],
      queryFn: getPage,
    });

  if (isLoading) return <p>Loading...</p>;

  console.log(data);

  const heroCartridge: Entry<Cartridge> = data?.fields
    ?.sections?.[0] as Entry<Cartridge>;
  
  const heroValueProp: Entry<ValuePropositionFields> = heroCartridge?.fields
    ?.items?.[0] as Entry<ValuePropositionFields>;
  const texts: string[] = heroValueProp.fields?.propertiesList!;

  const valuePropList: Entry<Cartridge> = data?.fields
    ?.sections?.[1] as Entry<Cartridge>;

  function PortfolioFields(): string[] {
    const types: string[] = [];

    const items: Entry<ValuePropositionFields>[] = valuePropList.fields
      ?.items as Entry<ValuePropositionFields>[];

    // Recorre cada elemento en items y extrae el campo 'type'
    for (const item of items) {
      const type = item.fields?.type;
      if (type && !types.includes(type)) {
        types.push(type);
      }
    }

    return types;
  }
  // console.log(PortfolioFields())

  const personList: Entry<Cartridge> = data?.fields
    ?.sections?.[2] as Entry<Cartridge>;

  const reviewer: Entry<PersonFields> = personList.fields
    ?.items?.[0] as Entry<PersonFields>;

  let listReview: Entry<PersonFields>[] = personList.fields
    ?.items as Entry<PersonFields>[];

  const heroImgUrl =
    heroValueProp.fields?.icon?.fields?.asset?.fields?.file?.url;

  const portFolioElements: Entry<ValuePropositionFields>[] =
    (valuePropList.fields?.items as Entry<ValuePropositionFields>[]) ?? [];
  //console.log(portFolioElements.length);

  reviewer && listReview?.push(reviewer);

  const blurb: Entry<Blurb> = data?.fields
    ?.sections?.[3] as Entry<Blurb>;



  return (
    <>
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              {heroValueProp.fields?.title}
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
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
            src={heroImgUrl} //"https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="glasses photo"
          />
        </div>
      </div>

      <PortfolioDisplay
        fields={PortfolioFields()}
        elements={portFolioElements ? portFolioElements : []}
      />

      <ReviewSlider
        blurb={blurb}
        reviewer={listReview} />
    </>
  );
}
