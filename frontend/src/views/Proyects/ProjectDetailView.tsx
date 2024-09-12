import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "../../api/ProjectsAPI";
import { useParams } from "react-router-dom";
import {renderRichText} from "../../helpers/RichTextProcessor";
import type {ValuePropositionFields } from "../../types";

export default function ProyectDetailView() {
  
  const params = useParams();
  const projectId = params.projectId!;
  
  
    const { data, isError, isLoading } :  {data: undefined | ValuePropositionFields, isError:boolean, isLoading: boolean}= useQuery({
      queryKey: ["ProjectDetailPage", projectId],
      queryFn: () => getProjectById({ ProjectId: projectId }),
    });



    //console.log(data);

    // if (isLoading) {
    //   return <LoadingSpinner />;
    // }
  
    if (isLoading ||isError || !data) {
      return <div>Error loading project details.</div>;
    }
  
    function word(string: string, index:number){
      return string.split(':')?.[index] 
      ? string.split(':')?.[index]
      : " "
    }
    



// if (data)
return (
    <>
    {/* <LoadingSpinner /> */}
      {/* <header className="bg-white dark:bg-gray-900"> */}
        

        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                {data.title}
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {data.type}
              </p>
              <div className="grid gap-6 mt-8 sm:grid-cols-2">
                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200 font-bold">
                  {data?.propertiesList?.[0] ? word(data?.propertiesList?.[0], 0) : ""}
                  <span className="mx-3 text-blue-600 font-sans">
                    {data?.propertiesList?.[0] ? word(data?.propertiesList?.[0], 1) : ""}
                    </span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200 font-bold">
                {data?.propertiesList?.[1] ? word(data?.propertiesList?.[1], 0) : ""}

                  <span className="mx-3 text-blue-600 font-sans">{data?.propertiesList?.[1] ? word(data?.propertiesList?.[1], 1) : ""}</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200 font-bold">
                {data?.propertiesList?.[2] ? word(data?.propertiesList?.[2], 0) : ""}
                  <span className="mx-3  text-blue-600 font-sans">{data?.propertiesList?.[2] ? word(data?.propertiesList?.[2], 1) : ""}</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200 font-bold">
                {data?.propertiesList?.[2] ? word(data?.propertiesList?.[3], 0) : ""}
                  <span className="mx-3  text-blue-600 font-sans">{data?.propertiesList?.[2] ? word(data?.propertiesList?.[3], 1) : ""}</span>
                </div>

                
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full max-w-2xl rounded-md"
              src={data.icon?.fields?.asset?.fields?.file?.url}//"https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="glasses photo"
              />
          </div>
        </div>
        <div className="mt-2 mx-10 dark:text-gray-100 ">
              {/* {renderRichText(data.body)} */}
              {data.body && <div dangerouslySetInnerHTML={{ __html: renderRichText(data.body) }} />}
              {/* <div dangerouslySetInnerHTML={{ __html: renderRichText(data.body) }} /> */}
        </div>
      {/* </header> */}
    </>
  );
}
