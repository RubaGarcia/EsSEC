import {Blurb, Entry, PersonFields } from '../../../types';
import Reviews from './Reviews';
import { renderRichText } from '../../../helpers/RichTextProcessor';

type TestimonialSectionProps = {
  blurb: Entry<Blurb>;
  testimonials: Entry<PersonFields>[];
};

function getRandomReviews(reviews: Entry<PersonFields>[], count: number) {
  const shuffled = [...reviews].sort(() => 0.5 - Math.random()); 
  return shuffled.slice(0, count); 
}

export default function TestimonialSection({ blurb,
  testimonials,
}: TestimonialSectionProps) {
  const reviewsToDisplay =
    testimonials.length > 2 ? getRandomReviews(testimonials, 2) : testimonials;

  return (
    <>
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        <span className="text-blue-500">{blurb.fields?.title}</span>
      </h1>

      <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
      {blurb.fields?.textBlurb && <div dangerouslySetInnerHTML={{ __html: renderRichText(blurb.fields?.textBlurb) }} />}
      </p>

      <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
        {reviewsToDisplay.map((testimonial: Entry<PersonFields>) => (
          <Reviews person={testimonial} key={testimonial.fields?.name} />
        ))}
      </div>
    </>
  );
}
