import { useQuery } from "@tanstack/react-query";
import {  useState } from "react";
import type { HeaderFields, Entry } from "../../types";
import { getElements } from "../../api/LayoutAPI";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para manejar el menú
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para manejar el dropdown
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem("locale") || ""); // Estado para manejar el idioma seleccionado
  let headerObject: Entry<HeaderFields> | null = null;

  const localHeader = sessionStorage.getItem("header");

  const { data, isLoading, error } = useQuery({
    queryKey: ["elements"],
    queryFn: getElements,
  });
  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  
  if (error) return <p>Error: {error.message}</p>;
  
  if (localHeader === null || data.sys.locale !== JSON.parse(localHeader)?.sys?.locale) {
    if (data && data.fields) {
      headerObject = data.fields.header;
      
      sessionStorage.setItem("header", JSON.stringify(headerObject));
    }
  } else {
    headerObject = JSON.parse(localHeader);
  }

  
  if (!headerObject || !headerObject.fields) {
    return <p>Error: Header data is missing.</p>;
  }

  const navList = headerObject.fields.navigation?.fields?.items ?? [];
  const logoURL =
    headerObject.fields.logo?.fields?.file?.url ??
    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg";

  const handleLanguageChange = (language: string) => {
    // console.log(language);
    //console.log(selectedLanguage)
    let idioma="es"
    if(language === "Spanish"){
      idioma="es"
    } else if(language === "English"){
      idioma="en-US"
    }

    setSelectedLanguage(language);
    // console.log(selectedLanguage);
    localStorage.setItem("locale", idioma); // Guardar el idioma seleccionado en localStorage
    setIsDropdownOpen(false); // Cerrar el dropdown
    window.location.reload();
  };

  


  return (
    <nav className="relative bg-white shadow dark:bg-gray-800">
      <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
          <a href="/">
            <img className="w-auto h-6 sm:h-7" src={logoURL} alt="Logo" />
          </a>

          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {isMenuOpen ? (
                <svg
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
              ) : (
                <svg
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
              )}
            </button>
          </div>
        </div>

        <div
          className={`${isMenuOpen ? "block" : "hidden"} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between`}
        >
          <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
            {navList.map((item, index) => (
              <Link
                key={index}
                className="px-2.5 py-2 text-gray-700 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 md:mx-2"
                to={`${item.fields?.url ?? ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.fields?.label}
              </Link>
            ))}
          </div>

          <div className="relative mt-4 md:mt-0">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 transition-transform transform ${isDropdownOpen ? "scale-100" : "scale-0"}`}
            >
              <a
                href="#"
                onClick={() => handleLanguageChange("Spanish")}
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Spanish
              </a>
              <a
                href="#"
                onClick={() => handleLanguageChange("English")}
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                English
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
