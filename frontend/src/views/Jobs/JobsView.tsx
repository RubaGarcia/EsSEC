import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../api/JobsAPI";
import { heroElement, Job} from "../../types";
import Hero from "../../components/Jobs/Hero";
import JobItem from "../../components/Jobs/JobItem";

export default function JobsView() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["JobsPage"],
    queryFn: getJobs,
    retry: 10,
  });

  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Error loading data...</p>;

  const elements = data?.fields?.sections?.[0]?.fields?.items;



  // Usamos Optional Chaining para acceder a las propiedades de manera segura
  const hero: heroElement = {
    body: elements[0]?.fields?.body ?? "",
    headline: elements[0]?.fields?.headline ?? "",
    icon: elements[0]?.fields?.icon ?? "",
    title: elements[0]?.fields?.title ?? "",
  };

  const jobs: Job[] = [];

  elements.slice(1).forEach((element: Job) => {
    const job: Job = {
      sys: element?.sys,
      fields: {
        internal: element?.fields?.internal,
        name: element?.fields?.name,
        description: element?.fields?.description,
        salary: element?.fields?.salary,
        // employees: element?.fields?.employees,
        // applicants: element?.fields?.applicants,
      },
    };
    console.log(job);
    jobs.push(job);

  });

  return (
    <>
      <Hero hero={hero} />

      <div className="space-y-3 mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-10">
          {jobs.map((job: Job) => (
            <JobItem key={job.sys.id} job={job} />
          ))}
          {/* <JobItem /> */}
        </div>
      </div>
    </>
  );
}
