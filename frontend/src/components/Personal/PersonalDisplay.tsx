import { Entry, PersonFields } from "../../types";

type PersonalDisplayProps = {
    // job: string;
    // img: string;
    // name:string
    // reddit:string
    // facebook:string
    // github:string
    person:Entry<PersonFields>
}

export default function PersonalDisplay({person}: PersonalDisplayProps) {





  return (
    <div className="flex flex-col items-center">
      <img
        className="object-cover w-full rounded-xl aspect-square"
        src={person.fields?.image?.fields?.asset?.fields?.file?.url}//"https://duckduckgo.com/?q=person%20stock%20fotos&iax=images&ia=images&iai=https://get.pxhere.com/photo/man-person-people-male-asian-portrait-young-chinese-professional-business-profession-hairstyle-confident-spokesperson-businessperson-white-collar-worker-922334.jpg"
        alt=""
      />
      {
        person.fields?.name &&

      <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">
        {person.fields?.name}
      </h1>
      }


      {person.fields?.job !== undefined ? 
      
      <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
        {person.fields?.job?.fields?.name}
      </p>
      : 
      <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">
        
      </p>}
    </div>
  );
}
