import Hero from "../../components/Services/improvement-plans/hero";
import { useQuery } from "@tanstack/react-query";
import { getImprovementPlans } from "../../api/ServicesAPI";
import { ApiRequest, Entry, Cartridge, ValuePropositionFields } from "../../types";
import PropertiesCard from "../../components/Services/improvement-plans/propertiesCard";

export default function ImprovementPlansView() {

  const { data, isError, isLoading } : {data: undefined | ApiRequest, isError: null | boolean, isLoading: boolean} = useQuery({
    queryKey: ["ImprovementPlansPage"],
    queryFn: getImprovementPlans,
    retry: 10,
  });

  if (isLoading || isError) return <div>Loading...</div>;



  const valuePropCartridge: Entry<Cartridge>= data?.fields?.sections?.[0] as Entry<Cartridge>;
  const elements : Entry<ValuePropositionFields>[] = valuePropCartridge.fields?.items as Entry<ValuePropositionFields>[];


  const hero :Entry<ValuePropositionFields>=elements[0] as Entry<ValuePropositionFields>;

  //console.log(valuePropCartridge);
  return (
    <>
        

        <Hero hero={hero}/>

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {elements.map((item: Entry<ValuePropositionFields>, index:number)=>{

              return(
                <div>
                <PropertiesCard
                card={item}
                index={index}/>
                </div>
              )

            })}
            
          </div>
        </div>
      </section>
    </>
  );
}
