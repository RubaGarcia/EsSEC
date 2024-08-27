import React from 'react';
import { PersonFieldsReview } from '../../../types';
import Reviews from './Reviews';

type TestimonialSectionProps = {
  testimonials: PersonFieldsReview[];
};

function getRandomReviews(reviews: PersonFieldsReview[], count: number) {
  const shuffled = [...reviews].sort(() => 0.5 - Math.random()); 
  return shuffled.slice(0, count); 
}

export default function TestimonialSection({
  testimonials,
}: TestimonialSectionProps) {
  const reviewsToDisplay =
    testimonials.length > 2 ? getRandomReviews(testimonials, 2) : testimonials;

  return (
    <>
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        What our <span className="text-blue-500">clients</span> say
      </h1>

      <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
        ex placeat modi magni quia error alias, adipisci rem similique, at omnis
        eligendi optio eos harum.
      </p>

      <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
        {reviewsToDisplay.map((testimonial: PersonFieldsReview) => (
          <Reviews review={testimonial} key={testimonial.id} />
        ))}
      </div>
    </>
  );
}
