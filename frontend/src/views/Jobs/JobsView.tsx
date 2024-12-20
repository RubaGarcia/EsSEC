import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../api/JobsAPI";
import Hero from "../../components/Jobs/Hero";
import JobItem from "../../components/Jobs/JobItem";
import type {
  ApiRequest,
  EntryLink,
  PersonFields,
  Entry,
  Cartridge,
  ValuePropositionFields,
  JobFields,
} from "../../types";

import TestimonialJobs from "../../components/Jobs/TestimonialJobs";

export default function JobsView() {
  const {
    data,
    isError,
    isLoading,
  }: {
    data: undefined | ApiRequest;
    isError: null | boolean;
    isLoading: boolean;
  } = useQuery({
    queryKey: ["JobsPage"],
    queryFn: getJobs,
    retry: 10,
  });
  // console.log("hola")
  if(!data){
    console.log("data is null")
  }
  //console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error loading data...</p>;

  const cartridge: Entry<Cartridge> = data?.fields
    ?.sections?.[0] as Entry<Cartridge>;
  const valueProp0: Entry<ValuePropositionFields> = cartridge.fields
    ?.items?.[0] as Entry<ValuePropositionFields>;

  // Usamos Optional Chaining para acceder a las propiedades de manera segura
  const hero: ValuePropositionFields = {
    body: valueProp0.fields?.body,
    headline: valueProp0.fields?.headline ?? "",
    icon: valueProp0.fields?.icon,
    title: valueProp0.fields?.title ?? "",
    url: valueProp0.fields?.url ?? "",
    type: valueProp0.fields?.type ?? "",

  };

  const jobs: Entry<JobFields>[] = [];

  const elements: Entry<JobFields>[] = cartridge.fields
    ?.items as Entry<JobFields>[];

  elements.slice(1).forEach((element: Entry<JobFields>) => {
    const job: Entry<JobFields> = {
      sys: element?.sys,
      fields: {
        internal: element?.fields?.internal,
        name: element?.fields?.name,
        description: element?.fields?.description!,
        salary: element?.fields?.salary,
        // employees: element?.fields?.employees,
        // applicants: element?.fields?.applicants,
      },
    };
    //console.log(job);
    jobs.push(job);
  });

  const cartridgePersonas: Entry<Cartridge>= data?.fields?.sections?.[1] as Entry<Cartridge>;
  const personas : Entry<PersonFields>[] = cartridgePersonas?.fields?.items as Entry<PersonFields>[];
  

  const reviews:  Entry<PersonFields>[] = personas.filter((item: Entry<PersonFields>) => 
    item.metadata?.tags?.find((tag: EntryLink<PersonFields>) => tag.sys.id === 'worker')
  );

  return (
    <>
      <Hero hero={hero} />

      <div className="space-y-3 mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-10">
          {jobs.map((job: Entry<JobFields>) => (
            <JobItem key={job.sys?.id} job={job} hero={hero} />
          ))}
          {/* <JobItem /> */}
        </div>
        <TestimonialJobs reviews={reviews}/>
      </div>
    </>
  );
}
