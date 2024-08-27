import { ResourceFields } from "../../types";


// type resourceElementProps = {
//     // title: string;
//     // date: string;
//     // img: string;
//     // link_to: string;
    
// }

export default function ResourceElement(data:Pick<ResourceFields, "title"| "headline"|"icon"|"date"|"url">) {



console.log(data)
// console.log(data.link_to)


  return (
    <div className="lg:flex">
      <img
        className="object-cover w-full h-56 rounded-lg lg:w-64"
        src={data.icon}
        alt=""
      />

      <div className="flex flex-col justify-between py-6 lg:mx-6">
        
        <a
          href={`${data.url}`}
          className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
        >
        {data.title}
        </a>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          {data.date/* TODO: hacer lo de las fechas de forma que pille el formato date y lo ponga bonito*/ }
        </span>
      </div>
    </div>
  );
}
