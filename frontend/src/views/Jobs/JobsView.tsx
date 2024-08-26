import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getJobs } from "../../api/JobsAPI";
import { heroElement } from "../../types";
import Hero from "../../components/Jobs/Hero";
import JobItem from "../../components/Jobs/JobItem";

export default function JobsView() {

  const { data, isError, isLoading } = useQuery({
    queryKey: ["JobsPage"],
    queryFn: getJobs,
    retry: 10,
  });

  console.log(data);
  if (isLoading || isError) return <p>Loading...</p>;


  const hero:heroElement ={
    body:data.fields.sections[0].fields.items[0].fields.body,
    headline:data.fields.sections[0].fields.items[0].fields.headline,
    icon:data.fields.sections[0].fields.items[0].fields.icon,
    title:data.fields.sections[0].fields.items[0].fields.title,
  } 

  console.log(hero)


  return (
    <>
      
        <Hero hero={hero}/>


      <div className="space-y-3 mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-10">
          <JobItem/>
          
        </div>
      </div>
    </>
  );
}
