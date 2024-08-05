import React from "react";


type resourceElementProps = {
    title: string;
    date: string;
    img: string;
    link_to: string;
    
}

export default function ResourceElement({title, date, img, link_to}: resourceElementProps) {
  return (
    <div className="lg:flex">
      <img
        className="object-cover w-full h-56 rounded-lg lg:w-64"
        src={img}
        alt=""
      />

      <div className="flex flex-col justify-between py-6 lg:mx-6">
        <a
          href={link_to}
          className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
        >
        {title}
        </a>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          {date/* TODO: hacer lo de las fechas de forma que pille el formato date y lo ponga bonito*/ }
        </span>
      </div>
    </div>
  );
}
