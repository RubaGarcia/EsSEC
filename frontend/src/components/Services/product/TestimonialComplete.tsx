import React, { useState } from "react";
import Testimonial from "./Testimonial";
import { PersonFieldsReview } from "../../../types";

type TestimonialProps = {
  personReviews: PersonFieldsReview[];
};

export default function TestimonialComplete({
  personReviews,
}: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice actual del carrusel
  const itemsPerPage = 3; // Número de reseñas que se mostrarán por página

  // Función para manejar el desplazamiento a la izquierda
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? personReviews.length - itemsPerPage : prevIndex - itemsPerPage
    );
  };

  // Función para manejar el desplazamiento a la derecha
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= personReviews.length ? 0 : prevIndex + itemsPerPage
    );
  };

  // Calcular las reseñas a mostrar según el índice actual
  const currentReviews = personReviews.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              What our clients are saying
            </h1>

            <div className="flex mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          <div className="flex justify-between mt-8 md:mt-0">
            <button
              onClick={handlePrevClick}
              title="left arrow"
              className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNextClick}
              title="right arrow"
              className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:text-gray-200 dark:hover:bg-gray-800 dark:border-gray-700 hover:bg-gray-100"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          {currentReviews.map((personReview, index) => (
            <Testimonial personReview={personReview} key={index} />
          ))}
        </section>
      </div>
    </section>
  );
}
