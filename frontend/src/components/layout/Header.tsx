import { useQuery } from "@tanstack/react-query";
import type { ApiRequest, HeaderFields, Entry } from "../../types";
import { getElements } from "../../api/LayoutAPI";
import { Link } from "react-router-dom";

export default function Header() {

  let headerObject: Entry<HeaderFields>;
  // let footerObject: Entry<FooterFields>; 

  let localHeader = sessionStorage.getItem('Header');
  let localFooter = sessionStorage.getItem('Footer');


  if (localHeader === null || localFooter === null) {
    const { data, isLoading }: { data: undefined | ApiRequest, error: null | Error, isLoading: boolean } = useQuery({
      queryKey: ["elements"],
      queryFn: getElements,
    })

    if (isLoading) return <p>Loading...</p>

    headerObject = data!.fields.header;
    // footerObject= data!.fields.footer;

    sessionStorage.setItem('Header', JSON.stringify(headerObject));
    // sessionStorage.setItem('Footer', JSON.stringify(footerObject));


  } else {
    headerObject = JSON.parse(localHeader);
    // footerObject=JSON.parse(localFooter);
  }

  const navList = headerObject.fields.navigation.fields.items;


  return (
    <nav
      x-data="{ isOpen: false }"
      className="relative bg-white shadow dark:bg-gray-800"
    >
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <a href="/">
            <img
              className="w-auto h-6 sm:h-7"
              src={headerObject.fields.logo.fields.file.url}
              alt=""
            />
          </a>

          <div className="flex lg:hidden">
            <button
              onClick={() => { }}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg
                x-show="!isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>

              <svg
                x-show="isOpen"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between">
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            

            {navList.map((item, index) => (
              <Link
              key={index}
              className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
              to={`${item.fields.url}`}
            >
              {item.fields.label}
            </Link>
              
            ))}
          </div>

          <div className="relative mt-4 md:mt-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
